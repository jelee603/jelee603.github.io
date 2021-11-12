---
title: CSS 선택자
date: 2021-11-12 15:12:23
categories:
- HTML/CSS
comments: false
thumbnail: '/images/thumbnail/css-selectors.png'
---

[CSS 선택자](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors)는 CSS 규칙을 적용할 요소를 정의합니다.


[webdir][webdir] 님의 블로그를 보면, 잘 정리되어있는데 보통은 class 선택자로 오버라이드해서 사용하고 있다.
class 선택자로 chain 된 것도 지정이 가능하다보니 대체로 찾아서 쓰는 경우는 `.class1 .class2` 이렇게 붙여 쓰고 있다.

[opentutorials][opentutorials] 이 블로그도 레퍼런스로 잘 쓰여져 있다.
타입 선택자 분류는 다음과 같이 쓴다.

```css
ol li span {
  /* 공백 : 하위 선택자 */
}

body > p {
  /* > : 자식 선택자 */
}

div + p {
  /* + : 형제 선택자 */
}

* {
  /* 전체 선택자 */
}
```

마지막 라인 없애는 방법, `last-child` 선택자를 이용하자.

```css
.menu li {
  border-bottom: 1px solid #ccc;
}
.menu li:last-child {
  border: none;
}
```

첫번째 스탸일 변경 방법 [`first-child`](https://developer.mozilla.org/ko/docs/Web/CSS/:first-child) 선택자를 이용하자.

```
<article>
  <p>First paragraph...</p>
  <p>Lorem ipsum...</p>
  <p>Dolor sit amet...</p>
  <p>Consectetur adipisicing...</p>
</article>
```

```
p:first-child {
  font-size: 1.5em;
}
```