---
title: React에서 만난 오류들
date: "2021-12-28 14:57:17"
tags:
category: React
toc: true
comments: false
coverImage: /images/cover/react-runtime-error.png
slug: react-runtime-error
---

오랜만에 React (v17.0.2) 최신버전으로 설치하고, `npm start` 를 실행했는데 아래와 같은 버그를 만났습니다.

> Bug: Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: @eslint\eslintrc\universal.js

먼저 어떤 버전의 문제인지, React 와 Eslint 에서 권장하는 버전을 확인하러 가봅니다.

<!-- more -->
1. 공식 홈페이지 권장사항
   https://reactjs.org/docs/create-a-new-react-app.html

```
Node >= 14.0.0
npm >= 5.6
```

2. eslint v8 일 때, nodejs 버전을 업그레이드 해주라고 하네요.  
   https://github.com/eslint/eslint/issues/15247

```
Node  ^12.22.0 || ^14.17.0 || >=16.0.0
```

2가지 버전을 확인해보니, Node 버전이 최소 14 이상은 되어야 안정적일 거 같아 보이네요.
설치된 런타임 버전을 확인해봅니다.

```
node -v // v12.22
npm -v // v6.14.15
```

예전에 작업하면서 노드 버전을 v12.22 로 사용하고 있었네요. v14.18 로 NVM을 변경해줍니다.

스위칭 후에 OSX 터미널에서 실행하면 정상적으로 동작합니다. 이제 VSCode 터미널에서 실행해봅니다.
여전히 오류가 발생합니다. <br/><br/>

한참을 찾아보다가 좋은 [해결 방법](https://stackoverflow.com/questions/44700432/visual-studio-code-to-use-node-version-specified-by-nvm)을 발견했습니다.
NVM을 이용해서 전역 버전을 변경하더라도 모든 동일하게 반영이 되지 않네요. <br/><br/>

항상 사용하는 버전을 NVM Default 로 맞춰두고, `nvm use default` 로 사용을 해야할 거 같습니다.
VSCode 에서는 [launch.json 파일](https://code.visualstudio.com/docs/editor/debugging#_run-view)에 `runtimeVersion: default`로 추가해두면 항상 default 값을 사용할 수 있습니다.

```
// OS X Terminal
nvm alias default 14.18.1

// VSCode Terminal
nvm use default
```
