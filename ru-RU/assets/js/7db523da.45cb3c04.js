(self.webpackChunk=self.webpackChunk||[]).push([[6249],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58927:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,metadata:()=>l,toc:()=>s,default:()=>d});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={id:"mirror-maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating"},l={unversionedId:"mirror-maintain-guides-how-to-stop-validating",id:"mirror-maintain-guides-how-to-stop-validating",isDocsHomePage:!1,title:"How to Stop Validating",description:"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or server maintenance), submitting the chill extrinsic in the staking pallet should suffice. It is only if you wish to unbond funds or reap an account that you should continue with the following.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/mirror-maintain-guides-how-to-stop-validating.md",sourceDirName:".",slug:"/mirror-maintain-guides-how-to-stop-validating",permalink:"/polkadot-wiki/ru-RU/docs/mirror-maintain-guides-how-to-stop-validating",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/mirror-maintain-guides-how-to-stop-validating.md",version:"current",sidebar_label:"How to Stop Validating",frontMatter:{id:"mirror-maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating"}},s=[{value:"Chill Validator",id:"chill-validator",children:[]},{value:"Purge validator session keys",id:"purge-validator-session-keys",children:[]},{value:"Unbond your tokens",id:"unbond-your-tokens",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or server maintenance), submitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking")," pallet should suffice. It is only if you wish to unbond funds or reap an account that you should continue with the following."),(0,i.kt)("p",null,"To ensure a smooth stop to validation, make sure you should do the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chill your validator"),(0,i.kt)("li",{parentName:"ul"},"Purge validator session keys"),(0,i.kt)("li",{parentName:"ul"},"Unbond your tokens")),(0,i.kt)("p",null,"These can all be done with ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," interface or with extrinsics."),(0,i.kt)("h2",{id:"chill-validator"},"Chill Validator"),(0,i.kt)("p",null,"To chill your validator or nominator, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"staking.chill()")," extrinsic. See the ",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-how-to-chill"},"How to Chill")," page for more information. You can also ",(0,i.kt)("a",{parentName:"p",href:"learn-simple-payouts#claiming-rewards"},"claim your rewards")," at this time."),(0,i.kt)("h2",{id:"purge-validator-session-keys"},"Purge validator session keys"),(0,i.kt)("p",null,"Purging the validator's session keys removes the key reference to your stash. This can be done through the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.purgeKeys()")," extrinsic with the controller account."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,i.kt)("strong",{parentName:"p"},"If you skip this step, you will not be able to reap your stash account"),", and you will need to rebond, purge the session keys, unbond, and wait the unbonding period again before being able to transfer your tokens. See ",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," for more details.")),(0,i.kt)("h2",{id:"unbond-your-tokens"},"Unbond your tokens"),(0,i.kt)("p",null,"Unbonding your tokens can be done through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Network > Staking > Account actions"),' page in PolkadotJS Apps by clicking the corrosponding stash account dropdown and selecting "Unbond funds". This can also be done through the ',(0,i.kt)("inlineCode",{parentName:"p"},"staking.unbond()")," extrinsic with the controller account."))}d.isMDXComponent=!0}}]);