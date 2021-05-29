(self.webpackChunk=self.webpackChunk||[]).push([[4747],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>c});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61454:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,metadata:()=>s,toc:()=>l,default:()=>h});var o=a(22122),n=a(19756),r=(a(67294),a(3905)),i={id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Polkadot's on-chain treasury."},s={unversionedId:"learn-treasury",id:"learn-treasury",isDocsHomePage:!1,title:"Treasury",description:"Details about Polkadot's on-chain treasury.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/learn-treasury.md",sourceDirName:".",slug:"/learn-treasury",permalink:"/polkadot-wiki/zh-CN/docs/learn-treasury",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-treasury.md",version:"current",sidebar_label:"Treasury",frontMatter:{id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Polkadot's on-chain treasury."},sidebar:"docs",previous:{title:"Polkadot \u7ec4\u4ef6",permalink:"/polkadot-wiki/zh-CN/docs/learn-polkadot-host"},next:{title:"Using W3F Registrar",permalink:"/polkadot-wiki/zh-CN/docs/learn-registrar"}},l=[{value:"Funding the Treasury",id:"funding-the-treasury",children:[]},{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",children:[{value:"Announcing the Proposal",id:"announcing-the-proposal",children:[]},{value:"Creating the Proposal",id:"creating-the-proposal",children:[]}]},{value:"Tipping",id:"tipping",children:[{value:"Example",id:"example",children:[]}]},{value:"Bounties Spending",id:"bounties-spending",children:[{value:"Creating a Bounty Proposal",id:"creating-a-bounty-proposal",children:[]},{value:"Closing a bounty",id:"closing-a-bounty",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"What prevents the Treasury from being captured by a majority of the Council?",id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],p={toc:l};function h(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Treasury is a pot of funds collected through transaction fees, slashing, ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-staking/#inflation"},"staking inefficiencies"),", etc. The funds held in the Treasury can be spent by making a spending proposal that, if approved by the ",(0,r.kt)("a",{parentName:"p",href:"learn-governance#Council"},"Council"),", will enter a waiting period before distribution. This waiting period is known as the budget period, and its duration is subject to ",(0,r.kt)("a",{parentName:"p",href:"learn-governance"},"governance"),", with the current default set to 24 days. The Treasury attempts to spend as many proposals in the queue as it can without running out of funds."),(0,r.kt)("p",null,"If the Treasury ends a budget period without spending all of its funds, it suffers a burn of a percentage of its funds -- thereby causing deflationary pressure.\nThis percentage is currently at 1% on Polkadot. ",""),(0,r.kt)("p",null,"When a stakeholder wishes to propose a spend from the Treasury, they must reserve a deposit of at least 5% of the proposed spend (see below for variations). This deposit will be slashed if the proposal is rejected, and returned if it is accepted."),(0,r.kt)("p",null,"Proposals may consist of (but are not limited to):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u7840\u67b6\u6784\u90e8\u7f72"),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u5b89\u5168\u64cd\u4f5c(\u76d1\u89c6\u670d\u52a1\uff0c\u5ba1\u6838)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6001\u7cfb\u7edf\u53d1\u5c55(\u4e0e\u53cb\u597d\u94fe\u7684\u5408\u4f5c)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u5e7f\u6d3b\u52a8(\u5e7f\u544a\uff0c\u5408\u4f5c)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u793e\u533a\u6d3b\u52a8(\u805a\u4f1a\uff0c\u6bd4\u8428\u6d3e\u5bf9\uff0c\u9ed1\u5ba2\u7a7a\u95f4)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u5f00\u53d1(\u94b1\u5305\u548c\u94b1\u5305\u6574\u5408\uff0c\u5ba2\u6237\u7aef\u5347\u7ea7)\u3002")),(0,r.kt)("p",null,"The Treasury is ultimately controlled by the ",(0,r.kt)("a",{parentName:"p",href:"learn-governance#Council"},"Council"),", and how the funds will be spent is up to their judgment."),(0,r.kt)("h2",{id:"funding-the-treasury"},"Funding the Treasury"),(0,r.kt)("p",null,"The Treasury is funded from different sources:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Slashing: When a validator is slashed for any reason, the slashed amount is sent to the Treasury with a reward going to the entity that reported the validator (another validator). The reward is taken from the slash amount and varies per offence and number of reporters."),(0,r.kt)("li",{parentName:"ol"},"Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the remainder going to the block author."),(0,r.kt)("li",{parentName:"ol"},"Staking inefficiency: ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/en/learn-staking/#inflation"},"Inflation")," is designed to be 10% in the first year, and the ideal staking ratio is set at 50%, meaning half of all tokens should be locked in staking. Any deviation from this ratio will cause a proportional amount of the inflation to go to the Treasury. In other words, if 50% of all tokens are staked, then 100% of the inflation goes to the validators as reward. If the staking rate is greater than or less than 50%, then the validators will receive less, with the remainder going to the Treasury."),(0,r.kt)("li",{parentName:"ol"},"Parathreads: ",(0,r.kt)("a",{parentName:"li",href:"learn-parathreads"},"Parathreads")," participate in a per-block auction for block inclusion. Part of this bid goes to the validator that accepts the block and the remainder goes to the Treasury.")),(0,r.kt)("h2",{id:"creating-a-treasury-proposal"},"Creating a Treasury Proposal"),(0,r.kt)("p",null,"The proposer has to deposit 5% of the requested amount or 100.000 DOT (whichever is higher) as an anti-spam measure. This amount is burned if the proposal is rejected, or refunded otherwise. These values are subject to ",(0,r.kt)("a",{parentName:"p",href:"learn-governance"},"governance")," so they may change in the future."),(0,r.kt)("p",null,"Please note that there is no way for a user to revoke a treasury proposal after it has been submitted. The Council will either accept or reject the proposal, and if the proposal is rejected, the bonded funds are burned."),(0,r.kt)("h3",{id:"announcing-the-proposal"},"Announcing the Proposal"),(0,r.kt)("p",null,"To minimize storage on chain, proposals don't contain contextual information. When a user submits a proposal, they will probably need to find an off-chain way to explain the proposal. Most discussion takes place on the following platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many community members participate in discussion in the ",(0,r.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"Kusama Element (previously Riot)")," chat or ",(0,r.kt)("a",{parentName:"li",href:"https://matrix.to/#//#polkadot:matrix.parity.io"},"Polkadot Element"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://polkassembly.io"},"Polkassembly")," discussion platform that allows users to log in with their Web3 address and automatically reads proposals from the chain, turning them into discussion threads. It also offers a sentiment gauge poll to get a feel for a proposal before committing to a vote.")),(0,r.kt)("p",null,"Spreading the word about the proposal's explanation is ultimately up to the proposer - the recommended way is using official Element channels like the ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:web3.foundation"},"Polkadot Watercooler")," and ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"Polkadot Direction room"),"\n","","."),(0,r.kt)("h3",{id:"creating-the-proposal"},"Creating the Proposal"),(0,r.kt)("p",null,"One way to create the proposal is to use the Polkadot-JS Apps ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"website"),". From the website, use either the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"extrinsics tab")," and select the Treasury pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"proposeSpend")," and enter the desired amount and recipient, or use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/treasury"},"Treasury tab")," and its dedicated Submit Proposal button:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A proposal being created",src:a(840).Z})),(0,r.kt)("p",null,"The system will automatically take the required deposit, picking the higher of the two values mentioned ",(0,r.kt)("a",{parentName:"p",href:"#creating-a-treasury-proposal"},"above"),"."),(0,r.kt)("p",null,"Once created, your proposal will become visible in the Treasury screen and the Council can start voting on it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pending proposals",src:a(77554).Z})),(0,r.kt)("p",null,"Remember that the proposal has no metadata, so it's up to the proposer to create a description and purpose that the Council could study and base their votes on."),(0,r.kt)("p",null,"At this point, a Council member can create a motion to accept or to reject the treasury proposal. It is possible that one motion to accept and another motion to reject are both created. The proportions to accept and reject Council proposals vary between accept or reject, and possibly depend on which network the Treasury is implemented."),(0,r.kt)("p",null,"The threshold for accepting a treasury proposal is at least three-fifths of the Council. On the other hand, the threshold for rejecting a proposal is at least one-half of the Council."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motions in action",src:a(43102).Z})),(0,r.kt)("h2",{id:"tipping"},"Tipping"),(0,r.kt)("p",null,"Next to the proposals process, a separate system for making tips exists for the Treasury. Tips can be suggested by anyone and are supported by members of the Council. Tips do not have any definite value; the final value of the tip is decided based on the median of all tips issued by the tippers."),(0,r.kt)("p",null,"Currently, the tippers are the same as the members of the Council. However, being a tipper is not the direct responsibility of the Council, and at some point the Council and the tippers may be different groups of accounts."),(0,r.kt)("p",null,"A tip will enter a closing phase when more than a half plus one of the tipping group have endorsed a tip. During that timeframe, the other members of the tipping group can still issue their tips, but do not have to. Once the window closes, anyone can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic, and the tip will be paid out."),(0,r.kt)("p",null,"There are two types of tips: public and tipper-initiated. With public tips, a small bond is required to place them. This bond depends on the tip message length, and a fixed bond constant defined on chain, currently 1. Public tips carry a finder's fee of\n20% which is paid out from the total amount. Tipper-initiated tips, i.e. tips that a Council member published, do not have a finder's fee or a bond."),(0,r.kt)("p",null,"To better understand the process a tip goes through until it is paid out, let's consider an example."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Bob has done something great for Polkadot . Alice has noticed this and decides to report Bob as deserving a tip from the Treasury. The Council is composed of three members Charlie, Dave, and Eve."),(0,r.kt)("p",null,"Alice begins the process by issuing the ",(0,r.kt)("inlineCode",{parentName:"p"},"report_awesome")," extrinsic. This extrinsic requires two arguments, a reason and the address to tip. Alice submits Bob's address with the reason being a UTF-8 encoded URL to a post on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io"},"polkassembly"),"\n"," that explains her reasoning for why Bob deserves the tip."),(0,r.kt)("p",null,"As mentioned above, Alice must also lock up a deposit for making this report. The deposit is the base deposit as set in the chain's parameter list plus the additional deposit per byte contained in the reason. This is why Alice submitted a URL as the reason instead of the explanation directly, it was cheaper for her to do so."),(0,r.kt)("p",null,"For her trouble, Alice is able to claim the eventual finder's fee if the tip is approved by the tippers."),(0,r.kt)("p",null,"Since the tipper group is the same as the Council, the Council must now collectively (but also independently) decide on the value of the tip that Bob deserves."),(0,r.kt)("p",null,"Charlie, Dave, and Eve all review the report and make tips according to their personal valuation of the benefit Bob has provided to Kusama."),(0,r.kt)("p",null,"Charlie tips 10 DOT . Dave tips\n30 DOT . Eve tips\n100 DOT ."),(0,r.kt)("p",null,"The tip could have been closed out with only two of the three tippers. Once more than half of the tippers group have issued tip valuations, the countdown to close the tip will begin. In this case, the third tipper issued their tip before the end of the closing period, so all three were able to make their tip valuations known."),(0,r.kt)("p",null,"Now the actual tip that will be paid out to Bob is the median of these tips, so Bob will be paid out\n30 DOT  from the Treasury."),(0,r.kt)("p",null,"In order for Bob to be paid his tip, some account must call the ",(0,r.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic at the end of the closing period for the tip. This extrinsic may be called by anyone."),(0,r.kt)("h2",{id:"bounties-spending"},"Bounties Spending"),(0,r.kt)("p",null,"There are practical limits to Council Members curation capabilities when it comes to treasury proposals: Council members likely do not have the expertise to make a proper assessment of the activities described in all proposals. Even if individual Councillors have that expertise, it is highly unlikely that a majority of members are capable in such diverse topics."),(0,r.kt)("p",null,"Bounties Spending proposals aim to delegate the curation activity of spending proposals to experts called Curators: They can be defined as addresses with agency over a portion of the Treasury with the goal of fixing a bug or vulnerability, developing a strategy, or monitoring a set of tasks related to a specific topic: all for the benefit of the Polkadot ecosystem."),(0,r.kt)("p",null,"A proposer can submit a bounty proposal for the Council to pass, with a curator to be defined later, whose background and expertise is such that they are capable of determining when the task is complete. Curators are selected by the Council after the bounty proposal passes, and need to add an upfront payment to take the position. This deposit can be used to punish them if they act maliciously. However, if they are successful in their task of getting someone to complete the bounty work, they will receive their deposit back and part of the bounty reward."),(0,r.kt)("p",null,"When submitting the value of the bounty, the proposer includes a reward for curators willing to invest their time and expertise in the task: this amount is included in the total value of the bounty. In this sense, the curator's fee can be defined as the result of subtracting the value paid to the bounty rewardee from the total value of the bounty."),(0,r.kt)("p",null,"In general terms, curators are expected to have a well-balanced track record related to the issues the bounty tries to resolve: they should be at least knowledgeable on the topics the bounty touches, and show project management skills or experience. These recommendations ensure an effective use of the mechanism. A Bounty Spending is a reward for a specified body of work - or specified set of objectives - that needs to be executed for a predefined treasury amount to be paid out. The responsibility of assigning a payout address once the specified set of objectives is completed is delegated to the curator."),(0,r.kt)("p",null,"After the Council has activated a bounty, it delegates the work that requires expertise to the curator who gets to close the active bounty. Closing the active bounty enacts a delayed payout to the payout address and a payout of the curator fee. The delay phase allows the Council to act if any issues arise."),(0,r.kt)("p",null,"To minimize storage on chain in the same way as any proposal, bounties don't contain contextual information. When a user submits a bounty spending proposal, they will probably need to find an off-chain way to explain the proposal (any of the available community forums serve this purpose). ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?usp=sharing"},"This template")," can help as a checklist of all needed information for the Council to make an informed decision."),(0,r.kt)("p",null,"The bounty has a predetermined duration of 90 days with the possibility of being extended by the curator. Aiming to maintain flexibility on the tasks\u2019 curation, the curator will be able to create sub-bounties for more granularity and allocation in the next iteration of the mechanism."),(0,r.kt)("h3",{id:"creating-a-bounty-proposal"},"Creating a Bounty Proposal"),(0,r.kt)("p",null,"Anyone can create a Bounty proposal using Polkadot JS Apps: Users are able to submit a proposal on the dedicated Bounty section under Governance. The development of a robust user interface to view and manage bounties in the Polkadot Apps is still under development and it will serve Council members, Curators and Beneficiaries of the bounties, as well as all users observing the on-chain treasury governance. For now, the help of a Councillor is needed to open a bounty proposal as a motion to be voted."),(0,r.kt)("p",null,"To submit a bounty, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot JS Apps")," and click on the governance tab in the options bar on the top of the site. After, click on 'Bounties' and find the button '+ Add Bounty' on the upper-right side of the interface. Complete the bounty title, the requested allocation (including curator's fee) and confirm the call."),(0,r.kt)("p",null,"After this, a Council member will need to assist you to pass the bounty proposal for vote as a motion. You can contact the Council by joining the\nPolkadot Direction ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"channel"),"\n"," in Element or joining our\nPolkadot Discord ",(0,r.kt)("a",{parentName:"p",href:"https://parity.link/polkadot-discord"},"server"),"\n"," and publishing a short description of your bounty, with a link to one of the ",(0,r.kt)("a",{parentName:"p",href:"#announcing-the-proposal"},"forums")," for contextual information."),(0,r.kt)("p",null,"A bounty can be cancelled by deleting the earmark for a specific treasury amount or be closed if the tasks have been completed. On the opposite side, the 90 days life of a bounty can be extended by amending the expiry block number of the bounty to stay active."),(0,r.kt)("h3",{id:"closing-a-bounty"},"Closing a bounty"),(0,r.kt)("p",null,"The curator can close the bounty once they approve the completion of its tasks. The curator should make sure to set up the payout address on the active bounty beforehand. Closing the Active bounty enacts a delayed payout to the payout address and a payout of the curator fee."),(0,r.kt)("p",null,"A bounty can be closed by using the extrinsics tab and selecting the Treasury pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"Award_bounty"),", making sure the right bounty is to be closed and finally sign the transaction. It is important to note that those who received a reward after the bounty is completed, must claim the specific amount of the payout from the payout address, by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim_bounty")," after the curator closed the allocation."),(0,r.kt)("p",null,"To understand more about Bounties and how this new mechanism works, read this ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/kusama-and-polkadot-now-reward-curators-helping-to-scale-councils-functions-join-the-force-moving-the-community-forward/"},"Polkadot Blog post"),"."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council"},"What prevents the Treasury from being captured by a majority of the Council?"),(0,r.kt)("p",null,"The majority of the Council can decide the outcome of a treasury spend proposal. In an adversarial mindset, we may consider the possibility that the Council may at some point go rogue and attempt to steal all of the treasury funds. It is a possibility that the treasury pot becomes so great, that a large financial incentive would present itself."),(0,r.kt)("p",null,"For one, the Treasury has deflationary pressure due to the burn that is suffered every spend period. The burn aims to incentivize the complete spend of all treasury funds at every burn period, so ideally the treasury pot doesn't have time to accumulate mass amounts of wealth. However, it is the case that the burn on the Treasury could be so little that it does not matter - as is the case currently on Kusama with a 0.2% burn."),(0,r.kt)("p",null,"However, it is the case on Kusama that the Council is composed of mainly well-known members of the community. Remember, the Council is voted in by the token holders, so they must do some campaigning or otherwise be recognized to earn votes. In the scenario of an attack, the Council members would lose their social credibility. Furthermore, members of the Council are usually externally motivated by the proper operation of the chain. This external motivation is either because they run businesses that depend on the chain, or they have direct financial gain (through their holdings) of the token value remaining steady."),(0,r.kt)("p",null,"Concretely, there are a couple on-chain methods that resist this kind of attack. One, the Council majority may not be the token majority of the chain. This means that the token majority could vote to replace the Council if they attempted this attack - or even reverse the treasury spend. They would do this through a normal referendum. Two, there are time delays to treasury spends. They are only enacted every spend period. This means that there will be some time to observe this attack is taking place. The time delay then allows chain participants time to respond. The response may take the form of governance measures or - in the most extreme cases a liquidation of their holdings and a migration to a minority fork. However, the possibility of this scenario is quite low."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/treasury/src/lib.rs"},"Substrate's Treasury Pallet")," - The Rust implementation of the Treasury. (",(0,r.kt)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_treasury/index.html"},"Docs"),")")))}h.isMDXComponent=!0},43102:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/motion-f2fc13da7c5579a8d07062ea229791f6.png"},77554:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/proposals-c4ac9aead89864b9bce490955fd7a92f.png"},840:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/submit-new-2b0f4754866f7a162e0089ec42a09340.png"}}]);