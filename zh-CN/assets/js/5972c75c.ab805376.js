(self.webpackChunk=self.webpackChunk||[]).push([[5304],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35986:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"maintain-guides-how-to-systemd",title:"\u5982\u4f55\u628a\u8282\u70b9\u8bbe\u5b9a\u4e3a `systemd` \u8fdb\u7a0b\u8fd0\u884c",sidebar_label:"\u5982\u4f55\u628a\u8282\u70b9\u8bbe\u5b9a\u4e3a `systemd` \u8fdb\u7a0b\u8fd0\u884c"},s={unversionedId:"maintain-guides-how-to-systemd",id:"maintain-guides-how-to-systemd",isDocsHomePage:!1,title:"\u5982\u4f55\u628a\u8282\u70b9\u8bbe\u5b9a\u4e3a `systemd` \u8fdb\u7a0b\u8fd0\u884c",description:"\u60a8\u53ef\u4ee5\u5c06\u9a8c\u8bc1\u4eba\u4f5c\u4e3a systemd \u8fdb\u7a0b\u8fd0\u884c\uff0c\u4ee5\u4fbf\u670d\u52a1\u5668\u91cd\u65b0\u542f\u52a8\u6216\u7576\u610f\u5916\u65f6\u81ea\u52a8\u91cd\u542f(\u5e76\u6709\u52a9\u4e8e\u907f\u514d\u88ab\u60e9\u7f5a!)\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/maintain-guides-how-to-systemd.md",sourceDirName:".",slug:"/maintain-guides-how-to-systemd",permalink:"/polkadot-wiki/zh-CN/docs/maintain-guides-how-to-systemd",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-systemd.md",version:"current",sidebar_label:"\u5982\u4f55\u628a\u8282\u70b9\u8bbe\u5b9a\u4e3a `systemd` \u8fdb\u7a0b\u8fd0\u884c",frontMatter:{id:"maintain-guides-how-to-systemd",title:"\u5982\u4f55\u628a\u8282\u70b9\u8bbe\u5b9a\u4e3a `systemd` \u8fdb\u7a0b\u8fd0\u884c",sidebar_label:"\u5982\u4f55\u628a\u8282\u70b9\u8bbe\u5b9a\u4e3a `systemd` \u8fdb\u7a0b\u8fd0\u884c"},sidebar:"docs",previous:{title:"\u9a8c\u8bc1\u4eba\u5956\u52b1\u53d1\u653e\u6982\u8ff0",permalink:"/polkadot-wiki/zh-CN/docs/maintain-guides-validator-payout"},next:{title:"\u5b89\u5168\u9a8c\u8bc1\u4eba\u8282\u70b9",permalink:"/polkadot-wiki/zh-CN/docs/maintain-guides-secure-validator"}},l=[],c={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u9a8c\u8bc1\u4eba\u4f5c\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"}," systemd "),"\u8fdb\u7a0b\u8fd0\u884c\uff0c\u4ee5\u4fbf\u670d\u52a1\u5668\u91cd\u65b0\u542f\u52a8\u6216\u7576\u610f\u5916\u65f6\u81ea\u52a8\u91cd\u542f(\u5e76\u6709\u52a9\u4e8e\u907f\u514d\u88ab\u60e9\u7f5a!)\u3002"),(0,o.kt)("p",null,"Before following this guide you should have already set up your validator by following the ",(0,o.kt)("a",{parentName:"p",href:"learn-validator"},"How to validate")," article."),(0,o.kt)("p",null,"\u9996\u5148\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," \u4e2d\u521b\u5efa\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"polkadot-validator.service")," \u7684\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch /etc/systemd/system/polkadot-validator.service\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4f60\u4f1a\u5199\u4e0b\u4f60\u60f3\u8981\u5728\u670d\u52a1\u5668\u542f\u52a8/\u91cd\u65b0\u542f\u52a8\u65f6\u8fd0\u884c\u7684\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Polkadot Validator\n\n[Service]\nExecStart=PATH_TO_POLKADOT_BIN --validator --name SHOW_ON_TELEMETRY\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," It's recommended to delay the restart of a node with ",(0,o.kt)("inlineCode",{parentName:"p"},"RestartSec")," in the case of node crashes. It's possible that when a node crashes, consensus votes in GRANDPA aren't persisted to disk. In this case, there is potential to equivocate when immediately restarting. What can happen is the node will not recognize votes that didn't make it to disk, and will then cast conflicting votes. Delaying the restart will allow the network to progress past potentially conflicting votes, at which point other nodes will not accept them.")),(0,o.kt)("p",null,"\u8981\u81ea\u52a8\u542f\u52a8\u6b64\u529f\u80fd\u65f6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable polkadot-validator.service\n")),(0,o.kt)("p",null,"\u624b\u52a8\u542f\u52a8:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start polkadot-validator.service\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u68c0\u67e5\u5b83\u662f\u5426\u8fd0\u4f5c\u4e2d:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status polkadot-validator.service\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7 ",(0,o.kt)("inlineCode",{parentName:"p"},"journalctl"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -f -u polkadot-validator\n")))}p.isMDXComponent=!0}}]);