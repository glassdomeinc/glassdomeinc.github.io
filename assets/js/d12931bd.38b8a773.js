"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9998],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),g=a,k=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return n?o.createElement(k,l(l({ref:t},u),{},{components:n})):o.createElement(k,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(7462),a=(n(7294),n(4137));const r={slug:"go-project-structure",title:"Go \uc5b8\uc5b4\uc640 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\uc5d0 \uad00\ud55c \uc774\uc57c\uae30",authors:"david",tags:["go","golang"]},l=void 0,i={permalink:"/blog/go-project-structure",source:"@site/blog/2022-11-01-go-project-structure.md",title:"Go \uc5b8\uc5b4\uc640 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\uc5d0 \uad00\ud55c \uc774\uc57c\uae30",description:"Go \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub514\ub809\ud130\ub9ac \uad6c\uc870\uc5d0 \uad00\ud55c \uc774\uc57c\uae30\uc785\ub2c8\ub2e4.",date:"2022-11-01T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 1\uc77c",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"golang",permalink:"/blog/tags/golang"}],readingTime:7.365,hasTruncateMarker:!0,authors:[{name:"\uc774\ud604\uc218",title:"Senior Engineer",url:"https://github.com/civilizeddev",imageURL:"https://github.com/civilizeddev.png",key:"david"}],frontMatter:{slug:"go-project-structure",title:"Go \uc5b8\uc5b4\uc640 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\uc5d0 \uad00\ud55c \uc774\uc57c\uae30",authors:"david",tags:["go","golang"]},prevItem:{title:"Discussion about Go Language and Project Structure",permalink:"/blog/go-project-structure-eng"},nextItem:{title:"Updating Packages Periodically (brew, nvm, npm, yarn, etc.)",permalink:"/blog/package-update-eng"}},p={authorsImageUrls:[void 0]},m=[{value:"Go \uc5b8\uc5b4\uc640\uc758 \ub9cc\ub0a8",id:"go-\uc5b8\uc5b4\uc640\uc758-\ub9cc\ub0a8",level:2},{value:"Go \uc5b8\uc5b4\uc758 \uc7a5\uc810",id:"go-\uc5b8\uc5b4\uc758-\uc7a5\uc810",level:2},{value:"Go \uc124\uce58",id:"go-\uc124\uce58",level:2},{value:"Go \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870",id:"go-\ud504\ub85c\uc81d\ud2b8-\uad6c\uc870",level:2},{value:"Go \ud504\ub85c\uc81d\ud2b8\ub294 \ubaa8\ub4c8\uc774\ub2e4",id:"go-\ud504\ub85c\uc81d\ud2b8\ub294-\ubaa8\ub4c8\uc774\ub2e4",level:3},{value:"Go Module \uc2dc\uc791\ud558\uae30",id:"go-module-\uc2dc\uc791\ud558\uae30",level:3},{value:"src \ub514\ub809\ud130\ub9ac\uac00 \ub530\ub85c \uc5c6\uace0, \ubaa8\ub4c8\uc774 \ub8e8\ud2b8 \ud328\ud0a4\uc9c0",id:"src-\ub514\ub809\ud130\ub9ac\uac00-\ub530\ub85c-\uc5c6\uace0-\ubaa8\ub4c8\uc774-\ub8e8\ud2b8-\ud328\ud0a4\uc9c0",level:3},{value:"main \ud328\ud0a4\uc9c0(\uc9c4\uc785\uc810 \ucf54\ub4dc)\uc740 <code>cmd/</code> \ub514\ub809\ud130\ub9ac \uc544\ub798\uc5d0",id:"main-\ud328\ud0a4\uc9c0\uc9c4\uc785\uc810-\ucf54\ub4dc\uc740-cmd-\ub514\ub809\ud130\ub9ac-\uc544\ub798\uc5d0",level:3}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Go \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub514\ub809\ud130\ub9ac \uad6c\uc870\uc5d0 \uad00\ud55c \uc774\uc57c\uae30\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"go-\uc5b8\uc5b4\uc640\uc758-\ub9cc\ub0a8"},"Go \uc5b8\uc5b4\uc640\uc758 \ub9cc\ub0a8"),(0,a.kt)("p",null,"\uc81c\uac00 Go\ub97c \uc54c\uac8c \ub41c \uac83\uc740 2015\ub144 \ud31f\uce90\uc2a4\ud2b8 ",(0,a.kt)("a",{parentName:"p",href:"https://www.podbbang.com/channels/9126"},'"\ub098\ub294 \ud504\ub85c\uadf8\ub798\uba38\ub2e4"')," \uc5d0\ud53c\uc18c\ub4dc ",(0,a.kt)("a",{parentName:"p",href:"https://www.podbbang.com/channels/9126/episodes/21668083"},'"\uad6c\uae00 \uc5d4\uc9c0\ub2c8\uc5b4\uac00 \ub9d0\ud558\ub294 Go\uc5b8\uc5b4\uc758 \ub9e4\ub825"'),"\uc5d0\uc11c\uc600\uc2b5\ub2c8\ub2e4. Google \uc5d4\uc9c0\ub2c8\uc5b4\ub85c \uc77c\ud588\ub358 ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/jaehyunyeom"},"\uc5fc\uc7ac\ud604")," \ub2d8\uc774 ",(0,a.kt)("a",{parentName:"p",href:"https://www.yes24.com/Product/Goods/24759320"},'"\ub514\uc2a4\ucee4\ubc84\ub9ac Go"'),"\ub77c\ub294 \ucc45\uc744 \ub0b4\uba74\uc11c \ubc29\uc1a1\uc5d0 \ucd9c\uc5f0\ud574 Go \uc5b8\uc5b4\uc5d0 \uad00\ud574 \uc774\uc57c\uae30\ub97c \ud574\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 Go \uc2a4\ud130\ub514 \uadf8\ub8f9\uc744 \ud1b5\ud574 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc870\uae08 \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4\ub9cc, \uadf8\ud6c4\ub85c \uc0ac\uc2e4\uc0c1 \uc2e4\ubb34\uc801\uc73c\ub85c Go\ub97c \uc0ac\uc6a9\ud55c \uc801\uc740 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uae00\ub798\uc2a4\ub3d4\uc5d0\uc11c\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc5d0 Go \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"go-\uc5b8\uc5b4\uc758-\uc7a5\uc810"},"Go \uc5b8\uc5b4\uc758 \uc7a5\uc810"),(0,a.kt)("p",null,"Go\uc5b8\uc5b4\ub294 \uc77c\ub2e8 \uc5c5\uacc4\uc5d0\uc11c \uc778\uae30\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uc55e\uc73c\ub85c\ub3c4 \uc798 \ub098\uac08 \uc5b8\uc5b4\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucf54\ub4dc \ubb38\ubc95\uc740 \uc5b4\ub290 \ud559\uad50\uc5d0\uc11c\ub3c4 \uae30\ubcf8\uc801\uc73c\ub85c \ub2e4 \ubc30\uc6b0\ub294 C\uc5b8\uc5b4\ub97c \ub2ee\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7ec\uba74\uc11c\ub3c4 C \ubcf4\ub2e4 \uc0ac\uc6a9\ud558\uae30 \uc88b\uc2b5\ub2c8\ub2e4. (\ub2f9\uc5f0\ud55c \ub9d0\uc774\uc9c0\ub9cc)"),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 VM\uc774\ub098 \uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4 \uae30\ubc18 \uc5b8\uc5b4\ubcf4\ub2e4 \uc131\ub2a5\uc774 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub610 \uc81c\uac00 \ubc1c\uacac\ud55c \ub610 \ud55c\uac00\uc9c0 \uc7a5\uc810\uc740,"),(0,a.kt)("p",null,"Go \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc815\uc801\uc73c\ub85c \ucef4\ud30c\uc77c\ub418\uc5b4 \uc2e4\ud589\uc2dc\uac04 \uc758\uc874\uc131\uc744 \ucd5c\uc18c\ud654\ud558\uc5ec \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0\ub85c \ube4c\ub4dc\ud588\uc744 \ub54c \ud06c\uae30\uac00 \uc544\uc8fc \uc791\uac8c \ub098\uc635\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/scratch"},"OS \uc870\ucc28 \uc5c6\ub294 \ube48 \ucee8\ud14c\uc774\ub108"),"\uc5d0 Go \ubc14\uc774\ub108\ub9ac\ub9cc \uc9d1\uc5b4\ub123\uc5b4\uc11c \uc2e4\ud589\ud558\ub294 \uac8c \uac00\ub2a5\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uac1c\ubc1c\ud558\uace0 \ubc30\ud3ec\ud560 \ub54c \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc2dc\uac04\uc774 \uc801\uac8c \ub4e4\uace0, Kubernetes \ub178\ub4dc\uc5d0\uc11c \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud558\ub294 \uc2dc\uac04\uacfc \uc2e4\ud589 \uc900\ube44 \uc2dc\uac04\ub3c4 \uc801\uac8c \ub4ed\ub2c8\ub2e4."),(0,a.kt)("admonition",{title:"Go \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0 \ud06c\uae30",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"JVM\uc774\ub098 NodeJS\uac00 \ub4e4\uc5b4\uac04 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\ub97c \ube4c\ub4dc\ud558\uba74, \uc544\ubb34\ub9ac \uc791\uac8c \ub9cc\ub4e4\ub824\uace0 \ud574\ub3c4 100MB\uac00 \uc27d\uac8c \ub118\uc5b4\uac00\uace0 \uc2ec\uc9c0\uc5b4 \uc218\ubc31 MB\uac00 \ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 Go \ucee8\ud14c\uc774\ub108\ub294 \ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \ub2e4 \ud3ec\ud568\ud574\ub3c4 10MB \ubbf8\ub9cc\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"go-\uc124\uce58"},"Go \uc124\uce58"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"GVM\uc73c\ub85c \uc124\uce58\ud558\ub294 \uac8c \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gvm install go1.19\n")),(0,a.kt)("h2",{id:"go-\ud504\ub85c\uc81d\ud2b8-\uad6c\uc870"},"Go \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870"),(0,a.kt)("p",null,"Go \ubb38\ubc95\uc740 \uc27d\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud574\ubcf8 \uac1c\ubc1c\uc790\ub4e4\uc740 \uae08\ubc29 \uc801\uc751\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \ucf54\ub4dc \uc678 \ubd80\ubd84\ub4e4\uc740 Go\uc5d0\uc11c\ub294 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud558\ub294\uc9c0 \uad81\uae08\ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uba74 Go \ud504\ub85c\uc81d\ud2b8\uc758 \ub514\ub809\ud130\ub9ac \uad6c\uc870\ub97c \uc5b4\ub5bb\uac8c \uc7a1\uc544\uc57c \ud558\ub294 \uac83\ub4e4\uc774 \uc788\uc9c0\uc694."),(0,a.kt)("p",null,"\uc624\ub298\uc740 \uc774\uc5d0 \uad00\ud574 \uc598\uae30\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ucc38\uace0\ud560 \ubb38\uc11c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang-standards/project-layout"},"Standard Go Project Layout"),"\uc785\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"go-\ud504\ub85c\uc81d\ud2b8\ub294-\ubaa8\ub4c8\uc774\ub2e4"},"Go \ud504\ub85c\uc81d\ud2b8\ub294 \ubaa8\ub4c8\uc774\ub2e4"),(0,a.kt)("p",null,"Go 1.14\ubd80\ud130 Go\uc5d0\ub294 Module\uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"Go Module\uc774 \ub098\uc624\uae30 \uc804\uc758 Go\ub294 Python\uacfc \uac19\uc774 \uae30\ubcf8\uc801\uc73c\ub85c \uc2e4\ud589 \ud658\uacbd\uc774 \uc124\uce58\ub41c \uacf3(GOPATH)\uc5d0 \uc758\uc874 \ud328\ud0a4\uc9c0\uac00 \ubaa8\uc5ec\uc11c \uc124\uce58\ub418\ub294 \uad6c\uc870\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Python\uc5d0\uc11c\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c venv\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, python \uc124\uce58 \uacbd\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"python-x.y.z/site-packages/"),"\uc5d0 \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub429\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc9c0\uae08\uc5d0\uc11c\ub294 \uc61b\ub0a0 \uc774\uc57c\uae30\ub97c \ud560 \ud544\uc694\ub294 \uc5c6\uace0, ",(0,a.kt)("strong",{parentName:"p"},"\uadf8\ub0e5 \uc694\uc998 \ub098\uc624\ub294 Go\ub294 \ubaa8\ub450 \ub2e4 Go Module"),"\uc774\ub77c\uace0 \ubcf4\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uac01 \ubaa8\ub4c8\ub9c8\ub2e4 \uc758\uc874 \ud328\ud0a4\uc9c0\ub294 \ub530\ub85c \uad00\ub9ac\ub429\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Go Module = (\ub2e4\ub978 \uc5b8\uc5b4\uc5d0\uc11c\uc758) \ud504\ub85c\uc81d\ud2b8")),(0,a.kt)("h3",{id:"go-module-\uc2dc\uc791\ud558\uae30"},"Go Module \uc2dc\uc791\ud558\uae30"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mymodule"),"\uc774\ub77c\ub294 \ubaa8\ub4c8\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir mymodule\ncd mymodule\n\ngo mod init github.com/glassdomeinc/mymodule\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="go.mod"',title:'"go.mod"'},"module github.com/glassdomeinc/mymodule\n\ngo 1.19\n")),(0,a.kt)("h3",{id:"src-\ub514\ub809\ud130\ub9ac\uac00-\ub530\ub85c-\uc5c6\uace0-\ubaa8\ub4c8\uc774-\ub8e8\ud2b8-\ud328\ud0a4\uc9c0"},"src \ub514\ub809\ud130\ub9ac\uac00 \ub530\ub85c \uc5c6\uace0, \ubaa8\ub4c8\uc774 \ub8e8\ud2b8 \ud328\ud0a4\uc9c0"),(0,a.kt)("p",null,"Java\ub97c \ube44\ub86f\ud55c JVM \uacc4\uc5f4 \uc5b8\uc5b4\ub4e4\uc740 \ucef4\ud30c\uc77c\ub7ec\uac00 \uc18c\uc2a4\ucf54\ub4dc \ud30c\uc77c\ub85c \uc778\uc2dd\ud558\ub294 \uacbd\ub85c\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java")," \ub4f1\uc73c\ub85c \uad00\uc2b5\uc801\uc73c\ub85c \uc815\ud574\uc838\uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc Go\uc5d0\ub294 \uadf8\ub7f0 \uaddc\uce59\uc740 \uc5c6\ub294 \ub300\uc2e0, Go \ubaa8\ub4c8 \ub514\ub809\ud130\ub9ac \uc790\uccb4\uac00 \uace7 \uadf8 \ubaa8\ub4c8\uc758 \ub8e8\ud2b8 \ud328\ud0a4\uc9c0\uac00 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"GitHub\uc5d0 \ud638\uc2a4\ud305\ub41c \ub9ce\uc740 Go \uc624\ud508\uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8\ub97c \ubcf4\uba74 \uc800\uc7a5\uc18c \uc790\uccb4\uac00 Go Module\uc774\uace0 \ub8e8\ud2b8 \ub514\ub809\ud130\ub9ac\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.go")," \uc18c\uc2a4\ucf54\ub4dc\uac00 \ubc14\ub85c \uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ mymodule/\n+-- go.mod\n+-- go.sum\n+-- README.md\n+-- myfile.go\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ubaa8\ub4c8 \ub8e8\ud2b8 \ub514\ub809\ud130\ub9ac\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod"),"\uc640 \uc18c\uc2a4\ucf54\ub4dc ",(0,a.kt)("inlineCode",{parentName:"p"},"*.go")," \ud30c\uc77c\uc744 \ub098\ub780\ud788 \ub123\uc5b4\ub3c4 \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="myfile.go"',title:'"myfile.go"'},"package mymodule\n\nfunc Xxx() {\n  ...\n}\n")),(0,a.kt)("h3",{id:"main-\ud328\ud0a4\uc9c0\uc9c4\uc785\uc810-\ucf54\ub4dc\uc740-cmd-\ub514\ub809\ud130\ub9ac-\uc544\ub798\uc5d0"},"main \ud328\ud0a4\uc9c0(\uc9c4\uc785\uc810 \ucf54\ub4dc)\uc740 ",(0,a.kt)("inlineCode",{parentName:"h3"},"cmd/")," \ub514\ub809\ud130\ub9ac \uc544\ub798\uc5d0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},"package main\n\nfunc main() {\n  ...\n}\n")),(0,a.kt)("p",null,"Go \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc9c4\uc785\uc810 \ucf54\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"\uc774\ub77c\ub294 \uc608\uc57d\ub41c \ud328\ud0a4\uc9c0\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uadf8\ub7f0\ub370 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \ud328\ud0a4\uc9c0\ub294 \ub2e4\ub978 \uc77c\ubc18 \ud328\ud0a4\uc9c0\uc640 \uac19\uc740 \ub514\ub809\ud130\ub9ac \ub0b4\uc5d0 \ubc30\uce58\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"main.go"),"\ub97c \ubaa8\ub4c8\uc758 \ub8e8\ud2b8 \uacbd\ub85c\uc5d0 \ubc30\uce58\ud574\ubc84\ub9ac\uba74 \ub2e4\ub978 \uc18c\uc2a4\ucf54\ub4dc \ud30c\uc77c\uc774 \ub4e4\uc5b4\uac08 \ub8e8\ud2b8 \ud328\ud0a4\uc9c0 \uc790\ub9ac(\uac00\uc7a5 \uc911\uc694\ud55c \uacf3)\ub97c \ube8f\ub294 \ubaa8\uc591\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"main.go"),"\ub294 \ubaa8\ub4c8\uc758 \ub8e8\ud2b8 \uacbd\ub85c \ub300\uc2e0 ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd/")," \ub514\ub809\ud130\ub9ac\uc5d0 \ubc30\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ mymodule/\n+-+ cmd/\n| +-- main.go\n+-- go.mod\n+-- go.sum\n+-- README.md\n+-- myfile.go\n")),(0,a.kt)("p",null,"(\uc6b0\ub9ac\ub294 \uc774\ub807\uac8c \uc798 \uc0ac\uc6a9\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc) \ub9cc\uc57d \uc9c4\uc785\uc810\uc774 \uc5ec\ub7ec \uac1c\uba74, ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd/")," \uc544\ub798 \uc11c\ube0c \ub514\ub809\ud130\ub9ac\uc5d0 \uac01\uac01 \ubc30\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ud55c \ub514\ub809\ud130\ub9ac\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \ud328\ud0a4\uc9c0\ub294 0~1\uac1c\ub9cc \uc874\uc7ac\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ mymodule/\n+-+ cmd/\n| +-+ main1\n| | +-- main.go\n| +-+ main2\n|   +-- main.go\n+-- go.mod\n+-- go.sum\n+-- README.md\n+-- myfile.go\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\uc791\uc131\uc911\uc785\ub2c8\ub2e4 \ud83d\udea7")))}d.isMDXComponent=!0}}]);