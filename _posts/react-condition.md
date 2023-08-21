---
layout: _posts
title: React 조건부 렌더링
date: "2021-10-03 18:38:26"
category: React
tags:
toc: true
comments: false
coverImage: /images/cover/react-condition.png
slug: react-condition
---

[조건부 렌더링](https://ko.reactjs.org/docs/conditional-rendering.html)
<!-- more -->
```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```

참고: https://reactjs-kr.firebaseapp.com/docs/conditional-rendering.html

jsx 에서는 [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 사용합니다. 배열의 모든 요소를 순회하면서 결과값으로 새로운 배열을 반환할 수 있는 함수입니다.

반복문

```
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

참고:
https://ko.reactjs.org/docs/lists-and-keys.html

#### append dynamic component

https://stackoverflow.com/questions/51404335/append-a-react-component-in-another-on-button-click
