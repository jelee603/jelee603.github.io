---
title: HTML <span> 요소
date: 2021-11-12 15:08:11
categories:
  - HTML/CSS
toc: true
comments: false
thumbnail: '/images/html-span.png'
---

[`<span>`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/span) 은 구문 컨텐츠를 위한 문장을 묶을 때 사용하는 [인라인 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements)입니다.

인라인은 전체 문단이 끊기지 않고 하나로 그려집니다. 문서의 흐름에서 줄바꿈을 강제하진 않는거죠.
반면에 블록 요소는 줄바꿈을 할 수 있습니다. 그럼에도 간단한 문장은 span 만 사용해서 개행을 하고 싶은 경우가 생기죠.
<!-- more -->

---

##### 개행 문자 & 공백 문자는 어떻게 처리할까?

1. span 요소 1개로만 처리할 때

span 태그를 1개에 [`white-space`](https://developer.mozilla.org/ko/docs/Web/CSS/white-space) 속성을 이용한다.
[이스케이프 문자](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%EB%AC%B8%EC%9E%90) 중 `\n`(개행문자)를 사용해서 줄바꿈이 가능하다.

```js
.spanStyle {
    white-space: "pre-line"
}
<span class="spanStyle">테스트\n입니다.</span>
```

2. div 요소 안에 span 으로 처리할 때

```js
.spanStyle {
    display: "block"
}

<div>
    <span class="spanStyle">테스트<span>
    <span class="spanStyle">입니다<span>
</div>
```
