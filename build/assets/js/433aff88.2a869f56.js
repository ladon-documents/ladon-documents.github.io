"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[5516],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(g,l(l({ref:n},d),{},{components:t})):o.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(58168),r=(t(96540),t(15680));const a={},l="Custom Styles",s={unversionedId:"Frontend Concepts/CustomStyles",id:"Frontend Concepts/CustomStyles",title:"Custom Styles",description:"Concepts",source:"@site/docs/Frontend Concepts/CustomStyles.md",sourceDirName:"Frontend Concepts",slug:"/Frontend Concepts/CustomStyles",permalink:"/build/docs/Frontend Concepts/CustomStyles",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend Concepts/CustomStyles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Config concepts",permalink:"/build/docs/Frontend Concepts/ConfigConcepts"},next:{title:"Global error handling",permalink:"/build/docs/Frontend Concepts/Overview/ErrorHandling"}},i={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Custom CSS",id:"custom-css",level:2},{value:"Usage",id:"usage",level:4},{value:"Components",id:"components",level:2},{value:"Ladon Spinner",id:"ladon-spinner",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Ladon Context Menu",id:"ladon-context-menu",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Register events and handle callbacks",id:"register-events-and-handle-callbacks",level:5}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"custom-styles"},"Custom Styles"),(0,r.yg)("h2",{id:"concepts"},"Concepts"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Theme for your Ladon instance"),(0,r.yg)("li",{parentName:"ul"},"Holds global components such as spinner or alerts"),(0,r.yg)("li",{parentName:"ul"},"Customizations are made in the ",(0,r.yg)("inlineCode",{parentName:"li"},"ladon-theme-custom.css")," located in ",(0,r.yg)("inlineCode",{parentName:"li"},"config")," and get copied to ",(0,r.yg)("inlineCode",{parentName:"li"},"_system/etc/ui/mind"))),(0,r.yg)("h2",{id:"custom-css"},"Custom CSS"),(0,r.yg)("p",null,"Is located in ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," folder and available for customization of your theme."),(0,r.yg)("h4",{id:"usage"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},":root {\n  --ladon-primary: #FF00FF;\n  --ladon-theme-black: #414141;\n  --ladon-theme-white: #ffffff;\n  ...\n}\n\nmf-ladon-main-nav #logo {\n  --ladon-theme-logo-asset: url(/ui/root/assets/your-logo.png);\n}\n")),(0,r.yg)("h2",{id:"components"},"Components"),(0,r.yg)("h3",{id:"ladon-spinner"},"Ladon Spinner"),(0,r.yg)("h4",{id:"usage-1"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { LadonSpinner } from "@mind/mf-ladon-styles";\nLadonSpinner.show();\nLadonSpinner.hide();\n')),(0,r.yg)("h3",{id:"ladon-context-menu"},"Ladon Context Menu"),(0,r.yg)("h4",{id:"usage-2"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { LadonContextMenu } from "@mind/mf-ladon-styles";\nLadonContextMenu.init(document.querySelector("div#test"));\n')),(0,r.yg)("h5",{id:"register-events-and-handle-callbacks"},"Register events and handle callbacks"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'function onContextMenu(event) {\n    event.stopImmediatePropagation();\n    LadonContextMenu.addItem(itemConfig, bucket);\n}\n\nfunction onContextItemClick(event) {\n    event.stopImmediatePropagation();\n    // performe request here for example\n}\n\ndocument.addEventListener("ladon-context-menu", this.onContextMenu, false);\ndocument.addEventListener("ladon-context-item", this.onContextItemClick, false);\n')))}p.isMDXComponent=!0}}]);