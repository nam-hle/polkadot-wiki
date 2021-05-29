(self.webpackChunk=self.webpackChunk||[]).push([[1185],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,p=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return a?o.createElement(p,r(r({ref:t},u),{},{components:a})):o.createElement(p,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72590:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>r,metadata:()=>s,toc:()=>l,default:()=>u});var o=a(22122),n=a(19756),i=(a(67294),a(3905)),r={id:"learn-nominator",title:"Nominator",sidebar_label:"Nominator"},s={unversionedId:"learn-nominator",id:"learn-nominator",isDocsHomePage:!1,title:"Nominator",description:"Nominators secure the Relay Chain by selecting good validators and staking DOT.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/learn-nominator.md",sourceDirName:".",slug:"/learn-nominator",permalink:"/polkadot-wiki/ru-RU/docs/learn-nominator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-nominator.md",version:"current",sidebar_label:"Nominator",frontMatter:{id:"learn-nominator",title:"Nominator",sidebar_label:"Nominator"},sidebar:"docs",previous:{title:"Polkadot Consensus",permalink:"/polkadot-wiki/ru-RU/docs/learn-consensus"},next:{title:"Validator",permalink:"/polkadot-wiki/ru-RU/docs/learn-validator"}},l=[{value:"Active vs. Inactive Nomination",id:"active-vs-inactive-nomination",children:[]},{value:"Required Minimum Stake",id:"required-minimum-stake",children:[]},{value:"Oversubscribed Validators",id:"oversubscribed-validators",children:[]},{value:"The Election Solution Set",id:"the-election-solution-set",children:[]},{value:"Receiving Rewards",id:"receiving-rewards",children:[]},{value:"What to Take Into Consideration When Nominating",id:"what-to-take-into-consideration-when-nominating",children:[]},{value:"Filter Out Validators With Undesirable Traits",id:"filter-out-validators-with-undesirable-traits",children:[]},{value:"Review Your Validators&#39; History",id:"review-your-validators-history",children:[]},{value:"Be Aware of The Risks of Single Operators with Multiple Validators",id:"be-aware-of-the-risks-of-single-operators-with-multiple-validators",children:[]},{value:"Avoiding Oversubscribed Validators",id:"avoiding-oversubscribed-validators",children:[]},{value:"Guides",id:"guides",children:[]}],d={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nominators secure the Relay Chain by selecting good validators and staking DOT."),(0,i.kt)("p",null,"You may have an account with DOT and want to earn fresh DOT. You could do so as validator, which requires a node running 24/7. If you do not have such node or do not want to bother, you can still earn DOT by nominating one or more validators."),(0,i.kt)("p",null,"By doing so, you become a nominator for the validator(s) of your choice. Pick your validators carefully - if they do not behave properly, they will get slashed and you will lose DOT as well. However, if they do follow the rules of the network, then you can share in staking rewards that they generate."),(0,i.kt)("p",null,"While your DOT are staked by nominating a validator, they are 'locked' (bonded). You can receive new DOT in your account but you cannot stake as validator or transfer DOT away from your account. You can ",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-how-to-unbond"},"un-nominate at any time")," to stop staking your funds. Keep in mind that the un-nomination is effective in the next era, and that un-nominating does not automatically unbond your funds. There is an unbonding period of 7 days on Kusama and 28 days on Polkadot before bonded funds can be transferred after issuing an unbond transaction."),(0,i.kt)("h3",{id:"active-vs-inactive-nomination"},"Active vs. Inactive Nomination"),(0,i.kt)("p",null,"When you go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Account actions")," under staking page, you should see your bonded accounts and nomination status. If not, you can follow ",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-how-to-nominate-polkadot"},"this")," guide to configure it first. Your nominations will be effective in the next era; eras are roughly 6 hours on Kusama and 24 hours on Polkadot."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominations",src:a(26393).Z})),(0,i.kt)("p",null,'Suppose you have nominated five validator candidates, and three out of five were elected to the active validator set, then you should see two of your nominations as "waiting", and most likely one as "active" and the rest as "inactive". Active or inactive nomination means your nominated validators have been elected to be in the validator set, whereas waiting means they did not get elected. Generally, you will only have a single validator have an active nomination, which means that you are directly supporting it with your stake this era and thus potentially receiving staking rewards. Inactive nominators were validators that were elected for this era but which you are not actively supporting. Every era, a new election will take place and you may be assigned a different active nomination from among the validators you have selected.'),(0,i.kt)("p",null,"If you are committing a very large amount of stake, then you may have more than one active nomination. However, the election algorithm attempts to minimize this situation, and it should not occur often, so you should almost always see only a single active nomination per era. See the ",(0,i.kt)("a",{parentName:"p",href:"learn-phragmen#optimizations"},"section on Phragm\xe9n optimization")," for more details."),(0,i.kt)("h3",{id:"required-minimum-stake"},"Required Minimum Stake"),(0,i.kt)("p",null,"Due to the way the ",(0,i.kt)("a",{parentName:"p",href:"learn-phragmen"},"Phragmen algorithm")," generates the solution set, and due to the fact that the solution set must fit in a single block, in some eras, a minimum number of DOT will be required to nominate with in order to receive staking rewards."),(0,i.kt)("p",null,"This number fluctuates every era, and the most recent and up to date version can be found out using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/validator-stats"},"these scripts"),' which you can run on your machine and looking for the "lowest minimal nominator". See the ',(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-nominator#the-election-solution-set"},"Election Solution Set")," section on the Nominator page for more details."),(0,i.kt)("h3",{id:"oversubscribed-validators"},"Oversubscribed Validators"),(0,i.kt)("p",null,'Validators can only pay out to a certain number of nominators per era. This is currently set to\n256, but can be modified via governance. If more than\n256 nominators nominate the same validator, it is "oversubscribed", and only the top 256 staked nominators (ranked by amount of stake) are paid rewards. Other nominators will receive no rewards for that era, although their stake will still be used to calculate entry into the active validator set.'),(0,i.kt)("p",null,"Although it is difficult to determine exactly how many nominators will nominate a given validator in the next era, one can estimate based on the current number of nominators. A validator with only 5 nominators in this era, for instance, is unlikely to have more than 256 in the next era. An already-oversubscribed validator with 1000 nominators this era, however, is very likely to be oversubscribed in the next era as well."),(0,i.kt)("h3",{id:"the-election-solution-set"},"The Election Solution Set"),(0,i.kt)("p",null,'Determining which validators are in the active set and which nominators are nominating them creates a very large graph mapping nominators to their respective validators. This "solution set" is computed off-chain and submitted to the chain, which means it must fit in a single block. If there are a large number of nominators, this means that some nominators must be eliminated. Currently, nominators are sorted by amount of DOT staked and those with more DOT are prioritized. This means that if you are staking with a small amount of DOT, you may not receive rewards. This minimal amount is dynamic based on the number of validators, number of nominators, amount nominated, and other factors.'),(0,i.kt)("h3",{id:"receiving-rewards"},"Receiving Rewards"),(0,i.kt)("p",null,"As long as you have nominated more than one validator candidate, at least one of them got elected, and you are nominating with enough stake to get into the solution set, your bonded stake will be fully distributed to one or more validators. That being said, you may not receive rewards if you nominated very few validator candidates and no one got elected, or your stake is small and you only selected oversubscribed validators, or the validator you are nominating has 100% commission. It is generally wise to choose as many trustworthy validators as you can (up to 16) to reduce the risk of none of your nominated validators being elected."),(0,i.kt)("p",null,"Rewards are ",(0,i.kt)("em",{parentName:"p"},"lazy")," - somebody must trigger a payout for a validator for rewards to go all of the validator's nominators. Any account can do this, although in practice validator operators often do this as a service to their nominators. See the page on ",(0,i.kt)("a",{parentName:"p",href:"learn-simple-payouts"},"Simple Payouts")," for more information and instructions for claiming rewards."),(0,i.kt)("h3",{id:"what-to-take-into-consideration-when-nominating"},"What to Take Into Consideration When Nominating"),(0,i.kt)("p",null,"One thing to keep in mind as a nominator is the validator's commission. The commission is the percentage of the validator reward which is taken by the validator before the rewards are split among the nominators. As a nominator, you may think that the lowest commission is best. However, this is not always true. Validators must be able to run at break-even in order to sustainably continue operation. Independent validators that rely on the commission to cover their server costs help to keep the network decentralized. Commission is just one piece of the puzzle that you should consider when picking validators to nominate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking Returns",src:a(33833).Z})),(0,i.kt)("p",null,"As a nominator, if you only want to know the profit each validator made for each era, you can go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"Targets")," section under the staking page by inputting the number of tokens you would like to stake to check it. Then, nominate those who have a higher profit. However, that does not guarantee the right way to evaluate the validators' overall performance."),(0,i.kt)("h3",{id:"filter-out-validators-with-undesirable-traits"},"Filter Out Validators With Undesirable Traits"),(0,i.kt)("p",null,'On the Targets page, you can filter out validators that have traits that may indicate an issue with you nominating them. You can turn these filters off and on to help narrow down which validators you should nominate. It is important to note that none of these traits are necessarily "bad"; however, depending on your validator selection methodology, they may be characteristics that you would be interested in filtering out.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Single from operator")," - Do not show groups of validators run by a single operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No 20%+ comm")," - Do not show any validators with a commission of 20% or higher."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No at capacity")," - Do not show any validators who are currently operating ",(0,i.kt)("a",{parentName:"li",href:"glossary#capacity"},"at capacity")," (i.e., could potentially be oversubscribed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recent payouts")," - Only show validators that have recently caused a ",(0,i.kt)("a",{parentName:"li",href:"learn-simple-payouts"},"payout to be issued"),". Note that anyone can cause a payout to occur; it does not have to be the operator of a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Only elected")," - Only show validators that are currently in the active set (i.e., they have been elected to produce blocks this era)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Only with an identity")," - Only show validators that have set an ",(0,i.kt)("a",{parentName:"li",href:"learn-identity"},"identity"),". Note that this identity does not have to be verified by a registrar for the validator to show up in the list.")),(0,i.kt)("h3",{id:"review-your-validators-history"},"Review Your Validators' History"),(0,i.kt)("p",null,"How the validator acted in the past may be a good indicator of how they will act in the future. An example of problematic behavior would be if a validator is regularly offline, their nominators most likely would get fewer rewards than others. More importantly, when many validators are ",(0,i.kt)("a",{parentName:"p",href:"learn-staking#unresponsiveness"},"unreachable"),", those nominators who staked with them will be slashed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Validator Stats",src:a(4856).Z})),(0,i.kt)("p",null,"Thus, to be a smart nominator, it would be better to query their ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query/"},"histories")," to see statistics such as blocks produced, rewards and slashes, and ",(0,i.kt)("a",{parentName:"p",href:"learn-identity"},"identity")," (if they have it set). Moreover, a nominator should do comprehensive research on their validator candidates - they should go over the validators' websites to see who they are, what kind of infrastructure setup they are using, reputation, the vision behind the validator, and more."),(0,i.kt)("h3",{id:"be-aware-of-the-risks-of-single-operators-with-multiple-validators"},"Be Aware of The Risks of Single Operators with Multiple Validators"),(0,i.kt)("p",null,'Recall that slashing is an additive function; the more validators that are offline or equivocate in a given session, the harsher the penalties. Since validators that are controlled by a single entity are more at risk of a "synchronized" failure, nominating them implies a greater risk of having a large slash of your nominated funds. Generally, it is safer to nominate validators whose behavior is independent from others in as many ways as possible (different hardware, geographic location, owner, etc.).'),(0,i.kt)("h3",{id:"avoiding-oversubscribed-validators"},"Avoiding Oversubscribed Validators"),(0,i.kt)("p",null,"If you are not nominating with a large number of DOTs, you should try to avoid ",(0,i.kt)("a",{parentName:"p",href:"glossary#oversubscribed"},"oversubscribed")," validators. It is not always easy to calculate if the validator selected will be oversubscribed in the next session; one way to avoid choosing potentially oversubscribed validators is to filter out any that are ",(0,i.kt)("a",{parentName:"p",href:"glossary#capacity"},"at capacity")," on the Targets page."),(0,i.kt)("p",null,"Finally, if you have a very small amount of DOTs, you may not be able to have your nomination fit into the election set. The nominator to validator mapping has to fit in a single block, and if there are too many nominators, the lowest-staked nominations will be dropped. This value is obviously dynamic and will vary over time. If you review the lowest amount of nominations that are occurring on current validators, you can get a good idea of how many DOTs will likely be necessary to have your nomination earn you rewards. You can read the blog post ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-staking-an-update/"},'"Polkadot Staking: An Update"')," for more details."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These concepts have been further explained in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=weG_uzdSs1E&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=4"},"Why Nominate on Polkadot & Kusama video")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=K-a4CgVchvU&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=9"},"What to Consider when Nominating Validators on Polkadot and Kusama")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NYs9oWAbzbE&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=14"},"Nominating/Staking on Polkadot and Kusama"))),(0,i.kt)("h3",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-nominate-polkadot"},"Be a Nominator (Polkadot)")," - Guide on nominating on the Kusama canary network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-unbond"},"Stop Being a Nominator (all networks)")," - Guide on stopping nominations and withdrawing tokens.")))}u.isMDXComponent=!0},26393:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_nominator_account-e0f5d58cd9cce279d6f462cde9f706f4.png"},33833:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_nominators_target-4b6618ad6611abdfa95dfd08551ac4d2.png"},4856:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_validator_stats-4b433d0c856a8bf0d2bb53cea027e009.png"}}]);