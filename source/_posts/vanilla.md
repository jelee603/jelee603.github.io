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

[webpack](https://webpack.js.org/guides/getting-started) 을 설정해줍니다. 
