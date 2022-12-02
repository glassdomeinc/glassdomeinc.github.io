"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1879],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const l={slug:"krakend",title:"Creating an API Gateway for your backend with KrakenD",authors:"adil",tags:["krakend","backend","api","gateway","scaling","abstraction","stateless","performance"]},i=void 0,o={permalink:"/blog/krakend",source:"@site/blog/2022-11-17-krakend-api-gateway.md",title:"Creating an API Gateway for your backend with KrakenD",description:"What's KrakenD?",date:"2022-11-17T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 17\uc77c",tags:[{label:"krakend",permalink:"/blog/tags/krakend"},{label:"backend",permalink:"/blog/tags/backend"},{label:"api",permalink:"/blog/tags/api"},{label:"gateway",permalink:"/blog/tags/gateway"},{label:"scaling",permalink:"/blog/tags/scaling"},{label:"abstraction",permalink:"/blog/tags/abstraction"},{label:"stateless",permalink:"/blog/tags/stateless"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:2.485,hasTruncateMarker:!0,authors:[{name:"Adil",title:"Software Engineer",url:"https://github.com/adilb99",imageURL:"https://avatars.githubusercontent.com/u/47117931?v=4",key:"adil"}],frontMatter:{slug:"krakend",title:"Creating an API Gateway for your backend with KrakenD",authors:"adil",tags:["krakend","backend","api","gateway","scaling","abstraction","stateless","performance"]},prevItem:{title:"How to increase persistent storage capacity for a stateful set on K8s with no downtime",permalink:"/blog/persistent-storage-increase"},nextItem:{title:"Start using Goqu to build your SQL Queries in Go",permalink:"/blog/goqu-tutorial"}},p={authorsImageUrls:[void 0]},s=[{value:"What&#39;s KrakenD?",id:"whats-krakend",level:2},{value:"Why do we need an API Gateway?",id:"why-do-we-need-an-api-gateway",level:2},{value:"Why exactly KrakenD?",id:"why-exactly-krakend",level:2},{value:"How to set it up",id:"how-to-set-it-up",level:2},{value:"Building templates",id:"building-templates",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-krakend"},"What's KrakenD?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.krakend.io/"},"krakend")," is a powerful API Gateway that allows abstracting many features away from your backend and into a separate highly-scalable and high performance module. Apart from being a proxy to one or many of your backends, it supports security, monitoring, scaling, throttling, caching and other useful features that might be needed for APIs. "),(0,r.kt)("h2",{id:"why-do-we-need-an-api-gateway"},"Why do we need an API Gateway?"),(0,r.kt)("p",null,"An API Gateway basically implements a single interface in front of a complex system to improve its usability and provide loose coupling. It allows us to change the location of the backend components and their internals with no impact to the client."),(0,r.kt)("h2",{id:"why-exactly-krakend"},"Why exactly KrakenD?"),(0,r.kt)("p",null,"It's fairly easy to set up and is said to have very good performance as well as the ability to use all kinds of middleware, either in between gateway and backend, or in between gateway and client."),(0,r.kt)("h2",{id:"how-to-set-it-up"},"How to set it up"),(0,r.kt)("p",null,"The only prerequisite for KrakenD is to install it. On MacOS, you can do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ brew install krakend\n")),(0,r.kt)("p",null,"The root directory of the KrakenD can be set up with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 krakend.json\n\u251c\u2500\u2500 out.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 partials\n\u2502   \u2514\u2500\u2500 rate_limit_backend.tmpl\n\u251c\u2500\u2500 scripts\n\u2502   \u251c\u2500\u2500 check.sh\n\u2502   \u2514\u2500\u2500 run.sh\n\u251c\u2500\u2500 settings\n\u2502   \u251c\u2500\u2500 jwt.json\n\u2502   \u2514\u2500\u2500 service.json\n\u2514\u2500\u2500 templates\n    \u251c\u2500\u2500 endpoint-example1.tmpl\n    \u251c\u2500\u2500 endpoint-example2.tmpl\n    \u251c\u2500\u2500 endpoint-example3.tmpl\n    \u2514\u2500\u2500 endpoint.tmpl\n")),(0,r.kt)("p",null,"(although it can be set up any other way)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"settings")," folder basically contains JSON files that have sensitive env variables we inject into our .tmpl templates."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"partials")," contain middleware or other configuration related to, for example, scalability and rate limiting. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rate_limit_backend.tmpl",metastring:'title="rate_limit_backend.tmpl"',title:'"rate_limit_backend.tmpl"'},'"qos/ratelimit/proxy": {\n    "max_rate": "100",\n    "capacity": "100"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"templates")," contains the template files from which the generation of a final config, out.json will begin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," simply contain shell scripts for simplification"),(0,r.kt)("h2",{id:"building-templates"},"Building templates"),(0,r.kt)("p",null,"We can summarize all endpoints in a single file as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-endpoint.tmpl",metastring:'title="endpoint.tmpl"',title:'"endpoint.tmpl"'},'{{ define "Endpoint" }}\n{{ template "EndpointExample1" . }},\n{{ template "EndpointExample2" . }},\n{{ template "EndpointExample3" . }},\n{{ end }}\n')),(0,r.kt)("p",null,"The contents of each endpoint then can be boiled down to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-endpoint-example1.tmpl",metastring:'title="endpoint-example1.tmpl"',title:'"endpoint-example1.tmpl"'},'{{ define "EndpointExample1" }}\n{\n  "@comment": "Endpoint Example 1",\n  "endpoint": "/example/{example_id}",\n  "method": "GET",\n  "input_query_strings": ["timestamp"],\n  "backend": [\n    {\n      "method": "GET",\n      "host": ["{{ .service.example1 }}"],\n      "url_pattern": "/example/{example_id}"\n    }\n  ],\n  "extra_config": {\n      "auth/validator": {\n      "alg": "RS256",\n      "cache": true,\n      "jwk_url": "{{ .jwt.jwk_url }}",\n      "issuer": "{{ .jwt.issuer }}"\n    }\n  }\n}\n{{ end }}\n')),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},".service.example1")," is an injection of the endpoint credential from ",(0,r.kt)("inlineCode",{parentName:"p"},"/settings/service.json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"extra_config")," is optional and here it enables JWT Authorization using an external token issuer (e.g. AWS Cognito)"),(0,r.kt)("p",null,"Settings can look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-service.json",metastring:'title="service.json"',title:'"service.json"'},'{\n  "example1": "http://localhost:8080"\n}\n\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"As you can see, it is very quick and easy to set up the bare bones of KrakenD. However, it can get tricky to set up the actual live deployment using one, depending on your requirements. For that, I will follow up with a separate tutorial."),(0,r.kt)("p",null,"Happy coding! ~"))}u.isMDXComponent=!0}}]);