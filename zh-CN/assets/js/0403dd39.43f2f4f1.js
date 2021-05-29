(self.webpackChunk=self.webpackChunk||[]).push([[5243],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73653:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,metadata:()=>r,toc:()=>l,default:()=>h});var o=a(22122),n=a(19756),s=(a(67294),a(3905)),i={id:"learn-comparisons-cosmos",title:"Polkadot and Cosmos",sidebar_label:"Cosmos"},r={unversionedId:"learn-comparisons-cosmos",id:"learn-comparisons-cosmos",isDocsHomePage:!1,title:"Polkadot and Cosmos",description:"Polkadot and Cosmos are both protocols that provide an interface for different state machines to communicate with each other. Both protocols are predicated on the thesis that the future will have multiple blockchains that need to interoperate with each other rather than individual blockchains existing in isolation.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/learn-comparisons-cosmos.md",sourceDirName:".",slug:"/learn-comparisons-cosmos",permalink:"/polkadot-wiki/zh-CN/docs/learn-comparisons-cosmos",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-comparisons-cosmos.md",version:"current",sidebar_label:"Cosmos",frontMatter:{id:"learn-comparisons-cosmos",title:"Polkadot and Cosmos",sidebar_label:"Cosmos"},sidebar:"docs",previous:{title:"Polkadot and Ethereum 2.0",permalink:"/polkadot-wiki/zh-CN/docs/learn-comparisons-ethereum-2"},next:{title:"Polkadot \u4e0e\u5176\u5b83\u94fe\u6bd4\u8f83",permalink:"/polkadot-wiki/zh-CN/docs/learn-comparisons"}},l=[{value:"Model",id:"model",children:[]},{value:"\u67b6\u6784",id:"\u67b6\u6784",children:[{value:"Polkadot",id:"polkadot",children:[]},{value:"Cosmos",id:"cosmos",children:[]}]},{value:"Consensus",id:"consensus",children:[]},{value:"Staking Mechanics",id:"staking-mechanics",children:[]},{value:"Message Passing",id:"message-passing",children:[]},{value:"Governance",id:"governance",children:[]},{value:"Upgrades",id:"upgrades",children:[]},{value:"Development Framework",id:"development-framework",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],c={toc:l};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Polkadot and Cosmos are both protocols that provide an interface for different state machines to communicate with each other. Both protocols are predicated on the thesis that the future will have multiple blockchains that need to interoperate with each other rather than individual blockchains existing in isolation."),(0,s.kt)("h2",{id:"model"},"Model"),(0,s.kt)("p",null,'Polkadot uses a sharded model where each shard in the protocol has an abstract state transition function (STF). Polkadot uses WebAssembly (Wasm) as a "meta-protocol". A shard\'s STF can be abstract as long as the validators on Polkadot can execute it within a Wasm environment.'),(0,s.kt)("p",null,'The shards of Polkadot are called "',(0,s.kt)("a",{parentName:"p",href:"learn-parachains"},"parachains"),"\". Every time a parachain wants to make a state transition, it submits a block (batch of state transitions) along with a state proof that Polkadot validators can independently verify. These blocks are finalized for the parachains when they are finalized by Polkadot's Relay Chain, the main chain of the system. As such, all parachains share state with the entire system, meaning that a chain re-organization of a single parachain would require a re-organization of all parachains and the Relay Chain."),(0,s.kt)("p",null,'Cosmos uses a bridge-hub model that connects Tendermint chains. The system can have multiple hubs (the primary being the "Cosmos Hub"), but each hub connects a group of exterior chains, called "zones". Each zone is responsible for securing the chain with a sufficiently staked and decentralized validator set. Zones send messages and tokens to each other via the hub using a protocol called Inter-Blockchain Communication (IBC). As zones do not share state, a re-organization of one zone would not re-organize other zones, meaning each message is trust-bound by the recipient\'s trust in the security of the sender.'),(0,s.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,s.kt)("h3",{id:"polkadot"},"Polkadot"),(0,s.kt)("p",null,"Polkadot has a Relay Chain acting as the main chain of the system. All validators in Polkadot are on the Relay Chain. Parachains have collators, who construct and propose parachain blocks to validators. Collators don't have any security responsibilities, and thus do not require a robust incentive system. Collators can submit a single parachain block for every Relay Chain block every 6 seconds. Once a parachain submits a block, validators perform a series of availability and validity checks before committing it to the final chain."),(0,s.kt)("p",null,"Parachain slots are limited, and thus parachain candidates participate in an auction to reserve a slot for up to two years. For chains that do not have the funding for a parachain slot or the necessity to execute with a six-second block time, Polkadot also has ",(0,s.kt)("a",{parentName:"p",href:"learn-parathreads"},"parathreads"),". Parathreads execute on a pay-as-you-go basis, only paying to execute a block when they need to."),(0,s.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin), Polkadot has ",(0,s.kt)("a",{parentName:"p",href:"learn-bridges"},"bridge parachains")," that offer two-way compatibility."),(0,s.kt)("h3",{id:"cosmos"},"Cosmos"),(0,s.kt)("p",null,'Cosmos has a main chain called a "Hub" that connects other blockchains called "zones". Cosmos can have multiple hubs, but this overview will consider a single hub. Each zone must maintain its own state, and therefore have its own validator community. When a zone wants to communicate with another zone, it sends packets over IBC. The Hub maintains a multi-token ledger of token balances (non-transfer messages are relayed but their state not stored in the Hub).'),(0,s.kt)("p",null,"Zones monitor the state of the Hub with a light client, but the Hub does not track zone states. Zones must use a deterministic finality algorithm (currently, all use Tendermint) and implement the IBC interface to be able to send messages to other chains through the Hub."),(0,s.kt)("p",null,'Cosmos can also interact with external chains by using "peg zones", which are similar to bridge parachains.'),(0,s.kt)("h2",{id:"consensus"},"Consensus"),(0,s.kt)("p",null,"Polkadot uses a hybrid ",(0,s.kt)("a",{parentName:"p",href:"learn-consensus"},"consensus"),' protocol with two sub-protocols: BABE and GRANDPA, together called "Fast Forward". BABE (Blind Assignment for Blockchain Extension) uses a verifiable random function (VRF) to assign slots to validators and a fallback round-robin pattern to guarantee that each slot has an author. GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement) votes on chains, rather than individual blocks. Together, BABE can author candidate blocks to extend the finalized chain and GRANDPA can finalize them in batches (up to millions of blocks at a time).'),(0,s.kt)("p",null,"This isolation of tasks provides several benefits. First, it represents a reduction in transport complexity for both block production and finalization. BABE has linear complexity, making it easy to scale to thousands of block producers with low networking overhead. GRANDPA has quadratic complexity, but reduced by a factor of the latency, or how many blocks it finalizes in one batch."),(0,s.kt)("p",null,"Second, having the capacity to extend the chain with unfinalized blocks allows other validators to perform extensive availability and validity checks to ensure that no invalid state transitions make their way into the final chain."),(0,s.kt)("p",null,"Cosmos (both the Hub and the zones) uses Tendermint consensus, a round-robin protocol that provides instant finality. Block production and finalization are on the same path of the algorithm, meaning it produces and finalizes one block at a time. Because it is a PBFT-based algorithm (like GRANDPA), it has quadratic transport complexity, but can only finalize one block at a time."),(0,s.kt)("h2",{id:"staking-mechanics"},"Staking Mechanics"),(0,s.kt)("p",null,"Polkadot uses ",(0,s.kt)("a",{parentName:"p",href:"learn-staking"},"Nominated Proof of Stake (NPoS)")," to select validators using the ",(0,s.kt)("a",{parentName:"p",href:"learn-phragmen"},"sequential Phragm\xe9n algorithm"),". The validator set size is set by governance (1_000 validators planned) and stakers who do not want to run validator infrastructure can nominate up to 16 validators. Phragm\xe9n's algorithm selects the optimal allocation of stake, where optimal is based on having the most evenly staked set."),(0,s.kt)("p",null,"All validators in Polkadot have the same weight in the consensus protocols. That is, to reach greater than 2/3 of support for a chain, more than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators")," must commit to it, rather than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake.")," Likewise, validator rewards are tied to their activity, primarily block production and finality justifications, not their amount of stake. This creates an incentive to nominate validators with lower stake, as they will earn higher returns on their staked tokens."),(0,s.kt)("p",null,"The Cosmos Hub uses Bonded Proof of Stake (a variant of Delegated PoS) to elect validators. Stakers must bond funds and submit a delegate transaction for each validator they would like to delegate to with the number of tokens to delegate. The Cosmos Hub plans to support up to 300 validators."),(0,s.kt)("p",null,"Consensus voting and rewards are both stake-based in Cosmos. In the case of consensus voting, more than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake")," must commit, rather than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators.")," Likewise, a validator with 10% of the total stake will earn 10% of the rewards."),(0,s.kt)("p",null,"Finally, in Cosmos, if a staker does not vote in a governance referendum, the validators assume their voting power. Because of this, many validators in Cosmos have zero commission in order to acquire more control over the protocol. In Polkadot, governance and staking are completely disjoint; nominating a validator does not assign any governance voting rights to the validator."),(0,s.kt)("h2",{id:"message-passing"},"Message Passing"),(0,s.kt)("p",null,"Polkadot uses ",(0,s.kt)("a",{parentName:"p",href:"learn-crosschain"},"Cross-Chain Message Passing (XCMP)")," for parachains to send arbitrary messages to each other. Parachains open connections with each other and can send messages via their established channels. ",(0,s.kt)("a",{parentName:"p",href:"learn-collator"},"Collators")," are full nodes of parachains and full nodes of the relay chain, so collator nodes are a key component of message passing. Messages do not pass through the Relay Chain, only proofs of post and channel operations (open, close, etc.) go into the Relay Chain. This enhances scalability by keeping data on the edges of the system."),(0,s.kt)("p",null,"In the case of a chain re-organization, messages can be rolled back to the point of the re-organization based on the proofs of post in the Relay Chain. The shared state amongst parachains means that messages are free from trust bounds; they all operate in the same context."),(0,s.kt)("p",null,"Polkadot has an additional protocol called ",(0,s.kt)("a",{parentName:"p",href:"learn-spree"},"SPREE")," that provides shared logic for cross-chain messages. Messages sent with SPREE carry additional guarantees about provenance and interpretation by the receiving chain."),(0,s.kt)("p",null,"Cosmos uses a cross chain protocol called Inter-Blockchain Communication (IBC). The current implementation of Cosmos uses the Hub to pass tokens between zones. However, Cosmos does have a new specification for passing arbitrary data. Nonetheless, as chains do not share state, receiving chains must trust the security of a message's origin."),(0,s.kt)("h2",{id:"governance"},"Governance"),(0,s.kt)("p",null,"Polkadot has a multicameral ",(0,s.kt)("a",{parentName:"p",href:"learn-governance"},"governance")," system with several avenues to pass proposals. All proposals ultimately pass through a public referendum, where the majority of tokens can always control the outcome. For low-turnout referenda, Polkadot uses adaptive quorum biasing to set the passing threshold. Referenda can contain a variety of proposals, including fund allocation from an on-chain ",(0,s.kt)("a",{parentName:"p",href:"learn-treasury"},"Treasury"),". Decisions get enacted on-chain and are binding and autonomous."),(0,s.kt)("p",null,"Polkadot has several on-chain, permissionless bodies. The primary one is the Council, which comprises a set of accounts that are elected in Phragm\xe9n fashion. The Council represents minority interests and as such, proposals that are unanimously approved of by the Council have a lower passing threshold in the public referendum. There is also a Technical Committee for making technical recommendations (e.g. emergency runtime upgrade to fix a bug)."),(0,s.kt)("p",null,"Cosmos uses coin-vote signalling to pass referenda. The actual enactment of governance decisions is carried out via a protocol fork, much like other blockchains. All token holders can vote, however, if a delegator abstains from a vote then the validator they delegate to assume their voting power. Validators in Polkadot do not receive any voting power based on their nominators."),(0,s.kt)("h2",{id:"upgrades"},"Upgrades"),(0,s.kt)("p",null,"Using the Wasm meta-protocol, Polkadot can enact chain upgrades and successful proposals without a hard fork. Anything that is within the STF, the transaction queue, or off-chain workers can be upgraded without forking the chain."),(0,s.kt)("p",null,"As Cosmos is not based on a meta-protocol, it must enact upgrades and proposals via a normal forking mechanism."),(0,s.kt)("h2",{id:"development-framework"},"Development Framework"),(0,s.kt)("p",null,"Both Cosmos and Polkadot are designed such that each chain has its own STF and both provide support for smart contracts in both Wasm and the Ethereum Virtual Machine (EVM). Polkadot provides an ahead-of-time Wasm compiler as well as an interpreter (Wasmi) for execution, while Cosmos only excutes smart contracts in an interpreter."),(0,s.kt)("p",null,"Cosmos chains can be developed using the Cosmos SDK, written in Go. The Cosmos SDK contains about 10 modules (e.g. staking, governance, etc.) that can be included in a chain's STF. The SDK builds on top of Tendermint."),(0,s.kt)("p",null,"The primary development framework for parachains is ",(0,s.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate"),", written in Rust. Substrate comes with FRAME, a set of about 40 modules (called \"pallets\") to use in a chain's STF. Beyond simply using the pallets, Substrate adds a further layer of abstraction that allows developers to compose FRAME's pallets by adding custom modules and configuring the parameters and initial storage values for the chain."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: Polkadot can support an STF written in any language, so long as it compiles to its meta-protocol Wasm. Likewise, it could still use the Substrate client (database, RPC, networking, etc.); it only needs to implement the primitives at the interface.")),(0,s.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,s.kt)("p",null,"Polkadot was designed on the principle that scalability and interoperability require shared validation logic to create a trust-free environment. As more blockchains are developed, their security must be cooperative, not competitive. Therefore, Polkadot provides the shared validation logic and security processes across chains so that they can interact knowing that their interlocutors execute within the same security context."),(0,s.kt)("p",null,"The Cosmos network uses a bridge-hub model to connect chains with independent security guarantees, meaning that inter-chain communication is still bounded by the trust that the receiving chain has in the sending chain."))}h.isMDXComponent=!0}}]);