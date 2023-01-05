"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1173],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={slug:"go-minimal-binart-eng",title:"Go Low Capacity Binary",authors:"mike",tags:["go","golang"]},i=void 0,l={permalink:"/en/blog/go-minimal-binart-eng",source:"@site/blog/2022-11-01-go-minimal-binary-eng.md",title:"Go Low Capacity Binary",description:"Let's learn how to build a Go application with minimum capacity and deploy it as a container image.",date:"2022-11-01T00:00:00.000Z",formattedDate:"November 1, 2022",tags:[{label:"go",permalink:"/en/blog/tags/go"},{label:"golang",permalink:"/en/blog/tags/golang"}],readingTime:.535,hasTruncateMarker:!0,authors:[{name:"Mike",title:"Software Engineer Intern",url:"https://github.com/dcl3",imageURL:"https://avatars.githubusercontent.com/u/56098714?v=4",key:"mike"}],frontMatter:{slug:"go-minimal-binart-eng",title:"Go Low Capacity Binary",authors:"mike",tags:["go","golang"]},prevItem:{title:"Installing Clickhouse on Kubernetes Hosted by NCloud and NHN Cloud",permalink:"/en/blog/clickhouse"},nextItem:{title:"Go \uc800\uc6a9\ub7c9 \ubc14\uc774\ub108\ub9ac",permalink:"/en/blog/go-minimal-binart"}},c={authorsImageUrls:[void 0]},p=[{value:"Dockerfile",id:"dockerfile",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's learn how to build a Go application with minimum capacity and deploy it as a container image."),(0,a.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM golang:alpine as builder\nCOPY . .\nRUN apk update && \\\n  apk upgrade && \\\n  apk add --no-cache ca-certificates && \\\n  apk add --update-cache tzdata && \\\n  update-ca-certificates\nRUN echo "nobody:x:65534:65534:nobody:/:" > /etc_passwd\nENV GO111MODULE=on\nENV CGO_ENABLED=0\nENV GOOS=linux\nENV GOARCH=amd64\nWORKDIR /build\nRUN go mod download\nRUN go build -a -ldflags \'-s\' -o /main .\n\nFROM scratch\nCOPY --from=builder /etc_passwd /etc/passwd\nCOPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/\nCOPY --from=builder /usr/local/go/lib/time/zoneinfo.zip /\nCOPY --from=builder /main .\nENV ZONEINFO=/zoneinfo.zip\nEXPOSE 8080\nUSER nobody\nENTRYPOINT ["./main"]\n')))}u.isMDXComponent=!0}}]);