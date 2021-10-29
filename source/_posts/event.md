---
layout: post
title:  "Javascript Event 이야기"
date:   2019-08-22
categories:
- JavaScript
thumbnail: /images/thumnail/event.png
comments: false
---

#### 이벤트 리스너를 등록해서 사용할 때, `removeEventListener` 가 필요할까?
전체 화면에서 히든 페이지가 필요해져서 window 객체에 keyup 이벤트를 등록하는 방법으로 문제를 해결한 경우가 있는데, 
이 이벤트를 제거해줄 필요가 있는지에 대해서 고민이 되었다.   


#### 이벤트 리스너의 this 는 어떻게 인지할까?
this 를 잘 바꿔줄 때, 필요한 메서드가 call, apply, bind 이다. 
 
[mygumi][mygumi]님과 [zerocho][zerocho]님의 글이 도움이 되었다. 
call, apply 는 함수를 호출하는 거고, 인자를 넘기고 반환값을 돌려받는 창구가 있을때 주로 사용한다.
call 은 파라미터 중 첫번째 인자를, 내부에서 사용할 this 로 만들어준다. 
apply 도 마찬가지이고, 대신에 파라미터를 배열로 넘긴다. 
bind 는 this 만 바꾸고 호출하지는 않는다. 원본 함수를 호출하도록 하드 코딩된 새로운 함수를 생성한다. 
이건 다른말로 콜백 형식을 만들어줄 수 있다.


``` js
function Person() { 
    this.name = this.name || "default"; this.authority = "guest";
    return this.name + " is " + this.authority; 
}

// call 은 새 함수로 만들어서 호출한다.
Person.call({name: "bill"}); // "bill is guest"

// 1. bind 는 this을 교체해준다.
const userInfo = Person.bind({name: "test"});  // undefined
// 2. 함수를 호출한다.
userInfo(); // "test is guest"

// call 은 새 함수로 만들어서 호출한다.
const userInfo3 = Person.call({name: "test3"});  // undefined
userInfo3; // "test3 is guest"
```

#### 클로저는 어떻게 사용할까?
생명주기가 끝난 함수의 변수를 외부 함수에서 호출하는 걸 일컬어 클로저라 한다. 
클래스로 만든 내부 이벤트를 외부에서 제어를 하려고 고민을 하다가 클로저를 응용할 수 있겠다 싶었다.
위에 bind 는 스코프만 바뀌는 거고, call 은 원본 함수를 호출할 수 있는 새 함수로 만들어준다.   

```js
function funcA(value1, value2) {
  console.log(`value: ${value1} ${value2}`)
}

funcB = () => funcA.call(this, 2, 3) 
funcB() // value: 2 3
``` 

[mygumi]: https://mygumi.tistory.com/332
[zerocho]: https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd