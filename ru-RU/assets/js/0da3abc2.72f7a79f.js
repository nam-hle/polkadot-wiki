(self.webpackChunk=self.webpackChunk||[]).push([[2551],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>p});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||n;return t?r.createElement(f,i(i({ref:a},h),{},{components:t})):r.createElement(f,i({ref:a},h))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8952:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>i,metadata:()=>s,toc:()=>l,default:()=>h});var r=t(22122),o=t(19756),n=(t(67294),t(3905)),i={id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture"},s={unversionedId:"learn-architecture",id:"learn-architecture",isDocsHomePage:!1,title:"Architecture",description:"Polkadot is a heterogeneous multichain with shared security and interoperability.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/learn-architecture.md",sourceDirName:".",slug:"/learn-architecture",permalink:"/polkadot-wiki/ru-RU/docs/learn-architecture",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-architecture.md",version:"current",sidebar_label:"Architecture",frontMatter:{id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture"},sidebar:"docs",previous:{title:"Polkadot Launch Phases",permalink:"/polkadot-wiki/ru-RU/docs/learn-launch"},next:{title:"Polkadot Accounts",permalink:"/polkadot-wiki/ru-RU/docs/learn-accounts"}},l=[{value:"Relay Chain",id:"relay-chain",children:[]},{value:"Parachain and Parathread Slots",id:"parachain-and-parathread-slots",children:[]},{value:"Shared Security",id:"shared-security",children:[]},{value:"Roles",id:"roles",children:[{value:"Validators",id:"validators",children:[]},{value:"Collators",id:"collators",children:[]},{value:"Nominators",id:"nominators",children:[]}]},{value:"Whiteboard Series",id:"whiteboard-series",children:[]}],c={toc:l};function h(e){var a=e.components,t=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Polkadot is a heterogeneous multichain with shared security and interoperability."),(0,n.kt)("h2",{id:"relay-chain"},"Relay Chain"),(0,n.kt)("p",null,"The Relay Chain is the central chain of Polkadot. All validators of Polkadot are staked on the Relay Chain in DOT and validate for the Relay Chain. The Relay Chain is composed of a relatively small number of transaction types that include ways to interact with the governance mechanism, parachain auctions, and participating in NPoS. The Relay Chain has deliberately minimal functionality - for instance, smart contracts are not supported. The main responsibility is to coordinate the system as a whole, including parachains. Other specific work is delegated to the parachains, which have differing implementations and features."),(0,n.kt)("h2",{id:"parachain-and-parathread-slots"},(0,n.kt)("a",{parentName:"h2",href:"learn-parachains"},"Parachain")," and ",(0,n.kt)("a",{parentName:"h2",href:"learn-parathreads"},"Parathread")," Slots"),(0,n.kt)("p",null,"Polkadot can support a number of execution slots. These slots are like cores on a computer's processor (a modern laptop's processor may have eight cores, for example). Each one of these cores can run one process at a time. Polkadot allots these slots using two subscription models: parachains and parathreads. Parachains have a dedicated slot (core) for their chain and are like a process that runs constantly. Parathreads share slots amongst a group, and are thus more like processes that need to be woken up and run less frequently."),(0,n.kt)("p",null,"Most of the computation that happens across the Polkadot network as a whole will be delegated to specific parachain or parathread implementations that handle various use cases. Polkadot places no constraints over what parachains are able to do besides that they must be able to generate a proof that can be validated by the validators assigned to the parachain. This proof verifies the state transition of the parachain. Some parachains may be specific to a particular application, others may focus on specific features like smart contracts, privacy, or scalability ","\u2014"," still others might be experimental architectures that are not necessarily blockchain in nature."),(0,n.kt)("p",null,"Polkadot provides many ways to secure a slot for a parachain slot for a particular length of time. Parathreads are part of a pool that shares slots and must win auctions for individual blocks. Parathreads and parachains have the exact same API; their difference is economic. Parachains will have to reserve DOT for duration of their slot lease; parathreads will pay on a per-block basis. Parathreads can become parachains, and vice-versa."),(0,n.kt)("h2",{id:"shared-security"},"Shared Security"),(0,n.kt)("p",null,"Parachains connected to the Polkadot Relay Chain all share in the security of the Relay Chain. Polkadot has a shared state between the Relay Chain and all of the connected parachains. If the Relay Chain must revert for any reason, then all of the parachains would also revert. This is to ensure that the validity of the entire system can persist and no individual part is corruptible."),(0,n.kt)("p",null,"The shared state makes it so that the trust assumptions when using Polkadot parachains are only those of the Relay Chain validator set, and no other. Since the validator set on the Relay Chain is expected to be secure with a large amount of stake put up to back it, it is desirable for parachains to benefit from this security."),(0,n.kt)("h2",{id:"roles"},"Roles"),(0,n.kt)("h3",{id:"validators"},"Validators"),(0,n.kt)("p",null,"Validators, if elected to the validator set, produce blocks on the Relay Chain. They also accept proofs of valid state transition from collators. In return, they will receive staking rewards."),(0,n.kt)("h3",{id:"collators"},"Collators"),(0,n.kt)("p",null,"Collators are full nodes on both a parachain and the Relay Chain. They collect parachain transactions and produce state transition proofs for the validators on the Relay Chain. They can also send and receive messages from other parachains using XCMP."),(0,n.kt)("h3",{id:"nominators"},"Nominators"),(0,n.kt)("p",null,"Nominators bond their stake to particular validators in order to help them get into the active validator set and thus produce blocks for the chain. In return, nominators are generally rewarded with the portion of the staking rewards from that validator."),(0,n.kt)("h2",{id:"whiteboard-series"},"Whiteboard Series"),(0,n.kt)("p",null,"For a video overview of the architecture of Polkadot watch the video below for the whiteboard interview with W3F researcher Alistair Stewart: ",(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xBfC6uTjvbM",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,mark:"crwd-mark"})))}h.isMDXComponent=!0}}]);