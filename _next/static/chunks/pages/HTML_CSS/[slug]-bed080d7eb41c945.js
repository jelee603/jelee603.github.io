(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{9199:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/HTML_CSS/[slug]",function(){return e(3492)}])},9852:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(5664),c=e(1664),d=e.n(c),l=e(326),u=e(2761);function s(){let n=(0,i._)(["\n  width: 100%;\n  position: fixed;\n  height: 8rem;\n  background: hsla(0, 0%, 100%, 0.8);\n  backdrop-filter: saturate(180%) blur(5px);\n  border-bottom: 1px solid black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  z-index: 3;\n"]);return s=function(){return n},n}function f(){let n=(0,i._)(["\n  width: 6rem;\n  height: 6rem;\n  margin: 8px;\n  border-radius: 50%;\n  background-image: url(/images/me.jpg);\n  background-position: 25%;\n  background-size: contain;\n  cursor: pointer;\n"]);return f=function(){return n},n}function a(){let n=(0,i._)(["\n  /* padding: 12px; */\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n"]);return a=function(){return n},n}function h(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px;\n"]);return h=function(){return n},n}let p=o.ZP.header.withConfig({componentId:"sc-c45d7c1f-0"})(s()),x=o.ZP.div.withConfig({componentId:"sc-c45d7c1f-1"})(f()),g=o.ZP.div.withConfig({componentId:"sc-c45d7c1f-2"})(a()),m=o.ZP.div.withConfig({componentId:"sc-c45d7c1f-3"})(h());t.Z=n=>{let{handleClickSearch:t,handleClickMenu:e}=n;return(0,r.jsxs)(p,{children:[(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)(x,{})}),(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{onClick:t,children:(0,r.jsx)(u.Z,{fontSize:"large"})}),(0,r.jsx)(g,{onClick:e,children:(0,r.jsx)(l.Z,{fontSize:"large"})})]})]})}},3039:function(n,t,e){"use strict";var i=e(5893),r=e(7294),o=e(3935);t.Z=n=>{let{children:t}=n,[e,c]=(0,r.useState)(null);return((0,r.useEffect)(()=>{c(document.getElementById("modal"))},[]),e)?(0,o.createPortal)(t,e):(0,i.jsx)(i.Fragment,{})}},7104:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(5664),c=e(1664),d=e.n(c);function l(){let n=(0,i._)(["\n  //display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 10; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  transition: 0.1s;\n"]);return l=function(){return n},n}function u(){let n=(0,i._)(["\n  right: ",";\n  top: 0;\n  background-color: #fff;\n  border-right: 1px solid #ddd;\n  height: 100%;\n  transition: 0.3s;\n  transition-delay: 0.1s;\n\n  position: fixed;\n  text-align: center;\n  width: 260px;\n  z-index: 100;\n  border: 1px solid #ccc;\n"]);return u=function(){return n},n}function s(){let n=(0,i._)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 63px;\n  background-size: 30px auto;\n  cursor: pointer;\n\n  & > div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -15px;\n    width: 30px;\n    height: 2px;\n    background: #000;\n  }\n\n  & > div:nth-child(1) {\n    transform: rotate(45deg);\n  }\n\n  & > div:nth-child(2) {\n    transform: rotate(-45deg);\n  }\n"]);return s=function(){return n},n}function f(){let n=(0,i._)(["\n  top: 64px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  a {\n    font-size: 1.5rem;\n    text-decoration: none;\n    transition: 0.3s;\n  }\n"]);return f=function(){return n},n}function a(){let n=(0,i._)(["\n  padding: 2rem 1rem;\n  border-bottom: 1px solid #ccc;\n\n  &:hover {\n    width: inherit;\n    color: black;\n    background-color: #61dafb;\n    opacity: 0.6;\n  }\n"]);return a=function(){return n},n}let h=[{href:"/React",title:"React"},{href:"/Vue",title:"Vue"},{href:"/JavaScript",title:"JavaScript"},{href:"/TypeScript",title:"TypeScript"},{href:"/HTML_CSS",title:"HTML/CSS"},{href:"/ToyProject",title:"Toy Project"},{href:"/profile",title:"About"}],p=o.ZP.div.withConfig({componentId:"sc-7eaf7d7c-0"})(l()),x=o.ZP.div.withConfig({componentId:"sc-7eaf7d7c-1"})(u(),n=>n.$isOpen?0:"-100vw"),g=o.ZP.div.withConfig({componentId:"sc-7eaf7d7c-2"})(s()),m=o.ZP.nav.withConfig({componentId:"sc-7eaf7d7c-3"})(f()),w=o.ZP.div.withConfig({componentId:"sc-7eaf7d7c-4"})(a());t.Z=n=>{let{isOpen:t,onClose:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x,{$isOpen:t,children:[(0,r.jsxs)(g,{onClick:e,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)(m,{children:h.map((n,t)=>{let{href:e,title:i}=n;return(0,r.jsx)(d(),{href:e,scroll:!0,children:(0,r.jsx)(w,{children:i})},t)})})]}),(0,r.jsx)(p,{onClick:e,style:{visibility:"".concat(t?"visible":"hidden")}})]})}},5750:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(7294),c=e(9852),d=e(5664),l=e(7104),u=e(3039),s=e(1163);function f(){let n=(0,i._)(["\n  height: 100vh;\n"]);return f=function(){return n},n}function a(){let n=(0,i._)(["\n  /* padding-left: 36rem; */\n\n  /* @media screen and (max-width: 500px) {\n    padding: 0;\n  } */\n"]);return a=function(){return n},n}let h=d.ZP.div.withConfig({componentId:"sc-753d6efc-0"})(f()),p=d.ZP.main.withConfig({componentId:"sc-753d6efc-1"})(a());t.Z=n=>{let{posts:t,category:e,children:i}=n,[d,f]=(0,o.useState)(!1);(0,o.useEffect)(()=>{document.body.style.overflow=d?"hidden":"auto"},[d]);let a=()=>{f(!d)},x=(0,s.useRouter)();return(0,r.jsxs)(h,{children:[(0,r.jsx)(c.Z,{handleClickMenu:a,handleClickSearch:()=>{x.push("/Search")}}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(l.Z,{isOpen:d,onClose:a})}),(0,r.jsx)(p,{children:i})]})}},3492:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return x}});var i=e(2729),r=e(5893),o=e(5664),c=e(5750);function d(){let n=(0,i._)(["\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin: 0 20%;\n\n  @media screen and (max-width: 500px) {\n    margin: 0 5%;\n  }\n"]);return d=function(){return n},n}function l(){let n=(0,i._)(["\n  width: 100%;\n  text-align: center;\n  color: black;\n  font-size: 4rem;\n"]);return l=function(){return n},n}function u(){let n=(0,i._)(["\n  width: 100%;\n  text-align: center;\n"]);return u=function(){return n},n}function s(){let n=(0,i._)([""]);return s=function(){return n},n}let f=o.ZP.section.withConfig({componentId:"sc-93fd7779-0"})(d()),a=o.ZP.h1.withConfig({componentId:"sc-93fd7779-1"})(l()),h=o.ZP.h5.withConfig({componentId:"sc-93fd7779-2"})(u()),p=o.ZP.article.withConfig({componentId:"sc-93fd7779-3"})(s());var x=!0;t.default=n=>{let{posts:t,post:e}=n;return(0,r.jsx)(c.Z,{posts:t,category:"HTML_CSS",children:(0,r.jsxs)(f,{children:[(0,r.jsx)(a,{children:e.title}),(0,r.jsx)(h,{children:e.date}),(0,r.jsx)(p,{dangerouslySetInnerHTML:{__html:e.content}})]})})}}},function(n){n.O(0,[238,774,888,179],function(){return n(n.s=9199)}),_N_E=n.O()}]);