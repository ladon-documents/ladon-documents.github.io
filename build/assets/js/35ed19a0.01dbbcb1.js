"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[4345],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),y=r,k=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?l.createElement(k,i(i({ref:e},c),{},{components:n})):l.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},47766:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={},i="listDocuments",o={type:"api",id:"list-documents",unversionedId:"list-documents",title:"listDocuments",description:"",slug:"/list-documents",frontMatter:{},api:{tags:["Documents"],operationId:"listDocuments",parameters:[{name:"bucket",in:"path",required:!0,schema:{type:"string"}},{name:"limit",in:"query",required:!1,schema:{type:"integer",format:"int64",default:1e3},example:1e3},{name:"page",in:"query",required:!1,schema:{type:"integer",format:"int32",default:1},example:1},{name:"prefix",in:"query",required:!1,schema:{type:"string"}},{name:"orderby",in:"query",required:!1,schema:{type:"string"},example:"name, created, name_desc, created_asc"},{name:"showAllVersions",in:"query",required:!1,schema:{type:"boolean"}},{name:"currentFolder",in:"query",required:!1,schema:{type:"boolean"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{"content-type":{type:"string"},created:{type:"string"},"last-modified":{type:"string"},bucket:{type:"string"},key:{type:"string"},path:{type:"string"},etag:{type:"string"},metadata:{type:"object",properties:{empty:{type:"boolean"}},additionalProperties:{type:"string"}},owner:{type:"string"},size:{type:"integer",format:"int64"},version:{type:"string"}}}}}}}},description:"listDocuments",method:"get",path:"/api/rest/v1/meta/buckets/{bucket}/documentlist",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"list Documents",description:{type:"text/plain"},url:{path:["api","rest","v1","meta","buckets",":bucket","documentlist"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"limit",value:"1000"},{description:{content:"",type:"text/plain"},key:"page",value:"1"},{description:{content:"",type:"text/plain"},key:"prefix",value:"<string>"},{description:{content:"",type:"text/plain"},key:"orderby",value:"<string>"},{description:{content:"",type:"text/plain"},key:"showAllVersions",value:"<boolean>"},{description:{content:"",type:"text/plain"},key:"currentFolder",value:"<boolean>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"bucket"}]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/list-documents",previous:{title:"listDocumentMetaVersions",permalink:"/doc/ladon/list-document-meta-versions"},next:{title:"listBuckets_1",permalink:"/doc/ladon/list-buckets-1"}},s=[],p={toc:s},c="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listdocuments"},"listDocuments"),(0,r.kt)("p",null,"listDocuments"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"bucket"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"limit"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int64"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 1000"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"page"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"prefix"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"orderby"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: name, created, name_desc, created_asc"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"showAllVersions"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"currentFolder"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"content-type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"last-modified"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"bucket"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"path"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"etag"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"empty"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"owner"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"size"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"version"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))))))}u.isMDXComponent=!0}}]);