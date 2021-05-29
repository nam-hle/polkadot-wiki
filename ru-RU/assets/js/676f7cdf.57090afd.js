(self.webpackChunk=self.webpackChunk||[]).push([[4463],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||n;return a?o.createElement(m,l(l({ref:t},p),{},{components:a})):o.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11942:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>s,default:()=>p});var o=a(22122),r=a(19756),n=(a(67294),a(3905)),l={id:"learn-collator",title:"Collator",sidebar_label:"Collator"},i={unversionedId:"learn-collator",id:"learn-collator",isDocsHomePage:!1,title:"Collator",description:"Collators maintain parachains by collecting parachain transactions from users and producing state transition proofs for Relay Chain validators. In other words, collators maintain parachains by aggregating parachain transactions into parachain block candidates and producing state transition proofs for validators based on those blocks.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/learn-collator.md",sourceDirName:".",slug:"/learn-collator",permalink:"/polkadot-wiki/ru-RU/docs/learn-collator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-collator.md",version:"current",sidebar_label:"Collator",frontMatter:{id:"learn-collator",title:"Collator",sidebar_label:"Collator"},sidebar:"docs",previous:{title:"Validator",permalink:"/polkadot-wiki/ru-RU/docs/learn-validator"},next:{title:"Governance",permalink:"/polkadot-wiki/ru-RU/docs/learn-governance"}},s=[{value:"XCMP",id:"xcmp",children:[]},{value:"Collators in the Wild",id:"collators-in-the-wild",children:[]},{value:"Guides and Tools",id:"guides-and-tools",children:[]}],c={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Collators maintain parachains by collecting parachain transactions from users and producing state transition proofs for Relay Chain validators. In other words, collators maintain parachains by aggregating parachain transactions into parachain block candidates and producing state transition proofs for validators based on those blocks."),(0,n.kt)("p",null,"A collator cannot continue building blocks on a parachain until the block candidate they proposed to the Relay Chain validators has been validated."),(0,n.kt)("p",null,"Collators maintain a full-node for the Relay Chain, and a full-node for their particular parachain; meaning they retain all necessary information to be able to author new blocks and execute transactions in much the same way as miners do on current PoW blockchains. Under normal circumstances, they will collate and execute transactions to create an unsealed block and provide it, together with a proof of state transition, to one or more validators responsible for proposing a parachain block."),(0,n.kt)("p",null,"Unlike validators, collator nodes do not secure the network. If a parachain block is invalid, it will get rejected by validators. Therefore the assumption that having more collators is better or more secure is not correct. On the contrary, too many collators may slow down the network. The only nefarious power collators have is transaction censorship. To prevent censorship, a parachain only need ensure that there exist some neutral collators - but not necessarily a majority. Theoretically the censorship problem is solved with having just one honest collator."),(0,n.kt)("h3",{id:"xcmp"},"XCMP"),(0,n.kt)("p",null,"Collators are a key element of ",(0,n.kt)("a",{parentName:"p",href:"learn-crosschain"},"XCMP (Cross-Chain Message Passing)"),". By being full-nodes of the Relay Chain, they are all aware of each other as peers. This makes it possible for them to send messages from parachain A to parachain B."),(0,n.kt)("h3",{id:"collators-in-the-wild"},"Collators in the Wild"),(0,n.kt)("p",null,"Collators are being used on the ",(0,n.kt)("a",{parentName:"p",href:"build-parachains-rococo"},"Rococo")," testnet, and you can learn more about how they are used with Cumulus via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/"},"Cumulus")," repository."),(0,n.kt)("h3",{id:"guides-and-tools"},"Guides and Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://substrate.dev/cumulus-workshop/"},"Workshop covering Cumulus and Collators")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/en/build-parachains-rococo"},"Rococo tesnet guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shawntabrizi/polkadot-launch"},"polkadot-launch")," - a tool to quickly spin up a local Polkadot testnet based on some parameters like number of parachains, collator setup, etc.")))}p.isMDXComponent=!0}}]);