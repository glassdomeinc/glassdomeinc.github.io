"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9245],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),o=n(6010),r=n(1048),i=n(3609),s=n(1943),p=n(2957);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:d,groupId:h,className:v}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[w,T]=(0,l.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=S.indexOf(t),a=k[n].value;a!==w&&(j(t),T(a),null!=h&&y(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},v)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:O,onClick:I},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,r.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},4400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(4137)),o=n(4259),r=n(425);const i={slug:"install-nodejs-with-nvm-eng",title:"Installing NodeJS with NVM",authors:"mike",tags:["nodejs"]},s=void 0,p={permalink:"/blog/install-nodejs-with-nvm-eng",source:"@site/blog/2022-10-29-install-nodejs-with-nvm-eng.mdx",title:"Installing NodeJS with NVM",description:"NVM is a tool that allows you to install multiple versions of NodeJS and replace them as needed.",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 29\uc77c",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:3.165,hasTruncateMarker:!0,authors:[{name:"Mike",title:"Software Engineer Intern",url:"https://github.com/dcl3",imageURL:"https://avatars.githubusercontent.com/u/56098714?v=4",key:"mike"}],frontMatter:{slug:"install-nodejs-with-nvm-eng",title:"Installing NodeJS with NVM",authors:"mike",tags:["nodejs"]},prevItem:{title:"\uc8fc\uae30\uc801\uc73c\ub85c \ud328\ud0a4\uc9c0 \uc5c5\ub370\uc774\ud2b8 (brew, nvm, npm, yarn \ub4f1)",permalink:"/blog/package-update"},nextItem:{title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",permalink:"/blog/install-nodejs-with-nvm"}},m={authorsImageUrls:[void 0]},u=[{value:"TypeScript and NodeJS",id:"typescript-and-nodejs",level:2},{value:"NVM (Node Version Manager)",id:"nvm-node-version-manager",level:2},{value:"How to Install",id:"how-to-install",level:2},{value:"Shell Configuration Settings",id:"shell-configuration-settings",level:3},{value:"Confirm Installation",id:"confirm-installation",level:3},{value:".nvmrc Settings File",id:"nvmrc-settings-file",level:2},{value:"Install the Latest NodeJSLTS Version",id:"install-the-latest-nodejslts-version",level:2},{value:"References",id:"references",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NVM is a tool that allows you to install multiple versions of NodeJS and replace them as needed."),(0,l.kt)("h2",{id:"typescript-and-nodejs"},"TypeScript and NodeJS"),(0,l.kt)("p",null,"The following programming languages are commonly used in Glassdome:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Software Development Team",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Backend Server Application Development: Go"),(0,l.kt)("li",{parentName:"ul"},"Frontend Client Web Application Development: TypeScript"))),(0,l.kt)("li",{parentName:"ul"},"Infra Team: Go, TypeScript"),(0,l.kt)("li",{parentName:"ul"},"AI/Data Team: Python")),(0,l.kt)("p",null,"Among them, the Infra team needs a scripting language for cloud development and infrastructure management, mainly using TypeScript."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NodeJS is required to run TypeScript")," so NodeJS must be installed first."),(0,l.kt)("h2",{id:"nvm-node-version-manager"},"NVM (Node Version Manager)"),(0,l.kt)("p",null,"NVM is a tool that allows you to install multiple versions of NodeJS and replace them as needed."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Similarly, ",(0,l.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go")," has ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moovweb/gvm"},"GVM"),") that installs and manages multiple versions.")),(0,l.kt)("p",null,"Let's assume the following circumstances:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Node 16 for AWS Lambda Function"),(0,l.kt)("li",{parentName:"ul"},"Use Node 17 when developing front-end web applications"),(0,l.kt)("li",{parentName:"ul"},"Server applications use Node 18")),(0,l.kt)("p",null,"Because you have to install multiple versions on one PC, upgrade or patch versions, and switch between them it would be very inconvenient to simply install one version."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"So I don't recommend following the download and installation instructions on the NodeJS website.")),(0,l.kt)("p",null,"It is more convenient to use NVM to install NodeJS and manage the version."),(0,l.kt)("h2",{id:"how-to-install"},"How to Install"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"Install & Update Script"))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n"))),(0,l.kt)(r.Z,{value:"wget",label:"wget",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n")))),(0,l.kt)("p",null,"You can use either ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"wget")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The version keeps changing, so please check the latest version then. (Version 0.39.2 as of October 2022)")),(0,l.kt)("h3",{id:"shell-configuration-settings"},"Shell Configuration Settings"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"When you install nvm, follow the instructions that are printed on the console.")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.bashrc\necho \'[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm\' >> ~/.bashrc\necho \'[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\' >> ~/.bashrc\n'))),(0,l.kt)(r.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.zshrc\necho \'[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm\' >> ~/.zshrc\necho \'[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\' >> ~/.zshrc\n')))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"After that, shut down the terminal completely (\u2318+Q) and run it again. Especially if the VSCode is running, you must shut down the VCode completely (\u2318+Q), restart the terminal, and then restart the VSCode.")),(0,l.kt)("h3",{id:"confirm-installation"},"Confirm Installation"),(0,l.kt)("p",null,"Type the following on the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"command -v nvm\n")),(0,l.kt)("p",null,"This output indicates that the installation is correct."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nvm\n")),(0,l.kt)("h2",{id:"nvmrc-settings-file"},".nvmrc Settings File"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"It is a method of managing NodeJS versions used between multiple projects so that they do not get tangled.")),(0,l.kt)("p",null,"What version of NodeJS execution environment should be used for each project?'.You can save it to an nvmrc` file and put it in the code store for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="lambda/.nvmrc"',title:'"lambda/.nvmrc"'},"16.18.0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="webapp/.nvmrc"',title:'"webapp/.nvmrc"'},"17.9.1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="server/.nvmrc"',title:'"server/.nvmrc"'},"18.12.0\n")),(0,l.kt)("p",null,"If there are a lot of projects,"),(0,l.kt)("p",null,"\uac01 \uac1c\ubc1c\uc790\uac00 \ud504\ub85c\uc81d\ud2b8\ub97c clone \ud55c \ub2e4\uc74c \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 \ub8e8\ud2b8 \uacbd\ub85c(",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc")," \ud30c\uc77c\uc774 \uc788\ub294 \uc704\uce58)\uc5d0\uc11c\nEach developer should clone a project in the root path of that project (where the '.nvmrc' file is located)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ nvm install\n$ nvm use\n")),(0,l.kt)("p",null,"This will set the corresponding NodeJS execution environment."),(0,l.kt)("h2",{id:"install-the-latest-nodejslts-version"},"Install the Latest NodeJSLTS Version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nvm install --lts\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--lts")," option installs (or upgrades) the latest Long-Term Support (LTS) version"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"I hope it was helpful. Thank you.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions"))))}d.isMDXComponent=!0}}]);