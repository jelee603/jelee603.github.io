---
layout: post
title: 'Load Image File'
date: 2019-10-10
categories:
- JavaScript
comments: false
background: '/img/bg-post-08.jpg'
---

#### 서버에서 온 base64 로 인코딩되어 온 이미지 파일을 그대로 보내줄 경우 Web 에서는 어떻게 보여줄까?

base64 데이터가 있으면, 이 데이터를 blob:URL 을 만들어 src 속성에 URL 입력해서 이미지를 보여주면 된다.

그런데 이렇게 되면 URL이 엄청 크게 되어 이 사이즈를 줄이는 방법이 필요하게 된다.
[iCaan][icaan]님과 [codeday][codeday]님의 블로그를 보면 상당히 정리가 잘 되어 있는데.. base64 데이터를 인코딩해서 데이터를 출력해야한다.

```js
<img src="data:image/jpeg;base64, base64_encode">
```

[icaan]: http://blog.naver.com/PostView.nhn?blogId=loverman85&logNo=221114631019&categoryNo=11&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search
[codeday]: https://codeday.me/ko/qa/20190306/7131.html
