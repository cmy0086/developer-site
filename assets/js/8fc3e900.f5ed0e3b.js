"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2667],{99278:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(59301);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50199:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(44117),i=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,o=t.style,c=t.url;return c?i.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:c,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);c.displayName="bg-iframe"},67015:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r,i=n(21810),o=n(86919),c=(n(59301),n(99278)),a=n(50199),s=["components"],u={title:"\u56fe\u7247",order:4},d="\u56fe\u7247",l={unversionedId:"components/basic/image",id:"components/basic/image",title:"\u56fe\u7247",description:"\u7528\u4e8e\u5c55\u793a\u56fe\u7247\u8d44\u6e90\u3002",source:"@site/docs/components/basic/image.mdx",sourceDirName:"components/basic",slug:"/components/basic/image",permalink:"/developer-site/docs/components/basic/image",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/basic/image.mdx",tags:[],version:"current",frontMatter:{title:"\u56fe\u7247",order:4},sidebar:"components",previous:{title:"\u6587\u672c",permalink:"/developer-site/docs/components/basic/text"},next:{title:"\u94fe\u63a5",permalink:"/developer-site/docs/components/basic/link"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f=(r="AttrTable",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u56fe\u7247"},"\u56fe\u7247"),(0,c.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u56fe\u7247\u8d44\u6e90\u3002"),(0,c.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"})),(0,c.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,c.kt)(a.Z,{url:"https://www.aliwork.com/developer/image-v2?isRenderNav=false",mdxType:"Iframe"}),(0,c.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,c.kt)(f,{dataSource:[{attr:"\u56fe\u7247\u5730\u5740",code:"src",type:"String",demo:"\u56fe\u7247\u8d44\u6e90\u5730\u5740",dafault:"",desc:""},{attr:"\u5bbd",code:"width",type:"number",demo:"300",dafault:"",desc:""},{attr:"\u5bbd\u5ea6 auto ",code:"autuHeight",type:"number",demo:"300",dafault:"",desc:""},{attr:"\u9ad8 ",code:"height",type:"number",demo:"300",dafault:"",desc:""},{attr:"\u9ad8\u5ea6 auto ",code:"autuHeight",type:"number",demo:"300",dafault:"",desc:""},{attr:"\u6446\u653e\u65b9\u5f0f ",code:"fit",type:"enum",demo:"\u2018contain\u2019",dafault:"",desc:""},{attr:"\u5706\u89d2 ",code:"round",type:"String",demo:"8px",dafault:"",desc:""},{attr:"\u5706\u89d2\u5927\u5c0f ",code:"roundRadius",type:"String",demo:"8px",dafault:"",desc:""},{attr:"title ",code:"title",type:"String",demo:"8px",dafault:"",desc:"\u6807\u9898"},{attr:"\u66ff\u4ee3\u6587\u672c ",code:"alt",type:"String",demo:"8px",dafault:"",desc:"\u56fe\u7247\u672a\u52a0\u8f7d\u65f6\u7684\u5360\u4f4d\u6587\u5b57"},{attr:"\u70b9\u51fb\u4e8b\u4ef6 ",code:"onClick",type:"Function",demo:"",dafault:"",desc:""}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);