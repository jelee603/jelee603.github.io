---
title: TypeScript 스터디
date: "2021-11-01 14:27:36"
category: TypeScript
toc: true
comments: false
coverImage: /images/cover/typescript.png
slug: typescript
---

[타입스크립트 핸드북](https://typescript-kr.github.io)을 이용해서 문법과 타입스트립트에 대해 공부합니다. 예제를 확인해보고 싶다면, [TS Playground](https://www.typescriptlang.org/play)에서 확인을 해봅니다.
<!-- more -->
## 타입 추론

타입을 명시적으로 정의하기 위한 구문으로 `interface` 를 우선적으로 사용하고 특정 기능이 필요할 때 `type`을 사용합니다.

## 타입 구성

여러가지 타입을 이용해서 새 타입을 작성하기 위한 방법으로 유니언과 제네릭이 있습니다.

유니언은 여러 타입 중 하나라고 선언하는 것입니다. ('|' 을 사용)
```
// category.ts
export type PostCategory =
  | 'JavaScript'
  | 'TypeScript'
  | 'React';

// page.ts
import {PostCategory} from "./category";

const category: PostCategory = 'TypeScript';
console.log(category);
```

### union type 을 쓰는 이유는 뭘까?🤔
- js 파일로 트랜스파일링 될 때, 타입은 사라지므로 코드가 줄어든다. 
- enum 보다 선언 방법이 간단하다.
```
export enum PostCategory {
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript'
  React = 'React'
}

// page.ts
import {PostCategory} from "./category";

const category: PostCategory = PostCategory.TypeScript;
console.log(category);
```

제네릭은 타입에 변수를 제공하는 방법입니다. 제네릭이 있는 배열은 배열 안의 값을 설명할 수 있습니다.

```js
type ObjectWithArray = Array<{ name: string }>;
```

## 구조적 타입 시스템

두 객체가 같은 형태를 가지면 같은 것으로 간주하는 것을 말합니다.

```js
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`points ${p.x}, ${p.y}`);
}

const point3 = { x: 12, y: 25, z: 88 };
printPoint(point3); // points 12, 25
```

## 타입 단언 (Type assertions)

어떤 엔티티의 실제 타입이 현재 타입보다 더 구체적일 때 사용합니다. 타입 단언은 컴파일러에게 "날 믿어, 난 내가 뭘 하고 있는지 알아"라고 말해주는 방법입니다. 이는 형 변환과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성 하지는 않습니다. jsx 에서는 `as`-스타일의 단언만 허용합니다.

```js
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength);
```

## 인터페이스

타입스크립트의 핵심 원칙은 타입 검사가 `값의 형태`에 초점을 맞추고 있다는 것입니다. 이를 덕 타이핑이라 하는데 인터페이스는 이런 타입들의 이름을 짓는 역할을 합니다.

옵셔널 프로퍼티는 프로퍼티 이름 끝에 `?`를 붙여 표시합니다. 인터페이스에 속하지 않은 프로퍼티를 선택적으로 사용하도록 해줍니다.

읽기 전용 프로퍼티는 프로퍼티 이름 앞에 `readonly`를 넣어서 지정합니다.

## 함수

`기본-초기화 매개변수` 기본값을 함수에 지정해 둘 수 있습니다.
나머지 매개변수로 인자들을 모을 수도 있습니다.

```js
function buildName(firstName = 'Lee', ...restOfName: string[]) {
  return `${firstName} ${restName.join(' ')}`;
}

let leeName = buildName(undefined, 'Jieun', 'Joseph', 'Jerry');
console.log(leeName); // Lee Jieun Joseph Jerry
```

## 클래스

타입스크립트 3.8 이후 비공개 필드를 만들기 위해 자바스크립트의 `#` 문법을 사용할 수 있습니다.

## Reference

- https://typescript-kr.github.io
