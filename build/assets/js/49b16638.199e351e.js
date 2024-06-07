"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[6282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80606:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},l="getPermissionsForRole",a={type:"api",id:"get-permissions-for-role",unversionedId:"get-permissions-for-role",title:"getPermissionsForRole",description:"",slug:"/get-permissions-for-role",frontMatter:{},api:{tags:["Usermanager"],operationId:"getPermissionsForRole",parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{required:["allowed","description","operation","permissionId","type","value"],type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["ANT","REGEX","EQUALS","SPEL","GLOB"]},operation:{type:"string",enum:["CREATE_OBJECT","READ_OBJECT","WRITE_OBJECT","DELETE_OBJECT","WIPE_OUT_OBJECT","CREATE_BUCKET","READ_BUCKET","WRITE_BUCKET","DELETE_BUCKET","LADON_UI","ADD_USER","LIST_USER","DELETE_USER","EDIT_PERMISSIONS","SHOW_PERMISSIONS"]},allowed:{type:"boolean"},permissionId:{type:"string"},description:{type:"string"}}}}}}}},description:"getPermissionsForRole",method:"get",path:"/api/usermanager/permissions/role/{roleId}",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"get Permissions For Role",description:{type:"text/plain"},url:{path:["api","usermanager","permissions","role",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"roleId"}]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/get-permissions-for-role",previous:{title:"removePermissionFromUser",permalink:"/doc/ladon/remove-permission-from-user"},next:{title:"addPermissionForRole",permalink:"/doc/ladon/add-permission-for-role"}},p=[],s={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getpermissionsforrole"},"getPermissionsForRole"),(0,o.kt)("p",null,"getPermissionsForRole"),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"roleId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"OK"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"value"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,o.kt)("inlineCode",{parentName:"p"},"ANT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REGEX"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"EQUALS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SPEL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GLOB"),"]")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"operation"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE_OBJECT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"READ_OBJECT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WRITE_OBJECT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE_OBJECT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WIPE_OUT_OBJECT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE_BUCKET"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"READ_BUCKET"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WRITE_BUCKET"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE_BUCKET"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LADON_UI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD_USER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LIST_USER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE_USER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"EDIT_PERMISSIONS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW_PERMISSIONS"),"]")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"permissionId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}c.isMDXComponent=!0}}]);