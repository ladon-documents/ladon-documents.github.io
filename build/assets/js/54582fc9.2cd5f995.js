"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[7242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=l,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},42748:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={},o="deleteDocumentBatch",i={type:"api",id:"delete-document-batch",unversionedId:"delete-document-batch",title:"deleteDocumentBatch",description:"",slug:"/delete-document-batch",frontMatter:{},api:{tags:["Documents"],operationId:"deleteDocumentBatch",parameters:[{name:"antpattern",in:"query",required:!0,schema:{type:"string"}},{name:"securitykey",in:"query",required:!0,schema:{type:"string"}},{name:"dryrun",in:"query",required:!0,schema:{type:"boolean"},example:!0}],responses:{200:{description:"OK",content:{"application/json":{schema:{required:["success"],type:"object",properties:{success:{type:"boolean"},reason:{type:"string"}}}}}}},description:"deleteDocumentBatch",method:"delete",path:"/api/rest/v1/content/management/batchdelete",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"delete Document Batch",description:{type:"text/plain"},url:{path:["api","rest","v1","content","management","batchdelete"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) ",type:"text/plain"},key:"antpattern",value:"<string>"},{description:{content:"(Required) ",type:"text/plain"},key:"securitykey",value:"<string>"},{description:{content:"(Required) ",type:"text/plain"},key:"dryrun",value:"<boolean>"}],variable:[]},method:"DELETE"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/delete-document-batch",previous:{title:"rollbackTransaction",permalink:"/doc/ladon/rollback-transaction"},next:{title:"uninstallPlugin",permalink:"/doc/ladon/uninstall-plugin"}},c=[],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deletedocumentbatch"},"deleteDocumentBatch"),(0,l.kt)("p",null,"deleteDocumentBatch"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"antpattern"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"securitykey"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"dryrun"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: true"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"OK"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"success"),(0,l.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"reason"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);