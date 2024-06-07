"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[6036],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,p=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=s(n),y=o,k=d["".concat(p,".").concat(y)]||d[y]||u[y]||l;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=y;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a[d]="string"==typeof t?t:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},30091:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={},i="listConverterInfo",a={type:"api",id:"list-converter-info",unversionedId:"list-converter-info",title:"listConverterInfo",description:"",slug:"/list-converter-info",frontMatter:{},api:{tags:["Converter"],operationId:"listConverterInfo",responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{required:["cardinality","description","id","parameters"],type:"object",properties:{id:{type:"string"},description:{type:"string"},parameters:{type:"array",items:{required:["description","name","optional"],type:"object",properties:{name:{type:"string"},description:{type:"string"},optional:{type:"boolean"}}}},cardinality:{type:"string",enum:["ONE_TO_ONE","ONE_TO_MANY","MANY_TO_ONE","MANY_TO_MANY"]}}}}}}}},description:"listConverterInfo",method:"get",path:"/api/rest/v1/converters/meta",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"list Converter Info",description:{type:"text/plain"},url:{path:["api","rest","v1","converters","meta"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/list-converter-info",previous:{title:"listBuckets_1",permalink:"/doc/ladon/list-buckets-1"},next:{title:"applyAndDownloadGet",permalink:"/doc/ladon/apply-and-download-get"}},p=[],s={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"listconverterinfo"},"listConverterInfo"),(0,o.kt)("p",null,"listConverterInfo"),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"OK"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"parameters"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"optional"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"cardinality"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,o.kt)("inlineCode",{parentName:"p"},"ONE_TO_ONE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ONE_TO_MANY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MANY_TO_ONE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MANY_TO_MANY"),"]"))))))))))))))))}d.isMDXComponent=!0}}]);