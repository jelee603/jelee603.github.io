---
layout: _posts
title: TSConfig 설정방법
date: 2022-01-14 16:14:08
categories:
  - Tip
toc: true
comments: false
thumbnail: '/images/typescript-config.png'
---

타입스크립트로 전환하면, config 파일을 생성해서 프로퍼티를 추가하게 되는데요,
기본 리액트 버전으로 설치하면 가장 먼저 만나게 되는 오류가 있습니다.
<!-- more -->

> <span style='color:red'> Could not find a declaration file for module 'react'.
> ...
> implicitly has an 'any' type. </span>

암시적으로 any 타입을 가집니다. 라고 해석할 수 있는데요.
타입스크립트에서 타입을 사용하도록 엄격하게 권장하고 있습니다.

어떤 타입인지 모르고 지나칠 때가 있습니다. 그러면 `'any'`라고 명시해야하는데 이 조차도 너무 번거롭다 느껴질 때 약간 느슨하게 타입을 안쓰고 넘어가게 해주는 방법이 있습니다.

[noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny) 프로퍼티를 추가해주는 방법인데요, off 로 바꿔주면 오류는 발생하지 않을것입니다.

결과적으로는 타입스크립트로 전환했으면, 모든 타입을 작성해주는 것은 매우 중요한 거 같습니다.

```js
// tsconfig.json
{
    "compilerOptions":
    {
        "noImplicitAny": false
    }
}
```
