"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[2332],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),y=r,k=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?l.createElement(k,a(a({ref:e},u),{},{components:n})):l.createElement(k,a({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81343:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const i={},a="listBuckets",o={type:"api",id:"list-buckets",unversionedId:"list-buckets",title:"listBuckets",description:"",slug:"/list-buckets",frontMatter:{},api:{tags:["UI"],operationId:"listBuckets",parameters:[{name:"filter",in:"query",required:!1,schema:{type:"string"}},{name:"favourite",in:"query",required:!1,schema:{type:"boolean"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string"},createdBy:{type:"string"},size:{type:"integer",format:"int64"},versioned:{type:"boolean"},favourite:{type:"boolean"},created:{type:"string"},createdDate:{type:"integer",format:"int64"}}}}}}}},description:"listBuckets",method:"get",path:"/api/ui/v1/meta/bucketlist",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"list Buckets",description:{type:"text/plain"},url:{path:["api","ui","v1","meta","bucketlist"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"filter",value:"<string>"},{description:{content:"",type:"text/plain"},key:"favourite",value:"<boolean>"}],variable:[]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/list-buckets",previous:{title:"getSizeOfAllBuckets",permalink:"/doc/ladon/get-size-of-all-buckets"},next:{title:"getUserActivity",permalink:"/doc/ladon/get-user-activity"}},s=[],c={toc:s},u="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listbuckets"},"listBuckets"),(0,r.kt)("p",null,"listBuckets"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"filter"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"favourite"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"createdBy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"size"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"versioned"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"favourite"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"createdDate"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int64")))))))))))))))}p.isMDXComponent=!0}}]);