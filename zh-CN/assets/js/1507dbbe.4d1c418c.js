(self.webpackChunk=self.webpackChunk||[]).push([[2273],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2912:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>p,default:()=>s});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations"},l={unversionedId:"learn-implementations",id:"learn-implementations",isDocsHomePage:!1,title:"Polkadot Implementations",description:"There are Polkadot implementations developed in Rust, C++, Go, and JavaScript.",source:"@site/../docs/learn-implementations.md",sourceDirName:".",slug:"/learn-implementations",permalink:"/zh-CN/docs/learn-implementations",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-implementations.md",version:"current",lastUpdatedBy:"Kirsten Richard",lastUpdatedAt:1599671381,formattedLastUpdatedAt:"2020/9/10",sidebar_label:"Polkadot Implementations",frontMatter:{id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations"}},p=[{value:"Why build multiple implementations?",id:"why-build-multiple-implementations",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are Polkadot implementations developed in Rust, C++, Go, and JavaScript."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},(0,r.kt)("strong",{parentName:"a"},"Parity Polkadot"))," - The Rust client is developed by\nParity Technologies in concert with their work on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/kagome"},(0,r.kt)("strong",{parentName:"a"},"Kagome"))," - C++ implementation of the Polkadot Host being\nbuilt by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soramitsu"},"Soramitsu"),", a Japanese digital identity company that\npreviously developed ",(0,r.kt)("a",{parentName:"p",href:"https://iroha.tech"},"Hyperledger Iroha"),". They were awarded a grant from the\nWeb3 Foundation and plan to release Kagome by\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/web3foundation/w3f-grants-soramitsu-to-implement-polkadot-runtime-environment-in-c-cf3baa08cbe6"},"November 2019"),".\nAs part of the process they are developing a libp2p networking layer in C++."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafeSystems/gossamer"},(0,r.kt)("strong",{parentName:"a"},"Gossamer"))," - A Go implementation being built by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafeSystems"},"ChainSafe Systems"),", a 23-person development team in Toronto\nthat is also building an Eth2.0 Serenity client.\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/web3foundation/w3f-grants-chainsafe-to-implement-polkadot-runtime-environment-in-go-ca4973c9edaf"},"Grant announcement"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS"))," - A JavaScript\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/client"},"client")," and tool set developed by\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/"},"Polkadot-JS"),"."),(0,r.kt)("h2",{id:"why-build-multiple-implementations"},"Why build multiple implementations?"),(0,r.kt)("p",null,"As stated in the Soramitsu grant announcement:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is critically important to have multiple implementations of the Polkadot protocol for a number\nof reasons, including decentralization, knowledge dispersion, and better definitions of the\nprotocol... Multiple implementations of Polkadot improves network resilience and adds to the\ndecentralization of the network. The governance of the network is more democratized when multiple\nteams build clients that run the nodes in the network.")))}s.isMDXComponent=!0}}]);