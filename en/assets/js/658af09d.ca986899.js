"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7955],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,w=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(w,o(o({ref:t},p),{},{components:n})):r.createElement(w,o({ref:t},p))}));function w(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(4137));const i={slug:"wsl2",title:"Windows\uc5d0\uc11c\ub3c4 Linux\ub97c: WSL2",authors:"david",tags:["wsl2","linux"]},o=void 0,a={permalink:"/en/blog/wsl2",source:"@site/blog/2022-10-27-wsl2.md",title:"Windows\uc5d0\uc11c\ub3c4 Linux\ub97c: WSL2",description:"WSL2: Windows Subsystem for Linux 2",date:"2022-10-27T00:00:00.000Z",formattedDate:"October 27, 2022",tags:[{label:"wsl2",permalink:"/en/blog/tags/wsl-2"},{label:"linux",permalink:"/en/blog/tags/linux"}],readingTime:2.85,hasTruncateMarker:!0,authors:[{name:"\uc774\ud604\uc218",title:"Senior Engineer",url:"https://github.com/civilizeddev",imageURL:"https://github.com/civilizeddev.png",key:"david"}],frontMatter:{slug:"wsl2",title:"Windows\uc5d0\uc11c\ub3c4 Linux\ub97c: WSL2",authors:"david",tags:["wsl2","linux"]},prevItem:{title:"Windows on Linux: WSL2",permalink:"/en/blog/wsl2-eng"},nextItem:{title:"Opening of Glassdome's Technical Blog!",permalink:"/en/blog/getting-started-eng"}},s={authorsImageUrls:[void 0]},u=[{value:"WSL2: Windows Subsystem for Linux 2",id:"wsl2-windows-subsystem-for-linux-2",level:2},{value:"WSL\uc758 \uc7a5\uc810",id:"wsl\uc758-\uc7a5\uc810",level:2},{value:"WSL\uc758 \ub2e8\uc810",id:"wsl\uc758-\ub2e8\uc810",level:2},{value:"\uc124\uce58 \ubc29\ubc95",id:"\uc124\uce58-\ubc29\ubc95",level:2},{value:"\ucd94\uac00: Windows Terminal",id:"\ucd94\uac00-windows-terminal",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"wsl2-windows-subsystem-for-linux-2"},"WSL2: Windows Subsystem for Linux 2"),(0,l.kt)("p",null,'WSL\uc740 "Windows Subsystem for Linux"\uc758 \uc57d\uc790\ub85c, Windows\uc5d0\uc11c Linux\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4.'),(0,l.kt)("p",null,"WSL\uc774 \ub098\uc624\uae30 \uc804\uc5d0\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://www.cygwin.com/"},"Cygwin"),"\uc774\ub098, VM\uc73c\ub85c \ub9ac\ub205\uc2a4 \ubc30\ud3ec\ud310(Ubuntu \ub4f1)\uc744 PC\uc5d0 \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc Cygwin\uc73c\ub85c\ub294 \uc628\uc804\ud55c \ub9ac\ub205\uc2a4 \uad6c\ud604\uc774 \uc548 \ub418\uace0, VM\uc73c\ub85c \ub9ac\ub205\uc2a4\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc740 \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4e4\uc5b4\uac11\ub2c8\ub2e4. \ub300\uc2e0 WSL\uc744 \uc0ac\uc6a9\ud558\uba74 Windows\uc5d0\uc11c \ud3b8\ub9ac\ud558\uac8c Linux\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"wsl\uc758-\uc7a5\uc810"},"WSL\uc758 \uc7a5\uc810"),(0,l.kt)("p",null,"WSL2\uc740 Windows PC \uc0ac\uc6a9\uc790\uac00, \ub9e5(darwin \uc6b4\uc601\uccb4\uc81c)\uc5d0\uc11c\uc640 \uac19\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac16\uac8c \ud574\uc90d\ub2c8\ub2e4. WSL\uc744 \uc124\uce58\ud574\uc11c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brew.sh/"},"homebrew")," \uac19\uc740 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\ub97c \uc0ac\uc6a9\ud574\uc11c \ud544\uc694\ud55c \ub3c4\uad6c\ub97c \uc190\uc27d\uac8c \uc124\uce58\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \uacbd\uc6b0 \ubb38\uc81c\uc758 \ud574\uacb0 \ubc29\ubc95\uc774 \ub418\ub294 unix \uc258 \uba85\ub839\uc5b4\ub97c \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("p",null,"\ubb34\uc5c7\ubcf4\ub2e4\ub3c4 \uc5b4\ub5a4 \ubb38\uc81c \ud574\uacb0 \ubc29\ubc95\uc744 \uacf5\uc720\ud560 \ub54c, ",(0,l.kt)("strong",{parentName:"p"},"Windows \uc0ac\uc6a9\uc790 \ub530\ub85c macOS \uc0ac\uc6a9\uc790 \ub530\ub85c \uac01\uac01 \ubc29\ubc95\uc744 \uae30\uc220\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ubbc0\ub85c")," \ud300\uc758 \uc815\ubcf4 \uacf5\uc720 \ud6a8\uc728\uacfc \uac1c\ubc1c \uc0dd\uc0b0\uc131\uc774 \uc62c\ub77c\uac11\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"wsl\uc758-\ub2e8\uc810"},"WSL\uc758 \ub2e8\uc810"),(0,l.kt)("p",null,"WSL\uc740 \uc2e4\uc81c \ub9ac\ub205\uc2a4 \ubc30\ud3ec\ud310\uacfc \ub2ec\ub77c\uc11c \uc11c\ubc84\uc6a9\uc73c\ub85c\ub294 \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. (\ud2b9\ud788 systemd \uc9c0\uc6d0 \uc548 \ub428)"),(0,l.kt)("p",null,"\ub300\uc2e0 \uc6b0\ub9ac\uac00 PC\uc6a9\uc73c\ub85c \uc4f0\uae30\uc5d0\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uc0ac\uc2e4\uc0c1 \ub2e8\uc810\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"),"."),(0,l.kt)("h2",{id:"\uc124\uce58-\ubc29\ubc95"},"\uc124\uce58 \ubc29\ubc95"),(0,l.kt)("p",null,"PowerShell\uc744 \uad00\ub9ac\uc790 \uad8c\ud55c\uc73c\ub85c \uc5f4\uace0,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wsl --install\n")),(0,l.kt)("p",null,"\ud558\uba74 \uc124\uce58\ub429\ub2c8\ub2e4. (Windows 11 \uae30\uc900)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"[English] Install Linux on Windows with WSL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/windows/wsl/install"},"[\ud55c\uad6d\uc5b4] WSL\uc744 \uc0ac\uc6a9\ud558\uc5ec Windows\uc5d0 Linux \uc124\uce58"))),(0,l.kt)("h2",{id:"\ucd94\uac00-windows-terminal"},"\ucd94\uac00: Windows Terminal"),(0,l.kt)("p",null,"WSL \ubc30\ud3ec\ud310(\uc608\ub97c \ub4e4\uba74, Ubuntu \ub4f1)\uc744 \uc9c1\uc811 \uc2e4\ud589\ud558\ub294 \uac83 \ubcf4\ub2e4\ub294 \uc708\ub3c4\uc6b0\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Windows Terminal\uc744 \uc0ac\uc6a9\ud574\uc11c \uc258\uc744 \uc2e4\ud589\ud558\uba74 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubcf5\uc0ac-\ubd99\uc5ec\ub123\uae30 \ub4f1 \ub2e8\ucd95\ud0a4 \uc0ac\uc6a9 \ubc0f \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8\uacfc\uc758 \ud638\ud658\uc131\uc774 \ub354 \uc88b\uace0 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701"},"[Microsoft Apps] Windows Terminal"))),(0,l.kt)("p",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\uc774 \ubb38\uc11c\ub294 \uc601\uc5b4\ub85c \ubc88\uc5ed\ub41c \ubc84\uc804\uc774 \uc788\uc2b5\ub2c8\ub2e4.\nThere is a English version of this document.\n",(0,l.kt)("a",{parentName:"p",href:"/blog/wsl2-eng"},"\ubc14\ub85c\uac00\uae30"))))}m.isMDXComponent=!0}}]);