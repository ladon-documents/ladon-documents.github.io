"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[339],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={},i="Converter",l={unversionedId:"Backend Concepts/Converter",id:"Backend Concepts/Converter",title:"Converter",description:"Concepts",source:"@site/docs/Backend Concepts/Converter.md",sourceDirName:"Backend Concepts",slug:"/Backend Concepts/Converter",permalink:"/build/docs/Backend Concepts/Converter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Backend Concepts/Converter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ladon Intro",permalink:"/build/docs/intro"},next:{title:"Document Data Model",permalink:"/build/docs/Backend Concepts/Document"}},c={},p=[{value:"Concepts",id:"concepts",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Document Converter API",id:"document-converter-api",level:2},{value:"Converter REST API",id:"converter-rest-api",level:2},{value:"Converter Config",id:"converter-config",level:2},{value:"Converter chaining",id:"converter-chaining",level:2}],s={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(d,(0,r.A)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"converter"},"Converter"),(0,a.yg)("h2",{id:"concepts"},"Concepts"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Converter are used to convert documents into different formats. For example html to pdf or markdown to html."),(0,a.yg)("li",{parentName:"ul"},"Converters can be used on a single document or a stream of many documents."),(0,a.yg)("li",{parentName:"ul"},"Furthermore is it possible to chain converters to combine functions like convert to pdf and zip all pdfs after that.")),(0,a.yg)("h2",{id:"known-issues"},"Known Issues"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"cardinality param is not used")),(0,a.yg)("h2",{id:"document-converter-api"},"Document Converter API"),(0,a.yg)("p",null,"To add another converter to Ladon implement the DocumentConverter interface. Can be used as a DI component or OSGI service."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public interface DocumentConverter {\n\n    String getId();\n\n    String getDescription();\n\n    List<ConverterParameter> getParams();\n\n    Stream<InMemoryFile> map(Stream<InMemoryFile> inputFiles, Map<String, String> config);\n\n    ConverterCardinality getCardinality();\n\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'id : unique id of this converter. Peferable use a namespace prefix like "acme/special-converter"'),(0,a.yg)("li",{parentName:"ul"},"params : metadata about parameters the converter takes"),(0,a.yg)("li",{parentName:"ul"},"map : function that does the actual conversion. Streaming is essential since the input stream can have millions of entries"),(0,a.yg)("li",{parentName:"ul"},"cardinality : meta info about input and output to expect")),(0,a.yg)("h2",{id:"converter-rest-api"},"Converter REST API"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"rest-api.png",src:t(5133).A,width:"600",height:"310"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"apply and store : run the converter and store the result in Ladon"),(0,a.yg)("li",{parentName:"ul"},"apply and download : run the converter and offer the result as file download"),(0,a.yg)("li",{parentName:"ul"},"meta : get information about available converters"),(0,a.yg)("li",{parentName:"ul"},"geddocument : same as apply and download but with direct download")),(0,a.yg)("h2",{id:"converter-config"},"Converter Config"),(0,a.yg)("p",null,"To apply any converter you have to provide the converter by id and it's config."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "inputPaths": [\n    "demodata/file1.pdf",\n    "demodata/file2.pdf"\n\n  ],\n  "converters": [\n    {\n      "id": "mind/merge-pdf",\n      "config": {\n        "filename": "output-combined.pdf"\n      }\n    }\n  ]\n}\n')),(0,a.yg)("h2",{id:"converter-chaining"},"Converter chaining"),(0,a.yg)("p",null,"Converters are designed to be chained together. Converters are applied in the order they are listed in the api."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "inputPaths": [\n    "demodata/file1.pdf",\n    "demodata/file2.pdf"\n\n  ],\n  "converters": [\n    {\n      "id": "mind/merge-pdf",\n      "config": {\n        "filename": "output-combined.pdf"\n      }\n    },\n    {\n      "id": "mind/zip",\n      "config": {\n        "filename": "output-zipped.pdf"\n      }\n    }\n  ]\n}\n')))}u.isMDXComponent=!0},5133:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/rest-api-converter-ae90a5e82c2030d6589b23afb29b7a19.png"}}]);