"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8609],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||a;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(4137));const a={slug:"cdktf-cloudfront-cloudflare",title:"Deploying an S3 static website with CDK for Terraform on Cloudfront vs Cloudflare",authors:"adil",tags:["cdktf","terraform","cloudfront","cloudflare","s3","static","website"]},l=void 0,i={permalink:"/en/blog/cdktf-cloudfront-cloudflare",source:"@site/blog/2022-11-08-cdktf-cloudfront-cloudflare-eng.md",title:"Deploying an S3 static website with CDK for Terraform on Cloudfront vs Cloudflare",description:"This tutorial shows what I did to setup and deploy an example static website on Cloudflare and Amazon Cloudfront using Terraform (CDK, Typescript)",date:"2022-11-08T00:00:00.000Z",formattedDate:"November 8, 2022",tags:[{label:"cdktf",permalink:"/en/blog/tags/cdktf"},{label:"terraform",permalink:"/en/blog/tags/terraform"},{label:"cloudfront",permalink:"/en/blog/tags/cloudfront"},{label:"cloudflare",permalink:"/en/blog/tags/cloudflare"},{label:"s3",permalink:"/en/blog/tags/s-3"},{label:"static",permalink:"/en/blog/tags/static"},{label:"website",permalink:"/en/blog/tags/website"}],readingTime:6.7,hasTruncateMarker:!0,authors:[{name:"Adil",title:"Software Engineer",url:"https://github.com/adilb99",imageURL:"https://avatars.githubusercontent.com/u/47117931?v=4",key:"adil"}],frontMatter:{slug:"cdktf-cloudfront-cloudflare",title:"Deploying an S3 static website with CDK for Terraform on Cloudfront vs Cloudflare",authors:"adil",tags:["cdktf","terraform","cloudfront","cloudflare","s3","static","website"]},nextItem:{title:"Installing Clickhouse on Kubernetes Hosted by NCloud and NHN Cloud",permalink:"/en/blog/clickhouse"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial shows what I did to setup and deploy an example static website on Cloudflare and Amazon Cloudfront using Terraform (CDK, Typescript)"),(0,n.kt)("p",null,"Cloudflare and Cloudfront are similar CDN, DNS and load balancing providers that can help host your API or website and make it more available. Despite their similarity, setting them up with an S3 Hosted static website is obviously different."),(0,n.kt)("p",null,"In this tutorial, I'll give some code snippets and pointers on how to set up the bare working minimum for each. The rest like more secure S3 Policies, hosting directly on Cloudflare or using an on-premise hosted website instead of an S3 Bucket will be up to the reader."))}f.isMDXComponent=!0}}]);