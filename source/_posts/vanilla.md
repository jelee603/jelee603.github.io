---
title: Vanilla JS 다뤄보기
date: 2021-10-30 23:20:00
categories:
  - Lab
tags:
thumbnail: '/images/thumbnail/vanilla.png'
comments: false
---

![image](/images/thumbnail/vanilla.png)

일반적으로 프레임워크를 사용하지 않고 자바스크립트를 다루는 방법은 있습니다.
너무 프레임워크에 익숙해져 그 방법을 잊어버리지 않게 적습니다.

먼저 html 파일에서 js를 로드를 합니다.

```js
//html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
      <script type="text/javascript" src="[file].js" />
    </body>
</html>
```

css 스크립트는 <head> 태그 사이에 작성합니다.

```js
<head>
  <style lang="text/css"></style>
</head>
```

간단하게 HTML에서 자바스크립트를 사용하게 되었습니다.

그런데 모듈화라는 개념이 생기면서,
[`import`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import) 를 통해 스크립트 모듈 파일을 가져오게 되었습니다.

`export`로 파일을 내보냈을 경우에 html 에서는 위와 같은 방법으로는 오류를 만나게 됩니다.

> <span style="color: red">Uncaught SyntaxError: Cannot use import statement outside a module</span>
>
> 해결 방법:
>
> ```js
> <body>
>   <script type="module" src="[file].js" />
> </body>
> ```

`script type` 을 모듈이라 명시해주면서 문제를 해결할 수 있습니다.
이렇게 간단한 방법도 매번 프레임워크의 렌더함수만 작성하다보면 잊어버리게 됩니다.

다음은 만들어진 여러개의 모듈파일을 한번에 압축해주는 방법인 웹팩으로 HTML 파일에서 로드하는 방법을 적어봅니다.

[웹팩](https://webpack.js.org/guides/getting-started)을 설치하고, 프로젝트 구조를 다음과 같이 추가해서 세팅해줍니다.

```
npm init -y
npm install webpack webpack-cli --save-dev
```

##### project 구조

```js
webpack-demo
 |- /dist
+   |- index.html
- |- index.html
+ |- /src
+    |- index.js
+ |- webpack.config.js
 |- package.json
```

웹팩 설정 파일에서 entry 와 output 을 설정하면, entry 에 설정된 파일을 로드해서 output 의 번들파일을 생성해줍니다. `index.js` 모듈 파일을 호출하도록 해줍니다.

```js
// src/index.js

import file from '[file].js';
```

```js
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

패키지 설정파일에 웹팩을 실행할 스크립트를 작성해줍니다.

```js
// package.json

{
   "scripts": {
    "build": "webpack --mode development"
   }
}
```

`npm run build` 실행하면, 'dist' 경로에 'main.js' 라는 파일이 생성됩니다.
HTML 파일에서 생성된 파일을 로드하도록 추가해주면 됩니다.

```js
// dist/index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./main.js"></script>
</body>
</html>
```
