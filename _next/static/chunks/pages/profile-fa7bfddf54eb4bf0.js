(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(5010)}])},9852:function(n,e,r){"use strict";var t=r(2729),i=r(5893),o=r(1720),c=r(1664),a=r.n(c);function s(){let n=(0,t._)(["\n  width: 100%;\n  position: fixed;\n  height: 8rem;\n  background: white;\n  border-bottom: 1px solid black;\n  z-index: 100;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  /* font-size: 2rem; */\n  /* line-height: 3.5em; */\n"]);return s=function(){return n},n}function l(){let n=(0,t._)(["\n  display: flex;\n  flex-direction: row;\n"]);return l=function(){return n},n}function d(){let n=(0,t._)(["\n  margin: 2rem 1rem;\n\n  a {\n    font-size: 1.5rem;\n    text-decoration: none;\n  }\n  a:hover {\n    border-bottom: 2px solid #46bd87;\n  }\n"]);return d=function(){return n},n}function u(){let n=(0,t._)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  background-image: url(/images/me.jpeg);\n  background-position: 25%;\n  background-size: contain;\n  cursor: pointer;\n"]);return u=function(){return n},n}let m=[{href:"/",title:"Home"},{href:"/React/react-condition",title:"React"},{href:"/Vue/vuejs",title:"Vue"},{href:"/JavaScript/es6",title:"JavaScript"},{href:"/TypeScript/typescript",title:"TypeScript"},{href:"/HTML_CSS/browser-operation",title:"HTML/CSS"},{href:"/ToyProject",title:"Toy Project"}],f=o.ZP.header.withConfig({componentId:"sc-45b68ef7-0"})(s()),p=o.ZP.nav.withConfig({componentId:"sc-45b68ef7-1"})(l()),h=o.ZP.div.withConfig({componentId:"sc-45b68ef7-2"})(d()),x=o.ZP.div.withConfig({componentId:"sc-45b68ef7-3"})(u());e.Z=()=>(0,i.jsx)(f,{children:(0,i.jsxs)(p,{children:[m.map((n,e)=>{let{href:r,title:t}=n;return(0,i.jsx)(h,{children:(0,i.jsx)(a(),{href:r,children:t})},e)}),(0,i.jsx)(a(),{href:"/profile",children:(0,i.jsx)(x,{})})]})})},5010:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return W}});var t=r(2729),i=r(5893),o=r(7294),c=r(1720);function a(){let n=(0,t._)(["\n  border: none;\n  border-radius: 15px;\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  height: 26px;\n  font-size: 12px;\n  padding: 10px;\n  line-height: 0.5;\n  font-weight: bold;\n  margin-right: 5px;\n"]);return a=function(){return n},n}let s=c.ZP.button.withConfig({componentId:"sc-ddca82ce-0"})(a(),n=>n.color,n=>n.$backgroundColor);var l=function(n){let{onClick:e,children:r,backgroundColor:t="#fae69e",color:o="black"}=n;return(0,i.jsx)(s,{onClick:e,$backgroundColor:t,color:o,children:r})};let d=n=>{let e;let r="black";switch(n){case"react":e="#61dafa";break;case"vue":e="#4fc08d";break;case"html5":e="#e25026",r="white";break;case"spring":e="#46cc12",r="white";break;case"asp.net":e="#dcd5f5",r="black"}return{backgroundColor:e,color:r}};function u(){let n=(0,t._)(["\n  margin: 50px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  @media screen and (max-width: 500px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);return u=function(){return n},n}function m(){let n=(0,t._)(["\n  width: 250px;\n  text-align: center;\n\n  @media screen and (max-width: 500px) {\n    width: 100%;\n  }\n"]);return m=function(){return n},n}function f(){let n=(0,t._)(["\n  margin: 10px;\n  flex: 1;\n  ul {\n    min-height: fit-content;\n    line-height: 2;\n  }\n"]);return f=function(){return n},n}function p(){let n=(0,t._)(["\n  font-weight: bold;\n  font-size: 2rem;\n"]);return p=function(){return n},n}function h(){let n=(0,t._)(["\n  color: gray;\n  font-size: 15px;\n"]);return h=function(){return n},n}function x(){let n=(0,t._)(["\n  display: flex;\n  margin: 2px;\n  justify-content: flex-end;\n  height: 40px;\n"]);return x=function(){return n},n}function g(){let n=(0,t._)(["\n  color: gray;\n  font-size: 15px;\n  padding-top: 5px;\n"]);return g=function(){return n},n}let b=c.ZP.div.withConfig({componentId:"sc-978835f1-0"})(u()),y=c.ZP.div.withConfig({componentId:"sc-978835f1-1"})(m()),j=c.ZP.div.withConfig({componentId:"sc-978835f1-2"})(f());c.ZP.div.withConfig({componentId:"sc-978835f1-3"})(p());let w=c.ZP.div.withConfig({componentId:"sc-978835f1-4"})(h()),C=c.ZP.div.withConfig({componentId:"sc-978835f1-5"})(x()),v=c.ZP.div.withConfig({componentId:"sc-978835f1-6"})(g());var k=n=>{let{title:e,date:r,contents:t,skill:c}=n.value,a=()=>{},s=n=>{let{performance:e}=n;return e.map((n,e)=>(0,i.jsx)("li",{style:{listStyle:"circle"},children:n},"item_".concat(e)))};return(0,i.jsxs)(b,{children:[(0,i.jsxs)(y,{children:[(0,i.jsx)("h1",{children:e}),(0,i.jsx)(w,{children:r})]}),(0,i.jsxs)(j,{children:[(0,i.jsx)(C,{children:c.map((n,e)=>(0,o.createElement)(l,{onClick:a,...d(n),key:e},n.toUpperCase()))}),t.map((n,e)=>{let{performance:r,summary:t,range:c,description:a}=n;return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)("h4",{children:t})}),(0,i.jsx)("div",{children:(0,i.jsx)(v,{children:a})}),(0,i.jsx)("div",{children:(0,i.jsx)(v,{children:c})}),(0,i.jsx)("ul",{children:(0,i.jsx)(s,{performance:r})})]},"content_".concat(e))})]})]})};function _(){let n=(0,t._)(["\n  width: 100%;\n  min-height: 50px;\n  border: 2px solid #ccc;\n  border-radius: 10px;\n  padding: 10px;\n"]);return _=function(){return n},n}function I(){let n=(0,t._)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  margin-bottom: 12px;\n"]);return I=function(){return n},n}function P(){let n=(0,t._)(["\n  border-left: 0.5px solid #ccc;\n  color: #b2c0cc;\n  line-height: 1.5;\n  font-size: 12px;\n"]);return P=function(){return n},n}function S(){let n=(0,t._)(["\n  display: grid;\n  grid-template-columns: repeat(96, 1fr);\n  grid-auto-flow: column;\n  grid-gap: 10px;\n  padding-top: 0.2px;\n"]);return S=function(){return n},n}function A(){let n=(0,t._)(["\n  grid-column: ",";\n  background-color: #44576c;\n  color: white;\n  cursor: text;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: center;\n  z-index: 2;\n  position: relative;\n  line-height: 2;\n\n  span {\n    font-size: 12px;\n  }\n"]);return A=function(){return n},n}let Z=Array(13).fill(0).map((n,e)=>2010+e),N=c.ZP.div.withConfig({componentId:"sc-3bf24788-0"})(_()),z=c.ZP.div.withConfig({componentId:"sc-3bf24788-1"})(I(),Z.length),E=c.ZP.div.withConfig({componentId:"sc-3bf24788-2"})(P()),O=c.ZP.div.withConfig({componentId:"sc-3bf24788-3"})(S()),T=c.ZP.div.withConfig({componentId:"sc-3bf24788-4"})(A(),n=>n.$gridColumn);var M=function(){return(0,i.jsxs)(N,{children:[(0,i.jsx)(z,{children:Z.map((n,e)=>(0,i.jsx)(E,{children:n},e))}),(0,i.jsxs)(O,{children:[(0,i.jsx)(T,{$gridColumn:"1/36",children:(0,i.jsx)("span",{children:"이토마토(3년 11개월)"})}),(0,i.jsx)(T,{$gridColumn:"36/50",children:(0,i.jsx)("span",{children:"이썸테크(1년 11개월)"})}),(0,i.jsx)(T,{$gridColumn:"50/62",children:(0,i.jsx)("span",{children:"엔쓰리엔(1년 7개월)"})}),(0,i.jsx)(T,{$gridColumn:"62/88",children:(0,i.jsx)("span",{children:"엑셈(3년 6개월)"})}),(0,i.jsx)(T,{$gridColumn:"91/95",children:(0,i.jsx)("span",{children:"미스고(7개월)"})})]})]})},$=JSON.parse('[{"title":"미스고","date":"2022.04.04 ~ 2022.10.31","contents":[{"summary":"미스고 옥션 앱 Admin 화면, 웹뷰 페이지 개발","description":"부동산 경매를 간편하게 할 수 있는 어플입니다. 어플을 관리하기 위한 Admin 화면을 개발하였습니다.","range":"2022.04 ~ 2022.10","performance":["React와 Storybook으로 프로젝트 셋업 작업 후, Git Action 배포 파이프라인과 Slack Notification 연동","기획서 검토 후, 작업기간을 산정해 팀원 1명과 데일리 스크럼을 하면서 일정 조율을 하면서 작업 진행(필요에 따라 가이드 문서 작성)","백엔드가 늦게 합류되어 우선 UI 컴포넌트 위주의 작업을 먼저 진행하고, 추후에 API 연동 작업이 쉽도록 타입스크립트 마이그레이션 작업을 진행","코드 리뷰하면서 기능 구현 혹은 추가로 필요한 사항은 이슈로 생성해서 진행","기본 컴포넌트 작업은 Storybook으로 확인하면서 기능 구현","공지사항, FAQ, PUSH 알림 화면에 등록/수정/삭제/검색 조건 필터링 작업","PUSH 알림 화면은 백엔드에서 필요한 사항을 리서치하고 간략하게 기획하여 마크업 작업 후 개발에 착수","캐시 처리가 쉽고, 유연한 처리가 가능한 React-Query를 사용하여 개발","이미지 업로드는 S3에서 제공하는 presigned url을 사용하여 업로드할 수 있는 기능 구현","공통 테이블, 캘린더 컴포넌트는 계산 함수는 유틸리티로 만들고 Jest로 테스트 코드를 작성해서 테스트를 진행","Next.js로 프로젝트 셋업 작업 후, AWS 버킷 생성해서 배포 파이프라인 구성","앱 개발자(안드로이드,iOS)들과 협업해서 이벤트 화면에서 조건에 따라 하이퍼링크 연동될 수 있게 웹뷰 페이지 개발","Naver Map API와 지적도 데이터를 활용해 지도에 레이어 표시되도록 프로토타입 작업"]}],"skill":["react","typescript","html5"]},{"title":"엑셈","date":"2018.04.09 ~ 2021.09.30","contents":[{"summary":"CloudMOA SaaS 프로모션 회원가입, Admin 화면 개발","description":"CloudMOA 제품이 SaaS 기반으로 확장되면서 외부에 제품을 소개하는 프로모션 신청 화면입니다. 신청과 승인 관련한 Admin 화면을 개발하였습니다.","range":"2021.03 ~ 2021.09","performance":["React와 Typescript로 프로젝트 셋업 작업, 디자인은 Material-UI를 커스텀해서 사용할 수 있도록 스타일 작업","프로모션 신청 가입 시, 유효성 체크 후 에러 메시지를 띄울 수 있도록 유틸리티 작업","API 오류시, 발생하는 메시지가 표출될 수 있도록 전역 모달 팝업 작업","Admin 가입 회원의 조건별 검색할 수 있도록 UI와 조건 필터링 작업","Admin 가입 회원 중 가입 승인 시에 발송할 메일 문구를 수정할 수 있는 기능 구현"]},{"summary":"CloudMOA 모니터링 분석, Admin 화면 개발","description":"CloudMOA는 회사에서 개발한 쿠버네티스 관제 솔루션입니다. 클라우드의 상태를 모니터링하고, 이상 및 장애를 감지하여 사용자에게 대시보드 형태로 제공합니다","range":"2019.01 ~ 2021.02","performance":["Vue로 프로젝트 셋업 작업, 디자인은 Element-UI를 커스텀해서 사용할 수 있도록 스타일 작업","eChart 라이브러리를 이용해 제공하는 차트를 옵션별로 사용할 수 있도록 차트 공통 컴포넌트 개발","D3 라이브러리를 이용해 타임라인과 같은 2가지 이상의 기능을 하는 차트 컴포넌트 개발","쿠버네티스 모니터링에 필요한 조건별(Pod, Node) 검색 조회 필터링 작업","분석화면 기획 및 벤치마킹하면서 와이어프레임으로 작업","분석(Jobs TimeLine, Alert History)화면에 커스텀 차트에 검색 필터링 작업","서비스 트레이싱 관리에서 설정 기능 구현","대시보드에 차트 컴포넌트가 많아질 경우, 성능 이슈가 있어 webWorker를 사용하여 성능 개선"]},{"summary":"InterMax 성능관리 화면 유지보수","description":"InterMax 제품은 어플리케이션 성능 관리 솔루션입니다. 애플리케이션의 상태를 모니터링하고, 이상 및 장애를 감지하여 사용자에게 대시 보드 형태로 제공합니다.","range":"2018.04 ~ 2018.12","performance":["ExtJs로 개발된 제품을 유지보수 업무를 담당"]}],"skill":["react","typescript","vue","html5"]},{"title":"엔쓰리엔","date":"2016.09.19 ~ 2018.04.06","contents":[{"summary":"Wizeye 2.0 모듈 개발","description":"Wizeye 2.0는 N3N에서 개발한 빅데이터 시각화 솔루션입니다. 기존 상품 이름을 가져가되, 컨셉을 달리하여 자체 개발한 데이터엔진을 이용해 시계열 데이터를 효과적으로 표기할 수 있도록 개발되었습니다.","range":"2017.03 ~ 2018.03","performance":["React 15 리뉴얼 개발에 참여","chart.js 라이브러리를 이용해 대시보드 차트 컴포넌트 작업, 옵션 설정 기능 구현","websocket 호출로 대시보드 작업","Leaflet 라이브러리를 이용해 자체 개발된 맵플레이어 모듈 개발 유지보수"]},{"summary":"Wizeye 1.5.4 신규화면 개발과 유지보수","description":"Wizeye 1.5.4는 N3N에서 개발한 빅데이터 시각화 솔루션입니다. 신규 화면 개발과 솔루션 판매를 위한 모듈 개발 업무를 수행했습니다.","range":"2016.09 ~ 2017.02","performance":["Meteor.js로 개발된 제품에 요익손익계산서/계획대비실적 화면을 개발하고, 차트와 테이블은 jQuery를 이용해 재사용할 수 있도록 개발"]}],"skill":["react","typescript","html5"]}]'),D=JSON.parse('[{"title":"이썸테크","date":"2014.11 ~ 2016.07","summary":"","contents":[{"summary":"삼성 CELLO 로지텍","range":"2016.04 ~ 2016.07","performance":["G-FOS 수신 연계 웹서비스 개발에 참여","G-FOS 송신 연계 웹서비스 개발에 참여","로깅 웹화면 개발 (자체 솔루션 AnyFramework 사용)"]},{"summary":"이썸테크 EDI 연계","range":"2015.05 ~ 2016.03","performance":["자체 개발 솔루션으로 국세청 국종망 EDI 연계","사내 기존 화면 유지보수 (수행활동&연차관리)"]},{"summary":"농협유통 VAN 시스템","range":"2015.03 ~ 2015.04","performance":["재고/판매/시장분석에 관한 화면템플릿, 클래스 설계서 작성"]},{"summary":"이마트 실시간 매출정보 서비스","range":"2014.11 ~ 2015.02","performance":["제품(appetizer) 프레임워크를 활용한 점포/상품 매출현황 웹화면 개발"]}],"skill":["spring"]},{"title":"이토마토","date":"2010.12 ~ 2014.10","summary":"","contents":[{"summary":"모의투자 서비스","range":"2014.09 ~ 2014.10","performance":["주식가상체결 서버DB통합작업","서버환경 통합구축 및 서비스이관작업"]},{"summary":"부동산토마토 서비스","range":"2014.04 ~ 2014.10","performance":["주소체계 변경으로 DB매칭 설계 및 개발","외부 제휴사 데이터 마이그레이션- 사이트 고도화 개발 및 런칭"]},{"summary":"토마토 모의투자 서비스","range":"2013.10 ~ 2014.01","performance":["주식,ETF가상체결 TCP 서비스 프로그램 운영관리","선물가상체결 리그 생성으로 신규DB연동, 신규 참가신청 웹서비스 개발"]},{"summary":"증권통 종목관리","range":"2013.07 ~ 2013.10","performance":["증권통 종목 API를 이용한 구독서비스 고객 웹화면 개발","증권통과 이토마토 ID통합 SSO 개발"]},{"summary":"토마토 파트너 서비스","range":"2013.06 ~ 2013.08","performance":["관리자 사이트 유지보수","관리종목 관리자 화면 개발"]},{"summary":"투자 자문 서비스","range":"2013.02 ~ 2013.06","performance":["녹화관리자, 결제현황, 통계현황 웹화면 개발","녹화방송 외부API를 이용한 웹화면 개발","웹사이트 메인 리뉴얼 개발"]},{"summary":"이토마토 서비스","range":"2012.01 ~ 2011.06","performance":["이토마토 메인 리뉴얼 .NET 개발","메인화면 리스트, 관리자화면 리스트 쿼리 튜닝","녹화방송 오류관련한 원인해결 및 처리"]},{"summary":"토마토 모의투자 서비스","range":"2011.11 ~ 2011.12","performance":["사이트 개발 및 유지보수","웹서비스를 이용한 참가신청 서비스연동","참가자현황, 참가자순위, 참가자수익률 화면 개발"]},{"summary":"뉴스토마토 서비스","range":"2010.12 ~ 2013.01","performance":["사이트&모바일사이트 개발 및 유지보수","뉴스전송 소켓서비스 유지보수, 신규 소켓서비스 개발","기자통계 윈도우서비스 프로그램 관리 및 유지보수","뉴스 카테고리와 레벨관리, 기사등록, 파일업로드 관리자화면개발 및 유지보수","뉴스 녹화영상 파일관리, 썸네일이미지 윈도우서비스 프로그램 관리"]}],"skill":["asp.net"]}]');let F=n=>{let{primary:e=!1,size:r="medium",backgroundColor:t,label:o,...c}=n;return(0,i.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(r),e?"storybook-button--primary":"storybook-button--secondary"].join(" "),style:{backgroundColor:t},...c,children:o})};var J=r(9852);function U(){let n=(0,t._)(["\n  height: 100%;\n  overflow-y: auto;\n  padding-top: 10rem;\n"]);return U=function(){return n},n}function H(){let n=(0,t._)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10rem;\n  @media screen and (max-width: 500px) {\n    display: none;\n  }\n"]);return H=function(){return n},n}let L=c.ZP.section.withConfig({componentId:"sc-6b40ee52-0"})(U()),R=c.ZP.div.withConfig({componentId:"sc-6b40ee52-1"})(H());var W=()=>{let[n,e]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J.Z,{}),(0,i.jsxs)(L,{children:[(0,i.jsx)(R,{children:(0,i.jsx)(M,{})}),(0,i.jsx)(R,{children:(0,i.jsxs)("p",{children:["간단 소개글 ",(0,i.jsx)("br",{}),"개발자도 좋은 제품을 만들기 위해 고민해야한다고 생각합니다. ",(0,i.jsx)("br",{}),"팀원들과 스크럼 형태로 협업해서 일 하는 것을 좋아하고, 작고 빠르게 만들어서 보여주는 것을 좋아합니다. ",(0,i.jsx)("br",{}),"테스트 주도 개발을 하려고 노력하고 있습니다."]})}),$.map((n,e)=>(0,i.jsx)(k,{value:n},e)),(0,i.jsx)("div",{style:{width:"100%",textAlign:"center",marginBottom:"20px"},children:!n&&(0,i.jsx)(F,{onClick:()=>{e(!n)},label:"더보기"})}),n&&D.map((n,e)=>(0,i.jsx)(k,{value:n},e))]})]})}}},function(n){n.O(0,[23,774,888,179],function(){return n(n.s=6896)}),_N_E=n.O()}]);