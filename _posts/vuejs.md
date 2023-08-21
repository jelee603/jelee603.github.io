---
layout: post
title: 'Vue 이야기'
date: "2019-08-14"
category: Vue
coverImage: /images/cover/vue-js.png
toc: true
comments: false
slug: vuejs
---

MVC 패턴이 도입되면서 Controller 에서 데이터 작업들에 대한 역할 분담을 해왔고,
Vue 는 MVVM 패턴으로 중간에 ViewModel 객체를 두고 데이터에 대한 의존성을 분리하기 위해 사용한 패턴이다.
같은 데이터인데 몇가지 조합해서 가공이 필요한 경우에 View Model 부분에서 수정을 하게끔 정해져있다.
(Dom listener, Directives, Data Binding 등등..)

<!-- more -->

- 렌더링은 React 랑 유사하고 Virtual DOM 을 사용해서 가볍고 빠름.
- 양방향 데이터 바인딩 (Vue 인스턴스와 Template) 이 모두 데이터에 접근할 수 있음. (v-model)
- 뷰는 인스턴스가 생성되면 데이터 바인딩을 할 동안 루트요소의 모든 자식 노드를 탐색하면서 데이터 변경에 반응함.
- 뷰는 DOM 을 비동기적으로 업데이트하고 `Vue.nextTick(callback)` 을 사용하면 업데이트된 이후를 보장할 수 있음.

그런데 이러한 계층 구조는 데이터 뿐만 아니라. 컴포넌트 상에서도 접목된다.

그 이후로 컴포넌트라는 개념이 자리잡았고, 비지니스 로직과 View 로직이 분리되면서 HTML 작업만 따로 작업을 할 수도 있게 되었다.
그러면서 공통적으로 사용할 UI 인 경우엔 컴포넌트로 분리하고 필요하면 데이터만 변경해서 사용할 수 있게 만들어 놓게 되었다.

그리고 이렇게 발전한 사용법으로 Vue 를 접했을 땐, 자식 컴포넌트는 이미 부모 레벨의 정보를 들고 있을 수 있게 되었단걸 알게 되었다.

#### 부모에서 자식 계층으로 정보를 전달하는 방법은?

공통 컴포넌트라고 하면 보통은 제일 마지막 자식 계층일 경우가 많다.
그래서 이 계층에서는 mounted 에서 부모의 clientHeight 를 구해올 수 있다.

```js
this.$parent;
this.$el.parent;
```

#### Vue Component 에 타입스크립트 해서 적용해본 사례는?

SFC(Single File Component) 는 Vue가 권장하는 Vue 컴포넌트 전용 파일 포맷이다. 한 파일 안에 템플릿과 자바스크립트 그리고 CSS까지 정의한다.
개발자가 클래스를 정의하기보다는 클래스를 만들 수 있는 옵션을 정의하는 형태로 개발한다.
엄격한 타입의 언어를 다루던 개발자들이 자바스크립트를 다뤄야할때 완충 역할로 타입스크립트를 사용했고,
타입은 어플리케이션 설계 전체에 영향을 주는 것이라 필요하게 되었다라고 말하는 [shiren][shiren]님의 글을 보게 되었다는데 아마
상당한 시행착오를 겪은 걸 보고, 우리도 Vue3로 전환하면 사용하게 될 거 같다는 생각이 든다.

### Vue Test Util

[joshua][joshua] 님 블로그에 보면, vue-cli 로 자동으로 설치가 된다하였지만, 기존에 만들었던 프로젝트는 vue-cli(2.x) 이라 모듈 설치방법으로 진행해봤다.
jest 라이브러리 설치

```js
npm install jest @vue/test-utils vue-jest babel-jest --save-dev
```

#### ESLint 적용하기

standard 를 사용해보고 싶어서 적용했고, indent만 4칸만 지정했다.
`npm run eslint --fix` 로 사용이 가능하다.

```js
// 기본설치
npm install -D --save eslint eslint=plugin-vue

// 추가사항
npm install -D --save eslint-plugin-import
npm install -D --save eslint-plugin-node
npm install -D --save eslint-plugin-promise
npm install -D --save eslint-plugin-standard
```

indent 만 설정한 기본 파일로 세팅했다.

```js
// .eslint.js

module.exports = {
  root: true,
  extends: ['standard', 'plugin:vue/recommended'],
  rules: {
    indent: ['error', 4],
  },
};
```

[shiren]: https://ui.toast.com/weekly-pick/ko_20190327/
[joshua]: https://joshua1988.github.io/vue-camp/testing/vue-test-util.html#%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%84%A4%EC%B9%98
[gongzza]: https://gongzza.github.io/javascript/vuejs/vue-unit-testing-with-jest/
[jest]: https://jestjs.io/docs/en/getting-started

#### Child 의 이벤트를 전달하는 방법 (EventBus)

```js
// Child.vue
<template>
    <div>
        <input @input="event => this.$emit('inputChange', event)" />
    </div>
</template>

// Parent.vue
<template>
    <div>
        <Child v-on:inputChange="handleChange" />
        <p>Value: {{value}}</p>
    </div>
</template>
<script>
    import Child from './Child.vue'

    export default {
        data() {
            return {
                value: '',
            };
        },
        components: {
            Child,
        },
        methods: {
            handleChange(event) {
                const { value } = event.target;
                this.value = value;
            }
        }
    }
</script>
```

v-on:inputChange 는 심플하게 @inputChange 이렇게 사용할 수 있고,
@input 입력이 되면, Parent 의 handleChange 메서드에 값이 전달된다.
이걸 내 방법으로 표현하면, `this.$emit('inputChange', event)` 이벤트 명을 정해주면 hook 이 걸려서
동작한 값을 해당 이벤트 명에 전달해줄 수 있다는 의미가 될 수 있겠다.

출처: https://stackoverflow.com/questions/40915436/vuejs-update-parent-data-from-child-component
