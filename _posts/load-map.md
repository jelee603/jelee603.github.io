---
layout: post
title: '로드맵'
date: "2021-09-24 14:39:08"
category: ToyProject
tags:
coverImage: /images/cover/default.png
slug: load-map
---
### 개발자의 마음가짐

> 요구 사항이 변할 때에도, 고객의 기대에 맞춰 동작하게 만들어 줄 준비가 되어있어야하고 그에 맞춰 프로그램을 수정하는 것은 개발자의 몫입니다.  - 세상을 설계하는 객체지향 방법론 
- `Code: 프로그래밍 프로그래머스`
- `실용주의 프로그래머`
- 동료 개발자와 편하게 의사소통을 하기 위해 ESLint 와 Prettier 로 코딩 스타일을 맞춰둔다. 

- ESLint
  - 자바스크립트 코드를 에러가 덜 나는 방향으로 작성하도록 도와주는 문법 보조 도구 
  - var -> const 로 변경해주거나 띄어쓰기 맞춰준다. 
  - TSLint가 있었지만, 몇가지 [아키텍쳐 문제](https://github.com/Microsoft/typescript/issues/29288#:~:text=Back%20to%20top-,Linting,-Semantic%20rules%20in)가 있어서 현재는 ESLint를 편집해서 사용한다.  
- Prettier 
  - 팀 단위 코딩 컨벤션을 맞추어 개인화해서 사용합니다. 
  - 옵션 설정해서 사용합니다.(1라인의 문자길이, 세미콜론, 탭 기타 포매팅 설정)

---
### 자바스크립트

- 원시레퍼 타입, 참조 타입
- 변수/스코프/메모리
  - 클로저, 재귀
- [디자인 패턴](#디자인-패턴) `프론트엔드 개발자를 위한 자바스크립트 프로그래밍` [(예제코드)](https://github.com/jelee603/study/tree/main/pattern)
  - [팩터리 패턴](#팩터리-패턴)
  - [생성자 패턴](#생성자-패턴)
  - [프로토타입 패턴](#프로토타입-패턴)
  - [동적 생성자](#동적-생성자)
  - [기생 생성자](#기생-생성자)
  - [방탄 생성자](#방탄-생성자)

- EcmaScript 6
  - [Destructuring](#Destructuring)
  - [Async & Await](#Async-&-Await)
  - proxy, map, set
  - 구조체, 배열
  - 스트릭트 모드
  - 배열 메서드: [reduce](#reduce), map, filter, forEach, every, some
- [TypeScript](#TypeScript)
- [Babel](#Babel)

#### Destructuring
객체와 배열의 구조를 분해해서 객체의 속성을 바로 꺼내서 쓸 수 있는 방식입니다.
자바스크립트 차원에서 편하고 쉽게 접근할 수 있습니다.
```
var {a, b, c} = obj;
```

#### Async & Await

비동기처리 문법, 자바스크립트의 콜백 문제를 Promise 가 해결하고 Promise 의 문제를 해결한 것이 Async & Await 입니다.

```
async function fetchData() {
  await getList();
}
```
함수 앞에 async 를 걸어주고, 비동기 처리를 한 promise 객체를 반환하는 부분에 await 를 걸어준다. 

#### 배열 메서드
#### reduce [(링크)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
배열의 각각의 아이템들을 순회하면서 이전 연산 값을 누적하면서 계속 연산해서 값을 추출하는 함수
연산은 콜백
acc: 누적치, current: 순회하는 아이템

#### TypeScript

맵드 타입
기존에 존재하는 타입을 맵드 타입을 문법을 이용해서 타입으로 변환해내는 것.
맵 함수처럼 사용 가능합니다.

기존 프로젝트를 타입스크립트로 적용할 때 주의점

- 기능 변경과 동시에 타입스크립트 전환을 하지 말것
- 테스트 커버리지가 낮은 프로젝트엔 함부로 타입스크립트를 적용하지 말것
- 처음부터 타입을 엄격하게 지정하지 말것 (컴파일을 돌렸을 때 에러가 안나는 수준으로 일단 만들고 점진적으로 타입을 구체화할 수 있게 작업합니다.)

#### Babel

> [공식문서](https://babeljs.io/docs/en/)
> 최신버전의 자바스크립트 파일을 구버전 브라우저에서 인식할 수 있게 트랜스파일해주는 역할을 한다. 
> 타입스크립트의 프리셋(플러그인의 집합), 옵션들의 집합을 따로 설치해줘야한다. 바벨쪽에서의 라이러리를 제공한다. 
---
### 디자인 패턴

> 문제의식을 먼저 형성하게 하지 않고 답을 먼저 보여준 뒤 그걸 어디에 써먹을지를 먼저 알려주면,독자는 '어린아이가 망치를 들고 있는 오류'에 빠질 것이다.

#### 팩터리 패턴

특정 인터페이스의 객체를 생성하는 과정을 함수로 추상화하는 패턴입니다. 코드 중복 해결됩니다.

> 생성한 객체가 어떤 타입인지 알 수 없다는 단점

#### 생성자 패턴

커스텀 생성자를 만들어서 원하는 타입의 객체에
필요한 프로퍼티와 메서드를 직접 정의할 수 있습니다.

> 인스턴스마다 메서드가 생성된다는 단점

#### 프로토타입 패턴

프로퍼티와 메서드는 객체 인스턴스 전체에서 공유됩니다.
ex) 네이티브 참조 타입이 프로토타입 패턴으로 구현되어있습니다. (Object, Array, String)

> 프로퍼티가 참조값을 포함한 경우, 인스턴스 프로퍼티에 값을 할당하면, 프로퍼티가 prototype 프로퍼티를 가리킬 수 있습니다.

1. constructor 프로퍼티를 명시적으로 생성하고 값이 담기도록 강제해서 사용 가능 합니다.
2. EcmaScript 5판에 정의된, [[enumerable]]생성자를 재설정하면 자동으로 true 로 바뀌므로 false 바꿔줘서 사용합니다.
3. [[Prototype]] 포인터는 생성자가 호출될 때 할당되므로 프로토타입을 다른 객체로 바꾸면 생성자와 원래 프로토타입 사이의 연결이 끊어집니다.
   먼저 빈객체를 생성하면 이 체이닝을 끊을 수 있습니다.

#### 동적 생성자

모든 정보를 생성자 내부에서 캡슐화하고 필요한 경우 생성자 내부에서 프로토타입을 초기화하여 생성자와 프로토타입을 모두 쓸 수 있는 장점이 있습니다.

#### 기생 생성자

보통 다른 패턴이 실패할 때 폴백으로 씁니다.
일반 생성자처럼 보이지만, 다른 객체를 생성하고 반환하는 동작을 래퍼 생성자로 감싸는 것을 말합니다.

#### 방탄 생성자

자바스트립트에서는 공용 프로퍼티가 없고 메서드가 this를 참조하지 않는 객체를 방탄 객체라 하고, 이 패턴은 데이터를 써드파티 애플리케이션으로부터 보호하는데 가장 잘 어울립니다.

---
### 웹 API

[웹을 만들 때 사용하는 인터페이스 목록](https://developer.mozilla.org/ko/docs/Web/API)


- <b>DOM</b>
[DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model)은 메모리에 웹페이지 문서 구조를 표현합니다. HTML, XML 문서의 프로그래밍 인터페이스입니다. 
웹 페이지는 일종의 문서(Document) 입니다. 
문서를 논리 트리로 표현하고, 트리의 각 브랜치는 노드에서 끝나며 각 노드는 객체를 갖습니다. 

  - 노드 계층 구조
[Dom 레벨1 코어](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Using_the_W3C_DOM_Level_1_Core): Document 콘텐츠 트리를 변경하기 위한 강력한 객체형 모델입니다. 웹스크립트의 초석이기도 하며, 주요 브라우저에서 지원합니다.  

  - [선택자 API](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  Document, DocumentFragment, Element 인터페이스를 구현하는 모든 객체에 
  querySelector 와 querySelectorAll 메서드를 추가되어있습니다. 이 메서드들은 엘리먼트 노드에 접근해서 특정 노드를 선택해서 갖고 올 수 있습니다.

- <b>Window 인터페이스</b>

  [Window](https://developer.mozilla.org/ko/docs/Web/API/Window)는 DOM 문서를 담는 창을 나타냅니다. 
  document 속성으로 DOM을 나타냅니다. 
  자바스크립트 코드에서는 노출된 전역 변수, window는 현재 스크립트가 작동중인 창을 나타냅니다. 
<br/>

- <b>Document 인터페이스</b>
  브라우저가 불러온 웹페이지를 나타내며 페이지의 진입점 역할을 합니다. 
<br/>

- <b>Storage</b>
 [웹 스토리지](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)는 브라우저에서 키/값 쌍을 쿠키보다 훨씬 직관적으로 저장할 수 있습니다. 
 특징: 세선과 로컬 스토리지 2가지 있습니다.

  |세션 스토리지|로컬 스토리지|
  |--|--|
  |브라우저가 열려있는 동안 제공| 유효기간 없이 데이터를 제공|
  |데이터를 절대 서버로 전송하지 않음| 브라우저 캐시 또는 저장 데이터를 삭제해야 함|
  |저장공간(최대 5MB) | 쿠키나 세션보다 저장공간이 크다|

- <b>location</b>
[Location](https://developer.mozilla.org/ko/docs/Web/API/Location)인터페이스는 객체가 연결된 장소(URL)을 나타냅니다. 변경햐면, 연결된 객체도 변경됩니다. 
<br/>

- <b>history</b>
 window 객체는 [history](https://developer.mozilla.org/ko/docs/Web/API/History_API) 객체를 통해 브라우저 세션 기록에 접근할 수 있는 방법을 가집니다. 방문 기록 스택의 콘텐츠를 조작할 수 있습니다. 
<br/>

#### 웹 API 이벤트

- 이벤트 흐름
  - 캡쳐링
  - 버블링

- 이벤트 핸들러
  - DOM 레벨 0 핸들러
  - DOM 레벨 2 핸들러
  - 크로스 브라우징 핸들러

- 이벤트 위임

---
### HTML

["하이퍼텍스트마크업 언어"](https://developer.mozilla.org/ko/docs/Glossary/HTML)는 웹페이지의 구조를 지정하는 기술적인 언어입니다.
- [HTML5](https://ko.wikipedia.org/wiki/HTML5)
DOM 레벨 2의 차기 표준안입니다. 
  - 구역을 나누는 구조적인 요소가 추가됨 (header, nav, article, section, aside, footer)
  - 멀티 미디어 요소가 추가됨 (플러그인 없이 오디오와 비디오 재생이 가능)
  - canvas
  - 문서 선언 - <!DOCTYPE html>으로 간소화
  - 웹 접근성 향상을 위해 사용을 지양하는 태그들 - frame, frameset, noframes

---
### CSS

- [poiem](https://poiemaweb.com/css3-syntax)

---
### HTTP

[하이퍼텍스트 전송 규약(Hypertext Transfer Protocol)](https://developer.mozilla.org/ko/docs/Web/HTTP)은 웹 브라우저와 웹 서버간의 데이터가 교환되는 통신 규약입니다.

- 보안, HTTP `Real World HTTP`

- XSS 브라우저 보호
  "XSS(Cross-Site Scripting)"는 권한 없는 사용자가 웹 사이트에 스크립트를 삽입하는 공격 기법입니다. 
  - 이 공격을 방어하기 위한 방법을 찾아보면, 특수문자로 치환 혹은 문자열 p태그로 치환해서 스크립트가 실행되지 못하도록 하는 방법들이 있다. 
  - 공격을 감지했을 때, 페이지 로드를 중지시킬 수 있습니다. [X-XSS-Protection](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/X-XSS-Protection)

- [HTTP Request](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)
  클라이언트가 서버로 전달해서 서버로 액션이 일어나게끔 하는 메시지입니다. 

- [CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS) 정책
  다른 출처에 접근할 수 있도록 권한을 부여하는 정책입니다. 웹서버에서 옵션을 통해 on/off 가 가능힙니다. 

- [Axios](https://axios-http.com/docs/intro)
  브라우저와 Node.js 를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다. 

- [Restful API](https://ko.wikipedia.org/wiki/REST) 통신 절차
  "Representational State Transfer"은 웹를 사용할 때 제약 조건들을 정의하는 소프트웨어 아키텍처 스타일입니다. HTTP URI 를 통해 자원을 명시하고, HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD 를 제공합니다. [JSON](https://ko.wikipedia.org/wiki/JSON), XML, TEXT, RSS 등 여러 형태의 Representation으로 나타내어 데이터를 주고 받는 것이 일반적입니다. 

    - [AJAX](https://ko.wikipedia.org/wiki/Ajax)
    "Asynchronous JavaScript and XML" 비동기적인 어플리케이션 제작을 위한 웹 개발 기법입니다.
    1. 페이지 이동없이 고속으로 화면을 전환할 수 있다.
    2. 서버 처리를 기다리지 않고, 비동기 요청이 가능하다.
    3. 수신하는 데이터 양을 줄일 수 있고, 클라이언트에게 처리를 위임할 수도 있다.
    4. 플러그인 없이도 인터렉티브한 웹페이지 구현할 수 있다.
   
    - [JSONP](https://ko.wikipedia.org/wiki/JSONP)
     각기 다른 도메인에 상주하는 서버로부터 데이터를 요청하기 위해 사용되었는데 상호 비보안 문제로 CORS 로 대체 되고 있습니다. 

---
### 알고리즘

- 그래프
- 트리
- 정렬 (퀵, 병합, 힙)
- 이진 검색
- 설계 기법 `알고리즘 트레이닝`


---
### 리팩토링

> 켄트 백이 말한, 코드의 소리를 듣는 것은 코드가 원하는 것에 귀를 기울이는 것을 말합니다. 코드는 단순해지려는 욕망이 있습니다. 그걸 이뤄주는 것이 프로그래머입니다.<br/>
> <리팩토링 자바스크립트 - 에반 버차드>

- 배열 객체 대안 `리팩토링 자바스크립트`
- 함수 추출
- 전역 객체 API 간소화
- OOP (계층구조, 상속구조)
  - 디자인 원리 `Head First`
- FP (함수형)
  - 함수 커링, 함수 바인딩, 메모제이션


---
### 그래픽


- 애니메이션
  - 캔버스: 2D Context
  - window: requestAnimation

---
### TDD

- 테스트-주도 개발 `테스트 주도 개발로 배우는 객체지향 설계` <br/>
  도달해야하는 목적지를 테스트라는 안정장치를 통해 좀 더 견고한 방법으로 도달할 수 있게 해주는 설계 기법이다.
- [단위 테스트](#단위-테스트)
- 비동기 코드 테스트

#### 단위 테스트

TDD 란, 테스트가 설계를 '주도'하게 하는데 있어, 기능과 성능처럼 겉으로 드러나는 품질 속성을 검증하는 활동을 하는 것을 말합니다.

이 중에서 가장 작은 기능을 테스트 하는 것을 단위 테스트라 합니다.


---
### 성능


- 메모리 성능
- 웹 워커
- 웹 소켓

