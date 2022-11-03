"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9745],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,b=s["".concat(i,".").concat(g)]||s[g]||u[g]||o;return n?r.createElement(b,l(l({ref:t},m),{},{components:n})):r.createElement(b,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={slug:"package-update-eng",title:"Updating Packages Periodically (brew, nvm, npm, yarn, etc.)",authors:"mike",tags:["homebrew","nvm","npm","yarn"]},l=void 0,p={permalink:"/en/blog/package-update-eng",source:"@site/blog/2022-10-30-package-update-eng.md",title:"Updating Packages Periodically (brew, nvm, npm, yarn, etc.)",description:"TL;DR",date:"2022-10-30T00:00:00.000Z",formattedDate:"October 30, 2022",tags:[{label:"homebrew",permalink:"/en/blog/tags/homebrew"},{label:"nvm",permalink:"/en/blog/tags/nvm"},{label:"npm",permalink:"/en/blog/tags/npm"},{label:"yarn",permalink:"/en/blog/tags/yarn"}],readingTime:.575,hasTruncateMarker:!0,authors:[{name:"Mike",title:"Software Engineer Intern",url:"https://github.com/dcl3",imageURL:"https://avatars.githubusercontent.com/u/56098714?v=4",key:"mike"}],frontMatter:{slug:"package-update-eng",title:"Updating Packages Periodically (brew, nvm, npm, yarn, etc.)",authors:"mike",tags:["homebrew","nvm","npm","yarn"]},prevItem:{title:"Go \uc5b8\uc5b4\uc640 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\uc5d0 \uad00\ud55c \uc774\uc57c\uae30",permalink:"/en/blog/go-project-structure"},nextItem:{title:"\uc8fc\uae30\uc801\uc73c\ub85c \ud328\ud0a4\uc9c0 \uc5c5\ub370\uc774\ud2b8 (brew, nvm, npm, yarn \ub4f1)",permalink:"/en/blog/package-update"}},i={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew update\nbrew upgrade\nnvm install --lts\nnpm install -g npm\nnpm install -g yarn\n")),(0,a.kt)("p",null,"It is recommended that you upgrade your package as soon as a new version or patch comes out."),(0,a.kt)("p",null,"Please upgrade at least once a week."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"I do it once a week.")))}u.isMDXComponent=!0}}]);