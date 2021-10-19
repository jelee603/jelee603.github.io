---
layout: post
title: 'NPM'
date: 2019-08-09
categories: setting
comments: false
thumbnail: '/images/thumnail/npm.png'
---
![image](/images/thumnail/npm.png)

> Node Pacakge Manager 로 노드기반 패키지들이 NPM 저장소에 저장되어 있다. 

#### NPM 설정

```
npm init -y  // 패키지까지 모두 설치하는 방법
```

#### NPM 에 새로 추가된 기능을 사용해보자

NPM v6 에서 모듈의 취약점을 검사해주는 기능이 추가되었다. <br>
사용해보려 했더니.. v.5.xxx 사용할 수 없다.  
NPM을 업데이트를 먼저 진행했다.

```html
// for window $ npm -version $ npm install -g npm
```

아래와 같은 에러가 또 발생한다.

```js
npm ERR! code EAUDITNOLOCK
npm ERR! audit Neither npm-shrinkwrap.json nor package-lock.json found: Cannot audit a project without a lockfile
npm ERR! audit Try creating one first with: npm i --package-lock-only
```

결과

```js
$ npm audit
           === npm audit security report ===
found 0 vulnerabilities
```

#### NPM에 설치된 모듈을 확인하는 방법 (Find the version of installed npm package)

문제가 발생했을 때, 설치된 모듈의 버전을 확인하고 싶을때가 있다.

```html
$ npm view <package-name> version</package-name>
```

#### package json 경로 지정 방법:

```js
// devDependencies 설치
$ npm install -D --save xxx

// dependencies 설치
$ npm install xxx
```

#### 패키지 모듈 삭제 방법:

```js
$ rm -rf node_modules/
// or
$ npm uninstall [패키지명]
```

#### 특정 버전으로 받는 방법:

```js
$ npm insatll -D babel-core@^7.0.0-0
```

#### Node 모듈 업데이트 방법:
[Node](https://nodejs.org/en/) 에서 pkg 다운받으면, 그 후로 업데이트 방법은 아래와 같이 stable 안정화버전으로 업데이트한다. 

```
$npm install -g n
$npm cache clean -f
$sudo n stable
```

#### NVM 사용 방법:
[NVM](https://github.com/nvm-sh/nvm#installing-and-updating) 다양한 버전의 노드를 설치할 수 있도록 해주는 관리자 툴이다.
현재 노드버전을 확인하고, [major version](https://semver.org/) 을 쓰면, 그 메이저 버전의 최신을 설치할 수 있다.

```
nvm install v14
nvm list
nvm use v14.18.1
``` 

#### 전역에 설치된 모듈을 확인하는 방법: 
```
npm list -g --depth 0
```

