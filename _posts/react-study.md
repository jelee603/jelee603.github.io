---
title: 자주쓰는 리액트 방법
date: 2024.02.17
category: 
coverImage: 'images/cover/default.png'
slug: react-study
---

리액트를 공부하면서 매번 찾아보게 되는 것이 몇가지 있다. 
정리해서 적어본다.

### 1. 리액트에서 왜 key를 써야하지?

"리액트는 뷰에 변화가 있을 때, 구 가상 DOM과 새 가상 DOM을 비교하여 변경된 내용만 DOM에 적용한다." 이게 핵심 포인트이다. 
반복문을 돌렸을 때, 같은 key를 가지고 있으면 리액트는 변화가 없다 판단하고, 업데이트를 하지 않는다. 
만약에 key를 인덱스로 사용하면, 항목 순서가 바뀔 때 마다 key도 같이 변경된다. 
업데이트로 인해, 변화가 필요한 경우가 아니라면 key를 고유한 값으로 인지할 수 있도록 하자. 

참고: [재조정과 key 사용 이유](https://charles098.tistory.com/204)


### 2. 타입스크립트의 제네릭을 사용하는 방법

제네릭은 타입을 사용자에게 맡기고 코드를 작성할 때 선언할 수 있게 해준다. 
함수에서 동작은 같지만, 리턴 받아야하는 타입이 다른 경우에 유용한데 아직 어렵다.

```js
const output: <T>(input: T) => T = (input) => { return input }

console.log(output<boolean>(true)) // true
```

참고: [인터페이스와 제네릭](https://charles098.tistory.com/165)


### 3. MSW를 사용한 모킹을 쉽게 하는 방법

실제 API 주소를 호출하면 중간에 모킹서버가 이 호출을 가로채 자기의 MOCK 데이터를 내려주는 방법이다. 
이 방법은 실제 따라하기를 하면, service 에 http 메서드를 호출할 수 있도록 미들웨어를 만들고, 호출할 수 있게 세팅을 해주면 된다.  
response 타입을 지정할 때 2번의 제네릭을 활용하면, 더 깔끔하게 코드를 작성할 수 있다. 

참고: 
 - [MSW 공식](https://mswjs.io/docs/integrations/browser)
 - [API 모킹 쉽고 빠르게 활용하는 방법](https://ryuhojin.tistory.com/46)
 - [Typescript로 더 깔끔하게 Axios 사용해보기](https://velog.io/@yyeonggg/Typescript%EB%A1%9C-%EB%8D%94-%EA%B9%94%EB%81%94%ED%95%98%EA%B2%8C-Axios-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)


### 4. 라디오 셀렉트 박스를 만들 때, 스타일만으로도 가능할까?

```js

onClick: (e: MouseEvent) => {
			setTimeout(() => {
				if (e.defaultPrevented) return;
				state.setSelectedValue(props.value);
			}, 0);
		},

```

참고: [더블 클릭시, 라디오 버튼 체크 푸는 방법](https://github.com/adobe/react-spectrum/issues/4971)


### 5. 폼을 만드는 이유

"form"은 데이터를 수집하는 컨테이너이고, "input"은 사용자로부터 실제로 데이터를 입력하는 데 사용되는 요소라 서로 다른 역할을 한다. 


참고: 
- [폼을 쉽게 만드는 방법](https://medium.com/@ketchasso72/how-to-handle-forms-in-react-the-easy-way-to-do-it-8a6805c7c1d5)
- [react-hook-form](https://dealicious-inc.github.io/2022/07/25/ss-studio.html)

### 6. 테스트는 어떻게 시작하지?

유저 이벤트 테스트를 하는 방법부터 시작을 해볼까한다. 
위에 폼 만드는 방법으로 양식을 입력받고 userEvent를 발생시켜 동작시켜본다. 

테스트를 설정하는데 가장 힘든건 i18n을 적용했을 때가 아닐까, 다국어를 표현하기 위한건데 어떻게 테스트를 하지?라고 막막했지만 값을 비교하는게 아니라 호출하는 그 변수명을 그대로 string 으로 비교하는 것이었다. 그런데 이건 까다롭게도 jest에서 사용하려면 설정을 해줘야한다. 

```js
// given
const props = {}

// when
render()

// then 
expect().toBe()
```

참고: 
- [유저 이벤트 테스트](https://www.daleseo.com/testing-library-user-agent)
- [TextEncoder is not defined](https://github.com/jsdom/whatwg-url/issues/209#issuecomment-1015559283)
- [Jest에서 import가 안되는 오류 해결방법](https://velog.io/@yooha9621/nodejest%EC%97%90%EC%84%9C-import%EA%B0%80-%EC%95%88%EB%90%98%EB%8A%94-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95)


### 7. Yarn Berry란?

yarn berry는 당황할 수 밖에 없었다. node_modules 폴더는 온데간데 없고, .yarn/cache 폴더가 생기고 그로 인해 파생되는 몇가지 설정들이 여간 복잡한게 아니었다. 하지만, 더 빠른 퍼포먼스인 것은 확실했다. 설치 속도가 너무 빨랐으니.

참고: 
- [Yarn Berry를 사용해보자](https://velog.io/@seokunee/Yarn-Berry%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)
- [yarn berry + Next.js + Typescript](https://kimyanglogging.tistory.com/7)


### 8. 시멘틱 마크업은 매번 헷갈리는데 외울까?

header/aside/main(article/section)/footer

참고: [알아두면 쓸모 있는 시멘틱 마크업](https://brunch.co.kr/@tigrisdesign/7)


### 9. 객체를 타입으로 변환하는 방법은? 

참고: 
- [keyof/typeof 사용법](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof-%EC%82%AC%EC%9A%A9%EB%B2%95)
- [union type, intersection type](https://fe-developers.kakaoent.com/2022/221124-typescript-tip/)

### 10. useState props에 타입스크립트 타입을 지정하는 방법

```js
// element event 사용할 때
import {ChangeEvent} from "react"

interface ComponentProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// useState props 사용할 때
import {Dispatch} from "react"

interface ComponentProps {
    setState: Dispatch<boolean>
}
```