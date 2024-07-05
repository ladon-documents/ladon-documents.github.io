"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[4021],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const i={},a="Microfrontends",c={unversionedId:"Frontend Concepts/Overview/Microfrontend",id:"Frontend Concepts/Overview/Microfrontend",title:"Microfrontends",description:"Concepts",source:"@site/docs/Frontend Concepts/Overview/Microfrontend.md",sourceDirName:"Frontend Concepts/Overview",slug:"/Frontend Concepts/Overview/Microfrontend",permalink:"/build/docs/Frontend Concepts/Overview/Microfrontend",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend Concepts/Overview/Microfrontend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Global event handling",permalink:"/build/docs/Frontend Concepts/Overview/EventHandling"},next:{title:"Routing",permalink:"/build/docs/Frontend Concepts/Overview/Routing"}},l={},s=[{value:"Concepts",id:"concepts",level:2},{value:"Architecture overview",id:"architecture-overview",level:2},{value:"Concepts",id:"concepts-1",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Picture",id:"picture",level:2}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"microfrontends"},"Microfrontends"),(0,o.yg)("h2",{id:"concepts"},"Concepts"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"based on single-spa framework"),(0,o.yg)("li",{parentName:"ul"},"A microfrontend is deployable and installable Component in runtime."),(0,o.yg)("li",{parentName:"ul"},"There are different types of microfrontends such as application, parcel or utility modules."),(0,o.yg)("li",{parentName:"ul"},"Every microfrontend can consume and interact with other microfrontends.")),(0,o.yg)("h2",{id:"architecture-overview"},"Architecture overview"),(0,o.yg)("p",null,"TODO: add picture with description"),(0,o.yg)("h1",{id:"ladon-root-config"},"Ladon Root Config"),(0,o.yg)("h2",{id:"concepts-1"},"Concepts"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The Ladon Root Config is the main Microfrontend and therefore a must have dependency to be installed."),(0,o.yg)("li",{parentName:"ul"},"Permissions and access is checked via the ",(0,o.yg)("inlineCode",{parentName:"li"},"LadonUrlGuard Class")),(0,o.yg)("li",{parentName:"ul"},"Available WebComponents are injected into the html file. For this Ladon is checking all files located under  ",(0,o.yg)("inlineCode",{parentName:"li"},"_ui/*/wc-*/dist/wc-*.js")," "),(0,o.yg)("li",{parentName:"ul"},"For more information about the web components concepts read the docs.")),(0,o.yg)("h2",{id:"known-issues"},"Known Issues"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"TODO")),(0,o.yg)("h2",{id:"picture"},"Picture"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"TODO add picture")))}p.isMDXComponent=!0}}]);