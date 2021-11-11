---
layout: post
title: 'Browser 이야기'
date: 2019-08-19
categories:
- HTML/CSS
comments: false
thumbnail: '/images/thumbnail/browser.png'
---

#### CORS 란?

`Cross Origin Resource Sharing` 의 줄임말로, 다른 도메인의 리소스를 요청할 수 있는 방법을 말한다.  
XMLHttpRequest 는 보안상의 이유로 동일한 도메인에서만 HTTP 요청을 보내도록 제한하고 있다.

GET, POST 방식 중 Request 간단하게 요청하고 응답할 수 있다.
`Access-Control-Allow-Origin: *` 모든 도메인으로 부터 접근이 가능하도록 허용하게 된다.

#### 브라우저는 받아온 정보를 화면에 표현하는 역할을 한다. 브라우저에 어떻게 문서를 전달될까?

`HTTP (Hypertext Transfer Protocol)` 의 줄임말로, 인터넷상에서 데이터를 주고 받을 수 있는 프로토콜이다.
[Andrew park][andrew park]님의 블로그에 잘 정리가 되어서 발췌한다.

브라우저는 오디오/비디오/이미지/텍스트 등 HTTP 통신을 통해서 문서를 가져와 화면에 출력을 해준다.

이때 TCP/IP 4계층 -> 3계층 -> 2계층 -> 1계층 네트워크에 접근해서 데이터를 전달한다.  
4계층 - Application : 정보를 만들어 전달
3계층 - Transport : 통신 노드를 연결
2계층 - Internet : 통신 노드간 패킷 전송과 라우팅
1계층 - Network Interface : 전기적 신호로 변환

받는 쪽에서는 반대로 해석한다.

모든 컴퓨터와 서버는 네트워크를 통해 외부에서 접근하려면 IP 주소가 필요한데 사용자는 브라우저에 URL을 입력하게 된다.  
이때 DNS 서버로 접근해서 해당 도메인 네임에 맞는 IP 를 받아온다.

\*\* 패킷 : 서버에서 클라이언트로 전송되는 데이터의 포맷

#### 브라우저는 어떻게 데이터를 받아올까?

브라우저는 웹 사이트 문서를 받아오기 위해 클라이언트에서 Request 요청을 만들어 서버에 전달한다.
서버는 Request 를 해석하고 요청에 해당하는 Response 를 전달한다.

HTTP 프로토콜의 데이터 형식은 HEADER 와 BODY 로 구성되어 있습니다.

HTTP/1.1부터는 Keep-alive 를 지원하게 되면서 문서가 다운로드가 완료되어도 클라이언트의 연결을 끊지 않고
일정 시간동안 연결을 유지하며 재연결 과정없이 데이터를 유지하게 된다.

[andrew park]: https://medium.com/@pks2974/website%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%B3%B4%EC%97%AC%EC%A7%80%EA%B2%8C%EB%90%98%EB%8A%94-%EA%B1%B8%EA%B9%8C-1-108009d4bdb


#### 크롬 브라우저 성능측정 

[FPS meter](https://developer.chrome.com/docs/devtools/evaluate-performance) 로 확인해볼 수 있다.

크롬 개발자 도구 - Console 탭의 더보기 - Rendering - FPS meter 체크를 하면 확인할 수 있다.
