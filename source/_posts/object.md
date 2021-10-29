---
layout: post
title: 'Javascript Object 이야기'
date: 2019-08-21
categories: 
- JavaScript
thumbnail: '/images/thumnail/object.png'
comments: false
---

object 를 string 으로 바꾸는 방법은 `JSON.stringify()`를 사용한다.

```js
const obj = [{ name: 'first' }, { name: 'second' }, { name: 'third' }];

JSON.stringify(obj); // "[{"name":"first"},{"name":"second"},{"name":"third"}]
```

이 방법은 리스트로 만들어진 오브젝트를 필터링할 때 쓰는 방법인데 중복도 제거할 수 있어서 많이 사용한다.

```js
const obj = [
  { name: 'first', value: 1 },
  { name: 'second', value: 2 },
  { name: 'third', value: 3 },
  { name: 'third', value: 4 },
  { name: 'third', value: 5 },
];

const result = new Set(obj.map((v) => v.name));
console.log(result); // {"first", "second", "third"}
```

Chrome 에서 Object 를 복사하고 싶은 경우가 있는데, console 을 찍고
우클릭으로 Store as Global Variable 을 선택하면 temp1으로 복사가되는데  
`copy(temp1)` 이렇게 쓰게 되면 복사가 가능하다.

[참고 (StackOverflow)][https://stackoverflow.com/questions/10305365/javascript-chrome-how-to-copy-an-object-from-the-webkit-inspector-as-code]
