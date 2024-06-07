"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[6372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),y=l,f=u["".concat(s,".").concat(y)]||u[y]||c[y]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},42849:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={},i="updateCredentials",o={type:"api",id:"update-credentials",unversionedId:"update-credentials",title:"updateCredentials",description:"",slug:"/update-credentials",frontMatter:{},api:{tags:["Usermanager"],operationId:"updateCredentials",parameters:[{name:"userId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{oldPW:{type:"string"},newPW:{type:"string"}}}}},required:!0},responses:{200:{description:"OK"}},description:"updateCredentials",method:"put",path:"/api/usermanager/user/{userId}/credentials",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],jsonRequestBodyExample:{oldPW:"string",newPW:"string"},info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"update Credentials",description:{type:"text/plain"},url:{path:["api","usermanager","user",":userId","credentials"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"userId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'{\n    "oldPW": "<string>",\n    "newPW": "<string>"\n}'}}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/update-credentials",previous:{title:"deleteUser",permalink:"/doc/ladon/delete-user"},next:{title:"setCredentials",permalink:"/doc/ladon/set-credentials"}},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"updatecredentials"},"updateCredentials"),(0,l.kt)("p",null,"updateCredentials"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"userId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"oldPW"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"newPW"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"OK"))),(0,l.kt)("div",null))))))}u.isMDXComponent=!0}}]);