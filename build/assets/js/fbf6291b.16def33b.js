"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[2275],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),y=a,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},10206:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},i="setFavorite",o={type:"api",id:"set-favorite",unversionedId:"set-favorite",title:"setFavorite",description:"",slug:"/set-favorite",frontMatter:{},api:{tags:["Filemanager"],operationId:"setFavorite",parameters:[{name:"bucket",in:"path",required:!0,schema:{type:"string"}},{name:"id",in:"query",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",additionalProperties:{type:"object"}}}}}},description:"setFavorite",method:"post",path:"/api/filemanager/{bucket}/favorite",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"set Favorite",description:{type:"text/plain"},url:{path:["api","filemanager",":bucket","favorite"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) ",type:"text/plain"},key:"id",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"bucket"}]},method:"POST"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/set-favorite",previous:{title:"makedir",permalink:"/doc/ladon/makedir"},next:{title:"unmarkFavorite",permalink:"/doc/ladon/unmark-favorite"}},p=[],s={toc:p},c="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setfavorite"},"setFavorite"),(0,a.kt)("p",null,"setFavorite"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"bucket"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"OK"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," object")))))))))))}u.isMDXComponent=!0}}]);