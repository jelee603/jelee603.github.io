---
title: 사파리 브라우저에서의 스크롤바 동작 없애기
date: 2023.09.01
category: HTML_CSS
coverImage: 'images/cover/default.png'
slug: css-safari 
---


## 사파리 브라우저에서 스크롤바 동작 없애기 


모달 팝업 뒤에 스크롤 동작을 고정하기 위해 overflow-y: hidden 을 추가했다. 이렇게 하면, 크롬 브라우저에서는 스크롤이 보이지 않으면서 스크롤 기능도 동작하지 않는다.

그런데 사파리 브라우저에서는 스크롤만 안 보일 뿐 기능이 동작하고 있었다.😨

비슷한 문제를 해결한 사례를 [스택오버플로우](https://stackoverflow.com/questions/3047337/does-overflowhidden-applied-to-body-work-on-iphone-safari) 에서 찾았다. 
body { overflow: 'hidden'} 으로 x, y 축 구분없이 2개를 모두 처리하면 스크롤이 동작하지 않는다. 



