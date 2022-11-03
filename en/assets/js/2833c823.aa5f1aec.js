"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8278],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,v=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(1048),i=n(3609),s=n(1943),p=n(2957);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:v,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,s.U)(),[T,w]=(0,l.useState)(g),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=v){const e=f[v];null!=e&&e!==T&&b.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==T&&(O(t),w(a),null!=v&&y(v,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:j},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},9073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(4137)),r=n(4259),o=n(425);const i={slug:"install-nodejs-with-nvm",title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",authors:"david",tags:["nodejs"]},s=void 0,p={permalink:"/en/blog/install-nodejs-with-nvm",source:"@site/blog/2022-10-29-install-nodejs-with-nvm.mdx",title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",description:"NVM\uc740 \uc5ec\ub7ec \ubc84\uc804\uc758 NodeJS\ub97c \uc124\uce58\ud574\ub450\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ubc84\uc804\uc744 \ubc14\uafd4\uac00\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4.",date:"2022-10-29T00:00:00.000Z",formattedDate:"October 29, 2022",tags:[{label:"nodejs",permalink:"/en/blog/tags/nodejs"}],readingTime:5.155,hasTruncateMarker:!0,authors:[{name:"\uc774\ud604\uc218",title:"Senior Engineer",url:"https://github.com/civilizeddev",imageURL:"https://github.com/civilizeddev.png",key:"david"}],frontMatter:{slug:"install-nodejs-with-nvm",title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",authors:"david",tags:["nodejs"]},prevItem:{title:"Installing NodeJS with NVM",permalink:"/en/blog/install-nodejs-with-nvm-eng"},nextItem:{title:"Using homebrew on Linux",permalink:"/en/blog/homebrew-eng"}},m={authorsImageUrls:[void 0]},u=[{value:"TypeScript\uc640 NodeJS",id:"typescript\uc640-nodejs",level:2},{value:"NVM (Node Version Manager)",id:"nvm-node-version-manager",level:2},{value:"\uc124\uce58 \ubc29\ubc95",id:"\uc124\uce58-\ubc29\ubc95",level:2},{value:"\uc258 \ud658\uacbd \uc124\uc815",id:"\uc258-\ud658\uacbd-\uc124\uc815",level:3},{value:"\uc124\uce58 \ud655\uc778",id:"\uc124\uce58-\ud655\uc778",level:3},{value:".nvmrc \uc124\uc815 \ud30c\uc77c",id:"nvmrc-\uc124\uc815-\ud30c\uc77c",level:2},{value:"\ucd5c\uc2e0 NodeJS LTS \ubc84\uc804 \uc124\uce58\ud558\uae30",id:"\ucd5c\uc2e0-nodejs-lts-\ubc84\uc804-\uc124\uce58\ud558\uae30",level:2},{value:"References",id:"references",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NVM\uc740 \uc5ec\ub7ec \ubc84\uc804\uc758 NodeJS\ub97c \uc124\uce58\ud574\ub450\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ubc84\uc804\uc744 \ubc14\uafd4\uac00\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"typescript\uc640-nodejs"},"TypeScript\uc640 NodeJS"),(0,l.kt)("p",null,"\uae00\ub798\uc2a4\ub3d4\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SW\uac1c\ubc1c\ud300",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Backend \uc11c\ubc84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c: Go"),(0,l.kt)("li",{parentName:"ul"},"Frontend \ud074\ub77c\uc774\uc5b8\ud2b8 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c: TypeScript"))),(0,l.kt)("li",{parentName:"ul"},"Infra\ud300: Go, TypeScript"),(0,l.kt)("li",{parentName:"ul"},"AI/Data\ud300: Python")),(0,l.kt)("p",null,"\uadf8\uc911\uc5d0\uc11c Infra\ud300\uc740 \ud074\ub77c\uc6b0\ub4dc \uac1c\ubc1c\uacfc \uc778\ud504\ub77c \uad00\ub9ac\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8 \uc5b8\uc5b4\uac00 \ud544\uc694\ud55c\ub370, TypeScript\ub97c \uc8fc\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TypeScript\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 NodeJS\uac00 \ud544\uc694"),"\ud558\uae30 \ub54c\ubb38\uc5d0 \uba3c\uc800 NodeJS\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"nvm-node-version-manager"},"NVM (Node Version Manager)"),(0,l.kt)("p",null,"NVM\uc740 \uc5ec\ub7ec \ubc84\uc804\uc758 NodeJS\ub97c \uc124\uce58\ud574\ub450\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ubc84\uc804\uc744 \ubc14\uafd4\uac00\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ube44\uc2b7\ud558\uac8c ",(0,l.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go"),"\ub3c4 \uc5ec\ub7ec \ubc84\uc804\uc744 \uc124\uce58\ud558\uace0 \uad00\ub9ac\ud574\uc8fc\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moovweb/gvm"},"GVM"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0\ub97c \uac00\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AWS Lambda Function\uc5d0\ub294 Node 16 \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c\ub294 Node 17 \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 Node 18\uc744 \uc0ac\uc6a9")),(0,l.kt)("p",null,"\ud55c PC\uc5d0\uc11c\ub3c4 \uc5ec\ub7ec \ubc84\uc804\uc774 \uc124\uce58\ub418\uc5b4\uc57c \ud558\uace0, \ub610 \ub54c\ub54c\ub85c \ubc84\uc804 \uc5c5\uadf8\ub808\uc774\ub4dc\ub098 \ud328\uce58\ub3c4 \ud574\uc918\uc57c \ud558\uace0, \ubc14\uafd4\uac00\uba74\uc11c \uc0ac\uc6a9\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e8\uc21c\ud788 \ud55c \uac00\uc9c0 \ubc84\uc804\ub9cc \uc124\uce58\ud558\ub294 \ubc29\ubc95\ub9cc\uc73c\ub85c\ub294 \ub9e4\uc6b0 \ubd88\ud3b8\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\uadf8\ub798\uc11c NodeJS \ud648\ud398\uc774\uc9c0\uc5d0 \ub4e4\uc5b4\uac00\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc544\uc11c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc740 \ucd94\ucc9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\ub7f4 \ub584 NVM\uc744 \uc0ac\uc6a9\ud574\uc11c NodeJS\ub97c \uc124\uce58\ud558\uace0 \ubc84\uc804\uc744 \uad00\ub9ac\ud558\uba74 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc124\uce58-\ubc29\ubc95"},"\uc124\uce58 \ubc29\ubc95"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"Install & Update Script"))),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n"))),(0,l.kt)(o.Z,{value:"wget",label:"wget",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"wget")," \ub458 \uc911 \uc544\ubb34 \uac70\ub098 \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\ubc84\uc804\uc740 \uacc4\uc18d \ubc14\ub00c\ub2c8\uae4c \uadf8\ub54c\uadf8\ub54c \ucd5c\uc2e0 \ubc84\uc804\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694. (2022\ub144 10\uc6d4 \ud604\uc7ac \ubc84\uc804 0.39.2)")),(0,l.kt)("h3",{id:"\uc258-\ud658\uacbd-\uc124\uc815"},"\uc258 \ud658\uacbd \uc124\uc815"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"nvm\uc744 \uc124\uce58\ud560 \ub54c \ucf58\uc194\uc5d0 \ucd9c\ub825\ub418\ub294 \ubc29\ubc95\ub300\ub85c \ub530\ub77c\ud558\uba74 \ub429\ub2c8\ub2e4.")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.bashrc\necho \'[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm\' >> ~/.bashrc\necho \'[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\' >> ~/.bashrc\n'))),(0,l.kt)(o.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.zshrc\necho \'[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm\' >> ~/.zshrc\necho \'[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\' >> ~/.zshrc\n')))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\ud558\uace0 \ub098\uba74 \ud130\ubbf8\ub110\uc744 \uc644\uc804\ud788 \uc885\ub8cc(\u2318+Q)\ud558\uace0 \ub2e4\uc2dc \uc2e4\ud589\ud574\uc8fc\uc138\uc694. \ud2b9\ud788 VSCode\uac00 \uc2e4\ud589\uc911\uc774\ub77c\uba74, VScode\ub97c \uc644\uc804\ud788 \uc885\ub8cc\ud558\uace0(\u2318+Q) \ud130\ubbf8\ub110\uc744 \uc7ac\uc2dc\uc791\ud55c \ud6c4\uc5d0 VSCode\ub97c \uc7ac\uc2dc\uc791\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc124\uce58-\ud655\uc778"},"\uc124\uce58 \ud655\uc778"),(0,l.kt)("p",null,"\uba85\ub839\uc904\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"command -v nvm\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \ucd9c\ub825\ub418\uba74 \uc124\uce58\uac00 \uc62c\ubc14\ub974\uac8c \ub41c \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nvm\n")),(0,l.kt)("h2",{id:"nvmrc-\uc124\uc815-\ud30c\uc77c"},".nvmrc \uc124\uc815 \ud30c\uc77c"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\uc5ec\ub7ec \ud504\ub85c\uc81d\ud2b8 \uac04\uc5d0 \uc0ac\uc6a9\ud558\ub294 NodeJS \ubc84\uc804\uc774 \uc5c9\ud0a4\uc9c0 \uc54a\ub3c4\ub85d \uad00\ub9ac\ud574\uc8fc\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uac01 \ud504\ub85c\uc81d\ud2b8 \ub9c8\ub2e4 \uc5b4\ub5a4 \ubc84\uc804\uc758 NodeJS \uc2e4\ud589 \ud658\uacbd\uc744 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uc9c0\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc")," \ud30c\uc77c\uc5d0 \uc800\uc7a5\ud574\ub193\uace0 \ucf54\ub4dc \uc800\uc7a5\uc18c\uc5d0 \uc62c\ub824\ub193\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="lambda/.nvmrc"',title:'"lambda/.nvmrc"'},"16.18.0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="webapp/.nvmrc"',title:'"webapp/.nvmrc"'},"17.9.1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="server/.nvmrc"',title:'"server/.nvmrc"'},"18.12.0\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \uc5ec\ub7ec \ud504\ub85c\uc81d\ud2b8\uac00 \uc788\ub2e4\uba74,"),(0,l.kt)("p",null,"\uac01 \uac1c\ubc1c\uc790\uac00 \ud504\ub85c\uc81d\ud2b8\ub97c clone \ud55c \ub2e4\uc74c \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 \ub8e8\ud2b8 \uacbd\ub85c(",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc")," \ud30c\uc77c\uc774 \uc788\ub294 \uc704\uce58)\uc5d0\uc11c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ nvm install\n$ nvm use\n")),(0,l.kt)("p",null,"\ud574\uc8fc\uba74 \ud574\ub2f9 NodeJS \uc2e4\ud589 \ud658\uacbd\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ucd5c\uc2e0-nodejs-lts-\ubc84\uc804-\uc124\uce58\ud558\uae30"},"\ucd5c\uc2e0 NodeJS LTS \ubc84\uc804 \uc124\uce58\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nvm install --lts\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--lts")," \uc635\uc158\uc744 \ubd99\uc774\uba74 \ucd5c\uc2e0 LTS(Long-Term Support) \ubc84\uc804\uc744 \uc124\uce58(\ud639\uc740 \uc5c5\uadf8\ub808\uc774\ub4dc) \ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\ub3c4\uc6c0\uc774 \ub418\uc168\uae38 \ubc14\ub78d\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions"))))}d.isMDXComponent=!0}}]);