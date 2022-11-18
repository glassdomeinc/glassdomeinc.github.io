"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7576],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(a),b=n,f=g["".concat(s,".").concat(b)]||g[b]||u[b]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={slug:"krakend",title:"Creating an API Gateway for your backend with KrakenD",authors:"adil",tags:["krakend","backend","api","gateway","scaling","abstraction","stateless","performance"]},l=void 0,i={permalink:"/en/blog/krakend",source:"@site/blog/2022-11-17-krakend-api-gateway.md",title:"Creating an API Gateway for your backend with KrakenD",description:"What's KrakenD?",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"krakend",permalink:"/en/blog/tags/krakend"},{label:"backend",permalink:"/en/blog/tags/backend"},{label:"api",permalink:"/en/blog/tags/api"},{label:"gateway",permalink:"/en/blog/tags/gateway"},{label:"scaling",permalink:"/en/blog/tags/scaling"},{label:"abstraction",permalink:"/en/blog/tags/abstraction"},{label:"stateless",permalink:"/en/blog/tags/stateless"},{label:"performance",permalink:"/en/blog/tags/performance"}],readingTime:2.485,hasTruncateMarker:!0,authors:[{name:"Adil",title:"Software Engineer",url:"https://github.com/adilb99",imageURL:"https://avatars.githubusercontent.com/u/47117931?v=4",key:"adil"}],frontMatter:{slug:"krakend",title:"Creating an API Gateway for your backend with KrakenD",authors:"adil",tags:["krakend","backend","api","gateway","scaling","abstraction","stateless","performance"]},nextItem:{title:"Start using Goqu to build your SQL Queries in Go",permalink:"/en/blog/goqu-tutorial"}},s={authorsImageUrls:[void 0]},c=[{value:"What&#39;s KrakenD?",id:"whats-krakend",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"whats-krakend"},"What's KrakenD?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.krakend.io/"},"krakend")," is a powerful API Gateway that allows abstracting many features away from your backend and into a separate highly-scalable and high performance module. Apart from being a proxy to one or many of your backends, it supports security, monitoring, scaling, throttling, caching and other useful features that might be needed for APIs."))}u.isMDXComponent=!0}}]);