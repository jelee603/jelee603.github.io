---
title: TypeScript 스터디
date: 2021-11-01 14:27:36
categories: 
- JavaScript
comments: false
thumbnail: '/images/thumbnail/typescript.png'
---

[타입스크립트 핸드북](https://typescript-kr.github.io)을 이용해서 문법과 타입스트립트에 대해 공부합니다. 예제를 확인해보고 싶다면, [TS Playground](https://www.typescriptlang.org/play)에서 확인을 해봅니다.  

### 타입 추론
타입을 명시적으로 정의하기 위한 구문으로 `interface` 를 우선적으로 사용하고 특정 기능이 필요할 때 `type`을 사용합니다. 

### 타입 구성
여러가지 타입을 이용해서 새 타입을 작성하기 위한 방법으로 유니언과 제네릭이 있습니다. 

유니언은 여러 타입 중 하나라고 선언하는 것입니다. ('|' 을 사용) 
제네릭은 타입에 변수를 제공하는 방법입니다. 제네릭이 있는 배열은 배열 안의 값을 설명할 수 있습니다. 

```js
type ObjectWithArray = Array<{name: string}>
```
### 구조적 타입 시스템
두 객체가 같은 형태를 가지면 같은 것으로 간주하는 것을 말합니다. 

```js
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`points ${p.x}, ${p.y}`);
}

const point3 = {x: 12, y: 25, z: 88};
printPoint(point3); // points 12, 25
```