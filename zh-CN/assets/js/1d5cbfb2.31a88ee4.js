(self.webpackChunk=self.webpackChunk||[]).push([[5962],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),s=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:e},c),{},{components:n})):o.createElement(h,a({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54717:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>a,metadata:()=>l,toc:()=>u,default:()=>c});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},l={unversionedId:"build-integration",id:"build-integration",isDocsHomePage:!1,title:"Polkadot Integration Guide",description:"Welcome to the Polkadot integration guide. This guide will provide all the information you need to get started on your integration. The target audiences for this guide are wallets and custodians, but it will be useful to any infrastructure provider such as validators or chain indexers.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/build-integration.md",sourceDirName:".",slug:"/build-integration",permalink:"/polkadot-wiki/zh-CN/docs/build-integration",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-integration.md",version:"current",sidebar_label:"Integration Initiation",frontMatter:{id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"}},u=[{value:"Structure",id:"structure",children:[]},{value:"Recommendation",id:"recommendation",children:[]}],s={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the Polkadot integration guide. This guide will provide all the information you need to get started on your integration. The target audiences for this guide are wallets and custodians, but it will be useful to any infrastructure provider such as validators or chain indexers."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"The guide focuses on Polkadot and Kusama, but the principles will apply to parachains and other Substrate-based chains. The guide contains four sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-protocol-info"},"Protocol Info"),": The entry point to the guide. Please read it carefully as it provides information about Polkadot that differentiates it from other blockchains. Use this page to check your assumptions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-node-management"},"Node Management"),": This page will guide you to starting and monitoring a node."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-node-interaction"},"Node Interaction"),": This page will teach you to interact with your node via multiple RPC tooling options."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-transaction-construction"},"Transaction Construction"),": A guide to transaction construction, signing, decoding, and serialization using several available tools.")),(0,i.kt)("h2",{id:"recommendation"},"Recommendation"),(0,i.kt)("p",null,"Each page in the guide, especially the Node Interaction and Transaction Construction pages, tries to list several options to accomplish the same thing. We want you to know your options and choose the solution that is best for you."),(0,i.kt)("p",null,"That said, the easiest path to integration is almost always to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," to interact with your node and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper"},"TxWrapper")," to construct and sign transactions. Parity and Web3 Foundation will be able to provide the best support if you use these tools."),(0,i.kt)("p",null,"If your team would like support, join some of our ",(0,i.kt)("a",{parentName:"p",href:"community"},"community channels")," or contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network"),"."))}c.isMDXComponent=!0}}]);