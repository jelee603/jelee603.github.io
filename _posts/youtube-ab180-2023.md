---
title: '컨퍼런스 정리(2) - 몇 천 페이지의 유저 가이드를 새로 만들며'
date: 2023.11.15
category: 'React'
coverImage: 'images/cover/youtube-ab180-2023.png'
slug: 'youtube-ab180-2023'
---

YouTube URL: https://www.youtube.com/watch?v=V2E4ft7vqao - FECONF 2023

## 목차 

- [유저 가이드에 관하여](#유저-가이드에-관하여)
    - 유저 가이드가 무엇인가요?
    - 왜, 어떻게 갈아엎었나요?
    - 리액트 서버 컴포넌트에 배팅하기

- [개발 과정에서 만난 문제들](#개발-과정에서-만난-문제들)
    - 접혀진 아코디언은 검색할 수 없나요?
    - 정적 사이트 생성은 적절한 방법인가요?
- [마무리](#마무리)

## 유저 가이드에 관하여

마케팅 성과분석 도구인 대시보드를 만드는 과정에서 고객의 궁금증과 사용자의 허들을 낮추기 위해 유저 가이드북을 제작하게 되었다. 회사에서 PW팀에서 운영관리를 해주고 있다. 

기존에는 Zendesk라는 [CMS](https://namu.wiki/w/CMS#toc:~:text=%EA%B8%88%EC%9C%B5%EC%9E%90%EC%82%B0%20%EA%B2%B0%EC%A0%9C%20%EB%B0%A9%EB%B2%95.-,2.,-Contents%20Management%20System) 서비스로 유저 가이드를 운영

레이아읏, 테마를 핸들바 형식으로 작성하고, 업로드(WYSIWYG 에디터를 이용)
글을 작성하면 HTML 코드를 생성해주고 있다. 


> 문제 정의
> - 중복되는 내용과 화면이 상당히 많다. -> 콘텐츠 모델, 컴포넌트의 개념이 없다.
> - HTML copy, past 방식으로 글을 작성하고 있었다.
> - 반복되는 내용을 찾거나 일괄 수정하기도 어려움 -> 콘텐츠, 스타일, 스크립트가 강결합되어 유지보수가 어렵다.

> 목표
> - 불편함을 해소할 수 있는 방법 -> Headless CMS가 좋겠어!
> - 글 작성시에 구조화 가능한 콘텐츠를 작성하고, 프론트엔드 팀은 API를 통해서 사이트를 만들 수 있다. 

> 기술 선택
> - 가장 익숙한 라이브러리인 리액트를 선택하고, 서버 컴포넌트를 다뤄보고 싶어서 Next.JS 의 앱 라우터를 선택

> 목표 재정의
> - 코드블럭, 수형도 등 다양한 콘텐츠를 보여줘야한다.(많은 라이브러리 사용으로 번들 사이즈 증가) 
> - GraphQL로 콘텐츠를 쿼리해 가져와야한다.
>   - 쿼리 제한을 고려해 여러번 API를 호출해 조합해야한다
>   - [BFF](https://namu.wiki/w/BFF#:~:text=047AN%2C%20063AN-,3.,-Backend%20For%20Frontend)를 만들어서 편하게 데이터를 받을 수는 없을까?


> 해결 방법
> - 클릭, 애니메이션 등 클라이언트에서 상호작용이 이뤄지는 컴포넌트와 로직을 분리한다.
>   - 나머지는 서버에서 렌더링 작업을 수행한 뒤 클라이언트에 결과만 전송한다 (번들 사이즈 감소)
> - DB 쿼리나 API 호출도 컴포넌트 안에서 결과만 클라이언트로 전송한다.
>   - 작업이 오래 걸리는 컴포넌트는 Suspense 로 묵어 점진적으로 렌더링할 수 있게 Streaming 구현

## 개발 과정에서 만난 문제들

상대적으로 간단하게 풀렸지만 고민해볼 요소가 있는 문제 2가지.

> 문제 정의 1
> - Command + F 로 특정 검색했을 때, 해당 내용이 아코디언 안에 있다면 자동으로 아코디언이 펼쳐졌으면 좋겠다. 

상대적으로 최근에 추가된 HTML 스펙에서 방법을 찾을 수 있었다. (Chrome 102 부터 가능) 
이 스펙은 요소는 숨겨져 있지만 렌더링 상태는 유지될 수 있는 `content-visibility: hidden`스타일이 기본으로 적용되어 있다. 

```js
<div ref={ref} hidden="until-found">
...
</div>

const handleBeforeMatch = () => {
    setIsOpen(true);
}
ref.current.addEventListener("beforematch", handleBeforeMatch)
```

검색에서 일치하는 항목이 영역 내에 있을 때 아코디언을 펼치는 핸들러를 선언해준다. 해당 DOM에 비포 매치이벤트에 대한 이벤트 리스너를 등록해준다. 하지만, jsx에서 `hidden`속성이 주입되지 않았다. 렌더링 단계를 나눠 문제를 탐색했다. 

** 렌더링 단계를 나눠 문제 탐색하기 **

jsx 에서 작성된 객체를 리액트에서 리액트 컴포넌트로 변환을 하고, 상태를 업데이트, 이펙트 같은 렌더링 대상을 연산한 뒤에 ReactDOM이 실제 DOM에 반영을 한다. 동시에 DOM API를 연동해서 클릭 같은 인터렉션을 사용할 수 있다. 정확한 설명은 아니지만, 대략적인 렌더링 흐름을 보자면 이렇게 볼 수 있다. 


hidden 속성을 바꾼 위치는 ReactDOM 이 부분을 확인해볼 수 있다.
실제 ReactDOM 코드를 분석.

![ReactDOM 코드](/images/post/youtube-ab180-2023_1.png)

케이스를 확인해보면, function, symbol이 아니면 모두 빈 문자로 변환된다. 프로덕션에서 발생 가능한 보안 문제나 충돌을 최소화하기 위해서 리액트 속성값의 검증 로직이 들어가 있다. 

이 문제의 PR 이슈 사례를 첨부. 하지만, 1년 전에 남긴 이슈에 답변이 없음..😢
코어 라이브러리가 접근성을 위한 기능을 제한한 것으로 우회하는 방향을 찾아내야했다.

ReactDOM을 건드릴 수 없다면, 렌더링에 관여하는 다른 요소를 속이기로 했다. DOM에 그려지는 단계 HTML에서 변경.

- HTML은 기본적으로 대소문자를 구분하지 않는다. 
- ReactDOM은 정의된 소문자, /on[A-Z]/로 시작되는 속성만 검증한다.

jsx를 대문자로 표시를 하면, ReactDOM의 검증 로직에서 벗어날 수 있다.

```js
- <div ref={ref} hidden="until-found">
+ <div ref={ref} HIDDEN="until-found">
```

변경하면 잘 동작하는 것을 예시 영상으로 보여줌. 크롬 인스펙터를 확인하면, hidden 속성이 잘 들어가 있음.

> 문제 정의 1-1
> - 아코디언을 접혔다 펼쳐지는 높이가 동적으로 변하는 애니메이션을 적용하고 싶다.

애니메이션은 기본적으로 DOM의 영역이고, 애니메이션 실행 관련 제어를 위해서는 리액트에서 제어해야한다.
`content-visibility: hidden` 스타일을 애니메이션 실행 중에 제거를 해야 애니메이션이 동작할 수 있다. 


```js
const [isAnimating, setIsAnimating] = useState(false);

setIsAnimating(true);
animate(ref.current, nextIsOpened ? variants.show : variants.hide, 
{
    onComplete() {
    setIsAnimating(false)
    }
})

const hiddenProp = isAnimating || isOpen ? undefined : 'until-found';

<div ref={ref} HIDDEN={hiddenProp}>
```

애니메이션 실행 전/후로 상태를 변경한다. 
애니메이션이 샐행 중이거나 열려있을 때 Hidden 속성을 비우도록 처리해준다.


CMS 예시를 담은 보일러 플레이트는 [SSG](https://velog.io/@lky5697/what-the-heck-is-ssg-static-site-generation-explained-with-nextjs) 로 생성된다.
콘텐츠 변경이 자주 있지 않고, 초기 로딩 속도, SEO 관련 지표 향상 등이 주 목적이다.

> 문제 정의 2
> - PW 팀에서 전수 검사, 수정 후에 하나씩 새로운 CMS로 이사
> - 시간에 따라 이전되는 가이드의 양이 늘어나 빌드 속도가 점점 느려져서 업데이트가 느렸다.
> - 가이드 배포와 반영까지 걸리는 시간을 줄일 수 없을까? 

> 해결 방법
> - 기존 CMS에서 업데이트가 일어나면, 웹 훅을 보내 새로운 빌드를 실행한다.
> - 수정이 잦아지면, [ISR](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) 활성화해 변경 대상만 재생성한다 -> 빌드 횟수 감소


> 문제 정의 2-1
> - 동일한 사이드바를 노출하기 위해 사이드바를 업데이트 하는 방법을 고민 
> - 가이드 숫자 * 지원언어 수만큼 재생성해서 요청 보내기 (1000개 * 국가별(한/영/일/중) 요청을 서버로 전송)
> - 로그 분석 결과 (하루에 최소 3번 수정, 4일마다 최소 2개의 가이드 추가 등)

> 해결 방법
> - 느리지만 확실한 새로운 빌드 방법을 모색 -> 다른 관점으로 렌더링 바라보기

Next.js 라우터가 페이지 라우터보다 느리다는 것을 반박하는 테오 브라운 유튜브 영상 첨부.
앱 라우터가 3배 이상 빠르다는 결과를 수치상으로 보여줌. 

** 다른 관점으로 렌더링 바라보기 **

동적인 것과 정적인 것을 나누는 기준을 네트워크 단위로 나눠보면 어떨까. 그렇다면, 태그와 그룹핑, 캐싱, 스트리밍으로 보여주고 공식문서에서는 스태틱 렌더링, 다이나믹 렌더링과 같은 용어를 더 많이 사용하고 있다.

만드는 서비스는 정적인 페이지라도 동적인 요소가 있고, 그 반대도 있다. (스펙트럼 처럼)
유저 가이드는 CMS에 작성된 콘텐츠를 네트워크 요청으로 가져오는 부분의 비중이 더 크다.
정적인 부분과 동적 부분을 나누고 데이터 캐시를 더 적극적으로 활용하도록 바꾼다면, 초기 빌드 시간은 줄어들면서 업데이트가 빠르게 반영되는 환경을 만들 수 있지 않을까.

```js
- tags = [
-    "orders",
-    "orders:ko",
-    "orders:user-guid",
- ]
- cache = "force-cache"

+ tags = [
+     "guide",
+     "guide:ko",
+     "guide:${slug}",
+ ]
+ revalidate = 2_592_000
```

```js
// 사이드바에서의 요청은 매번 가져오게끔 요청 
fetch(`${QUERY_URL}`, {
    method: 'POST',
    cache: 'no-store',
})

// 상대적으로 정적인 가이드 내용은 캐시를 길게 1개월로 설정
fetch(`${QUERY_URL}`, {
    method: 'POST',
    next: {
        revalidate: 2_592_000,
        tags: [
            "guide",
            "guide:ko",
            "guide:${slug}",
        ]
    }
})
```
두 환경에서의 페이지 스피드 인사이트 결과는 왼쪽이 기존 SSG를 했을 때, 오른쪽이 데이터 캐시를 적용한 다이나믹 렌더링 결과는 94점, 98점으로 차이가 별로 없었지만, 빌드 속도가 8분 -> 1분 26초로 줄어듬

> 문제 정의 2-2
> - 캐시가 동작을 하려면, 모든 페이지에 한 번은 접속해야 캐시가 돌지 않나요?

유저 가이드는 사이트맵이 있는 서비스이고, 웹 크롤러는 모든 페이지에 1회 이상 방문한다.
이 방문으로 데이터 캐시가 자동으로 활성화 될 것이라고 생각함. 
별도의 크론잡을 안 만들고 서치 콘솔에 등록하고, Web Vitals 만 모니터링하는 정도만해도 괜찮을 거다.

## 마무리

1. 아코디언 문제를 통해 프레임워크/라이브러리 기능, 접근성 구현을 제한할 수 있음을 확인할 수 있었다. 
속성값을 검증하는 프레임워크나 라이브러리가 있으면 언제든 만날 수 있는 문제이다. 
    - 문제를 해결하려면 구현을 할 것인지? 한다면 어디까지 할 것인지를 판단해야한다. 
    - 문제에 관여하는 주체와 동작, 영향을 나누어 파악한다. 

2. 정적 페이지 생성이 느려지는 문제를 통해 단순한 것도 스케일이 커지면 복잡도 역시 늘어난다. 
    - 스케일에 따라 기존의 방법론이 여전히 유효한지 판단해야한다.
    - 렌더링 관점을 페이지 단위 -> 네트워크 요청 단위로 바라보기

3. 제품의 특성을 파악하고 영향을 주는 요인을 찾아 복잡도를 제어하면 해답에 가까워질 수 있을것이다. 
그 과정 속에서 각자 엔지니어로써 넓은 관점으로 갖고 다양한 경험을 해볼 수 있을 것이다.

## 참고 

- [서버 없이 웹 사이트 쉽게 만들기, LINE의 헤드리스 CMS](https://engineering.linecorp.com/ko/blog/headless-cms-in-line)
- [카카오페이지는 BFF(Backend For Frontend)를 어떻게 적용했을까?](https://fe-developers.kakaoent.com/2022/220310-kakaopage-bff/)
- [접혀진 아코디언은 검색할 수 없나요?](https://hiddenest.dev/accessible-accordion)
- [Making collapsed content accessible with hidden=until-found](https://developer.chrome.com/articles/hidden-until-found)
- [Next.js App Router SLOW?](https://www.youtube.com/watch?v=HbUDiNlU6Yw)