(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{2761:function(n,t,e){"use strict";var i=e(4836);t.Z=void 0;var r=i(e(4938)),o=e(5893),c=(0,r.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=c},3613:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/React",function(){return e(1970)}])},9852:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(5664),c=e(1664),d=e.n(c),l=e(326);function s(){let n=(0,i._)(["\n  width: 100%;\n  position: fixed;\n  height: 8rem;\n  background: hsla(0, 0%, 100%, 0.8);\n  backdrop-filter: saturate(180%) blur(5px);\n  border-bottom: 1px solid black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  z-index: 3;\n"]);return s=function(){return n},n}function a(){let n=(0,i._)(["\n  width: 6rem;\n  height: 6rem;\n  margin: 8px;\n  border-radius: 50%;\n  background-image: url(/images/me.jpg);\n  background-position: 25%;\n  background-size: contain;\n  cursor: pointer;\n"]);return a=function(){return n},n}function u(){let n=(0,i._)(["\n  padding: 2rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n"]);return u=function(){return n},n}let f=o.ZP.header.withConfig({componentId:"sc-42370782-0"})(s()),p=o.ZP.div.withConfig({componentId:"sc-42370782-1"})(a()),h=o.ZP.div.withConfig({componentId:"sc-42370782-2"})(u());t.Z=n=>{let{onClick:t}=n;return(0,r.jsxs)(f,{children:[(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)(p,{})}),(0,r.jsx)(h,{onClick:t,children:(0,r.jsx)(l.Z,{fontSize:"large"})})]})}},3039:function(n,t,e){"use strict";var i=e(5893),r=e(7294),o=e(3935);t.Z=n=>{let{children:t}=n,[e,c]=(0,r.useState)(null);return((0,r.useEffect)(()=>{c(document.getElementById("modal"))},[]),e)?(0,o.createPortal)(t,e):(0,i.jsx)(i.Fragment,{})}},724:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(7294),c=e(1664),d=e.n(c),l=e(5664),s=e(2761),a=e(128);function u(){let n=(0,i._)(["\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n"]);return u=function(){return n},n}function f(){let n=(0,i._)(["\n  display: inline-flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 25rem;\n  border-radius: 50px;\n  border: 1px solid #dadce0;\n  background-color: #dadce0;\n\n  div {\n    padding: 4px 4px 4px 8px;\n    line-height: 0;\n    pointer-events: auto;\n    position: relative;\n    z-index: 1;\n  }\n\n  input {\n    background: transparent;\n    border: 1px solid #dadada;\n    width: 20rem;\n  }\n  input:focus {\n    outline: none;\n  }\n"]);return f=function(){return n},n}function p(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  width: 100%;\n  padding: 0 20%;\n  /* min-width: 30rem; */\n"]);return p=function(){return n},n}function h(){let n=(0,i._)(["\n  display: list-item;\n  list-style-type: none;\n  line-height: 2.5;\n  padding: 0.8rem;\n  border-bottom: 1px solid #dadada;\n  /* width: 40rem; */\n  a {\n    text-decoration: none;\n    font-weight: 200;\n  }\n"]);return h=function(){return n},n}let g=l.ZP.section.withConfig({componentId:"sc-d38cf31-0"})(u()),x=l.ZP.div.withConfig({componentId:"sc-d38cf31-1"})(f()),m=l.ZP.ul.withConfig({componentId:"sc-d38cf31-2"})(p()),b=l.ZP.li.withConfig({componentId:"sc-d38cf31-3"})(h());t.Z=n=>{let{posts:t,category:e}=n,[i,c]=(0,o.useState)("");return(0,r.jsx)(a.Z,{children:(0,r.jsxs)(g,{children:[(0,r.jsxs)(x,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{fontSize:"large"})}),(0,r.jsx)("input",{type:"string",onKeyDown:n=>{c(n.currentTarget.value)},placeholder:"Search..."})]}),(0,r.jsx)(m,{children:t.filter(n=>n.category==e).filter(n=>""!==n.title&&n.title.toLowerCase().includes(i)).map((n,t)=>(0,r.jsx)(b,{children:(0,r.jsx)(d(),{href:"/".concat(e,"/").concat(n.slug),children:n.title})},t))})]})})}},7104:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(5664),c=e(1664),d=e.n(c);function l(){let n=(0,i._)(["\n  //display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 10; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  transition: 0.1s;\n"]);return l=function(){return n},n}function s(){let n=(0,i._)(["\n  right: -100vw;\n  top: 0;\n  background-color: #fff;\n  border-right: 1px solid #ddd;\n  height: 100%;\n  transition: 0.3s;\n  transition-delay: 0.1s;\n  /* margin-right: -261px; */\n\n  position: absolute;\n  text-align: center;\n  /* top: 0; */\n  /* top: 0; */\n  /* transform: translate(0);\n  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms; */\n  /* transition-duration: 0.3s;\n  transition-timing-function: ease-in; */\n  /* transition: 0.5s; */\n  /* transition: all 0.25s ease;\n  transform: translateX(50%); */\n  width: 260px;\n  z-index: 100;\n  border: 1px solid #ccc;\n"]);return s=function(){return n},n}function a(){let n=(0,i._)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 63px;\n  background-size: 30px auto;\n  cursor: pointer;\n\n  & > div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -15px;\n    width: 30px;\n    height: 2px;\n    background: #000;\n  }\n\n  & > div:nth-child(1) {\n    transform: rotate(45deg);\n  }\n\n  & > div:nth-child(2) {\n    transform: rotate(-45deg);\n  }\n"]);return a=function(){return n},n}function u(){let n=(0,i._)(["\n  top: 64px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  a {\n    font-size: 1.5rem;\n    text-decoration: none;\n    transition: 0.3s;\n  }\n"]);return u=function(){return n},n}function f(){let n=(0,i._)(["\n  padding: 2rem 1rem;\n  border-bottom: 1px solid #ccc;\n\n  &:hover {\n    width: inherit;\n    color: black;\n    background-color: #61dafb;\n    opacity: 0.6;\n  }\n"]);return f=function(){return n},n}let p=[{href:"/React",title:"React"},{href:"/Vue",title:"Vue"},{href:"/JavaScript",title:"JavaScript"},{href:"/TypeScript",title:"TypeScript"},{href:"/HTML_CSS",title:"HTML/CSS"},{href:"/ToyProject",title:"Toy Project"},{href:"/profile",title:"About"}],h=o.ZP.div.withConfig({componentId:"sc-61f25770-0"})(l()),g=o.ZP.div.withConfig({componentId:"sc-61f25770-1"})(s()),x=o.ZP.div.withConfig({componentId:"sc-61f25770-2"})(a()),m=o.ZP.nav.withConfig({componentId:"sc-61f25770-3"})(u()),b=o.ZP.div.withConfig({componentId:"sc-61f25770-4"})(f());t.Z=n=>{let{isOpen:t,onClose:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g,{style:{right:"".concat(t?"0vw":"-100vw")},children:[(0,r.jsxs)(x,{onClick:e,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)(m,{children:p.map((n,t)=>{let{href:e,title:i}=n;return(0,r.jsx)(d(),{href:e,scroll:!0,children:(0,r.jsx)(b,{children:i})},t)})})]}),(0,r.jsx)(h,{onClick:e,style:{visibility:"".concat(t?"visible":"hidden")}})]})}},128:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(7294),c=e(9852),d=e(5664),l=e(7104),s=e(3039);function a(){let n=(0,i._)(["\n  height: 100vh;\n"]);return a=function(){return n},n}function u(){let n=(0,i._)(["\n  padding-top: 10rem;\n"]);return u=function(){return n},n}let f=d.ZP.div.withConfig({componentId:"sc-628e180d-0"})(a()),p=d.ZP.main.withConfig({componentId:"sc-628e180d-1"})(u());t.Z=n=>{let{children:t}=n,[e,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{document.body.style.overflowY=e?"hidden":"auto"},[e]);let d=()=>{i(!e)};return(0,r.jsxs)(f,{children:[(0,r.jsx)(c.Z,{onClick:d}),(0,r.jsxs)(p,{children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.Z,{isOpen:e,onClose:d})}),t]})]})}},1970:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return o}});var i=e(5893),r=e(724),o=!0;t.default=n=>{let{posts:t,category:e}=n;return(0,i.jsx)(r.Z,{posts:t,category:e})}}},function(n){n.O(0,[188,774,888,179],function(){return n(n.s=3613)}),_N_E=n.O()}]);