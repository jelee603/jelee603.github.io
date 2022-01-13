---
title: React Redux
date: 2021-11-26 13:45:56
comments: false
categories:
- JavaScript
tags:
thumbnail: '/images/thumbnail/react-redux.png'
---

리덕스는 아래와 같은 상황을 방지하기 위해 사용합니다.

- 여러 컴포넌트에 걸쳐 전달하게 될 경우, 불필요한 props 가 늘어날 수 있다.
- 형제 컴포넌트에서 불필요한 렌더링이 일어날 수 있다.
- 최상위 컴포넌트에서 상태관리 로직이 많아 길어지는 현상도 있을 수 있다.

리덕스의 동작 과정

```
1. 리덕스는 스토어라는 객체 내부에 상태를 담게 됩니다.

2. 상태를 변경시킬 때, 액션을 전달하는데 이 과정을 디스패치라합니다.

3. 스토어가 액션을 받으면 리듀서가 상태를 변화시키는 로직으로 어떤 작업을 할지 정합니다. 

4. 액션 처리 후에 새 상태를 스토어에 담습니다. 

5. 스토어 안에 있는 상태가 바뀌면 구독하고 있는 컴포넌트에게 전달합니다. 
```

```js
yarn add redux react-redux
```

타입스크립트 공식문서 [예제](https://ko.redux.js.org/recipes/usage-with-typescript)는 actions 와 reducer 파일을 분리했지만, 공부하는 입장에서 분리하지 않고 하나로 보면 아래와 같습니다. 


`Action` 접미사를 붙인 객체에는 

type 에 넘겨줄 값들의 타입을 정의하고,

payload 에 리듀서 상태를 변경하는 로직을 넣어줍니다.

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

index 파일에서 위에 정의했던 리듀서를 합쳐서 내보내주게 됩니다.

[combineReducers](https://lunit.gitbook.io/redux-in-korean/recipes/structuringreducers/usingcombinereducers)를 사용하면 여러개의 리듀서를 한번에 호출할 수 있습니다. 
 

```js
// src/hooks/useUpdateSession.ts

import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { SystemActionTypes } from "../store/system";

export default function useUpdateSession() {
    const dispatch = useDispatch();
    return useCallback(text => dispatch(SystemActionTypes(text)), [dispatch]);
}
```
useDispatch 함수는 액션을 전달합니다. 
hooks 디렉토리에는 이러한 dispatch 동작들을 정해둡니다.  

```js
// src/components/**.tsx

const updateSession = useUpdateSession({loggedIn: true, session: '', userName: ''};
```

화면에서 사용할 때는, `use` 접두사를 사용한 hook 을 사용합니다. 

디버깅으로 리덕스로 변경된 값을 확인하는 방법은 크롬 확장자 도구에 리덕스 개발자도구([적용 방법](https://react.vlpt.us/redux/06-redux-devtools.html))를 설치하시면 됩니다. 

```js
$ yarn add redux-devtools-extension

// index.ts

import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
```


## Reference

https://ko.redux.js.org/recipes/usage-with-typescript/

https://velog.io/@velopert/use-typescript-and-redux-like-a-pro

https://react.vlpt.us/redux/06-redux-devtools.html

