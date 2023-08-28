---
title: 'Next.js 성능 측정'
date: 2023.08.28
category: 'React'
coverImage: 'images/cover/default.png'
slug: 'web-lighthouse'
---

웹 성능을 따질 정도로 규모가 큰 프로젝트를 해오지 않았기에 사실상 성능을 높이기 위한 방안을 생각해본 적이 없었던 거 같습니다. 그러던 중에 [프론트엔드 성능 측정](https://youtu.be/IRj9vKBy9CA)에 대한 유튜브를 보게 되었습니다. 그리고 웹 브라우저의 성능 체크는 해보지 않으면 영영 모르는거겠구나라는 걸 어렴풋이 느꼈습니다. 그리고 이 참에 제 블로그에서만이라도 시작을 해보자라는 마음으로 라이트하우스 테스트를 해봤습니다.

## 고민과 해결

![성능측정(1)](/images/post/web_lighthouse_1.png)

결과는 처참했다고 볼 수 있겠네요. Next.js 를 사용했으니, 성능에서 이슈가 될만한 것이 없을 것이라 생각되었습니다. html로 만들어서 서버 렌더링을 해주는데 느려질 일이 없을거라 생각했죠. 
하지만, 너무 쉽게 생각했었나봅니다. 아래로 읽다보면, 어디서 문제가 있는지 짚어줍니다.

1. 이미지 압축
2. 서드파티의 폰트 사용

위 2가지의 문제가 해결해야할 과제였습니다. 

헤더에 사용하는 이미지는 사실상 압축을 하면 60x60 사이즈라 충분히 압축을 하면 크기를 줄일 수 있을 거 같았습니다. 구글에서 만든 [Squoosh](https://squoosh.app) 웹에서 거의 원본 손상없이 압축할 수 있는 기술로 압축 가능하다고 하니, 이 사이트를 이용했습니다. 

서드파티 폰트를 사용하기 위해서는 cdn 주소가 필요한데, 일단 개인 홈페이지로 사용하는 파이어베이스에 올려두고 그 파일을 호출하는 것으로 변경을 해봤습니다. 

웹 주소가 서로 다르니, CORS 오류를 해결해야하는데 Next.js에서는 [Rewrite](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)로 Proxy를 대체하고 있습니다. 

구글에서는 [google font cdn](https://fonts.google.com/specimen/Nanum+Gothic?query=nanum)을 제공해주고 있어 이 방법으로 해결했습니다. 

![폰트](/images/post/web_lighthouse_2.png)

Next.js 에서 스타일시트를 지정하려면, [Document](https://nextjs.org/docs/messages/no-stylesheets-in-head-component)에 스타일시트를 추가하게 되어있습니다. 

이 페이지에 link 주소를 넣어주고, [crossOrigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) 속성을 부여해줍니다.

```js
import Head from 'next/head';
return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
            />
            <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
            rel="stylesheet"
            ></link>
        </Head>
        <Component {...pageProps} />
    </>
)
```

## 회고

점수가 많이 개선되었습니다.

|LCP| FID | CLS|
|--|--|--|
|서버 응답 시간 개선| 사용하지 않는 자바스크립트 분할| 이미지 크기 설정|
|리소스 요청 최적화| 자바스크립트 실행 시간 단축| 광고를 위한 고정 공간 확보, 웹 폰트 대응|

위와 같은 방법으로 성능 지표를 해결할 수 있다고 유튜브에서도 봤지만, 이미지 압축과 cdn 서버를 이용하는 것이 얼마나 중요한 일이었는지 새삼 알게 되었습니다. 웹 성능을 점수로 확인하고나니, 더 개선하고 싶은 마음도 생기고 가이드로 보여주는 항목들이 앞으로 개발할 때는 성능을 고려하면서 개발을 해야겠다는 생각이 듭니다.

![성능측정(2)](/images/post/web_lighthouse_3.png)