(self.webpackChunk=self.webpackChunk||[]).push([[422],{35318:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38675:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>s,toc:()=>c,default:()=>p});var a=n(29603),o=n(50120),r=(n(27378),n(35318)),i={id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?"},s={unversionedId:"learn-comparisons",id:"learn-comparisons",isDocsHomePage:!1,title:"Polkadot Comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?",source:"@site/../docs/learn-comparisons.md",sourceDirName:".",slug:"/learn-comparisons",permalink:"/docs/learn-comparisons",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/website-v2/../docs/learn-comparisons.md",version:"current",lastUpdatedBy:"Bill Laboon",lastUpdatedAt:1618301477,formattedLastUpdatedAt:"4/13/2021",sidebar_label:"Other comparisons",frontMatter:{id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?"},sidebar:"docs",previous:{title:"Polkadot and Cosmos",permalink:"/docs/learn-comparisons-cosmos"},next:{title:"Builder's Portal",permalink:"/docs/build-index"}},c=[{value:"In-Depth Comparisons",id:"in-depth-comparisons",children:[]},{value:"Other Comparisons",id:"other-comparisons",children:[{value:"Ethereum 1.x",id:"ethereum-1x",children:[]}]},{value:"Binance Smart Chain",id:"binance-smart-chain",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot is a blockchain technology but makes some innovations that sets it apart from other popular\nchains."),(0,r.kt)("h2",{id:"in-depth-comparisons"},"In-Depth Comparisons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"learn-comparisons-ethereum-2"},"vs Ethereum 2.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"learn-comparisons-cosmos"},"vs Cosmos")))),(0,r.kt)("h2",{id:"other-comparisons"},"Other Comparisons"),(0,r.kt)("h3",{id:"ethereum-1x"},"Ethereum 1.x"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org"},"Ethereum")," is a smart contract blockchain that allows for general computation\nto be deployed on-chain and operated across the p2p network. Ethereum 1.x refers to the current\nEthereum release and the immediately planned future upgrades."),(0,r.kt)("p",null,"The difference between Ethereum 1.x and Polkadot is quite large. Ethereum is a single chain that\nallows developers to extend its functionality through the deployment of blobs of code onto the chain\n(called smart contracts). Polkadot, as described in the whitepaper, is a fully extensible and\nscalable blockchain network that provides security and interoperability through shared state."),(0,r.kt)("p",null,"In practical terms, this means that the layer of abstraction between these two projects is\nremarkably different for developers. In Ethereum, developers write smart contracts that all execute\non a single virtual machine. In Polkadot, however, developers write their logic into individual\nblockchains, where the interface is part of the state transition function of the blockchain itself.\nPolkadot will also support smart contract blockchains for Wasm and EVM to provide compatibility with\nexisting contracts, but will not have smart contract functionality on its core chain, the Relay\nChain."),(0,r.kt)("p",null,"As such, Polkadot is a possible augmentation and scaling method for Ethereum 1.x, rather than\ncompetition."),(0,r.kt)("h2",{id:"binance-smart-chain"},"Binance Smart Chain"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.binance.com"},"Binance Chain")," is a Proof of Stake Authority blockchain used to exchange\ndigital assets on Binance DEX. Binance Smart Chain is an EVM-compatible smart contract chain bridged\nto Binance Chain. Together they form the Binance Dual Chain System. Binance Smart Chain is also a\nProof of Stake Authority chain and allows users to create smart contracts and dapps."),(0,r.kt)("p",null,"Both chains are built with Cosmos SDK and therefore are a part of the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-comparisons-cosmos"},"Cosmos")," ecosystem. Due to specifics\nof the Cosmos architecture, interoperability of Binance Smart Chain is based on bridges. This means\nall validators of both chains are also bridge operators, therefore the security of the system relies\non trusting validators. At the moment, there are 21 Binance Smart Chain validator nodes."),(0,r.kt)("p",null,"Polkadot has an entirely different purpose, as it was built to connect and secure unique\nblockchains. It is a protocol on which single blockchains (such as Binance Smart Chain) could be\nbuilt and benefit from shared security, interoperability and scalability. Interoperability within\nPolkadot is based on pooled security on Polkadot, and the security of the entire Polkadot network,\nand has much stronger economic security."),(0,r.kt)("p",null,"Scalability based on bridges relies on each bridged chain finding its own set of validators,\ntherefore duplicate resources are required. Scalability on Polkadot is based on the security of the\nRelay Chain, and as the number of validators in the active set on Polkadot are increased, more\nparachains can be supported."))}p.isMDXComponent=!0}}]);