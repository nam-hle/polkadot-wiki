(self.webpackChunk=self.webpackChunk||[]).push([[4429],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51294:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>s,default:()=>c});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"maintain-networks",title:"\u7f51\u7edc",sidebar_label:"\u7f51\u7edc"},l={unversionedId:"maintain-networks",id:"maintain-networks",isDocsHomePage:!1,title:"\u7f51\u7edc",description:"Polkadot \u662f\u5efa\u7acb\u5728 Substrate \u4e0a\u9762\uff0cSubstrate \u662f\u4e2a\u533a\u5757\u94fe\u6846\u67b6\u3002 Substrate \u7684\u5176\u4e2d\u4e00\u4e2a\u529f\u80fd\u662f\u5141\u8bb8\u4f7f\u7528\u5355\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u5e76\u914d\u7f6e\u5b83\u4e00\u4e2a\u542f\u52a8\u6807\u5fd7\u8fde\u63a5\u5230\u4e0d\u540c\u7684\u7f51\u7edc\u3002 \u8fd9\u91cc\u662f\u4e00\u4e9b\u4e0e Polkadot \u6216 Substrate \u76f8\u5173\u8054\u7684\u7f51\u7edc\u3002\u60a8\u53ef\u80fd\u60f3\u8fde\u63a5\u5e76\u52a0\u5165\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/maintain-networks.md",sourceDirName:".",slug:"/maintain-networks",permalink:"/polkadot-wiki/zh-CN/docs/maintain-networks",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-networks.md",version:"current",sidebar_label:"\u7f51\u7edc",frontMatter:{id:"maintain-networks",title:"\u7f51\u7edc",sidebar_label:"\u7f51\u7edc"}},s=[{value:"Polkadot \u7f51\u7edc",id:"polkadot-\u7f51\u7edc",children:[{value:"Polkadot \u4e3b\u7f51",id:"polkadot-\u4e3b\u7f51",children:[]},{value:"Kusama Canary \u7f51\u7edc",id:"kusama-canary-\u7f51\u7edc",children:[]},{value:"Western \u6d4b\u8bd5\u7f51\u7edc",id:"western-\u6d4b\u8bd5\u7f51\u7edc",children:[]},{value:"Differences",id:"differences",children:[]}]},{value:"Substrate \u7f51\u7edc",id:"substrate-\u7f51\u7edc",children:[{value:"Flaming Fir",id:"flaming-fir",children:[]}]},{value:"Telemetry \u76d1\u5bdf",id:"telemetry-\u76d1\u5bdf",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot \u662f\u5efa\u7acb\u5728 Substrate \u4e0a\u9762\uff0cSubstrate \u662f\u4e2a\u533a\u5757\u94fe\u6846\u67b6\u3002 Substrate \u7684\u5176\u4e2d\u4e00\u4e2a\u529f\u80fd\u662f\u5141\u8bb8\u4f7f\u7528\u5355\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u5e76\u914d\u7f6e\u5b83\u4e00\u4e2a\u542f\u52a8\u6807\u5fd7\u8fde\u63a5\u5230\u4e0d\u540c\u7684\u7f51\u7edc\u3002 \u8fd9\u91cc\u662f\u4e00\u4e9b\u4e0e Polkadot \u6216 Substrate \u76f8\u5173\u8054\u7684\u7f51\u7edc\u3002\u60a8\u53ef\u80fd\u60f3\u8fde\u63a5\u5e76\u52a0\u5165\u3002"),(0,o.kt)("h2",{id:"polkadot-\u7f51\u7edc"},"Polkadot \u7f51\u7edc"),(0,o.kt)("p",null,"\u82e5\u8981\u8fde\u63a5\u5230 Polkadot \u7f51\u7edc\uff0c\u8bf7\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"maintain-sync"},"\u8bf4\u660e")," \u5b89\u88c5 Polkadot \u53ef\u6267\u884c\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",{id:"polkadot-\u4e3b\u7f51"},"Polkadot \u4e3b\u7f51"),(0,o.kt)("p",null,"Currently Polkadot is built from the tip of master and is the default option when starting a node."),(0,o.kt)("p",null,"To start a Polkadot node, run the Polkadot binary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot\n")),(0,o.kt)("p",null,"and you will connect and start syncing to Polkadot."),(0,o.kt)("p",null,"Check your node is connected by viewing it on ",(0,o.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#/Polkadot%20CC3"},"Telemetry")," (you can set a custom name by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},'--name "my custom name"'),")"),(0,o.kt)("h3",{id:"kusama-canary-\u7f51\u7edc"},"Kusama Canary \u7f51\u7edc"),(0,o.kt)("p",null,"Kusama is a canary network and holds real economic value."),(0,o.kt)("p",null,"Run the Polkadot binary and specify ",(0,o.kt)("inlineCode",{parentName:"p"},"kusama")," as the chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=kusama\n")),(0,o.kt)("p",null,"and you will connect and start syncing to Kusama."),(0,o.kt)("p",null,"Check your node is connected by viewing it on ",(0,o.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#/Kusama%20CC3"},"Telemetry")," (you can set a custom name by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},'--name "my custom name"'),")"),(0,o.kt)("h3",{id:"western-\u6d4b\u8bd5\u7f51\u7edc"},"Western \u6d4b\u8bd5\u7f51\u7edc"),(0,o.kt)("p",null,"Westend is the latest test network for Polkadot. The tokens on this network are called ",(0,o.kt)("em",{parentName:"p"},"Westies")," and they purposefully hold no economic value."),(0,o.kt)("p",null,"Run the Polkadot binary and specify ",(0,o.kt)("inlineCode",{parentName:"p"},"westend")," as the chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=westend\n")),(0,o.kt)("p",null,"and you will connect and start syncing to Westend."),(0,o.kt)("p",null,"Check your node is connected by viewing it on ",(0,o.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Westend"},"Telemetry")," (you can set a custom name by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},'--name "my custom name"'),")"),(0,o.kt)("h4",{id:"westend-\u6c34\u9f99\u5934"},"Westend \u6c34\u9f99\u5934"),(0,o.kt)("p",null,"Follow the instruction ",(0,o.kt)("a",{parentName:"p",href:"learn-DOT#getting-westies"},"here")," for instructions on acquiring Westies."),(0,o.kt)("h3",{id:"differences"},"Differences"),(0,o.kt)("p",null,"Runtime differences (e.g. existential and multisignature deposit sizes) between the different networks can be found by doing a ",(0,o.kt)("inlineCode",{parentName:"p"},"diff")," between the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," of the respositories. For example, to compare the Polkadot and Westend runtimes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/paritytech/polkadot && cd polkadot/runtime")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ls")," - show the available runtimes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"diff polkadot/src/lib.rs westend/src/lib.rs"))),(0,o.kt)("p",null,"You can also paste the runtimes (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs"},"Polkadot"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/westend/src/lib.rs"},"Westend"),") into a web-based diff tool like ",(0,o.kt)("a",{parentName:"p",href:"https://www.diffchecker.com/"},"Diffchecker")," if you're not comfortable with the CLI."),(0,o.kt)("h2",{id:"substrate-\u7f51\u7edc"},"Substrate \u7f51\u7edc"),(0,o.kt)("p",null,"To connect to a Substrate public network first follow the ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"instructions")," for installing the Substrate executable."),(0,o.kt)("h3",{id:"flaming-fir"},"Flaming Fir"),(0,o.kt)("p",null,"Flaming Fir is the public Substrate test network. It contains some pallets that will not be included in the Polkadot runtime."),(0,o.kt)("p",null,"Flaming Fir is built from the tip of master and is the default option when running the Substrate executable."),(0,o.kt)("p",null,"Run Substrate without a flag or explicitly state ",(0,o.kt)("inlineCode",{parentName:"p"},"fir"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"substrate --chain fir\n")),(0,o.kt)("p",null,"and you will connect and start syncing Flaming Fir."),(0,o.kt)("h2",{id:"telemetry-\u76d1\u5bdf"},"Telemetry \u76d1\u5bdf"),(0,o.kt)("p",null,"If you connect to the public networks, the default configuration for your node will connect it to the public ",(0,o.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/"},"Telemetry")," service."),(0,o.kt)("p",null,"You can verify that your node is connected by navigating to the correct network on the dashboard and finding the name of your node."),(0,o.kt)("p",null,"There is a built-in search function for the nodes page. Simply start typing keystrokes in the main window to make it available."))}c.isMDXComponent=!0}}]);