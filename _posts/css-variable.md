---
title: CSS 변수
date: 2023.09.02
category: HTML_CSS
coverImage: 'images/cover/default.png'
slug: css-variable
---

## CSS
CSS란 Cascading Style Sheets의 약자입니다.

CSS는 HTML 요소들이 각종 미디어에서 어떻게 보이는가를 정의하는 데 사용되는 스타일 시트 언어입니다.

여러개의 스타일 적용되어 있으면, 적용되는 순서는 아래와 같이, 인라인 스타일이 먼저 적용됩니다.

1. 인라인 스타일 

    ex) `<p style="color:green; text-decoration:underline"></p>`

2. 내부/외부 스타일 시트

    ex) `<style></style> , <link rel="stylesheet" href="style.css" />`

3. 웹 브라우저 기본 스타일

    별도 스타일을 지정하지 않으면 브라우저(크롬, 사파링, 엣지 등)마다 갖고 있는 기본 스타일이 적용됩니다. 스타일 기본 값을 무시하는 방법은 2가지가 있습니다. 

    |[reset.css](https://gist.github.com/DavidWells/18e73022e723037a50d6)|[normalize.css](https://necolas.github.io/normalize.css/)|
    |--|--|
    |브라우저가 지정한 모든 속성을 지운다|모든 브라우저에서 표준 스타일을 보여준다|
    |당연하다 싶은 스타일마저 다시 설정해야한다|스타일을 바닥부터 재정의하지 않고 표준 스타일만 보여준다|
    |파일 크기가 작다|reset.css에 비해 파일이 크다|

## CSS 변수 

CSS 표기법을 사용해 정의하고 var() 함수를 사용해서 접근할 수 있습니다. 
필요한 곳에서 참조하여 사용함으로 반복되는 CSS를 줄일 수 있습니다. 

참고: [사용자 지정 CSS 속성 사용](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)


```js
// css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

// 상속 구문은 쉼표를 사용한다
.two {
  color: var(--my-var, red); /* --my-var가 정의되지 않았을 경우 red로 표시됨 */
}
```


```js
// 인라인 스타일에서 변수 얻기
element.style.getPropertyValue("--my-var");
```

## Styled-Component 응용

- 상수화 설정
```js

// constants.js
export const COLORS = {
  text: 'black';
  background: 'white',
}

// jsx
import {COLORS} from "../constants";

const Buttons = styled.button`background: ${COLORS.background}`
```

- theme 설정 

```js

// jsx

import { ThemeProvider } from "styled-components";
import {COLORS} from "../constants";

const App = ({children}) => {
  return (<ThemeProvider theme={{color: COLORS}}>
            {children}
          </ThemeProvider>)
}
const Buttons = styled.button`background: ${(props) => props.theme.background}`
```

- css variable 설정

```js
// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`html {
  --bg-element: white;
}`;


// jsx
const App = ({children}) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

const Buttons = styled.button`background: ${(props) => var(--bg-element)}`
```

## 참고
- [CSS Variables for React Devs](https://www.joshwcomeau.com/css/css-variables-for-react-devs/)