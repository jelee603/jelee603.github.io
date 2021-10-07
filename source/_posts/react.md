---
layout: _posts
title: react
date: 2021-10-03 18:38:26
tags:
---

조건부 렌더링

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