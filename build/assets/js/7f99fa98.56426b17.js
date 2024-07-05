"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[2262],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(58168),o=(n(96540),n(15680));const a={},c=void 0,u={unversionedId:"Backend Concepts/EventBus",id:"Backend Concepts/EventBus",title:"EventBus",description:"Not implemented",source:"@site/docs/Backend Concepts/EventBus.md",sourceDirName:"Backend Concepts",slug:"/Backend Concepts/EventBus",permalink:"/build/docs/Backend Concepts/EventBus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Backend Concepts/EventBus.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/build/docs/Backend Concepts/Encryption"},next:{title:"Ladon Document Storage",permalink:"/build/docs/Backend Concepts/LadonDocumentStorage"}},l={},i=[],p={toc:i},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Not implemented"),(0,o.yg)("p",null,"Every action (create, update, delete) should create an event."),(0,o.yg)("p",null,"Issues:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Cluster wide event propagation"),(0,o.yg)("li",{parentName:"ul"},"Performance"),(0,o.yg)("li",{parentName:"ul"},"Event order"),(0,o.yg)("li",{parentName:"ul"},"Frontend propagation")))}d.isMDXComponent=!0}}]);