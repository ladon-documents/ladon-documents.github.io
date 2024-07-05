"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[9440],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var l=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),y=r,g=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return n?l.createElement(g,o(o({ref:t},u),{},{components:n})):l.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84994:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var l=n(58168),r=(n(96540),n(15680));const i={},o="listAllBundles",a={type:"api",id:"list-all-bundles",unversionedId:"list-all-bundles",title:"listAllBundles",description:"",slug:"/list-all-bundles",frontMatter:{},api:{tags:["osgi"],operationId:"listAllBundles",responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object"}}}}},description:"listAllBundles",method:"get",path:"/api/rest/v1/plugins/osgi/bundles",parameters:[],servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"list All Bundles",description:{type:"text/plain"},url:{path:["api","rest","v1","plugins","osgi","bundles"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/list-all-bundles",previous:{title:"listServices",permalink:"/build/ladon/list-services"},next:{title:"getNodeInfo",permalink:"/build/ladon/get-node-info"}},s=[],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,l.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"listallbundles"},"listAllBundles"),(0,r.yg)("p",null,"listAllBundles"),(0,r.yg)("table",{style:{display:"table",width:"100%"}},(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{display:"flex"}},(0,r.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.yg)("code",null,"200")),(0,r.yg)("div",null,(0,r.yg)("p",null,"OK"))),(0,r.yg)("div",null,(0,r.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",{style:{textAlign:"left"}},"Schema ",(0,r.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.yg)("div",null)))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("span",{style:{opacity:"0.6"}}," object")))))))))))}c.isMDXComponent=!0}}]);