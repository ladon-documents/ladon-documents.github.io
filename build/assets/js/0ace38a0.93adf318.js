"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[312],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>c});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},y=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=i,c=g["".concat(s,".").concat(u)]||g[u]||d[u]||l;return n?r.createElement(c,a(a({ref:t},y),{},{components:n})):r.createElement(c,a({ref:t},y))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87680:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),i=(n(96540),n(15680));const l={},a="getPermissionsForUser",o={type:"api",id:"get-permissions-for-user",unversionedId:"get-permissions-for-user",title:"getPermissionsForUser",description:"",slug:"/get-permissions-for-user",frontMatter:{},api:{tags:["Usermanager"],operationId:"getPermissionsForUser",parameters:[{name:"userId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{required:["allowed","description","operation","permissionId","type","value"],type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["ANT","REGEX","EQUALS","SPEL","GLOB"]},operation:{type:"string",enum:["CREATE_OBJECT","READ_OBJECT","WRITE_OBJECT","DELETE_OBJECT","WIPE_OUT_OBJECT","CREATE_BUCKET","READ_BUCKET","WRITE_BUCKET","DELETE_BUCKET","LADON_UI","ADD_USER","LIST_USER","DELETE_USER","EDIT_PERMISSIONS","SHOW_PERMISSIONS"]},allowed:{type:"boolean"},permissionId:{type:"string"},description:{type:"string"}}}}}}}},description:"getPermissionsForUser",method:"get",path:"/api/usermanager/permissions/user/{userId}",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"get Permissions For User",description:{type:"text/plain"},url:{path:["api","usermanager","permissions","user",":userId"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"userId"}]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/get-permissions-for-user",previous:{title:"deleteRoleForUser",permalink:"/build/ladon/delete-role-for-user"},next:{title:"addPermissionForUser",permalink:"/build/ladon/add-permission-for-user"}},s=[],p={toc:s},y="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"getpermissionsforuser"},"getPermissionsForUser"),(0,i.yg)("p",null,"getPermissionsForUser"),(0,i.yg)("table",{style:{display:"table",width:"100%"}},(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"userId"),(0,i.yg)("span",{style:{opacity:"0.6"}}," string"),(0,i.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,i.yg)("table",{style:{display:"table",width:"100%"}},(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{style:{display:"flex"}},(0,i.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.yg)("code",null,"200")),(0,i.yg)("div",null,(0,i.yg)("p",null,"OK"))),(0,i.yg)("div",null,(0,i.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.yg)("thead",null,(0,i.yg)("tr",null,(0,i.yg)("th",{style:{textAlign:"left"}},"Schema ",(0,i.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.yg)("div",null)))),(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"value"),(0,i.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"type"),(0,i.yg)("span",{style:{opacity:"0.6"}}," string"),(0,i.yg)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.yg)("inlineCode",{parentName:"p"},"ANT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"REGEX"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"EQUALS"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"SPEL"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"GLOB"),"]")))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"operation"),(0,i.yg)("span",{style:{opacity:"0.6"}}," string"),(0,i.yg)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE_OBJECT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"READ_OBJECT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"WRITE_OBJECT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE_OBJECT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"WIPE_OUT_OBJECT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE_BUCKET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"READ_BUCKET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"WRITE_BUCKET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE_BUCKET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"LADON_UI"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"ADD_USER"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"LIST_USER"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE_USER"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"EDIT_PERMISSIONS"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW_PERMISSIONS"),"]")))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"allowed"),(0,i.yg)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"permissionId"),(0,i.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("code",null,"description"),(0,i.yg)("span",{style:{opacity:"0.6"}}," string")))))))))))))))}g.isMDXComponent=!0}}]);