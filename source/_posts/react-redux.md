---
title: React Redux
date: 2021-11-26 13:45:56
comments: false
categories:
- JavaScript
tags:
thumbnail: '/images/thumbnail/react-redux.png'
---

리덕스라는 상태 관리 도구는 아래와 같은 상황을 방지하기 위해 사용합니다.

- 여러 컴포넌트에 걸쳐 전달하게 될 경우, 불필요한 props 가 늘어날 수 있다.
- 형제 컴포넌트에서 불필요한 렌더링이 일어날 수 있다.
- 최상위 컴포넌트에서 상태관리 로직이 많아 길어지는 현상도 있을 수 있다.

리덕스는 스토어라는 객체 내부에 상태를 담게 됩니다.
상태를 변경시킬 때, 액션을 전달하는데 이 과정을 디스패치라 합니다.
스토어가 액션을 받으면 리듀서가 상태를 변화시키는 로직으로 어떤 작업을 할지 정합니다. 
액션 처리 후에 새 상태를 스토어에 담습니다. 
스토어 안에 있는 상태가 바뀌면 구독하고 있는 컴포넌트에게 전달합니다. 

[타입스크립트에서 리덕스를 사용하는 방법](https://ko.redux.js.org/recipes/usage-with-typescript)은 ConnectedProps 로 타이핑하는 것보다 기본적으로 제공하는 hook 을 이용하는게 더 편리한거 같습니다. 

```js
yarn add redux react-redux
```

공식문서의 예제는 actions 와 reducer 파일을 분리했지만, 공부하는 입장에서 분리하지 않고 하나로 보면 아래와 같습니다. 액션 객체에는 payload 에 넘겨줄 값들의 타입들을 정의하고, 리듀서 상태를 변경하는 로직을 넣어줍니다.

```js
// src/store/system.ts

export const UPDATE_SESSION = 'UPDATE_SESSION'
export interface SystemState {
  loggedIn: boolean
  session: string
  userName: string
}

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

// 액션은 상태 변화 시킬 때 참조하는 객체를 정의한다.
export type SystemActionTypes = UpdateSessionAction

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: ''
}

// 리듀서는 액션으로부터 받은 상태 변화 로직만 처리한다. 
export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
```

[combineReducers](https://lunit.gitbook.io/redux-in-korean/recipes/structuringreducers/usingcombinereducers)를 사용하면 모든 리듀서를 호출할 수 있습니다. 
 
```js
// src/store/index.ts

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

// 2개이상의 리듀서를 합쳐서 내보낸다. 
export type RootState = ReturnType<typeof rootReducer>
```

리덕스 함수 내에서 dispatch를 반환받는 useDispatch 함수를 이용해서 액션을 전달합니다.
hooks 디렉토리에는 이러한 dispatch 동작들을 정해둡니다.  

```js
// hooks/useUpdateSession

import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { SystemActionTypes } from "../store/system";

export default function useUpdateSession() {
    const dispatch = useDispatch();
    return useCallback(text => dispatch(SystemActionTypes(text)), [dispatch]);
}
```

그리고 컴포넌트에서는 useUpdateSession 처럼 `use` 로 시작하는 함수들을 사용합니다. 

```js
// components/**.jsx

const updateSession = useUpdateSession({loggedIn: true, session: '', userName: ''};
```

리덕스를 사용해서 상태값이 정상적으로 변경되었는지 확인하는 작업은 크롬 확장자 도구와 아래 코드를 삽입하면 확인할 수 있습니다.  

[리덕스 개발자도구 적용](https://react.vlpt.us/redux/06-redux-devtools.html)하기 

```js
$ yarn add redux-devtools-extension

// index.ts

import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
```


