(self.webpackChunk=self.webpackChunk||[]).push([[5285],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(b,s(s({ref:t},m),{},{components:a})):r.createElement(b,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36166:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,metadata:()=>o,toc:()=>l,default:()=>m});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),s={id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)"},o={unversionedId:"learn-wasm",id:"learn-wasm",isDocsHomePage:!1,title:"WebAssembly (Wasm)",description:"WebAssembly is used in Polkadot and Substrate as the compilation target for the runtime.",source:"@site/../docs/learn-wasm.md",sourceDirName:".",slug:"/learn-wasm",permalink:"/ru/docs/learn-wasm",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-wasm.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1618458159,formattedLastUpdatedAt:"15.04.2021",sidebar_label:"WebAssembly (Wasm)",frontMatter:{id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)"},sidebar:"docs",previous:{title:"SPREE",permalink:"/ru/docs/learn-spree"},next:{title:"Sequential Phragm\xe9n Method",permalink:"/ru/docs/learn-phragmen"}},l=[{value:"What is WebAssembly?",id:"what-is-webassembly",children:[]},{value:"Why WebAssembly?",id:"why-webassembly",children:[{value:"Forkless Upgrades",id:"forkless-upgrades",children:[]}]},{value:"Resources",id:"resources",children:[]}],c={toc:l};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WebAssembly is used in Polkadot and Substrate as the compilation target for the runtime."),(0,i.kt)("h2",{id:"what-is-webassembly"},"What is WebAssembly?"),(0,i.kt)("p",null,"WebAssembly, shortened to simply ",(0,i.kt)("em",{parentName:"p"},"Wasm"),", is a binary instruction format for a stack-based virtual\nmachine. Wasm is designed as a portable target for compilation of high-level languages like\nC/C++/Rust, enabling deployment on the web for client and server applications."),(0,i.kt)("h2",{id:"why-webassembly"},"Why WebAssembly?"),(0,i.kt)("p",null,"WebAssembly is a platform agnostic binary format, meaning that it will run the same instructions\nacross whatever machine it is operating on. Blockchains need determinancy in order to have reliable\nstate transition updates across all nodes in the peer-to-peer network without forcing every peer to\nrun the same exact hardware. Wasm is a nice fit for reliability among the possibly diverse set of\nmachines. Wasm is both efficient and fast. The efficiency means that it can be uploaded onto the\nchain as a blob of code without causing too much state bloat while keeping its ability to execute at\nnear-native speeds."),(0,i.kt)("h3",{id:"forkless-upgrades"},"Forkless Upgrades"),(0,i.kt)("p",null,"By using Wasm in Substrate, the framework powering Polkadot, Kusama, and many connecting chains, the\nchains are given the ability to upgrade their runtime logic without hard forking. Hard forking is a\nstandard method of upgrading a blockchain that is slow, inefficient, and error prone due to the\nlevels of offline coordination required, and thus the propensity to bundle many upgrades into one\nlarge-scale event. By deploying Wasm on-chain and having nodes auto-enact the new logic at a certain\nblock height, upgrades can be small, isolated, and very specific."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WebAssembly.org")," - WebAssembly homepage that contains a link to the\nspec."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasmi"},"Wasmi")," - WebAssembly interpreter written in Rust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-Wasm"},"Parity Wasm")," - WebAssembly\nserialization/deserialization in Rust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasm-utils"},"Wasm utils")," - Collection of Wasm utilities used in\nParity and Wasm contract development.")))}m.isMDXComponent=!0}}]);