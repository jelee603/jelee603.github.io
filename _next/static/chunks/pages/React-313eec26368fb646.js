(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{3613:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/React",function(){return e(1970)}])},9852:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(5664),c=e(1664),d=e.n(c),l=e(326),u=e(2761);function a(){let n=(0,i._)(["\n  width: 100%;\n  position: fixed;\n  height: 8rem;\n  background: hsla(0, 0%, 100%, 0.8);\n  backdrop-filter: saturate(180%) blur(5px);\n  border-bottom: 1px solid black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  z-index: 3;\n"]);return a=function(){return n},n}function s(){let n=(0,i._)(["\n  width: 6rem;\n  height: 6rem;\n  margin: 8px;\n  border-radius: 50%;\n  background-image: url(/images/me.jpg);\n  background-position: 25%;\n  background-size: contain;\n  cursor: pointer;\n"]);return s=function(){return n},n}function f(){let n=(0,i._)(["\n  /* padding: 12px; */\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n"]);return f=function(){return n},n}function p(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 20px;\n"]);return p=function(){return n},n}let h=o.default.header.withConfig({componentId:"sc-c45d7c1f-0"})(a()),x=o.default.div.withConfig({componentId:"sc-c45d7c1f-1"})(s()),g=o.default.div.withConfig({componentId:"sc-c45d7c1f-2"})(f()),m=o.default.div.withConfig({componentId:"sc-c45d7c1f-3"})(p());t.Z=n=>{let{handleClickSearch:t,handleClickMenu:e}=n;return(0,r.jsxs)(h,{children:[(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)(x,{})}),(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{onClick:t,children:(0,r.jsx)(u.Z,{fontSize:"large"})}),(0,r.jsx)(g,{onClick:e,children:(0,r.jsx)(l.Z,{fontSize:"large"})})]})]})}},3039:function(n,t,e){"use strict";var i=e(5893),r=e(7294),o=e(3935);t.Z=n=>{let{children:t}=n,[e,c]=(0,r.useState)(null);return((0,r.useEffect)(()=>{c(document.getElementById("modal"))},[]),e)?(0,o.createPortal)(t,e):(0,i.jsx)(i.Fragment,{})}},724:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(1664),c=e.n(o),d=e(5664),l=e(128);function u(){let n=(0,i._)(["\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n"]);return u=function(){return n},n}function a(){let n=(0,i._)(["\n  display: inline-flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 25rem;\n  border-radius: 50px;\n  border: 1px solid #dadce0;\n  background-color: #dadce0;\n\n  div {\n    padding: 4px 4px 4px 8px;\n    line-height: 0;\n    pointer-events: auto;\n    position: relative;\n    z-index: 1;\n  }\n\n  input {\n    background: transparent;\n    border: 1px solid #dadada;\n    width: 20rem;\n  }\n  input:focus {\n    outline: none;\n  }\n"]);return a=function(){return n},n}function s(){let n=(0,i._)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  width: 100%;\n  padding: 0 20%;\n\n  @media screen and (max-width: 500px) {\n    padding: 0 5%;\n  }\n"]);return s=function(){return n},n}function f(){let n=(0,i._)(["\n  display: list-item;\n  list-style-type: none;\n  line-height: 2.5;\n  padding: 0.8rem;\n  border-bottom: 1px solid #dadada;\n  a {\n    text-decoration: none;\n    font-weight: 200;\n  }\n"]);return f=function(){return n},n}let p=d.default.section.withConfig({componentId:"sc-8475dfc-0"})(u());d.default.div.withConfig({componentId:"sc-8475dfc-1"})(a());let h=d.default.ul.withConfig({componentId:"sc-8475dfc-2"})(s()),x=d.default.li.withConfig({componentId:"sc-8475dfc-3"})(f());t.Z=n=>{let{posts:t,category:e}=n;return(0,r.jsx)(l.Z,{children:(0,r.jsx)(p,{children:(0,r.jsx)(h,{children:t.filter(n=>n.category==e).map((n,t)=>(0,r.jsx)(x,{children:(0,r.jsx)(c(),{href:"/".concat(e,"/").concat(n.slug),children:n.title})},t))})})})}},7104:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(5664),c=e(1664),d=e.n(c);function l(){let n=(0,i._)(["\n  //display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 10; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  transition: 0.1s;\n"]);return l=function(){return n},n}function u(){let n=(0,i._)(["\n  right: ",";\n  top: 0;\n  background-color: #fff;\n  border-right: 1px solid #ddd;\n  height: 100%;\n  transition: 0.3s;\n  transition-delay: 0.1s;\n\n  position: fixed;\n  text-align: center;\n  width: 260px;\n  z-index: 100;\n  border: 1px solid #ccc;\n"]);return u=function(){return n},n}function a(){let n=(0,i._)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 63px;\n  background-size: 30px auto;\n  cursor: pointer;\n\n  & > div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -15px;\n    width: 30px;\n    height: 2px;\n    background: #000;\n  }\n\n  & > div:nth-child(1) {\n    transform: rotate(45deg);\n  }\n\n  & > div:nth-child(2) {\n    transform: rotate(-45deg);\n  }\n"]);return a=function(){return n},n}function s(){let n=(0,i._)(["\n  top: 64px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  a {\n    font-size: 1.5rem;\n    text-decoration: none;\n    transition: 0.3s;\n  }\n"]);return s=function(){return n},n}function f(){let n=(0,i._)(["\n  padding: 2rem 1rem;\n  border-bottom: 1px solid #ccc;\n\n  &:hover {\n    width: inherit;\n    color: black;\n    background-color: var(--bg-element2);\n    opacity: 0.6;\n  }\n"]);return f=function(){return n},n}let p=[{href:"/React",title:"React"},{href:"/Vue",title:"Vue"},{href:"/JavaScript",title:"JavaScript"},{href:"/TypeScript",title:"TypeScript"},{href:"/HTML_CSS",title:"HTML/CSS"},{href:"/ToyProject",title:"Toy Project"},{href:"/profile",title:"About"}],h=o.default.div.withConfig({componentId:"sc-dca50c0a-0"})(l()),x=o.default.div.withConfig({componentId:"sc-dca50c0a-1"})(u(),n=>n.$isOpen?0:"-100vw"),g=o.default.div.withConfig({componentId:"sc-dca50c0a-2"})(a()),m=o.default.nav.withConfig({componentId:"sc-dca50c0a-3"})(s()),b=o.default.div.withConfig({componentId:"sc-dca50c0a-4"})(f());t.Z=n=>{let{isOpen:t,onClose:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x,{$isOpen:t,children:[(0,r.jsxs)(g,{onClick:e,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)(m,{children:p.map((n,t)=>{let{href:e,title:i}=n;return(0,r.jsx)(d(),{href:e,scroll:!0,children:(0,r.jsx)(b,{children:i})},t)})})]}),(0,r.jsx)(h,{onClick:e,style:{visibility:"".concat(t?"visible":"hidden")}})]})}},128:function(n,t,e){"use strict";var i=e(2729),r=e(5893),o=e(7294),c=e(9852),d=e(5664),l=e(7104),u=e(3039),a=e(1163);function s(){let n=(0,i._)(["\n  height: 100vh;\n"]);return s=function(){return n},n}function f(){let n=(0,i._)(["\n  padding-top: 10rem;\n"]);return f=function(){return n},n}let p=d.default.div.withConfig({componentId:"sc-bb3c9e51-0"})(s()),h=d.default.main.withConfig({componentId:"sc-bb3c9e51-1"})(f());t.Z=n=>{let{children:t}=n,[e,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{document.body.style.overflow=e?"hidden":"auto"},[e]);let d=()=>{i(!e)},s=(0,a.useRouter)();return(0,r.jsxs)(p,{children:[(0,r.jsx)(c.Z,{handleClickMenu:d,handleClickSearch:()=>{s.push("/Search")}}),(0,r.jsxs)(h,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(l.Z,{isOpen:e,onClose:d})}),t]})]})}},1970:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return o}});var i=e(5893),r=e(724),o=!0;t.default=n=>{let{posts:t,category:e}=n;return(0,i.jsx)(r.Z,{posts:t,category:e})}}},function(n){n.O(0,[0,774,888,179],function(){return n(n.s=3613)}),_N_E=n.O()}]);