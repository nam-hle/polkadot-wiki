(self.webpackChunk=self.webpackChunk||[]).push([[9417],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>i,toc:()=>l,default:()=>u});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),s={id:"mirror-learn-balance-transfers",title:"Balance Transfers",sidebar_label:"How to transfer Balances"},i={unversionedId:"mirror-learn-balance-transfers",id:"mirror-learn-balance-transfers",isDocsHomePage:!1,title:"Balance Transfers",description:"Balance transfers are used to send balance from one account to another account. To start transferring balances, we will begin by using Polkadot-JS Apps. This guide assumes that you've already created an account and have some funds that will be transferred.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/mirror-learn-balance-transfers.md",sourceDirName:".",slug:"/mirror-learn-balance-transfers",permalink:"/polkadot-wiki/ru-RU/docs/mirror-learn-balance-transfers",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/mirror-learn-balance-transfers.md",version:"current",sidebar_label:"How to transfer Balances",frontMatter:{id:"mirror-learn-balance-transfers",title:"Balance Transfers",sidebar_label:"How to transfer Balances"}},l=[{value:"Polkadot-JS Apps",id:"polkadot-js-apps",children:[{value:"Using the Transfer Tab",id:"using-the-transfer-tab",children:[]},{value:"Keep-Alive Checks",id:"keep-alive-checks",children:[]},{value:"Existing Reference Error",id:"existing-reference-error",children:[]},{value:"From the Accounts Page",id:"from-the-accounts-page",children:[]}]}],c={toc:l};function u(e){var t=e.components,s=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Balance transfers are used to send balance from one account to another account. To start transferring balances, we will begin by using ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),". This guide assumes that you've already ",(0,r.kt)("a",{parentName:"p",href:"learn-account-generation"},"created an account")," and have some funds that will be transferred."),(0,r.kt)("h2",{id:"polkadot-js-apps"},"Polkadot-JS Apps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: In this walkthrough we will be using the Polkadot network, but this is the same process for Kusama. If you would like to switch to a different network, you can change it by clicking the top left navigation dropdown and selecting a different network.")),(0,r.kt)("p",null,"Let's begin by opening ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),". There are two ways to make a balance transfer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'By using the "Transfer" tab in the "Accounts" dropdown (located on the top navigational menu).'),(0,r.kt)("li",{parentName:"ol"},'Clicking the "send" button while in the "Accounts" page.')),(0,r.kt)("h3",{id:"using-the-transfer-tab"},"Using the Transfer Tab"),(0,r.kt)("p",null,'Click on the "Transfer" tab in the "Accounts" dropdown.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(97172).Z})),(0,r.kt)("p",null,"Now a modal window will appear on the page. The modal asks you to enter 3 inputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"send from account": Your account with funds that you will send from.'),(0,r.kt)("li",{parentName:"ul"},'"send to address": The address of the account that will receive the funds.'),(0,r.kt)("li",{parentName:"ul"},'"amount": The amount of tokens you will transfer.')),(0,r.kt)("p",null,'The "existential deposit" box shows you the minimum amount of funds you must keep in the account for it to remain active. See the ',(0,r.kt)("a",{parentName:"p",href:"build-protocol-info#existential-deposit"},"existential deposit")," section for more information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(158).Z})),(0,r.kt)("p",null,'After setting your inputs correctly, click the "Make Transfer" button and confirm. Once the transfer is included in a block you will see a green notification in the top-right corner of your screen.'),(0,r.kt)("h3",{id:"keep-alive-checks"},"Keep-Alive Checks"),(0,r.kt)("p",null,"At an ",(0,r.kt)("a",{parentName:"p",href:"glossary#extrinsic"},"extrinsic")," level, there are two main ways to transfer funds from one account to another. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," will allow you to send DOTs regardless of the consequence; ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," will not allow you to send an amount that would allow the sending account to be removed due to it going below the existential deposit."),(0,r.kt)("p",null,"By default, Polkadot-JS Apps will use ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),', ensuring that the account you send from cannot drop below the existential deposit (1 DOT or 0.001666 KSM). However, it may be that you do not want to keep this account alive (for example, because you are moving all of your funds to a different address). In this case, click on the "keep-alive" toggle at the bottom of the modal window. The label should switch from "Transfer with account keep-alive checks"(',(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),' will be used) to "Normal transfer without keep-alive checks" (',(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," extrinsic will be used). As a common use case for using normal transfers is to entirely clear out the account, a second toggle will appear if you have the keep-alive check turned off that will send all the tokens in the account, minus a transaction fee, to the destination address."),(0,r.kt)("p",null,"Note that attempting to send less than the existential deposit to an account with 0 DOT will always fail, no matter if the keep-alive check is on or not. For instance, attempting to transfer 0.1 DOT to an account you just generated (and thus has no DOT) will fail, since 0.1 is less than the existential deposit of 1 DOT and the account cannot be initialized with such a low balance."),(0,r.kt)("p",null,"Note that even if the transfer fails due to a keep-alive check, the transaction fee will be deducted from the sending account if you attempt to transfer."),(0,r.kt)("h3",{id:"existing-reference-error"},"Existing Reference Error"),(0,r.kt)("p",null,'If you are trying to reap an account and you recieve an error similar to "There is an existing reference count on the sender account. As such the account cannot be reaped from the state", then you have existing references to this account that must first be removed before it can be reaped. References may still exist from:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonded tokens (most likely)"),(0,r.kt)("li",{parentName:"ul"},"Unpurged session keys (if you were prevously a validator)"),(0,r.kt)("li",{parentName:"ul"},"Token locks"),(0,r.kt)("li",{parentName:"ul"},"Existing recovery info"),(0,r.kt)("li",{parentName:"ul"},"Existing assets")),(0,r.kt)("h4",{id:"bonded-tokens"},"Bonded Tokens"),(0,r.kt)("p",null,"If you have tokens that are bonded, you will need to unbond them before you can reap your account. Follow the instructions at ",(0,r.kt)("a",{parentName:"p",href:"#maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," to check if you have bonded tokens, stop nominating (if necessary) and unbond your tokens."),(0,r.kt)("h4",{id:"purging-session-keys"},"Purging Session Keys"),(0,r.kt)("p",null,"If you used this account to set up a validator and you did not purge your keys before unbonding your tokens, you need to purge your keys. You can do this by seeing the ",(0,r.kt)("a",{parentName:"p",href:"#maintain-guides-how-to-stop-validating"},"How to Stop Validating")," page. This can also be checked by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"session.nextKeys")," in the chain state for an existing key."),(0,r.kt)("h4",{id:"checking-for-locks"},"Checking for Locks"),(0,r.kt)("p",null,"You can check for locks by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"system.account(AccountId)")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer > Chain state"),'. Select your account, then click the "+" button next to the dropdowns, and check the relative ',(0,r.kt)("inlineCode",{parentName:"p"},"data")," JSON object. If you see a non-zero value for anything other than ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),", you have locks on your account that need to get resolved."),(0,r.kt)("p",null,"You can also check for locks by navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounts > Accounts")," in ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/"},"PolkadotJS Apps"),". Then, click the dropdown arrow of the relevant account under the 'balances' column. If it shows that some tokens are in a 'locked' state, you can see why by hovering over the information icon next to it."),(0,r.kt)("h4",{id:"existing-recovery-info"},"Existing Recovery Info"),(0,r.kt)("p",null,"Currently, Polkadot  does not use the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame#recovery"},"Recovery Pallet"),", so this is probably not why your tokens have existing references. :polkadot}}"),(0,r.kt)("p",null,"","","",""),(0,r.kt)("h4",{id:"existing--polkadot-non-dot-polkadot---kusama-non-ksm-kusama--assets"},"Existing {{ polkadot: Non-DOT :polkadot }} {{ kusama: Non-KSM :kusama }} Assets"),(0,r.kt)("p",null,"Currently, Polkadot  does not use the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame#assets"},"Assets Pallet"),", so this is probably not why your tokens have existing references."),(0,r.kt)("h3",{id:"from-the-accounts-page"},"From the Accounts Page"),(0,r.kt)("p",null,'Navigate to the "Accounts" page by selecting the "Accounts" tab from the "Accounts" dropdown located on the top navigational menu of Polkadot-JS Apps.'),(0,r.kt)("p",null,'You will see a list of accounts you have loaded. Click the "Send" button in the row for the account you will like to send funds from.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(27508).Z})),(0,r.kt)("p",null,'Now you will see the same modal window as if using the "Transfer" tab. Fill in the inputs correctly and hit "Make Transfer" then confirm the balance transfer. You will see a green notification in the top-right corner of the screen when the transfer is included in a block.'))}u.isMDXComponent=!0},97172:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-1-f6f309bbc7388327e58853eae66c5d1e.png"},158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-2-65ec4db364371a79f239abe5b190d7b9.png"},27508:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-3-ed7c8c2299bbe828723b721321b88868.png"}}]);