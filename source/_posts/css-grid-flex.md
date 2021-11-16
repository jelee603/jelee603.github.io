---
layout: post
title: 'CSS Grid 와 Flex 사용법'
date: 2019-08-16
categories:
- HTML/CSS
comments: false
thumbnail: '/images/thumbnail/css-grid-flex.png'
---

##### Grid 사용할 때, 중첩된 그리드는 어떻게 나눌까?

[Grid](https://developer.mozilla.org/ko/docs/Web/CSS/grid) 는 중첩이 필요할 땐, 항상 grid 로 재분할이 필요하다.

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

---
##### Flex 를 사용할때, 텍스트 중앙 정렬은 어떻게 할까?

[Flex](https://developer.mozilla.org/ko/docs/Web/CSS/flex) 는 `align-items`를 사용하면 컨텐츠를 정렬할 수 있다.

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

---
##### 반응형 레이아웃

[미디어 쿼리](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries)를 사용한다.
```html
@media only screen and (max-height: 1080px) { body { backgroud: 'red' } }
```

웹브라우저의 높이 해상도가 1080px 이하 일때, 클래스의 스타일을 변경해준다.


