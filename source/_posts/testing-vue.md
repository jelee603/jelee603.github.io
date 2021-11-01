---
layout: post
title: 'Vuejs 테스트 적용기'
date: 2019-10-17
categories: 
- JavaScript
comments: false
thumbnail: '/images/thumnail/testing-vue.png'
---

vue-cli 3.x 를 받게되면 자동으로 test 를 할 수 있는 환경이 구축되는데 프로젝트가 그렇게 쉽게 올라가는 건 아니니
기존 프로젝트를 위한 2.x 에 테스트 작업환경을 추가를 해보았다. 일단은 가장 많이 사용하는 jest 로 해보았다.
[Vue Test Util] [Vue Test Util] 을 참고하고 [joshua1988](https://joshua1988.github.io/vue-camp/testing/getting-started.html#%EB%B7%B0-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%98%88%EC%8B%9C)님 블로그르 참고하면서 현재 스펙에 맞는 버전으로 설치해보았다.

유틸 라이브러리 설치

```js
npm install --save-dev jest @vue/test-utils vue-jest babel-jest
```

이렇게만 설치하고 babelrc 파일을 추가하는데 babel 스펙이 변하면서 아래와 같이 변경해준다.

> Cannot find moudle 'babel-preset-env' - Div you mean "@babel/env?"

라고 물어본다.. 아래와 같이 파일을 변경하면 이제 다른 오류를 볼 수 있다.

```js
// babelrc
// as-is
{
  "presets": [["env", { "modules": false }]],
  "env": {
    "test": {
      "presets": [["env", { "targets": { "node": "current" } }]]
    }
  }
}

// to-be
{
  "presets": [["@babel/preset-env", { "modules": false }]],
  "env": {
    "test": {
      "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
    }
  }
}
```

```js
// package.json
{...
    "jest": {
        "transform": {
          ".*\\.(vue)$": "vue-jest",
          "^.+\\.js$": "babel-jest"
        },
        "collectCoverage": true
    }
9}
```

> Requires Babel "^7.0.0-0", but was loaded with "6.x"

이제서야 필요한 파일을 알려준다... 이렇게 해결을 하고 나면, 실제로 test/ 파일에 샘플 코드를 작성할 수 있다.

```js
$ npm insatll -D babel-core@^7.0.0-0
```

> Cannot find module '@/components/HelloWorld.vue' from 'helloworld.test.js'

@ 절대주소는 일단 모듈로 인식해서 파일을 찾을 수 없다한다. 우선은 상대경로로 작업해주자.

```js
// helloworld.test.js
import HelloWorld from '../src/components/HelloWorld.vue';
```

[vue test util]: https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-jest.html
