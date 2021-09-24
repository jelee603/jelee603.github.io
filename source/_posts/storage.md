---
layout: post
title: 'Local & Session Storage'
date: 2019-11-01
categories: javascript
comments: false
background: '/img/bg-post-11.jpg'
---

#### 로컬과 세션 스토리지의 차이점?

로컬 스토리지는 사용자가 지우지 않으면 브라우저에 계속 남아있다. (지속적으로 필요한 데이터)
세션 스토리지는 윈도우나 브라우저 탭을 닫을 경우 제거된다. (일회성 데이터)
세션 이전에 쿠키가 있었고, 쿠키는 만료 기한이 있는 key-value 저장소이다.
(참고) [zerocho 블로그][zerocho]

- 쿠키의 용량: 4KB

  - 매 서버 요청마다 서버로 쿠키가 같이 전송된다.
  - HTTP 요청의 특성상, 요청 대상자를 알기 위해 서버에서는 쿠키를 읽어 파악한다.

- 스토리지 용량: 5MB~ 10MB

  - 도메인 별 용량 제한이 있다. (프로토콜, 호스트, 포트가 같으면 스토리지를 공유)
  - 로컬 스토리지: 사용자의 설정(보안에 민감하지 않은)이나 유저 커스텀을 위한 데이터를 저장한다.
  - 세션 스토리지: 데이터가 영구적으로 보관되지 않는다. (window.sessionStorage)

- IndexDB 용량: 50MB

[zerocho]: https://www.zerocho.com/category/HTML&DOM/post/5918515b1ed39f00182d3048
