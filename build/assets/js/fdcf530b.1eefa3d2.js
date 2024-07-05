"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[9168],{15680:(e,n,a)=>{a.d(n,{xA:()=>i,yg:()=>f});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),s=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),y=r,f=p["".concat(d,".").concat(y)]||p[y]||u[y]||o;return a?t.createElement(f,l(l({ref:n},i),{},{components:a})):t.createElement(f,l({ref:n},i))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},73488:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const o={},l="Update your Ladon instance",c={unversionedId:"Miscellaneous/LadonInstanceUpdate",id:"Miscellaneous/LadonInstanceUpdate",title:"Update your Ladon instance",description:"Check all available Ladon Versions at https://ladon.org/downloads",source:"@site/docs/Miscellaneous/LadonInstanceUpdate.md",sourceDirName:"Miscellaneous",slug:"/Miscellaneous/LadonInstanceUpdate",permalink:"/build/docs/Miscellaneous/LadonInstanceUpdate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Miscellaneous/LadonInstanceUpdate.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translations",permalink:"/build/docs/Frontend Concepts/Translations"},next:{title:"Upload local files to Ladon",permalink:"/build/docs/Miscellaneous/UploadFilesToLadon"}},d={},s=[{value:"Update your local PI",id:"update-your-local-pi",level:2},{value:"Connect and download",id:"connect-and-download",level:3},{value:"Backup and setup",id:"backup-and-setup",level:3},{value:"Restart PI",id:"restart-pi",level:3}],i={toc:s},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"update-your-ladon-instance"},"Update your Ladon instance"),(0,r.yg)("p",null,"Check all available Ladon Versions at ",(0,r.yg)("a",{parentName:"p",href:"https://ladon.org/downloads"},"https://ladon.org/downloads")),(0,r.yg)("h2",{id:"update-your-local-pi"},"Update your local PI"),(0,r.yg)("h3",{id:"connect-and-download"},"Connect and download"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ssh pi@ladon\nwget https://ladon.org/downloads/ladon_de_your_version.jar\n")),(0,r.yg)("h3",{id:"backup-and-setup"},"Backup and setup"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mv ladon.jar ladon.jar.bak\nmv ladon_de_your_version.jar ladon.jar\n")),(0,r.yg)("h3",{id:"restart-pi"},"Restart PI"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo reboot\n")))}u.isMDXComponent=!0}}]);