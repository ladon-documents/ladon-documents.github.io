"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[8719],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),y=a,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||l;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74736:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="getUserData",i={type:"api",id:"get-user-data",unversionedId:"get-user-data",title:"getUserData",description:"",slug:"/get-user-data",frontMatter:{},api:{tags:["Usermanager"],operationId:"getUserData",parameters:[{name:"userId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",properties:{name:{type:"string"},email:{type:"string"},status:{type:"boolean"},imageUrl:{type:"string"}}}}}}},description:"getUserData",method:"get",path:"/api/usermanager/users/{userId}",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"get User Data",description:{type:"text/plain"},url:{path:["api","usermanager","users",":userId"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"userId"}]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/get-user-data",previous:{title:"Introduction",permalink:"/doc/ladon/introduction"},next:{title:"updateUser",permalink:"/doc/ladon/update-user"}},s=[],p={toc:s},u="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getuserdata"},"getUserData"),(0,a.kt)("p",null,"getUserData"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"userId"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"OK"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"email"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"status"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"imageUrl"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}c.isMDXComponent=!0}}]);