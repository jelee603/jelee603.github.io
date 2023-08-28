---
title: React Portal
date: "2023-08-24"
category: React
tags:
coverImage: /images/cover/default.png
slug: react-portal
---

## 포탈은 왜 사용할까?

리액트에서 말하는 포탈은 부모 컴포넌트의 DOM 계층 바깥에 있는 DOM 노드로 자식을 렌더링하는 방법입니다.

리액트는 컴포넌트를 만들 때, 트리 구조로 생각해서 만드는데 부모-자식 관계로 된 구조로 만들게 됩니다. 
이 상황에서 모달창과 같은 항상 젤 위에 떠 있어야만 하는 컴포넌트의 경우에 유용하게 사용될 수 있습니다. 
가장 젤 위에 떠 있게 하려면, z-index 값을 엄청 크게 써서 덮어씌워거나 스타일을 변경해주면 가능은 하지만, 이런 복잡한 예외 상황들을 벗어나 편하게 처리할 수 있게 할 수 있는 방법입니다. 

## Next.js 코드 예시

```jsx
// _app.tsx
<body>
    <div id="root"></div>
    <div id="modal"></div>
</body>


// modal.js


```




