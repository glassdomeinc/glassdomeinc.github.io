"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5813],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),l=n(6010),o=n(1048),i=n(3609),s=n(1943),u=n(2957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:b,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,s.U)(),[j,k]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==j&&h.some((t=>t.value===e))&&k(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==j&&(N(t),k(r),null!=b&&O(b,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:T},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},7225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));n(4259),n(425);const l={slug:"install-nodejs-with-nvm",title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",authors:"david",tags:["nodejs"]},o=void 0,i={permalink:"/blog/install-nodejs-with-nvm",source:"@site/blog/2022-10-29-install-nodejs-with-nvm.mdx",title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",description:"NVM\uc740 \uc5ec\ub7ec \ubc84\uc804\uc758 NodeJS\ub97c \uc124\uce58\ud574\ub450\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ubc84\uc804\uc744 \ubc14\uafd4\uac00\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4.",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 29\uc77c",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:5.155,hasTruncateMarker:!0,authors:[{name:"\uc774\ud604\uc218",title:"Senior Engineer",url:"https://github.com/civilizeddev",imageURL:"https://github.com/civilizeddev.png",key:"david"}],frontMatter:{slug:"install-nodejs-with-nvm",title:"NVM\uc73c\ub85c NodeJS \uc124\uce58\ud558\uae30",authors:"david",tags:["nodejs"]},prevItem:{title:"Installing NodeJS with NVM",permalink:"/blog/install-nodejs-with-nvm-eng"},nextItem:{title:"Using homebrew on Linux",permalink:"/blog/homebrew-eng"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NVM\uc740 \uc5ec\ub7ec \ubc84\uc804\uc758 NodeJS\ub97c \uc124\uce58\ud574\ub450\uace0, \ud544\uc694\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ubc84\uc804\uc744 \ubc14\uafd4\uac00\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4."))}p.isMDXComponent=!0}}]);