"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[8288],{15680:(t,e,n)=>{n.d(e,{xA:()=>p,yg:()=>g});var r=n(96540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),y=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=y(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=y(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var y=2;y<l;y++)o[y]=n[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17702:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},o="startTask",i={type:"api",id:"start-task",unversionedId:"start-task",title:"startTask",description:"",slug:"/start-task",frontMatter:{},api:{tags:["Tasks"],operationId:"startTask",parameters:[{name:"name",in:"query",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",additionalProperties:{type:"string"}}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"string"}}}}}},description:"startTask",method:"post",path:"/api/rest/v1/taskmanager/start",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],jsonRequestBodyExample:{},info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"start Task",description:{type:"text/plain"},url:{path:["api","rest","v1","taskmanager","start"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) ",type:"text/plain"},key:"name",value:"<string>"}],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'"<object>"'}}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/start-task",previous:{title:"stopTask",permalink:"/build/ladon/stop-task"},next:{title:"applyConverterAndStore",permalink:"/build/ladon/apply-converter-and-store"}},s=[],y={toc:s},p="wrapper";function c(t){let{components:e,...n}=t;return(0,a.yg)(p,(0,r.A)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"starttask"},"startTask"),(0,a.yg)("p",null,"startTask"),(0,a.yg)("table",{style:{display:"table",width:"100%"}},(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("code",null,"name"),(0,a.yg)("span",{style:{opacity:"0.6"}}," string"),(0,a.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.yg)("table",{style:{display:"table",width:"100%"}},(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.yg)("div",null)))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("span",{style:{opacity:"0.6"}}," object"))))),(0,a.yg)("table",{style:{display:"table",width:"100%"}},(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{display:"flex"}},(0,a.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.yg)("code",null,"200")),(0,a.yg)("div",null,(0,a.yg)("p",null,"OK"))),(0,a.yg)("div",null,(0,a.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",{style:{textAlign:"left"}},"Schema ",(0,a.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.yg)("div",null)))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("span",{style:{opacity:"0.6"}}," object")))))))))))}c.isMDXComponent=!0}}]);