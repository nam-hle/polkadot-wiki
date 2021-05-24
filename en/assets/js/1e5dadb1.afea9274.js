(self.webpackChunk=self.webpackChunk||[]).push([[4540],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},15624:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var a=r(22122),o=r(19756),n=(r(67294),r(3905)),i={id:"research",title:"Research Pages",sidebar_label:"Research Pages"},s={unversionedId:"research",id:"research",isDocsHomePage:!1,title:"Research Pages",description:"The Polkadot research pages are edited directly by the",source:"@site/../docs/research.md",sourceDirName:".",slug:"/research",permalink:"/polkadot-wiki/en/docs/research",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/research.md",version:"current",lastUpdatedBy:"Bruno \u0160kvorc",lastUpdatedAt:1609349307,formattedLastUpdatedAt:"12/31/2020",sidebar_label:"Research Pages",frontMatter:{id:"research",title:"Research Pages",sidebar_label:"Research Pages"}},l=[{value:"Research Papers",id:"research-papers",children:[]},{value:"Research Blogs",id:"research-blogs",children:[]}],c={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Polkadot ",(0,n.kt)("a",{parentName:"p",href:"https://research.polkadot.network"},"research pages")," are edited directly by the\nresearchers at W3F and contain papers, articles and documents that are sources for the information\non the wiki."),(0,n.kt)("p",null,"The following papers and articles may be of special interest for those interested in investigating\nPolkadot from a research or academic perspective."),(0,n.kt)("h2",{id:"research-papers"},"Research Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2005.13456.pdf"},"Overview of Polkadot and its Design Considerations")," - A\nbroad overview of the design of Polkadot. Authors: Jeff Burdges, Alfonso Cevallos, Peter Czaban,\nRob Habermeier, Syed Hosseini, Fabio Lama, Handan K\u0131l\u0131n\xe7 Alper, Ximin Luo, Fatemeh Shirazi,\nAlistair Stewart, Gavin Wood"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/NPoS/index.html"},"Intro to Nominated Proof of Stake")," -\nA description of the NPoS scheme which selects which validators are allowed to participate in the\nconsensus protocol of Polkadot. Author: Alfonso Cevallos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},"GRANDPA: A Byzantine Finality Gadget")," - GHOST-based Recursive\nAncestor Deriving Prefix Agreement, Polkadot's finality gadget. Authors: Alistair Stewart and\nLefteris Kokoris Kogias"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.12990"},"A Verifiably Secure and Proportional Committee Election Rule")," -\nValidator Election in Nominated Proof of Stake. Authors: Alfonso Cevallos and Alistair Stewart"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},"Network Time with a Consensus on Clock")," - Consensus on Clock in\nUniversally Composable Timing. Author: Handan K\u0131l\u0131n\xe7 Alper"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/638"},"Delay Encryption")," - Delay Encryption can roughly be described\nas \u201cidentity based encryption with slow derived private key issuance\u201d. Authors: Jeff Burdges and\nLuca de Feo")),(0,n.kt)("h2",{id:"research-blogs"},"Research Blogs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network/an-updated-overview-of-polkadot/"},"An Updated Overview of Polkadot")," \u2013\nGives a summary of the paper \u201cOverview of Polkadot and its Design Considerations\u201d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-research-update/"},"Polkadot Research Update")," \u2013 Gives a summary\nof the papers on Validator Election in Nominated Proof of Stake, Network Time with a Consensus on\nClock, and Byzantine Finality Gadgets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/polkadots-messaging-scheme-b1ec560908b7"},"Polkadot\u2019s Messaging Scheme"),"\n\u2013 Gives an outline of Cross-Chain Message Passing (XCMP). Authors: Fatemeh Shirazi, Logan Saether,\nAlistair Stewart, Rob Habermeier, Gavin Wood"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/how-nominated-proof-of-stake-will-work-in-polkadot-377d70c6bd43"},"How Nominated Proof of Stake Will Work in Polkadot"),"\n\u2013 Gives an outline of Nominated Proof of Stake in Polkadot. Author: Alfonzo Cevallos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/messaging-protocol-workshop-outcomes-7a827d02a81a"},"Messaging Protocol Workshop Outcomes"),"\n\u2013 An initiative to design and implement a privacy-preserving communication system for\ndecentralized applications.")))}p.isMDXComponent=!0}}]);