---
layout: post
title: 'CSS 이야기'
date: 2019-08-16
categories: css
comments: false
background: '/img/bg-index.jpg'
---

#### Grid 사용할 때, 중첩된 그리드는 어떻게 나눌까?

grid 는 중첩이 필요할 땐, 항상 grid 로 재분할이 필요하다.

```css
.main {
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-rows: repeat(40, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
  background: #ccccee;
  padding: 10px;
}
.main-bottom {
  grid-row: 25/41;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
}

.main-bottom-left {
  grid-row: 1/11;
  grid-column: 1/1;
  background: lightpink;
}

.main-bottom-right {
  grid-row: 1/11;
  grid-column: 2/2;
  background: lightpink;
}
```

Grid 에서 크기가 고정된 아이템이 잘 정렬되게 보이려면, 감싸고 있는 컨테이너 박스에서 `grid-auto-rows: max-content` 를 추가해준다.
([MDN] [gird])

#### Flex 를 사용할때, 텍스트 중앙 정렬은 어떻게 할까?

Flex 는 `align-items`를 사용하면 컨텐츠를 정렬할 수 있다.

```css
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 1px solid #ffffff;
  text-align: center;
}
```

#### CSS 선택자

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

#### 반응형 레이아웃

```html
@media only screen and (max-height: 1080px) { body { backgroud: 'red' } }
```

웹브라우저의 높이 해상도가 1080px 이하 일때, 클래스의 스타일을 변경해준다.

[webdir]: https://webdir.tistory.com/339
[opentutorials]: https://opentutorials.org/module/484/4150
[gird]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows

#### CSS 선택자

마지막 라인 없애는 방법, `last-child` 선택자를 이용하자.

```css
.menu li {
  border-bottom: 1px solid #ccc;
}
.menu li:last-child {
  border: none;
}
```
