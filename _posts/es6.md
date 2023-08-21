---
layout: post
title: 'ES6 문법'
date: "2020-02-04"
category: JavaScript
toc: true
comments: false
coverImage: /images/cover/es6.png
slug: es6
---

#### 1.import/export

클래스를 사용할 수 있게 되면서 `export default 클래스명`으로 출력하는 경우가 많아졌다.
기능과 역할에 맞게 분리해서 사용하는 측면에서도 좋지만,
기본값을 사용할 경우에 오버라이딩해서 쓸 수 있게 만들면 좋을거 같아 사용한다.

그래서 함수도 Util 의 기능으로 만들어서 쓸려고 해보니, 문제가 발생했다.
<!-- more -->

`export default {함수명}`으로 사용을 해준다. 그리고 `import 파일명 from 파일위치` 로 지정을해두면
`파일명.함수명` 으로 접근해서 사용을 할 수 있다.
메서드가 아닌 함수를 개별로 호출해서 쓰고 싶을때 사용할 수 있을 거 같다.

#### 2. spread

Spread 연산은 전개연산자로 Object 를 풀어서 나타낼 수가 있게 되었다.
덕분에 뒤에 있는 값을 덮어씌워서 merge 하는데 자주 사용하는데,
중첩된 Object 의 경우엔 같은 키만 merge 해주고 싶은 경우가 발생한다.
그래서 한번 더 연산을 해주면 된다는 글을 참고해본다.

참고: https://stackoverflow.com/questions/47103028/how-to-use-object-spread-with-nested-properties

```js
const source = { a: 2, b: 3, c: { d: 2, d2: 1 } };
const target = {
  c: { d: 4 },
};

const result = { ...source, ...target };
console.log(result); // {a:2, b:3, c: {d:4}}

const result2 = { ...source, ...target, c: { ...source.c, ...target.c } };
console.log(result2); // {a: 2, b: 3, c: {d: 4, d2: 1}}
```

#### 최대값, 최소값

ES6 문법의 Spread 연산자를 사용할 수 있게 되면서 최대값과 최소값을 간편하게 계산할 수 있게 되었다.
Spread 연산자(...)는 배열을 여러개의 인자 값이나 (키-값)객체로 확장할 수 있다.

```js
const test = [190, 10, 16, 20, 60, 30, 40, 20, 60, 15, 50, 22, 8];

console.log(Math.max(...test)); // 190
console.log(Math.min(...test)); // 8
```
