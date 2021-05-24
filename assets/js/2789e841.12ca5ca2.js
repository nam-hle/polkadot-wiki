(self.webpackChunk=self.webpackChunk||[]).push([[784],{3905:(t,e,o)=>{"use strict";o.d(e,{Zo:()=>c,kt:()=>u});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),d=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=d(o),u=n,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return o?a.createElement(m,i(i({ref:e},c),{},{components:o})):a.createElement(m,i({ref:e},c))}));function u(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},88246:(t,e,o)=>{"use strict";o.r(e),o.d(e,{frontMatter:()=>i,metadata:()=>l,toc:()=>s,default:()=>c});var a=o(22122),n=o(19756),r=(o(67294),o(3905)),i={id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host (PH)"},l={unversionedId:"learn-polkadot-host",id:"learn-polkadot-host",isDocsHomePage:!1,title:"Polkadot Host (PH)",description:"The architecture of Polkadot can be divided into two different parts, the Polkadot runtime and the",source:"@site/../docs/learn-polkadot-host.md",sourceDirName:".",slug:"/learn-polkadot-host",permalink:"/polkadot-wiki/docs/learn-polkadot-host",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-polkadot-host.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1618394968,formattedLastUpdatedAt:"4/14/2021",sidebar_label:"Polkadot Host (PH)",frontMatter:{id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host (PH)"}},s=[{value:"Components of the Polkadot host",id:"components-of-the-polkadot-host",children:[]},{value:"Diagram",id:"diagram",children:[]},{value:"Resources",id:"resources",children:[]}],d={toc:s};function c(t){var e=t.components,i=(0,n.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The architecture of Polkadot can be divided into two different parts, the Polkadot ",(0,r.kt)("em",{parentName:"p"},"runtime")," and the\nPolkadot ",(0,r.kt)("em",{parentName:"p"},"host"),". The Polkadot runtime is the core state transition logic of the chain and can be\nupgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot\nhost is the environment in which the runtime executes and is expected to remain stable and mostly\nstatic over the lifetime of Polkadot."),(0,r.kt)("p",null,"The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this\nreason, implementation teams can build an alternative implementation of the Polkadot host while\ntreating the Polkadot runtime as a black box. For more details of the interactions between the host\nand the runtime, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-spec/"},"specification"),"."),(0,r.kt)("h2",{id:"components-of-the-polkadot-host"},"Components of the Polkadot host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networking components such as Libp2p that facilitates network interactions."),(0,r.kt)("li",{parentName:"ul"},"State storage and the storage trie along with the database layer."),(0,r.kt)("li",{parentName:"ul"},"Consensus engine for GRANDPA and BABE."),(0,r.kt)("li",{parentName:"ul"},"Wasm interpreter and virtual machine."),(0,r.kt)("li",{parentName:"ul"},"Low level primitives for a blockchain, such as cryptographic primitives like hash functions.")),(0,r.kt)("p",null,"A compiled Polkadot runtime, a blob of Wasm code, can be uploaded into the Polkadot host and used as\nthe logic for the execution of state transitions. Without a runtime, the Polkadot host is unable to\nmake state transitions or produce any blocks."),(0,r.kt)("h2",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,"Below is a diagram that displays the Polkadot host surrounding the Polkadot runtime. Think of the\nruntime (in white) as a component that can be inserted, swapped out, or removed entirely. While the\nparts in grey are stable and can not change without an explicit hard fork."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot host",src:o(46806).Z})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot Host Protocol Specification")," - Incubator for the\nPolkadot Host spec, including tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafeSystems/go-pre"},"ChainSafe's Go PH")," is a 25-person development team\nbased in Toronto, Canada. ChainSafe is building an implementation of the beacon chain for Ethereum\n2.0 client in TypeScript and this Go implementation of Polkadot.")))}c.isMDXComponent=!0},46806:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});const a=o.p+"assets/images/updated_pre-d5849e650527f0dc796f8cad044d1f35.png"}}]);