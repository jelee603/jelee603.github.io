---
layout: _posts
title: React에 Cypress 적용하기
date: "2022-01-14 13:58:02"
category: React
toc: true
comments: false
coverImage: /images/cover/react-cypress.png
slug: react-cypress
---

이 글은 Cypress 블로그의 [원문](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react)을 직역해서 [실습](https://github.com/jelee603/cypress-testing-example)하기 위해 작성했습니다.
<!-- more -->
## Cypress 시작하기

Cypress7.0 중, Cypress와 함께 패키지로 묶은 새로운 컴포넌트입니다.
이것은 테스팅을 실행으로부터 만드는 법을 배우고, `experimentalComponentTesting` 플래그가 숨겨져 있습니다.

블로그의 이 글에서는 타입스크립트를 사용한 새로운 리액트 앱을 통해 리액트를 생성하고 Cypress 컴포넌트 테스트 러너를 설치하는 방법을 볼 수 있을 것입니다.

블로그에 사용된 예제코드는 [여기](https://github.com/lmiller1990/cypress-react-template)서 얻을 수 있습니다.

## 새 리액트 프로젝트 생성

새로운 리액트는 만드는 법을 시작합니다. 옵션으로 타입스크립트를 추가합니다. - 이 예제를 사용할 것입니다.

```
yarn create react-app cypress-test-react --template typescript
```

## Cypress 컴포넌트 테스트 러너를 구성하는 방법

리액트 프로젝트를 한번 얻고, Cypress 설치와 웹팩 DevServer 와 리액트 어댑터를 설치합니다.

리액트 앱 프로젝트는 웹팩 기반에 있습니다. 웹팩 어댑터와 연관된 설치중입니다.
또한 `@cypress/react` 필요하고, 컴포넌트(`mount`하기 위해 비슷한 Enzyme 또는 테스팅 라이브러리에 `render`)들과 상호적으로 붙일 수 있는 방법이 우선입니다.

```
yarn add cypress @cypress/react @cypress/webpack-dev-server --dev
```

다음, 기본 설정을 위해 `cypress.json` 만듭니다:

```
{
  "component": {
    "testFiles": "**/*.test.{js,ts,jsx,tsx}",
    "componentFolder": "src"
  }
}
```

여기에 몇가지 컴포넌트 테스팅 상세 옵션을 추가하고, 앞으로는 `"component"` 키를 사용합니다.
`"componentFolder"`에 모든 컴포넌트와 테스트들이 위치하고 `"testFiles"`은 테스트파일을 찾기위한 패턴입니다.

마지막으로 컴포넌트 테스트를 위해 `@cypress/webpack-dev-server`가 필요합니다.
플러그인은 [Cypress 문서](https://docs.cypress.io/guides/tooling/plugins-guide#Installing-plugins)가 상세하게 설명합니다.
기본 플러그인은 `cypress/plugins/index.js` 부터 로드 됩니다. 파일을 만들고 추가합니다:

```
// cypress/plugins/index.js

const injectDevServer = require("@cypress/react/plugins/react-scripts")

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}
```

이것은 Cypress 웹팩 Dev Server를 사용하기 위해 웹팩과 같은 설정으로 리액트 앱을 사용합니다.

다른 템플릿을 사용한다면, Next.js 같은, 몇가지 다른 유용한 어댑터를 가져야합니다.

또한 1개의 어댑터를 만드는게 가능합니다.

## 테스트 작성법

Cypress 를 사용하기 위해, `src/App.test.tsx` 이동시켜, 리액트 앱 템플릿으로 가져옵니다.
간단한 이동입니다:

```
// src/App.test.tsx

import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});
```

대부분의 테스트는 `@cypress/react` 로 부터 `mount`할 때 시작할 것입니다. 테스트 라이브러리의 `render`와 유사합니다. 컴포넌트가 한번 마운트되면, Cypress의 확장된 올바른 행동을 확인하기 위한[query and assertion APIs](https://docs.cypress.io/api/table-of-contents) 를 사용할 수 있습니다.
이 예제는 `"Learn React"` 렌더되었다고 확증할 수 있습니다.

테스트 러너에서 Cypress 컴포넌트를 실행하세요:

```
yarn cypress open-ct
```

그리고 왼쪽 트리구조에서 스펙을 선택하세요.

변경되도록 해보세요 - 테스트는 즉각 재실행됩니다. 오로지 즉각적인 것은 아닙니다. 테스트가 통과되거나 실패 되었다면, 시각적으로 점검하고 디버그가 가능합니다.

`yarn cypress run-ct`로 모든 스펙들은 실행할 수 있습니다. CI 환경, 또는 코드 커밋과 푸시 전에 마지막 체크에서 테스트들의 실행하기에 유용합니다.

## 논의

Cypress 컴포넌트 테스트 러너는 jsdom 기반의 테스팅 환경(예를 들어, jest 와 Vue Test Utils)의 대안책입니다. 많은 장점을 제안합니다:

- 실제 브라우저에서 실행됩니다. 이 의미는 테스트가 유저에게 더 가까운 경험이 될 것입니다.
- 비주얼. 무엇이 렌더되었는지 볼 수 있습니다. 더이상 무엇이 렌더되거나 디버그인지 찾으며 수수께끼 터미널 로그를 스크롤링 하지 않아도 됩니다. - 단지 devtools 과 브라우저 DOM 을 열면 됩니다.
- Cypress 의 힘 - 가장 인기있고 의지할 수 있는 E2E 테스팅이 있습니다.

또한 디자인 환경이 2배입니다. 즉시 반영과 가까운 인스턴스 피드백을 주고 발전되는 것을 볼 수 있습니다.
이것은 점진적으로 테스트 기반 jest 가 아니고, Storybook 디자인 기반 잘 되어진 환경입니다.

여전히 알파버전이지만, 빠르게 발전하고 있고 컴포넌트 테스팅의 지표를 바꿀 것을 약속합니다.

## 결론

컴포넌트 테스팅을 위한 큰 Cypress 를 가져옵니다. 아래 어댑터 이래로, 웹팩과 같은, 테스트 전체를 버릴 필요는 없습니다. - 마이그레이션을오 가능합니다.

시각적인 측면은 단위 테스트과 단독 툴 디자인입니다. 엉망인 콘솔 결과를 잡아내던 시절은 끝났습니다. - 테스트 실행으로 어떤 컴포넌트인지 볼 수 있습니다.

블로그의 코드는 [여기](https://github.com/lmiller1990/cypress-react-template)에서 볼 수 있습니다.

## Reference

- https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react
