---
title: Vanilla JS 다뤄보기
date: 2021-10-30 23:20:00
categories: 
- JavaScript
tags:
thumbnail: '/images/thumnail/vanilla.png'
comments: false
---
![image](/images/thumnail/vanilla.png)

일반적으로 프레임워크를 사용하지 않고 자바스크립트를 다루는 방법은 있습니다. 
너무 프레임워크에 익숙해져 그 방법을 잊어버리지 않게 적습니다. 

먼저 html 파일에서 js를 로드를 합니다. 

```js
<body>
    <script type="text/javascript" src="[file].js" />
</body>
```

css 스크립트를 작성합니다. 
```js
<head>
    <style lang="text/css"></style>
</head>
```


파일을 여러개 로드를 하려다보면, 모듈 파일을 읽어오지 못합니다. 사용하던 방법대로 `import` 와 `export default` 를 하려면, script type 을 변경해줍니다. 

> Uncaught SyntaxError: Cannot use import statement outside a module
>
> 해결 방법: 
> ```js
> <body>
>    <script type="module" src="[file].js" />
> </body>
> ```

[webpack](https://webpack.js.org/guides/getting-started) 설정을 해줍니다. 
웹팩은 여러개의 자바스크립트 파일을 압축해주는 번들러입니다.

#### project 구조
```js
webpack-demo
 |- /dist
 |- /src
    |- index.js
 |- webpack.config.js
 |- index.html
 |- package.json
```


```js
// package.json

{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
-  "main": "index.js",
+  "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode development"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
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
`npm run build` 후,
dist 폴더에 main.js 파일이 생성되면, html 파일에서 로드하면 됩니다.

```js
// index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./dist/main.js"></script>
</body>
</html>
```
