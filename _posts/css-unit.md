---
title: CSS 단위
date: "2023-08-21"
category: HTML_CSS
tags:
coverImage:
slug: css-unit
---

## CSS 단위
CSS 사용되는 단위는 상대값(em,rem)과 절대값(px) 2가지가 있다. 

|단위|관련사항|
|---|------|
|em |요소의 글꼴 크기|
|rem|루트 요소의 글꼴 크기|
|vw| 뷰포트의 초기 컨테이너 너비 1%와 같음|
|vh| 뷰포트의 초기 컨테이너 높이 1%와 같음|



## rem (root em)

em은 현재의 font-size를 말한다. 
body에 em 사이즈를 지정하면 모든 자식 요소들은 body의 폰트 사이즈에 영향을 받는다.

```
// CSS
body {
    font-size: 14px;
}
div {
    font-size: 1.2em; // 14px * 1.2 => 16.8px
}

// HTML
<div>
    16.8px
    <div>
        16.8px * 1.2 = 20.16px
        <div>20.16px * 1.2 = 25.192px </div>
    </div>
</div>
```

em을 중첩으로 사용하면, 각 부모의 폰트 사이즈를 상속받아 크기가 점점 커지게 된다. 
대부분의 경우는 단순하게 단일 사이즈로 표현할 때, 사용하고 이런 경우엔 rem 단위를 사용하면 된다. 

r은 root(최상위)를 뜻한다. 

```
// CSS
html {
    font-size: 14px;
}
div {
    font-size: 1.2rem; // 14px * 1.2 => 16.8px
}

// HTML
<div>
    16.8px
    <div>
        16.8px
        <div>16.8px</div>
    </div>
</div>
```

이렇게 중첩문에서는 rem을 사용이 균일하게 크기 조정을 할 수 있는 방법이다.






