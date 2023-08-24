---
title: React 기존 프로젝트에 타입스크립트 마이그레이션
date: "2021-11-05 00:22:39"
category: React
toc: true
comments: false
coverImage: /images/cover/react-migration.png
slug: react-migration
---

리액트에서 타입스크립트를 지원하고 있어, 간단하게 설치가 가능하지만 기존 프로젝트에 마이그레이션 방법으로 설치를 해보고자 한다.
<!-- more -->
### [React-TypeScript](https://reactjs.org/docs/static-type-checking.html#typescript) 적용 방법

```js
npx create-react-app my-app --template typescript
```

### 기존 리액트 프로젝트에 타입스크립트로 마이그레이션 방법

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html) 의 순서대로 설치한다.

```js
npx create-react-app my-app
cd my-app
npm start
```

리액트를 설치하고 프로젝트에 [타입스크립트를 추가](https://reactjs.org/docs/static-type-checking.html#adding-typescript-to-a-project)로 설치해준다.

```js
yarn add --D typescript @typescript-eslint/parser
yarn run tsc --init
```

index.js 와 App.js 파일의 확장자는 _.tsx 로 변경해준다.
나머지 파일은 모두 _.ts 파일로 확장자를 변경해준다.

eslint 에서도 타입의 영향을 받지 않으려면, [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)를 추가해준다.
노드 버전이 v12.22.0 이상이 되어야 설치가 가능하다.

```js
yarn add -D @typescript-eslint/parser
```

프로젝트를 실행시 발생하는 버그:

> typescript svg 모듈 또는 해당 형식 선언을 찾을 수 없습니다
>
> 해결 방법:
> 커스텀 타입 파일을 생성해주고, tsconfig 파일에 include 에 해당 파일을 추가해준다. [(stack-overflow)](https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript)
>
> ```js
> // custom-d.ts
> declare module "*.svg" {
>  const content: any;
>  export default content;
> }
> ```

> @typescript-eslint/parser' declared in '.eslintrc': Cannot find module 'typescript'
>
> 해결 방법:
> [typescript가 로컬에 설치](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#typescript-should-be-installed-locally)되어 있어야한다.
>
> ```
> yarn global add typescript
> ```
