---
layout: post
title: 'Javascript Promise 이야기'
date: 2019-08-28
categories: 
- JavaScript
thumbnail: '/images/thumnail/promise.png'
comments: false
---

#### 비동기 통신에서 Promise 는 어떻게 쓸까?

자바스크립트에서 비동기로 데이터가 들어올 때, 그 비동기 처리가 끝난 시점에 다음 작업을 할 수 있게 해주는 방법이다.
[pangyo][pangyo]님의 블로그에 정리가 잘 되어있다.
Promise 메서드를 호출하면 pending 상태가 되고 then 일 때, 실행한다.
프로미스는 덕 타이핑의 실제 사례이다.
어떤 객체에 then() 메서드가 있으면 무조건 이 객체는 데너블(Thenable) 하다고 간주하고 프로미스라 판단한다.

```js
getData().then((data) => {console.log(data)})

function getData() {
    return new Promise((resolve, reject) => {
    ...ajax call...loop...
    resolve(response)
    }
}
```

[pangyo]: https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
