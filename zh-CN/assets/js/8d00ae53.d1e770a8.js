(self.webpackChunk=self.webpackChunk||[]).push([[8003],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>p,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57600:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>i,metadata:()=>c,toc:()=>l,default:()=>p});var n=t(22122),r=t(19756),o=(t(67294),t(3905)),i={id:"mirror-learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"},c={unversionedId:"mirror-learn-crowdloans",id:"mirror-learn-crowdloans",isDocsHomePage:!1,title:"Parachain Crowdloans",description:"{{ polkadotpolkadot }} {{ kusamakusama }} allows parachains to source tokens for their parachain bids in a decentralized crowdloan.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/mirror-learn-crowdloans.md",sourceDirName:".",slug:"/mirror-learn-crowdloans",permalink:"/polkadot-wiki/zh-CN/docs/mirror-learn-crowdloans",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/mirror-learn-crowdloans.md",version:"current",sidebar_label:"Parachain Crowdloans",frontMatter:{id:"mirror-learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"}},l=[],s={toc:l};function p(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot  allows parachains to source tokens for their parachain bids in a decentralized crowdloan."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and parachain auction testing on Rococo, please see the ",(0,o.kt)("a",{parentName:"p",href:"build-parachains-rococo"},"Rococo page")," >\n",".")),(0,o.kt)("p",null,"Anyone can create a new crowdloan campaign for a parachain slot\n. A campaign is configured as a range of slots (i.e. the duration of the ",(0,o.kt)("a",{parentName:"p",href:"learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration. The duration can last over several auctions, meaning that the team will not need to restart the campaign just because they do not secure a slot on their first attempt."),(0,o.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate by sending a special transaction that references the campaign's index. Tokens used to participate must be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and governance ","\u2014"," because they will be moved into a module-controlled account that was generated uniquely for this campaign."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Important: All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a campaign is identified by index, not by address. ",(0,o.kt)("strong",{parentName:"p"},"Never transfer tokens to an address in support of a campaign."))),(0,o.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who forgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can imagine, rewards will take many forms and may vary widely among projects."),(0,o.kt)("p",null,"During some point of the crowdloan campaign the owner will upload the parachain data. Ideally, the owner does this before soliciting contributions to the campaign so that the contributors can verify it. The data can only be uploaded once during the course of the campaign and it will be what is deployed as the parachain's runtime. Of course, once the parachain is running it can always change via runtime upgrades (as determined through its own local governance)."),(0,o.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The collective tokens will be locked in that parachain's account for the entire duration that it is active."),(0,o.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its lease. During this phase, participants can withdraw the tokens with which they participated."),(0,o.kt)("li",{parentName:"ul"},"If the campaign was not successful, then this retirement phase will begin at the campaign's configured end, and participants can likewise withdraw their tokens.")),(0,o.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without winning a slot, anyone can trigger the refund of crowdloan contributions back to their original owners. All contributions must be returned before the crowdloan is fully deleted from the system."),(0,o.kt)("p",null,"Several teams in the ecosystem are preparing dashboards to track auctions and crowdloan campaigns. Check back with this page for updates as these are released."))}p.isMDXComponent=!0}}]);