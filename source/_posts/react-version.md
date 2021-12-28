---
title: React Running Bug
date: 2021-12-28 14:57:17
tags:
categories:
- JavaScript
comments: false
thumbnail: '/images/thumbnail/react-bug.png'
---

오랜만에 React 최신버전으로 설치하고, `npm start` 를 실행했는데 아래와 같은 버그를 만났다.

 > Bug: Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: @eslint\eslintrc\universal.js

Node 와 NPM 을 사용하는 입장으로, 먼저 설치된 버전을 확인하러 가본다. 

1. 공식 홈페이지 권장사항 
https://reactjs.org/docs/create-a-new-react-app.html

```
Node >= 14.0.0 
NPM >= 5.6 
```

2. eslint v8 일 때, nodejs 버전을 업그레이드 해주세요. 
https://github.com/eslint/eslint/issues/15247

```
Node  ^12.22.0 || ^14.17.0 || >=16.0.0
```

예전에 작업하면서 노드 버전을 v12.22 로 사용하고 있었고, v14.18 로 변경해주었다.

그런데 OSX 터미널에서는 스위칭 후에 실행되는 것을 확인했는데, VSCode 내 터미널에서 실행하면 같은 오류가 발생했다. VSCode 에서는 전역 버전으로 변경되지 않았던 것이다. 

나처럼 동일하게 바뀌지 않아 불편을 겪는 유저가 많았다. [해결 방법](https://stackoverflow.com/questions/44700432/visual-studio-code-to-use-node-version-specified-by-nvm)을 봤더니, 기본값을 잘 되는 버전으로 맞춰두고, `nvm use default` 로 사용하는 방법을 권하는 글을 찾을 수 있었다. 
VSCode 의 launch.json 파일을 변경하는 경우엔 VSCode 를 재시작해야지만 반영이 되어 같은 불편을 겪게 된다. 기본 설정을 바꿔두고 사용하는 편이 나을 거 같다. 

```
// OS X Terminal
nvm alias default 14.18.1

// VSCode Terminal 
nvm use default
```