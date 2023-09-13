---
title: Vanilla JS Jest 적용해보기
date: 2023.09.06
category: JavaScript
coverImage: 'images/cover/default.png'
slug: testing-vanilla
---

## 시작하기

jest 를 설치하는 방법은 이 [블로그](https://buddy.works/tutorials/testing-with-jest-basic-to%C2%AD-do-application)를 참고해서 정리했습니다.

## 환경 설정
1. jest를 설치합니다. 

```js
yarn add -D jest
```

2. jest 파일을 컴파일 하기 위해 바벨을 설치합니다. 

```js
yarn add -D babel-jest @babel/core @babel/preset-env
```

3. `babel.config.js` 파일을 설정합니다.

```js
// babel.config.js

module.export = {
    presets: [["@babel/preset-env"]]
}
```

4. `package.json` 파일에 jest 를 테스트할 수 있게 설정합니다. 

```js
// package.json

"scripts": {
    "test: "jest"
}
```

5. 실행하세요.

`.test.js` 파일을 만들거나 혹은 `__tests__`폴더 아래에 파일을 만들어두고 명령어를 실행한다.

```js
yarn test
```


### 간단한 테스트 