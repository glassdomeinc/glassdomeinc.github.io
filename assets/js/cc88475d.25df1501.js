"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[102],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,m=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(7462),l=(n(7294),n(4137));const o={slug:"clickhouse",title:"Installing Clickhouse on Kubernetes Hosted by NCloud and NHN Cloud",authors:"mike",tags:["clickhouse","kubernetes","helm","ncloud","nhn cloud"]},s=void 0,r={permalink:"/blog/clickhouse",source:"@site/blog/2022-11-03-clickhouse.md",title:"Installing Clickhouse on Kubernetes Hosted by NCloud and NHN Cloud",description:"This is a walkthrough of what I did to setup clickhouse databases on Kubernetes",date:"2022-11-03T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 3\uc77c",tags:[{label:"clickhouse",permalink:"/blog/tags/clickhouse"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"helm",permalink:"/blog/tags/helm"},{label:"ncloud",permalink:"/blog/tags/ncloud"},{label:"nhn cloud",permalink:"/blog/tags/nhn-cloud"}],readingTime:2.535,hasTruncateMarker:!0,authors:[{name:"Mike",title:"Software Engineer Intern",url:"https://github.com/dcl3",imageURL:"https://avatars.githubusercontent.com/u/56098714?v=4",key:"mike"}],frontMatter:{slug:"clickhouse",title:"Installing Clickhouse on Kubernetes Hosted by NCloud and NHN Cloud",authors:"mike",tags:["clickhouse","kubernetes","helm","ncloud","nhn cloud"]},nextItem:{title:"Go Low Capacity Binary",permalink:"/blog/go-minimal-binart-eng"}},i={authorsImageUrls:[void 0]},u=[{value:"Intro to Clickhouse",id:"intro-to-clickhouse",level:2},{value:"Installing Clickhouse onto Kubernetes Cluster with Helm",id:"installing-clickhouse-onto-kubernetes-cluster-with-helm",level:2},{value:"Installing on NCloud hosted Kubernetes Cluster",id:"installing-on-ncloud-hosted-kubernetes-cluster",level:2},{value:"Installing on NHN Cloud",id:"installing-on-nhn-cloud",level:2},{value:"Deploying a Storage Class",id:"deploying-a-storage-class",level:3},{value:"Modify Values of helm chart",id:"modify-values-of-helm-chart",level:3},{value:"Install using values-nhn.yaml",id:"install-using-values-nhnyaml",level:3},{value:"Testing",id:"testing",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is a walkthrough of what I did to setup clickhouse databases on Kubernetes"),(0,l.kt)("h2",{id:"intro-to-clickhouse"},"Intro to Clickhouse"),(0,l.kt)("p",null,"Clickhouse is a column-oriented database management system (DBMS) for online analytical processing of queries (OLAP)."),(0,l.kt)("p",null,"Clickhouse has great performance and can fufill our query needs at Glassdome. We were using Google Bigquery to fufill our databse needs, but the costs were becoming too expensive as we were scaling up. We also adopted a service agnostic approach that prevented us from relying on any one of the service."),(0,l.kt)("h2",{id:"installing-clickhouse-onto-kubernetes-cluster-with-helm"},"Installing Clickhouse onto Kubernetes Cluster with Helm"),(0,l.kt)("p",null,"We used the helm chart managed by ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/truecharts/clickhouse"},"TrueCharts")," to install Clickhouse."),(0,l.kt)("p",null,"We used the following values to configure Clickhouse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-values.yaml",metastring:'title="values.yaml"',title:'"values.yaml"'},'clickhouseDatabase: "<database name>"\nclickhouseUsername: "<username>"\nclickhousePassword: "<password>"\n\ntimezone: Asia/Seoul\n\nservice:\n  main:\n    ports:\n      native:\n        enabled: true\n        port: 9000\n        protocol: TCP\n        targetPort: 9000\n\nportal:\n  enabled: false\n\ningress:\n  main:\n    enabled: false\n')),(0,l.kt)("p",null,"Using the value file, we installed the helm release"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-upgrade.sh",metastring:'title="upgrade.sh"',title:'"upgrade.sh"'},'helm repo add truecharts https://charts.truecharts.org\nhelm repo update\n\nNAME="my-clickhouse"\nNAMESPACE="clickhouse"\nCHART="truecharts/clickhouse"\nVERSION="1.0.41"\n\nhelm upgrade --install $NAME $CHART --values values.yaml --version $VERSION --namespace $NAMESPACE --create-namespace\n')),(0,l.kt)("h2",{id:"installing-on-ncloud-hosted-kubernetes-cluster"},"Installing on NCloud hosted Kubernetes Cluster"),(0,l.kt)("p",null,"NCloud should have deployed a storage class so the instructions listed above should work"),(0,l.kt)("h2",{id:"installing-on-nhn-cloud"},"Installing on NHN Cloud"),(0,l.kt)("p",null,"NHN Cloud is not as well executed as NCloud so there are extra steps that we need before deploying the helm chart"),(0,l.kt)("h3",{id:"deploying-a-storage-class"},"Deploying a Storage Class"),(0,l.kt)("p",null,"Following the instructions on the NHN Cloud documentation for ",(0,l.kt)("a",{parentName:"p",href:"https://gov-docs.toast.com/ko/Container/NKS/ko/gov-user-guide/#2_2"},"Storage Class")," we used the following command to create a storage class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cat <<EOF | kubectl apply -f -\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: csi-storageclass\nprovisioner: cinder.csi.openstack.org\nvolumeBindingMode: WaitForFirstConsumer\nEOF\n")),(0,l.kt)("h3",{id:"modify-values-of-helm-chart"},"Modify Values of helm chart"),(0,l.kt)("p",null,"NHN Cloud Storage has a strange problem where we don't have proper permissions to access files in the container that the Clickhouse chart deploys."),(0,l.kt)("p",null,"This was quite frustrating because there was no documentation in the helm chart or in NHN Cloud documentation."),(0,l.kt)("p",null,"After a lot of trial and error, I got a configuration that was able to give the proper permissions to the container."),(0,l.kt)("p",null,"This is definitely not an ideal solution as it just gives root access to the container, but I could not find any other way to get it to work. Set the values as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-values-nhn.yaml",metastring:'title="values-nhn.yaml"',title:'"values-nhn.yaml"'},'clickhouseDatabase: "<database name>"\nclickhouseUsername: "<username>"\nclickhousePassword: "<password>"\n\ntimezone: Asia/Seoul\n\nservice:\n  main:\n    ports:\n      native:\n        enabled: true\n        port: 9000\n        protocol: TCP\n        targetPort: 9000\n\nportal:\n  enabled: false\n\ningress:\n  main:\n    enabled: false\n\nsecurityContext:\n  runAsGroup: 0\n  runAsNonRoot: false\n  runAsUser: 0\n')),(0,l.kt)("p",null,"It adds the values for securityContext so it runs as root."),(0,l.kt)("h3",{id:"install-using-values-nhnyaml"},"Install using values-nhn.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-upgrade-nhn.yaml",metastring:'title="upgrade-nhn.yaml"',title:'"upgrade-nhn.yaml"'},'helm repo add truecharts https://charts.truecharts.org\nhelm repo update\n\nNAME="my-clickhouse"\nNAMESPACE="clickhouse"\nCHART="truecharts/clickhouse"\nVERSION="1.0.41"\n\nhelm upgrade --install $NAME $CHART --values values-nhn.yaml --version $VERSION --namespace $NAMESPACE --create-namespace\n')),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"Follwing these steps, should result in a working Clickhouse database"),(0,l.kt)("p",null,"We deployed another application that would send queries to the Clickhouse database onto the Kubernetes Cluster"),(0,l.kt)("p",null,"Testing in Postman and on the actual production showed it works great"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"I hope it was helpful. Thanks")))}h.isMDXComponent=!0}}]);