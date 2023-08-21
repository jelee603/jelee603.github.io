---
title: 모던 자바스크립트 새로운 기능
toc: true
comments: false
category: JavaScript
coverImage: /images/cover/modern-js.png
date: "2022-01-27 23:47:36"
slug: modern-js
---

ES2016 ~ ES2020 까지 자바스크립트의 많은 변화가 있었습니다. 
[모던자바스립트 핵심가이드](http://www.yes24.com/Product/Goods/101478466)책이 너무 잘 정리되어있어 책을 보는 것을 추천합니다. 여기엔 자주 사용하는 몇가지 문법만 정리해봅니다.
<!-- more -->
#### JavaScript

[Object.fromEntries()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

키/값 쌍이 포함된 배열을 객체로 변환합니다. 

```js
const entries = [['foo', 'v1'], ['baz', 'v2']]
Object.fromEntries(entries)
// {foo: 'v1', baz: 'v2'}
```

[Object.entries()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

주어진 객체를 [key, value] 쌍의 배열로 반환합니다.

```js
const object1 = {
  a: 'somestring',
  b: 42
};

Object.entries(object1).forEach(([k, v] = e)  => console.log(k, v));
// a somestring
// b 42
```

[Object.values()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

모든 값이 담긴 배열을 반환합니다. 
```js
Object.values(object1)
// ['somestring', 42]
```

[Object.seal()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

객체의 새로운 속성을 추가할 수 없게 얼려버리는 걸 말합니다. 하지만 [Object.freeze()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 과 다르게 데이터 속성값을 변경하는 것은 가능합니다. 

[Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

유사배열객체나 이터러블한 객체를 얕게 복사해 새로운 배열을 생성합니다. 
```js
const arr_like_obj = {
0: 'a',
1: 'b',
2: 'c',
length: 3}

Array.from(arr_like_obj)
// ['a', 'b', 'c']
```

[typeof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)

자료형을 나타내는 문자열을 반환합니다. 

[instanceof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)

해당 속성이 프로토타입 체인 어딘가에 존재하는지 판별합니다. 

[Symbol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

항상 고유하며 객체 속성의 식별자로 사용할 수 있습니다. 

[defineProperties](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

메서드 객체에 새로운 속성을 정의하거나 기존의 속성을 수정하고 그 객체를 반환합니다.

#### Class 

[private class fields](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

`#` 해쉬를 추가해 클래스의 속성을 외부에서 호출할 수 없게 만들 수 있습니다. 


[static](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static)

클래스의 정적 메서드 키워드입니다. 인스턴스가 아닌 클래스 자체에서 접근할 수 있는 메서드입니다. 

[get](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get)

클래스 내에서 설정한 객체를 읽기 전용으로 가져올 수 있습니다. 

#### Web API  
Document에 상속된 가장 일반적인 기본 클래스입니다. 
HTML 태그를 직접 짚어서 사용할 경우에 하위 클래스들의 요소들을 선택할 수 있습니다.

[firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild)

엘리먼트의 첫번째 자식요소를 반환합니다. 

[lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild)

엘리먼트의 마지막 자식요소를 반환합니다. 


[nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling)

엘리먼트 지정한 요소의 바로 다음 요소를 반환합니다. 지정된 요소가 목록의 마지막 요소일 경우엔 null을 반환합니다.


[requestAnimationFrame()](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)

브라우저에게 애니메이션을 호출하는 합수입니다. 실행할 콜백을 인자로 넘겨주면, 리페인트 되기 전에 업데이트 함수를 실행합니다. 