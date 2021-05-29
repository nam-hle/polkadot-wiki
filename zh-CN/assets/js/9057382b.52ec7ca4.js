(self.webpackChunk=self.webpackChunk||[]).push([[2994],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>c,kt:()=>u});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),h=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=h(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<n;h++)i[h]=t[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},21152:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>i,metadata:()=>s,toc:()=>l,default:()=>c});var r=t(22122),o=t(19756),n=(t(67294),t(3905)),i={id:"mirror-learn-parathreads",title:"Parathreads",sidebar_label:"Parathreads"},s={unversionedId:"mirror-learn-parathreads",id:"mirror-learn-parathreads",isDocsHomePage:!1,title:"Parathreads",description:"Parathreads are an idea for parachains to temporarily participate (on a block by block basis) in Polkadot security without needing to lease a dedicated parachain slot. This is done through economically sharing the scarce resource of a parachain slot among a number of competing resources (parathreads). Chains that otherwise would not be able to acquire a full parachain slot, or do not find it economically sensible to do so, are enabled to participate in Polkadot's shared security &mdash; albeit with an associated fee per executed block. It also offers a graceful off-ramp to parachains that no longer require a dedicated parachain slot, but would like to continue using the Relay Chain.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/mirror-learn-parathreads.md",sourceDirName:".",slug:"/mirror-learn-parathreads",permalink:"/polkadot-wiki/zh-CN/docs/mirror-learn-parathreads",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/mirror-learn-parathreads.md",version:"current",sidebar_label:"Parathreads",frontMatter:{id:"mirror-learn-parathreads",title:"Parathreads",sidebar_label:"Parathreads"}},l=[{value:"Origin",id:"origin",children:[]},{value:"Parachain vs. Parathread",id:"parachain-vs-parathread",children:[]},{value:"How Will Parathreads be Operated?",id:"how-will-parathreads-be-operated",children:[]},{value:"Parathread Economics",id:"parathread-economics",children:[]},{value:"Parachain Slot Swaps",id:"parachain-slot-swaps",children:[]},{value:"Resources",id:"resources",children:[]}],h={toc:l};function c(e){var a=e.components,t=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Parathreads are an idea for parachains to temporarily participate (on a block by block basis) in Polkadot security without needing to lease a dedicated parachain slot. This is done through economically sharing the scarce resource of a ",(0,n.kt)("em",{parentName:"p"},"parachain slot")," among a number of competing resources (parathreads). Chains that otherwise would not be able to acquire a full parachain slot, or do not find it economically sensible to do so, are enabled to participate in Polkadot's shared security ","\u2014"," albeit with an associated fee per executed block. It also offers a graceful off-ramp to parachains that no longer require a dedicated parachain slot, but would like to continue using the Relay Chain."),(0,n.kt)("h2",{id:"origin"},"Origin"),(0,n.kt)("p",null,"According to ",(0,n.kt)("a",{parentName:"p",href:"https://v.douyu.com/show/a4Jj7llO5q47Dk01"},"this talk")," in Chengdu, the origin of the idea came from similar notions in the limited resource of memory on early personal computers of the late '80s and '90s. Since computers have a limited amount of physical memory, when an application needs more, the computer can create virtual memory by using ",(0,n.kt)("em",{parentName:"p"},"swap space")," on a hard disk. Swap space allows the capacity of a computer's memory to expand and for more processes to run concurrently with the trade-off that some processes will take longer to progress."),(0,n.kt)("h2",{id:"parachain-vs-parathread"},"Parachain vs. Parathread"),(0,n.kt)("p",null,"Parachains and parathreads are very similar from a development perspective. One can imagine that a chain developed with Substrate can at different points in its lifetime assume one of three states: an independent chain with secured bridge, a parachain, or a parathread. It can switch between these last two states with relatively minimal effort since the difference is more of an economic distinction than a technological one."),(0,n.kt)("p",null,"Parathreads have the exact same benefits for connecting to Polkadot that a full parachain has. Namely, it is able to send messages to other para{chain,threads} through XCMP and it is secured under the full economic security of Polkadot's validator set."),(0,n.kt)("p",null,"The difference between parachains and parathreads is economic. Parachains must be registered through a normal means of Polkadot, i.e. governance proposal or parachain slot auction. Parathreads have a fixed fee for registration that would realistically be much lower than the cost of acquiring a parachain slot. Similar to how DOT are locked for the duration of parachain slots and then returned to the winner of the auction, the deposit for a parathread will be returned to the parathread after the conclusion of its term."),(0,n.kt)("p",null,"Registration of the parathread does not guarantee anything more than the registration of the parathread code to the Polkadot Relay Chain. When a parathread progresses by producing a new block, there is a fee that must be paid in order to participate in a per-block auction for inclusion in the verification of the next Relay Chain block. All parathreads that are registered are competing in this auction for their parathread to be included for progression."),(0,n.kt)("p",null,"There are two interesting observations to make about parathreads. One, since they compete on a per-block basis, it is similar to how transactions are included in Bitcoin or Ethereum. A similar fee market will likely develop, which means that busier times will drive the price of parathread inclusion up, while times of low activity will require lower fees. Two, this mechanism is markedly different from the parachain mechanism, which guarantees inclusion as long as a parachain slot is held; parathread registration grants no such right to the parathread."),(0,n.kt)("h2",{id:"how-will-parathreads-be-operated"},"How Will Parathreads be Operated?"),(0,n.kt)("p",null,"A portion of the parachain slots on the Relay Chain will be designated as part of the parathread pool. In other words, some parachain slots will have no parachain attached to them and rather will be used as a space for which the winner(s) of the block-by-block parathread fee auction can have their block candidate included."),(0,n.kt)("p",null,"Collators will offer a bid designated in DOT for inclusion of a parathread block candidate. The Relay Chain block author is able to select from these bids to include a parathread block. The obvious incentive is for them to accept the block candidate with the highest bid, which would bring them the most profit. The tokens from the parathread bids will likely be split 80-20, meaning that 80% goes into Polkadot treasury and 20% goes to the block author. This is the same split that applies also to transaction fees and, like many other parameters in Polkadot, can be changed through a governance mechanism."),(0,n.kt)("h2",{id:"parathread-economics"},"Parathread Economics"),(0,n.kt)("p",null,"There are two sources of compensation for collators:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Assuming a parathread has its own local token system, it pays the collators from the transaction fees in its local token. If the parathread does not implement a local token, or its local token has no value (e.g. it is used only for governance), then it can use DOT to incentivize collators."),(0,n.kt)("li",{parentName:"ol"},"Parathread protocol subsidy. A parathread can mint new tokens in order to provide additional incentives for the collator. Probably, the amount of local tokens to mint for the parathread would be a function of time, the more time that passes between parathread blocks that are included in the Relay Chain, the more tokens the parathread is willing to subsidize in order to be considered for inclusion. The exact implementation of this minting process could be through local parathread inflation or via a stockpile of funds like a treasury.")),(0,n.kt)("p",null,"Collators may be paid in local parathread currency. However, the Relay Chain transacts with the Polkadot universal currency (DOT) only. Collators must then submit block candidates with an associated bid in DOT."),(0,n.kt)("h2",{id:"parachain-slot-swaps"},"Parachain Slot Swaps"),(0,n.kt)("p",null,'It will be possible for a parachain that holds a parachain slot to swap this slot with a parathread so that the parathread "upgrades" to a full parachain and the parachain becomes a parathread. The chain can also stop being a chain and continue as a thread without swapping the slot. The slot, if unoccupied, would be auctioned off in the next ',(0,n.kt)("a",{parentName:"p",href:"learn-auction"},"auction period"),"."),(0,n.kt)("p",null,"This provides a graceful off-ramp for parachains that have reached the end of their lease and do not have sufficient usage to justify renewal; they can remain registered on the Relay Chain but only produce new blocks when they need to."),(0,n.kt)("p",null,"Parathreads help ease the sharp stop of the parachain slot term by allowing parachains that are still doing something useful to produce blocks, even if it is no longer economically viable to rent a parachain slot."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06"},"Parathreads: Pay-as-you-go Parachains"))))}c.isMDXComponent=!0}}]);