---
title: CSS 선택자
date: "2021-11-12 15:12:23"
category: HTML_CSS
toc: true
comments: false
coverImage: /images/cover/css-selectors.png
slug: css-selectors
---

[CSS 선택자](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors)는 CSS 규칙을 적용할 요소를 정의합니다.

타입 선택자 분류는 다음과 같이 쓴다.
<!-- more -->
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
