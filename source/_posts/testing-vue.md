---
layout: post
title: 'Vue.js 2.x 테스트 적용기'
date: 2019-10-17
categories:
  - Lab
comments: false
thumbnail: '/images/testing-vue.png'
---

### 라이브러리 설치하면서 만나게 되었던 버그들

vue-cli 3.x 를 받게되면 자동으로 test 를 할 수 있는 환경이 구축되는데 <span style="text-decoration: line-through">프로젝트가 그렇게 쉽게 올라가는 건 아니니</span> 2019년도에 작성한 블로그이니, 지금은 3.0 을 사용하면 된다.

기존 프로젝트를 위한 2.x 에 테스트 작업환경을 추가를 해보았다. 일단은 가장 많이 사용하는 jest 를 설정해보았다.
[Vue Test Util](https://vue-test-utils.vuejs.org) 을 참고하고 [joshua1988](https://joshua1988.github.io/vue-camp/testing/getting-started.html#%EB%B7%B0-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%98%88%EC%8B%9C)님 블로그르 참고하면서 설치해보았다.

```js
npm install --save-dev jest @vue/test-utils vue-jest babel-jest
```

설치하고 babelrc 파일을 추가하는데 babel 스펙이 변하면서 다음과 같은 오류를 만나게 된다.

> Cannot find moudle 'babel-preset-env' - Div you mean "@babel/env?"
>
> 해결 방법
>
> ```js
> // babelrc
> {
>  - "presets": [["env", { "modules": false }]],
>  + "presets": [["@babel/preset-env", { "modules": false }]],
>  "env": {
>    "test": {
>  - "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
>  + "presets": [["env", { "targets": { "node": "current" } }]]
>    }
>  }
> }
> ```
>
> ```js
> // package.json
> {...
>    "jest": {
>        "transform": {
>          ".*\\.(vue)$": "vue-jest",
>          "^.+\\.js$": "babel-jest"
>        },
>        "collectCoverage": true
>    }
> }
> ```

그 다음에 만나게 되는 오류를 해결하면 샘플 코드 작성이 가능하다.

> Requires Babel "^7.0.0-0", but was loaded with "6.x"
>
> 해결 방법
>
> ```js
> $ npm insatll -D babel-core@^7.0.0-0
> ```

> Cannot find module '@/components/HelloWorld.vue' from 'helloworld.test.js'
>
> 해결 방법
>
> ```js
> // helloworld.test.js
> import HelloWorld from '../src/components/HelloWorld.vue';
> ```
>
> @ 절대주소는 일단 모듈로 인식해서 파일을 찾을 수 없다한다. 우선은 상대경로로 작업해주자.

이렇게 해결을 하고 나면, 실제로 test/ 파일에 샘플 코드를 작성할 수 있다.
