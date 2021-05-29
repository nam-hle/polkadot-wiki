(self.webpackChunk=self.webpackChunk||[]).push([[4816],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>u,kt:()=>m});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?r.createElement(h,n(n({ref:e},u),{},{components:a})):r.createElement(h,n({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,n=new Array(i);n[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,n[1]=l;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88544:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>n,metadata:()=>l,toc:()=>s,default:()=>u});var r=a(22122),o=a(19756),i=(a(67294),a(3905)),n={id:"learn-validator",title:"Validator",sidebar_label:"Validator"},l={unversionedId:"learn-validator",id:"learn-validator",isDocsHomePage:!1,title:"Validator",description:"Validators secure the Relay Chain by staking DOT, validating proofs from collators and participating in consensus with other validators.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/learn-validator.md",sourceDirName:".",slug:"/learn-validator",permalink:"/polkadot-wiki/ru-RU/docs/learn-validator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-validator.md",version:"current",sidebar_label:"Validator",frontMatter:{id:"learn-validator",title:"Validator",sidebar_label:"Validator"},sidebar:"docs",previous:{title:"Nominator",permalink:"/polkadot-wiki/ru-RU/docs/learn-nominator"},next:{title:"Collator",permalink:"/polkadot-wiki/ru-RU/docs/learn-collator"}},s=[{value:"Guides",id:"guides",children:[]},{value:"Other References",id:"other-references",children:[]},{value:"Security / Key Management",id:"security--key-management",children:[]},{value:"Monitoring Tools",id:"monitoring-tools",children:[]},{value:"Validator Stats",id:"validator-stats",children:[]}],d={toc:s};function u(t){var e=t.components,a=(0,o.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Validators secure the Relay Chain by staking DOT, validating proofs from collators and participating in consensus with other validators."),(0,i.kt)("p",null,"These participants will play a crucial role in adding new blocks to the Relay Chain and, by extension, to all parachains. This allows parties to complete cross-chain transactions via the Relay Chain."),(0,i.kt)("p",null,"Validators perform two functions. First, verifying that the information contained in an assigned set of parachain blocks is valid (such as the identities of the transacting parties and the subject matter of the contract). Their second role is to participate in the consensus mechanism to produce the Relay Chain blocks based on validity statements from other validators. Any instances of non-compliance with the consensus algorithms result in punishment by removal of some or all of the validator\u2019s staked DOT, thereby discouraging bad actors. Good performance, however, will be rewarded, with validators receiving block rewards (including transaction fees) in the form of DOT in exchange for their activities."),(0,i.kt)("h2",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-validate-polkadot"},"How to Validate on Polkadot")," - Guide on how to set up a validator on the Polkadot live network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-validator-payout"},"Validator Payout Overview")," - A short overview on how the validator payout mechanism works."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-systemd"},"How to run your validator as a systemd process")," - Guide on running your validator as a ",(0,i.kt)("inlineCode",{parentName:"li"},"systemd")," process so that it will run in the background and start automatically on reboots."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-upgrade"},"How to Upgrade your Validator")," - Guide for securely upgrading your validator when you want to switch to a different machine or begin running the latest version of client code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-use-polkadot-secure-validator"},"How to Use Secure Validator Setup")," - Guide on how to use Polkadot / Kusama secure validator setup.")),(0,i.kt)("h2",{id:"other-references"},"Other References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f"},"How to run a Polkadot node (Docker)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d"},"A Serverless Failover Solution for Web3.0 Validator Nodes")," - Blog that details how to create a robust failover solution for running validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-validate-kusama#vps-list"},"VPS list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation"},"Polkadot Validator Lounge")," - A place to chat about being a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/en/learn-staking#slashing"},"Slashing Consequences")," - Learn more about slashing consequences for running a validator node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2"},"Why You Should be A Validator on Polkadot and Kusama")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15"},"Roles and Responsibilities of a Validator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/validating-on-polkadot"},"Validating on Polkadot")," - An explanation of how to validate on Polkadot, with Joe Petrowski and David Dorgan of Parity Technologies, along with Tim Ogilvie from Staked.")),(0,i.kt)("h2",{id:"security--key-management"},"Security / Key Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/validator-security"},"Validator Security Overview"))),(0,i.kt)("h2",{id:"monitoring-tools"},"Monitoring Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Polkadot")," - A monitoring and alerting solution for Polkadot / Kusama node"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Kusama%20CC3"},"Polkadot Telemetry Service")," - Network information, including what nodes are running on a given chain, what software versions they are running, and sync status."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forum.web3.foundation/t/useful-links-for-validators/20"},"Other Useful Links"))),(0,i.kt)("h2",{id:"validator-stats"},"Validator Stats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkacube.hashquark.io/#/polkadot/strategy"},"HashQuark Staking Strategy")," - The HashQuark staking strategy dashboard helps you choose the optimal set-up to maximize rewards, and provides other useful network monitoring tools."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"Polkastats")," - Polkastats is a cleanly designed dashboard for validator statistics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yieldscan.app/"},"YieldScan")," - Staking yield maximization platform, designed to minimize effort."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/validator"},"Subscan Validators Page")," - Displays information on the current validators - not as tailored for validators as the other sites.")))}u.isMDXComponent=!0}}]);