---
title: React에서 스타일 컴포넌트 다루기 
date: 2023.09.01
category: 
coverImage: 'images/cover/'
slug: react-style-component
---


## 스타일 컴포넌트에서 props 조건문 추가하기 


[공식문서](https://styled-components.com/docs/api)에 찾아보면, 조건문에 따라 스타일 조정이 필요할 때, classList 를 추가하지 않고 스타일 컴포넌트에 props 를 주입해서 사용할 수 있다. 

```js

// tsx
<Button $backgroundColor={'yellow'}/>

const Button = styled.button<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
`;
```

`$`로 표시해서 스타일 전달하고, 타입을 지정해주면 된다. 이 방법이 클래스 목록을 조작하는 것보다 가독성도 있다고 생각된다.
