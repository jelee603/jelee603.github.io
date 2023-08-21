---
layout: post
title: 'Javascript Array 이야기'
date: "2019-08-18"
category: JavaScript
coverImage: /images/cover/array.png
toc: true
comments: false
slug: array
---

#### Split, Join 의 사용법

array 를 string으로 string 을 array 로 바꾸는 연습은 너무나 중요하지만.. 헷갈림의 연속이다.
array 를 string 으로 바꾸는 방법으로 콤마를 split 으로 분리해서 띄어쓰기를 주면 된다.
<!-- more -->
```js
const arr = ['first', 'second', 'third'];

arr.toString().split(',').join(' '); // first second third
```

#### Splice 사용법

가장 많이 사용한 건 splice(start, deleteCount) 이다.이 삭제 방법은 배열의 길이도 줄어들기 때문에 편리하긴 하지만..
반복문으로 인덱스를 찾아서 삭제해줄려고 할때면, 배열의 길이가 변경되어 다음 인덱스를 찾는 어려움이 있었다.
이럴 땐, 삭제한 갯수만큼 인덱스에서 빼서 삭제해준다.

```js
let count = 0;

arr.forEach((v) => {
  const start = v - count;

  arr.splice(start, 1);
  count++;
});
```

#### Set 사용법

iterator 를 활용하는 방법 중 반복되는 값의 중복을 제거하는 방법으로 유용한 방법이 있다.
Set 을 사용하면 중복되는 값들 중 맨 앞의 값만 남기고 나머지는 무시가된다.

```js
const foo = [1, 2, 3, 5, 1, 1, 2, 3, 5]

console.log(new Set(foo)) // {1, 2, 3, 5}

// 중복 제거 방법 (remove duplication)
[...new Set([...array1 ,...array2])];
```
