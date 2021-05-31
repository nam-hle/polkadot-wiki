(self.webpackChunk=self.webpackChunk||[]).push([[2281],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60300:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,metadata:()=>s,toc:()=>l,default:()=>u});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"contributing",title:"\u53c2\u4e0e\u8d21\u732e",sidebar_label:"\u53c2\u4e0e\u8d21\u732e"},s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"\u53c2\u4e0e\u8d21\u732e",description:"The wiki was started and is maintained by the Web3 Foundation. It is an open source project and aims to be the most extensive resource of knowledge on Polkadot and the Polkadot ecosystem. A large part of the material currently focuses on Polkadot directly but it is not opposed to covering informational material for community projects. Please do not try to pull request any marketing material as this will be rejected.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/polkadot-wiki/zh-CN/docs/contributing",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/contributing.md",version:"current",sidebar_label:"\u53c2\u4e0e\u8d21\u732e",frontMatter:{id:"contributing",title:"\u53c2\u4e0e\u8d21\u732e",sidebar_label:"\u53c2\u4e0e\u8d21\u732e"}},l=[{value:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",id:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",children:[]},{value:"\u89c4\u5219",id:"\u89c4\u5219",children:[]},{value:"Heritage",id:"heritage",children:[]}],c={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The wiki was started and is maintained by the Web3 Foundation. It is an open source project and aims to be the most extensive resource of knowledge on Polkadot and the Polkadot ecosystem. A large part of the material currently focuses on Polkadot directly but it is not opposed to covering informational material for community projects. Please do not try to pull request any marketing material as this will be rejected."),(0,i.kt)("p",null,"Pull requests, discussions, and contributions from the community are encouraged. Active community members who demonstrate a record of good contributions may be given write access to the repository. Otherwise, Web3 Foundation holds the administrative position and final say on the content that is included. Specifically the Technical Education team at the foundation are most directly involved."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There is video guide on how to contribute to the wiki ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6i55KOcy7B0"},"here"),".")),(0,i.kt)("h2",{id:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e"},"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e"),(0,i.kt)("p",null,"Contributing to the wiki is easy with a GitHub account. Every page is a MarkDown file, which is a ",(0,i.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"very easy to learn")," syntax extension to plain text that makes creating links, rendering images, and nice-looking formatting simple."),(0,i.kt)("p",null,'Each page has an "Edit" button in the top right corner of the content. By clicking this button you are taken to the GitHub sign in page, where you can either log in or create an account.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20639).Z})),(0,i.kt)("p",null,"Once logged in, you'll be taken to the GitHub text editor in which you can make your edits directly. When you've completed your changes, you can add any specific details on what was changed and commit to a new branch to create a new Pull Request to the repository. From there one of the maintainers will either merge it in or request changes very soon."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(723).Z})," ",(0,i.kt)("img",{src:n(73428).Z})),(0,i.kt)("p",null,'Remember that after you click "Propose Changes", you must also click on "Create Pull Request" on the next page.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14168).Z})),(0,i.kt)("h2",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,i.kt)("p",null,"There are a few basic ground-rules for contributors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u6ca1\u6709",(0,i.kt)("inlineCode",{parentName:"strong"},"--force")," pushes "),"\u6216\u4ee5\u4efb\u4f55\u65b9\u5f0f\u4fee\u6539 Git \u5386\u53f2\u8bb0\u5f55\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u67d0\u4e9b\u95ee\u9898\uff0c\u5c24\u5176\u662f\u5bf9\u4e8e\u8bf8\u5982\u9519\u522b\u5b57\u4e4b\u7c7b\u7684\u8f83\u5c0f\u66f4\u6539\uff0c\u4f18\u5148\u4f7f\u7528 Pull requests\u3002 \u95ee\u9898\u9002\u7528\u4e8e\u4e00\u822c\u6216\u5e7f\u6cdb\u7684\u66f4\u6539\u6216\u5185\u5bb9\u7f3a\u5c11\u3002"),(0,i.kt)("li",{parentName:"ol"},"Only use ",(0,i.kt)("strong",{parentName:"li"},"non-master branches"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Significant modifications"),", even by contributors, ought to be subject to a ",(0,i.kt)("strong",{parentName:"li"},"pull request")," to solicit feedback from other contributors."),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u4efb\u4f55\u5176\u4e0d\u662f\u975e\u5e38\u91cd\u8981\u7684\u8d21\u732e\uff0c",(0,i.kt)("em",{parentName:"li"},"\u9f13\u52b1")," Pull requests\uff0c\u4f46\u7531\u8d21\u732e\u8005\u81ea\u884c\u51b3\u5b9a\u3002"),(0,i.kt)("li",{parentName:"ol"},"Contributors should attempt to adhere to the prevailing MarkDown style, language, and layout."),(0,i.kt)("li",{parentName:"ol"},"\u5e94\u4f7f\u7528\u6b63\u786e\u7684\u8bed\u6cd5\u3002\u5e26\u6709\u9519\u522b\u5b57\u7684 Pull requests \u7684\u8bf7\u6c42\u5728\u4fee\u590d\u4e4b\u524d\u4e0d\u4f1a\u5408\u5e76\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5e94\u6ce8\u610f\u4fdd\u6301\u5c3d\u53ef\u80fd\u5ba2\u89c2\u548c\u6709\u76ca\u7684\u4fe1\u606f\u3002\u4e0d\u5e94\u6545\u610f\u7f16\u9020 \uff0c\u4e5f\u4e0d\u5e94\u5b58\u5728\u5916\u90e8\u504f\u89c1\u3002"),(0,i.kt)("li",{parentName:"ol"},"We use a plugin called Prettier to standardize the style across documents. You can run this on your local copy with ",(0,i.kt)("inlineCode",{parentName:"li"},"npx run prettier --save"),", but for simplicity we also have a bot which runs this for us in your PRs.")),(0,i.kt)("h2",{id:"heritage"},"Heritage"),(0,i.kt)("p",null,"This document was based on the Level contribution guidelines located here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Level/community/blob/master/CONTRIBUTING.md"},"https://github.com/Level/community/blob/master/CONTRIBUTING.md")))}u.isMDXComponent=!0},723:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/contributing-69801a2ab9b4924d0057fd15ffeb53ab.png"},14168:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/creating-pull-request-2-dbd958496c4e13a05ce366472d8235f0.png"},73428:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/creating-pull-request-d619fd33e91fa84290fb190070c603f4.png"},20639:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/edit_button-1e9389a5b63fc0188fd0fa1b8b7d02bb.png"}}]);