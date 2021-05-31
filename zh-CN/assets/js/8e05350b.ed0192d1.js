(self.webpackChunk=self.webpackChunk||[]).push([[3777],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},32067:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,metadata:()=>s,toc:()=>l,default:()=>u});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o={id:"mirror-learn-identity",title:"Identity",sidebar_label:"Identity"},s={unversionedId:"mirror-learn-identity",id:"mirror-learn-identity",isDocsHomePage:!1,title:"Identity",description:"Polkadot provides a naming system that allows participants to add personal information to their on-chain account and subsequently ask for verification of this information by registrars.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/mirror-learn-identity.md",sourceDirName:".",slug:"/mirror-learn-identity",permalink:"/polkadot-wiki/zh-CN/docs/mirror-learn-identity",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-identity.md",version:"current",sidebar_label:"Identity",frontMatter:{id:"mirror-learn-identity",title:"Identity",sidebar_label:"Identity"},sidebar:"docs",previous:{title:"Governance",permalink:"/polkadot-wiki/zh-CN/docs/mirror-learn-governance"},next:{title:"Treasury",permalink:"/polkadot-wiki/zh-CN/docs/mirror-learn-treasury"}},l=[{value:"Setting an Identity",id:"setting-an-identity",children:[{value:"Format Caveat",id:"format-caveat",children:[]}]},{value:"Registrars",id:"registrars",children:[{value:"Becoming a registrar",id:"becoming-a-registrar",children:[]}]},{value:"Judgements",id:"judgements",children:[]},{value:"Cancelling Judgements",id:"cancelling-judgements",children:[{value:"Kusama Registrars",id:"kusama-registrars",children:[]},{value:"Polkadot Registrars",id:"polkadot-registrars",children:[]},{value:"Requesting Judgement",id:"requesting-judgement",children:[]}]},{value:"Sub Accounts",id:"sub-accounts",children:[]},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",children:[]}],d={toc:l};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot provides a naming system that allows participants to add personal information to their on-chain account and subsequently ask for verification of this information by ",(0,r.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,r.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,r.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name, website, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would like attestations (see ",(0,r.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,r.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n1.666, and 0.41666 per each field beyond the legal name. These funds are ",(0,r.kt)("em",{parentName:"p"},"locked"),", not spent - they are returned when the identity is cleared. Each field can store up to 32 bytes of information, so the data must be less than that. When inputting the data manually through the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics UI"),", a ",(0,r.kt)("a",{parentName:"p",href:"https://onlineutf8tools.com/convert-utf8-to-bytes"},"UTF8 to bytes")," converter can help."),(0,r.kt)("p",null,'The easiest way to add the built-in fields is to click the gear icon next to your account and select "Set on-chain identity".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gear icon provides the option to set identity",src:a(77648).Z})),(0,r.kt)("p",null,"A popup will appear, offering the default fields."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity field setup popup",src:a(79983).Z})),(0,r.kt)("p",null,'To add custom fields beyond the default ones, use the Extrinsics UI to submit a raw transaction by first clicking "Add Item" and adding any field name you like. The example below adds a field ',(0,r.kt)("inlineCode",{parentName:"p"},"steam"),", which is a user's ",(0,r.kt)("a",{parentName:"p",href:"https://store.steampowered.com"},"Steam"),' username. The first value is the field name in bytes ("steam") and the second is the account name in bytes ("theswader"). The display name also has to be provided, otherwise, the Identity pallet would consider it wiped if we submitted it with the "None" option still selected. That is to say, every time you make a change to your identity values, you need to re-submit the entire set of fields: the write operation is always "overwrite", never "append".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a custom field",src:a(93736).Z})),(0,r.kt)("p",null,"Note that custom fields are not shown in the UI by default:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Only built-in fields are shown",src:a(77732).Z})),(0,r.kt)("p",null,"The rendering of such custom values is, ultimately, up to the UI/dapp makers. In the case of PolkadotJS, the team prefers to only show official fields for now. If you want to check that the values are still stored, use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State UI")," to query the active account's identity info:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Raw values of custom fields are available on-chain",src:a(33006).Z})),(0,r.kt)("p",null,"It is up to your own UI or dapp to then do with this data as it pleases. The data will remain available for querying via the Polkadot API, so you don't have to rely on the PolkadotJS UI."),(0,r.kt)("p",null,"You can have a maximum of 100 custom fields."),(0,r.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,r.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to various hashes, a UI has no way of telling how to encode a given field it encounters. The PolkadotJS UI currently encodes the raw bytes it encounters as UTF8 strings, which makes these values readable on-screen. However, given that there are no restrictions on the values that can be placed into these fields, a different UI may interpret them as, for example, IPFS hashes or encoded bitmaps. This means any field stored as raw bytes will become unreadable by that specific UI. As field standards crystallize, things will become easier to use but for now, every custom implementation of displaying user information will likely have to make a conscious decision on the approach to take, or support multiple formats and then attempt multiple encodings until the output makes sense."),(0,r.kt)("h2",{id:"registrars"},"Registrars"),(0,r.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For example, a registrar could charge 1 DOT to verify one's legal name, email, and GPG key. When a user requests judgement, they will pay this fee to the registrar who provides the judgement on those claims. Users set a maximum fee they are willing to pay and only registrars below this amount would provide judgement."),(0,r.kt)("h3",{id:"becoming-a-registrar"},"Becoming a registrar"),(0,r.kt)("p",null,"To become a registrar, submit a pre-image and proposal into Democracy, then wait for people to vote on it. For best results, write a post about your identity and intentions beforehand, and once the proposal is in the queue ask people to second it so that it gets ahead in the referendum queue."),(0,r.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,r.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion - notably which account you\'re nominating to be a registrar in the ',(0,r.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a registrar",src:a(57906).Z})),(0,r.kt)("p",null,"Copy the preimage hash. In the above image, that's ",(0,r.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing a transaction."),(0,r.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,r.kt)("inlineCode",{parentName:"p"},"locked balance")," field needs to be at least 1.666 KSM. You can find out the minimum by querying the chain state under ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State")," -> Constants -> democracy -> minimumDeposit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submitting a proposal",src:a(47264).Z})),(0,r.kt)("p",null,"At this point, DOT holders can second the motion. With enough seconds, the motion will become a referendum, which is then voted on. If it passes, users will be able to request judgement from this registrar."),(0,r.kt)("h2",{id:"judgements"},"Judgements"),(0,r.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users declare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below that amount can provide a judgement."),(0,r.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their attestation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,r.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were performed."),(0,r.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct."),(0,r.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,r.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,r.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,r.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress. Information that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be removed by complete removal of the identity.'),(0,r.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for issuing faulty judgements."),(0,r.kt)("p",null,"To be judged after submitting your identity information, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you want to be judged by, and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these confirmations."),(0,r.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to Chain State UI and selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,r.kt)("h2",{id:"cancelling-judgements"},"Cancelling Judgements"),(0,r.kt)("p",null,"You may decide that you do not want to be judged by a registrar (for instance, because you realize you entered incorrect data or selected the wrong registrar). In this case, after submitting the request for judgement but before your identity has been judged, you can issue a call to cancel the judgement using an extrinsic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cancel Registrar",src:a(36008).Z})),(0,r.kt)("p",null,"To do this, first, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelRequest"),". Ensure that you are calling this from the correct account (the one for which you initially requested judgement). For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index"),", put the index of the registrar from which you requested judgement."),(0,r.kt)("p",null,"Submit the transaction, and the requested judgement will be cancelled."),(0,r.kt)("h3",{id:"kusama-registrars"},"Kusama Registrars"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Showing all registrars",src:a(69338).Z})),(0,r.kt)("p",null,"The image above reveals there are two registrars on Kusama:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Registrar 0, FcxNWVy5RESDsErjwyZmPCW6Z8Y3fbfLzmou34YZTrbcraL"),(0,r.kt)("li",{parentName:"ul"},"Registrar 1, Fom9M5W6Kck1hNAiE2mDcZ67auUCiNTzLBUdQy4QnxHSxdn")),(0,r.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they are, we can check their identity by adding them to our Address Book. Their identity will be automatically loaded."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chevdor is registrar #1",src:a(75711).Z})),(0,r.kt)("h3",{id:"polkadot-registrars"},"Polkadot Registrars"),(0,r.kt)("p",null,"On Polkadot there are two registrars:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web3 Foundation is registrar #0. The W3F registrar service is available on the Kusama at the moment, follow the guide written ",(0,r.kt)("a",{parentName:"li",href:"learn-registrar"},"here")," on how to use it. The service will be available on the Polkadot shortly."),(0,r.kt)("li",{parentName:"ul"},"Chevdor is registrar #1.")),(0,r.kt)("h3",{id:"requesting-judgement"},"Requesting Judgement"),(0,r.kt)("p",null,"Requesting judement follows the same process regardless of whether you're on the Kusama or Polkadot networks. Select one of the registrars from the query you made above."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Requesting judgement",src:a(97064).Z})),(0,r.kt)("p",null,"This will make your identity go from unjudged:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An unjudged identity",src:a(45605).Z})),(0,r.kt)("p",null,'To "waiting":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A pending identity",src:a(66420).Z})),(0,r.kt)("p",null,"At this point, direct contact with the registrar is required - the contact info is in their identity as shown above. Each registrar will have their own set of procedures to verify your identity and values, and only once you've satisfied their requirements will the process continue."),(0,r.kt)("p",null,"Once the registrar has confirmed the identity, a green checkmark should appear next to your account name with the appropriate confidence level:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A confirmed identity",src:a(95920).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that changing even a single field's value after you've been verified will un-verify your account and you will need to start the judgement process anew. However, you can still change fields while the judgement is going on - it's up to the registrar to keep an eye on the changes.")),(0,r.kt)("h2",{id:"sub-accounts"},"Sub Accounts"),(0,r.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary account. The system reserves a bond for each sub account. An example of how you might use this would be a validation company running multiple validators. A single entity, "My Staking Company", could register multiple sub accounts that represent the ',(0,r.kt)("a",{parentName:"p",href:"learn-keys"},"Stash accounts")," of each of their validators."),(0,r.kt)("p",null,"An account can have a maximum of 100 sub-accounts."),(0,r.kt)("p",null,"To register a sub-account on an existing account, you must currently use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics UI"),". There, select the identity pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"setSubs"),' as the function to use. Click "Add Item" for every child account you want to add to the parent sender account. The value to put into the Data field of each parent is the optional name of the sub-account. If omitted, the sub-account will inherit the parent\'s name and be displayed as ',(0,r.kt)("inlineCode",{parentName:"p"},"parent/parent")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"parent/child"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sub account setup",src:a(65254).Z})),(0,r.kt)("p",null,"Note that a deposit of 2.5KSM is required for every sub-account."),(0,r.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing an identity also clears all sub accounts and returns their deposits."),(0,r.kt)("p",null,"To clear an identity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts UI"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the three dots corresponding to the account you want to clear and select 'Set on-chain identity'."),(0,r.kt)("li",{parentName:"ol"},"Select 'Clear Identity', and sign and submit the transaction.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of the deposit."))}u.isMDXComponent=!0},77648:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-00f3ea87da232c2f7d999dc39405e782.jpg"},79983:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-e55b0d8720dbc6f43d42bbb7fa6c78ba.jpg"},93736:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-4b7ddfc500350cc20dd455983c451be4.jpg"},77732:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/04-1cfbb35efba85f7965b3907d270c7fa8.jpg"},33006:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/05-473baf936b41cf5c55033313e658c776.jpg"},65254:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/06-8db63b396f151dd34f3acbc3b25f74d5.jpg"},45605:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/07-044349ecbf6f78cbe81ee21a35fb8e65.jpg"},97064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/08-397ceb01e2b7d58432d0a28b3443b432.jpg"},66420:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/09-c7de0d6dbccae8cfa559554ff2df8552.jpg"},95920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-0cd8e1b33492eb529995908c5fabbf61.jpg"},57906:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},47264:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},69338:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-9371542aa9f87356d90da7804e4ae82a.jpg"},75711:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},36008:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/registrar_cancel_judgement-a3c97ff1872f5450a2793271d139e23a.png"}}]);