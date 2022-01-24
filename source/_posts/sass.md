---
layout: post
title: 'Sass(SCSS) 알아가기'
date: 2020-01-22
categories:
  - HTML/CSS
comments: false
thumbnail: '/images/sass.png'
---

> sass 사용하면, 변수로 사용한 상태에서 스타일을 재사용할 수 있다.

```js
yarn add node-sass --save
```

### 1. &부모 요소 참조, $변수 사용

- 부모요소의 참조가 필요한 경우엔 `&` 를 사용한다.
- 가상 클래스의 선택자를 지정하는 경우에 참조가 필요

```html
.myAnchor { color: green; &:hover { text-decoration: underline; } }
```

### 2. Nesting

- nesting 프로퍼티에도 사용한다.

```html
.test { font: { size: 30em; weight: bold; } }
```

### 3. Import

- sass 분할된 파일(partial) 은 언더스코어(\_\_) 를 붙여 사용한다.
- 파티셜 파일은 파일 접두어를 생략할 수 있다.

```html
// __vars.scss $width: 960px; // __header.scss #header { width: $width; } //
__vars.scss 파일을 호출할때 // style.css @import "vars" @import "header"
```
