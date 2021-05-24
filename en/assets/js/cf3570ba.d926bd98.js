(self.webpackChunk=self.webpackChunk||[]).push([[5670],{3905:(n,t,e)=>{"use strict";e.d(t,{Zo:()=>u,kt:()=>b});var o=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var d=o.createContext({}),l=function(n){var t=o.useContext(d),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},u=function(n){var t=l(n.components);return o.createElement(d.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(n,t){var e=n.components,a=n.mdxType,i=n.originalType,d=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=l(e),b=a,h=p["".concat(d,".").concat(b)]||p[b]||c[b]||i;return e?o.createElement(h,r(r({ref:t},u),{},{components:e})):o.createElement(h,r({ref:t},u))}));function b(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=e.length,r=new Array(i);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=n,s.mdxType="string"==typeof n?n:a,r[1]=s;for(var l=2;l<i;l++)r[l]=e[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,e)}p.displayName="MDXCreateElement"},40634:(n,t,e)=>{"use strict";e.r(t),e.d(t,{frontMatter:()=>r,metadata:()=>s,toc:()=>d,default:()=>u});var o=e(22122),a=e(19756),i=(e(67294),e(3905)),r={id:"maintain-guides-how-to-unbond",title:"Unbonding and Rebonding",sidebar_label:"Unbonding and Rebonding"},s={unversionedId:"maintain-guides-how-to-unbond",id:"maintain-guides-how-to-unbond",isDocsHomePage:!1,title:"Unbonding and Rebonding",description:"The following describes how to stop nominating or validating and retrieve your tokens. Please note",source:"@site/../docs/maintain-guides-how-to-unbond.md",sourceDirName:".",slug:"/maintain-guides-how-to-unbond",permalink:"/polkadot-wiki/en/docs/maintain-guides-how-to-unbond",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-unbond.md",version:"current",lastUpdatedBy:"Nam Hoang Le",lastUpdatedAt:1621507282,formattedLastUpdatedAt:"5/20/2021",sidebar_label:"Unbonding and Rebonding",frontMatter:{id:"maintain-guides-how-to-unbond",title:"Unbonding and Rebonding",sidebar_label:"Unbonding and Rebonding"}},d=[{value:"Step 1: Stop Nominating",id:"step-1-stop-nominating",children:[]},{value:"Step 2: Unbonding an amount",id:"step-2-unbonding-an-amount",children:[]},{value:"Rebonding before the end of the unbonding period",id:"rebonding-before-the-end-of-the-unbonding-period",children:[]}],l={toc:d};function u(n){var t=n.components,r=(0,a.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following describes how to stop nominating or validating and retrieve your tokens. Please note\nthat all networks on which you can nominate have a delayed exit period, called the ",(0,i.kt)("em",{parentName:"p"},"unbonding\nperiod"),", which serves as a cooldown. You will not be able to transfer your tokens before this period\nhas elapsed, and you will not receive any staking rewards during this period (as you are not\nnominating any validators)."),(0,i.kt)("h3",{id:"step-1-stop-nominating"},"Step 1: Stop Nominating"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),' navigate to the "Staking" tab.'),(0,i.kt)("p",null,'On this tab click on the "Account Actions" tab at the top of the screen.'),(0,i.kt)("p",null,'Here, click "Stop Nominating" or "Stop Validating" (depending on your role) on an account you\'re\nstaking with and would like to free the funds for. This will "chill" the tokens.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stop Nominating Button",src:e(75845).Z})),(0,i.kt)("p",null,"After you confirm this transaction, your tokens will remain ",(0,i.kt)("em",{parentName:"p"},"bonded"),". This means they stay ready to\nbe distributed among nominees or used as validator self-stake again. To actually withdraw them, you\nneed to unbond."),(0,i.kt)("h3",{id:"step-2-unbonding-an-amount"},"Step 2: Unbonding an amount"),(0,i.kt)("p",null,'To unbond the amount, click the little gear icon next to the account you want to unbond tokens for,\nand select "Unbond funds".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unbonding",src:e(39884).Z})),(0,i.kt)("p",null,"Select the amount you wish to unbond and click Unbond, then confirm the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unbonding all",src:e(75240).Z})),(0,i.kt)("p",null,'If successful, your balance will show as "unbonding" with an indicator of how many more blocks\nremain until the amount is fully unlocked.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unbonding duration",src:e(1770).Z})),(0,i.kt)("p",null,"This duration will vary depending on the network you're on and will typically be four times as fast\non Kusama as it is on Polkadot."),(0,i.kt)("p",null,"Once this process is complete, you will have to issue another, final transaction: Withdraw Unbonded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unbonding withdraw",src:e(49485).Z})),(0,i.kt)("p",null,"You can also check how long you have to wait in order to withdraw your stake in the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/accounts"},"Accounts"),' page by\nexpanding your account balance. There is a tiny icon beside the word "unbonding" that will\neventually become an unlock icon once the remaning blocks get passed.'),(0,i.kt)("p",null,"Then, you can click that icon directly to submit the withdraw transaction. Finally, your\ntransferrable balance will increase by the amount of tokens you've just fully unbonded."),(0,i.kt)("h2",{id:"rebonding-before-the-end-of-the-unbonding-period"},"Rebonding before the end of the unbonding period"),(0,i.kt)("p",null,"If you want to rebond your tokens before the unbonding period is over you can do this by issuing a\n",(0,i.kt)("inlineCode",{parentName:"p"},"rebond")," extrinsic. This allows you to bond your tokens that are still locked without waiting until\nthe end of the unbonding period."),(0,i.kt)("p",null,"In order to do this you will need to issue an extrinsic manually from ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),"."),(0,i.kt)("p",null,'Go to the "Extrinsics" option that\'s located in the "Developer" dropdown in the top menu.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"extrinsic menu",src:e(4643).Z})),(0,i.kt)("p",null,'Select the "staking" pallet and the "rebond" extrinsic. Enter the amount of tokens that are\ncurrently locked in unbonding that you want to rebond. Then click "Submit Transaction".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"confirm",src:e(41289).Z})),(0,i.kt)("p",null,"Confirm the transaction in the next pop-up. Once the transaction is included in the next block your\ntokens will be rebonded again and you can start staking with them."))}u.isMDXComponent=!0},4643:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/rebonding-1-5ddf2e54b0c0377854646ca0973695f9.png"},41289:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/rebonding-2-1b288ea441455345aaa1a89b9231d646.png"},75845:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/unbond1-cac444c287f47d7ecdb83d006f047ffe.png"},39884:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/unbond2-8cf823c7399a276dc070f571f18f0097.png"},75240:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/unbond3-509fd9f1899c40c8a4cb024b57ee74ff.png"},1770:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/unbond4-923dbe313bd6a56d3cac94f78953bc5d.png"},49485:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o=e.p+"assets/images/unbond5-1d1b324282e3db94b12f243df10f5c61.png"}}]);