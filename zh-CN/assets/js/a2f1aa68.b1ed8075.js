(self.webpackChunk=self.webpackChunk||[]).push([[246],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42722:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>s,default:()=>c});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={id:"learn-randomness",title:"\u968f\u673a\u6027",sidebar_label:"\u968f\u673a\u6027"},i={unversionedId:"learn-randomness",id:"learn-randomness",isDocsHomePage:!1,title:"\u968f\u673a\u6027",description:"\u6743\u76ca\u8bc1\u660e(PoS)\u533a\u5757\u94fe\u7684\u968f\u673a\u6027\u5bf9\u4e8e\u9a8c\u8bc1\u4eba\u8d23\u4efb\u7684\u516c\u5e73\u5e76\u4e14\u4e0d\u53ef\u9884\u6d4b\u7684\u5206\u914d\u662f\u975e\u5e38\u91cd\u8981\u3002 \uff0c\u56e0\u4e3a\u8ba1\u7b97\u673a\u662f\u786e\u5b9a\u6027\u8bbe\u5907\uff0c\u6240\u4ee5\u5b83\u4eec\u5728\u968f\u673a\u6570\u65b9\u9762\u5f88\u5dee(\u540c\u6837\u8f93\u5165\u603b\u662f\u4f1a\u4ea7\u751f\u540c\u6837\u8f93\u51fa)\u3002\u5927\u90e8\u4efd\u4eba\u901a\u5e38\u5728\u8ba1\u7b97\u673a\u4e0a(\u4f8b\u5982\u6e38\u620f\u5e94\u7528\u7a0b\u5e8f\u4e2d)\u79f0\u968f\u673a\u6570\u5b9e\u9645\u4e0a\u662f\u4f2a\u968f\u673a- \u4e5f\u5c31\u662f\u8bf4\u5b83\u4eec\u4f9d\u8d56\u7528\u6237\u6216\u5176\u4ed6\u7c7b\u578b\u7684Oracle \u63d0\u4f9b\u8db3\u591f\u968f\u673a\u7684seed\uff0c\u4f8b\u5982\u6c14\u8c61\u7ad9\u7684\u5927\u6c14\u566a\u58f0, \u5fc3\u8df3\u7387\u6216\u4ec0\u81f3\u7194\u5ca9\u706f\uff0c\u5c31\u53ef\u4ee5\u4ece\u4e2d\u4ea7\u751f\u4e00\u7cfb\u5217\u770b\u4f3c\u968f\u673a\u7684\u6570\u5b57\u3002\u4f46\u662f\u5982\u679c\u7ed9\u76f8\u540c\u7684\u79cd\u5b50\uff0c\u7ed3\u679c\u5c06\u4f1a\u662f\u4e00\u6837\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/learn-randomness.md",sourceDirName:".",slug:"/learn-randomness",permalink:"/polkadot-wiki/zh-CN/docs/learn-randomness",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-randomness.md",version:"current",sidebar_label:"\u968f\u673a\u6027",frontMatter:{id:"learn-randomness",title:"\u968f\u673a\u6027",sidebar_label:"\u968f\u673a\u6027"},sidebar:"docs",previous:{title:"Availability and Validity",permalink:"/polkadot-wiki/zh-CN/docs/learn-availability"},next:{title:"\u8de8\u94fe\u6d88\u606f\u4f20\u9012 (XCMP)",permalink:"/polkadot-wiki/zh-CN/docs/learn-crosschain"}},s=[{value:"VRF",id:"vrf",children:[]},{value:"RANDAO",id:"randao",children:[{value:"VDFs",id:"vdfs",children:[]}]},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[]}],p={toc:s};function c(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6743\u76ca\u8bc1\u660e(PoS)\u533a\u5757\u94fe\u7684\u968f\u673a\u6027\u5bf9\u4e8e\u9a8c\u8bc1\u4eba\u8d23\u4efb\u7684\u516c\u5e73\u5e76\u4e14\u4e0d\u53ef\u9884\u6d4b\u7684\u5206\u914d\u662f\u975e\u5e38\u91cd\u8981\u3002 \uff0c\u56e0\u4e3a\u8ba1\u7b97\u673a\u662f\u786e\u5b9a\u6027\u8bbe\u5907\uff0c\u6240\u4ee5\u5b83\u4eec\u5728\u968f\u673a\u6570\u65b9\u9762\u5f88\u5dee(\u540c\u6837\u8f93\u5165\u603b\u662f\u4f1a\u4ea7\u751f\u540c\u6837\u8f93\u51fa)\u3002\u5927\u90e8\u4efd\u4eba\u901a\u5e38\u5728\u8ba1\u7b97\u673a\u4e0a(\u4f8b\u5982\u6e38\u620f\u5e94\u7528\u7a0b\u5e8f\u4e2d)\u79f0\u968f\u673a\u6570\u5b9e\u9645\u4e0a\u662f",(0,o.kt)("em",{parentName:"p"},"\u4f2a\u968f\u673a"),"- \u4e5f\u5c31\u662f\u8bf4\u5b83\u4eec\u4f9d\u8d56\u7528\u6237\u6216\u5176\u4ed6\u7c7b\u578b\u7684",(0,o.kt)("em",{parentName:"p"},"Oracle")," \u63d0\u4f9b\u8db3\u591f\u968f\u673a\u7684",(0,o.kt)("em",{parentName:"p"},"seed"),"\uff0c\u4f8b\u5982",(0,o.kt)("a",{parentName:"p",href:"https://www.random.org/randomness/"},"\u6c14\u8c61\u7ad9\u7684\u5927\u6c14\u566a\u58f0"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mdpi.altmetric.com/details/47574324"},"\u5fc3\u8df3\u7387"),"\u6216\u4ec0\u81f3",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lavarand"},"\u7194\u5ca9\u706f"),"\uff0c\u5c31\u53ef\u4ee5\u4ece\u4e2d\u4ea7\u751f\u4e00\u7cfb\u5217\u770b\u4f3c\u968f\u673a\u7684\u6570\u5b57\u3002\u4f46\u662f\u5982\u679c\u7ed9\u76f8\u540c\u7684\u79cd\u5b50\uff0c\u7ed3\u679c\u5c06\u4f1a\u662f\u4e00\u6837\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u8f93\u5165\u5c06\u6839\u636e\u65f6\u95f4\u548c\u7a7a\u95f4\u800c\u53d8\u5316\uff0c\u4f46\u662f\u4e0d\u53ef\u80fd\u5c06\u76f8\u540c\u7684\u7ed3\u679c\u8f93\u5165\u5230\u5168\u7403\u7279\u5b9a\u533a\u5757\u94fe\u7684\u6240\u6709\u8282\u70b9\u4e2d\u3002\u5982\u679c\u8282\u70b9\u83b7\u5f97\u4e0d\u540c\u7684\u8f93\u5165\u4ee5\u521b\u5efa\u533a\u5757\uff0c\u5219\u4f1a\u53d1\u751f\u5206\u53c9\u3002\u663e\u7136\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u71b5\u4e0d\u9002\u5408\u7528\u4f5c\u533a\u5757\u94fe\u968f\u673a\u6027\u7684\u79cd\u5b50\u3002"),(0,o.kt)("p",null,"\u81f3\u4eca\u533a\u5757\u94fe\u6709\u4e8c\u79cd\u53ef\u7528\u7684\u968f\u673a\u6027\u65b9\u6cd5: RANDAO \u548c VRF\u3002 Polkadot \u4f7f\u7528 VRF\u3002"),(0,o.kt)("h2",{id:"vrf"},"VRF"),(0,o.kt)("p",null,"\u53ef\u9a8c\u8bc1\u968f\u673a\u51fd\u6570(VRF)\u662f\u6570\u5b66\u8fd0\u7b97\uff0c\u9700\u8981\u4e00\u4e9b\u8f93\u5165\u5e76\u4ea7\u751f\u968f\u673a\u6570\u4ee5\u53ca\u8be5\u63d0\u4ea4\u8005\u751f\u6210\u8be5\u968f\u673a\u6570\u7684\u771f\u5b9e\u6027\u8bc1\u660e\u3002\u4efb\u4f55\u6311\u6218\u8005\u90fd\u53ef\u4ee5\u9a8c\u8bc1\u8be5\u8bc1\u660e\uff0c\u4ee5\u786e\u4fdd\u968f\u673a\u6570\u751f\u6210\u6709\u6548\u3002"),(0,o.kt)("p",null,"Polkadot \u4e2d\u4f7f\u7528\u7684 VRF \u4e0e Ouroboros Praos \u4e2d\u7684\u5927\u81f4\u76f8\u540c\u3002 Ouroboros \u968f\u673a\u6027\u5bf9\u4e8e\u5757\u751f\u4ea7\u6765\u8bf4\u662f\u5b89\u5168\u5e76\u5bf9 BABE \u6765\u8bf4\u6548\u679c\u5f88\u597d\u3002\u5b83\u4eec\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e Polkadot \u7684 VRF \u4e0d\u4f9d\u8d56\u4e8e\u4e2d\u592e\u65f6\u949f(\u95ee\u9898\u53d8\u4e86-\u8c01\u7684\u4e2d\u592e\u65f6\u949f?)\uff0c\u800c\u662f\u53d6\u51b3\u4e8e\u5b83\u81ea\u5df1\u8fc7\u53bb\u7ed3\u679c\u6765\u786e\u5b9a\u73b0\u5728\u548c\u5c06\u6765\u7684\u7ed3\u679c\uff0c\u5e76\u4e14\u5b83\u4f7f\u7528\u63d2\u69fd\u6570\u5b57\u4f5c\u4e3a\u65f6\u949f\u6a21\u62df\u5668\u4f30\u8ba1\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b:"),(0,o.kt)("p",null,"Slots are discrete units of time six seconds in length. Each slot can contain a block, but may not. Slots make up epochs - on Polkadot, 2400 slots make one epoch, which makes epochs four hours long."),(0,o.kt)("p",null,'In every slot, each validator "rolls a die". They execute a function (the VRF) that takes as input the following:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'The "secret key",')," a key specifically made for these die rolls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"An epoch randomness value,")," which is the hash of VRF values from the blocks in the epoch before last (N-2), so past randomness has an effect on the current pending randomness (N)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u65f6\u9699\u53f7"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(52443).Z})),(0,o.kt)("p",null,"\u8f93\u51fa\u4e3a\u4e24\u4e2a\u6570\u503c: ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT"),"(\u968f\u673a\u503c)\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"PROOF"),"(\u8bc1\u660e\u968f\u673a\u6570\u503c\u5df2\u6b63\u786e\u751f\u6210\u7684\u8bc1\u660e)\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT"),"\u4e0e\u8be5\u534f\u8bae\u5b9e\u73b0\u4e2d\u5b9a\u4e49\u7684",(0,o.kt)("em",{parentName:"p"},"\u9608\u503c (threshold) "),"(\u5728 Polkadot Host)\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u8be5\u503c\u5c0f\u4e8e\u9608\u503c\uff0c\u90a3\u4e48\u63b7\u6b64\u6570\u5b57\u7684\u9a8c\u8bc1\u4eba\u5c06\u662f\u53ef\u5728\u8be5\u63d2\u69fd\u7684\u533a\u5757\u751f\u4ea7\u5019\u9009\u8005\u3002\u7136\u540e\uff0c\u9a8c\u8bc1\u4eba\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a\u533a\u5757\uff0c\u5e76\u5c06\u8be5\u533a\u5757\u4e0e\u5148\u524d\u83b7\u5f97\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"PROOF"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT"),"\u4e00\u8d77\u63d0\u4ea4\u5230\u7f51\u7edc\u4e2d\u3002"),(0,o.kt)("p",null,"The fishermen - nodes watching the network for collator and validator wrongdoing - will be verifying Relay Chain blocks. Since an illegal roll will generate an illegal block, and since fishermen will have access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PROOF")," in every block produced by a validator, it'll be easy for them to automatically report cheating validators."),(0,o.kt)("p",null,"\u603b\u7ed3: \u5728 VRF \u4e2d\uff0c\u6bcf\u4e2a\u9a8c\u8bc1\u4eba\u90fd\u4f1a\u4e3a\u81ea\u5df1\u63b7\u51fa\u4e00\u4e2a\u6570\u5b57\uff0c\u5e76\u6839\u636e\u9608\u503c\u5bf9\u5176\u8fdb\u884c\u68c0\u67e5\uff0c\u5982\u679c\u968f\u673a\u63b7\u9ab0\u4f4e\u4e8e\u8be5\u9608\u503c\uff0c\u5219\u4f1a\u751f\u7522\u5340\u5757\u3002 \u9493\u9c7c\u4eba\u76d1\u5bdf\u7f51\u7edc\u5e76\u62a5\u544a\u4e0d\u826f\u884c\u4e3a\u9a8c\u8bc1\u8fd9\u4e9b\u63b7\u9ab0\u7684\u6709\u6548\u6027\uff0c\u5e76\u5411\u7cfb\u7edf\u62a5\u544a\u4efb\u4f55\u4f5c\u5f0a\u884c\u4e3a(\u4f8b\u5982\u5c3d\u7ba1\u63b7\u51fa\u7684\u4eba\u6570\u8d85\u8fc7\u9608\u503c\uff0c\u4f46\u6709\u4eba\u5047\u88c5\u6210\u5757\u751f\u4ea7\u5340\u584a\u8005)\u3002"),(0,o.kt)("p",null,"\u7cbe\u660e\u7684\u8bfb\u8005\u4f1a\u6ce8\u610f\u5230\uff0c\u8fd9\u79cd\u5de5\u4f5c\u65b9\u5f0f\u67d0\u4e9b\u65f6\u9699\u53ef\u80fd\u6ca1\u6709\u9a8c\u8bc1\u4eba\u4f5c\u4e3a\u533a\u5757\u94fe\u751f\u4ea7\u8005\u5019\u9009\u8005\uff0c\u56e0\u4e3a\u6240\u6709\u9a8c\u8bc1\u5019\u9009\u8005\u7684\u5f97\u5206\u90fd\u592a\u9ad8\u800c\u9519\u8fc7\u4e86\u9608\u503c\u503c\u3002\u6211\u4eec\u5728",(0,o.kt)("a",{parentName:"p",href:"learn-consensus"}," wiki \u5171\u8bc6\u9875\u9762"),"\u4e2d\u8bf4\u660e\u4e86\u5982\u4f55\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u5e76\u786e\u4fdd Polkadot \u51fa\u5757\u65f6\u95f4\u4fdd\u6301\u5728\u6052\u5b9a\u65f6\u95f4\u3002"),(0,o.kt)("h2",{id:"randao"},"RANDAO"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/randao/randao"}," RANDAO ")," - RANDAO \u8981\u6c42\u6bcf\u4e2a\u9a8c\u8bc1\u4eba\u901a\u8fc7\u5bf9\u67d0\u4e9b\u79cd\u5b50\u6267\u884c\u4e00\u7cfb\u5217\u54c8\u5e0c\u64cd\u4f5c\u6765\u8fdb\u884c\u51c6\u5907\u3002 \u9a8c\u8bc1\u4eba\u7136\u540e\u5728\u4e00\u4e2a\u56de\u5408\u4e2d\u53d1\u5e03\u6700\u7ec8\u7684\u54c8\u5e0c\u503c\uff0c\u52a0\u4e0a\u968f\u673a\u6570\u662f\u4ece\u6bcf\u4e2a\u53c2\u4e0e\u8005\u8fdb\u5165\u6e38\u620f\u4e2d\u5f97\u51fa\u3002\u53ea\u8981\u6709\u4e00\u540d\u8bda\u5b9e\u7684\u9a8c\u8bc1\u4eba\u53c2\u52a0\uff0c\u968f\u673a\u6027\u5c31\u88ab\u8ba4\u4e3a\u662f\u5b89\u5168\uff08\u5728\u7ecf\u6d4e\u4e0a\u8fdb\u884c\u653b\u51fb\u662f\u4e0d\u53ef\u884c\uff09\u3002Polkadot \u4e0d\u9009\u7528 VRF \u7684\u968f\u673a\u6027\u65b9\u6cd5\u662f\u56e0\u4e3a\u4ece\u6bcf\u4e2a\u533a\u5757\u751f\u4ea7\u8005\u5904\u63ed\u793a\u6bcf\u4e2a\u65f6\u9699\u7684\u54c8\u5e0c\u503c\u9700\u8981\u4e8c\u6b21\u5e26\u5bbd\u6216\u81f3\u5c11\u4e8c\u6b21\u8ba1\u7b97\u3002"),(0,o.kt)("p",null,"RANDAO \u53ef\u9009\u589e\u52a0VDF\u3002"),(0,o.kt)("h3",{id:"vdfs"},"VDFs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vdfresearch.org/"},"Verifiable Delay Functions")," are computations that take a prescribed duration of time to complete, even on parallel computers. They produce unique output that can be independently and efficiently verified in a public setting. By feeding the result of RANDAO into a VDF, a delay is introduced that renders any attacker's attempt at influencing the current randomness obsolete."),(0,o.kt)("p",null,"VDFs will likely be implemented through ASIC devices that need to be run separately from the other types of nodes. Although only one is enough to keep the system secure, and they will be open source and distributed at nearly no charge, running them is neither cheap nor incentivized, producing unneccessary friction for users of the blockchains opting for this method."),(0,o.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/block-production/Babe.html"},"Polkadot's research on blockchain randomness and sortition")," - contains reasoning for choices made along with proofs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/issues/57"},"\u5173\u4e8e Polkadot \u4e2d\u4f7f\u7528\u968f\u673a\u6027\u7684\u8ba8\u8bba")," - W3F \u7814\u7a76\u4eba\u5458\u8ba8\u8bba\u4e86 Polkadot \u4e2d\u7684\u968f\u673a\u6027\uff0c\u4f55\u65f6\u7528\u4ee5\u53ca\u5728\u54ea\u4e9b\u5047\u8bbe\u4e0b\u8fdb\u884c\u3002")))}c.isMDXComponent=!0},52443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/VRF_babe-12768d3392ba939b5f4c4955556d12c2.png"}}]);