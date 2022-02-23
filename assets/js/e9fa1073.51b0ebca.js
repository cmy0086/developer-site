"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[229],{99278:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(59301);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(n),f=a,u=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(u,l(l({ref:e},c),{},{components:n})):r.createElement(u,l({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50199:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(44117),a=n(59301),i=function(){function t(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var e=t.prototype;return e.on=function(t,e){this.subscriptions[t]=this.subscriptions[t]||[],this.subscriptions[t].push(e)},e.off=function(t,e){if(this.subscriptions[t]){var n=this.subscriptions[t].findIndex((function(t){return t===e}));this.subscriptions[t].splice(n,1)}},e.handleMsg=function(t){t.data&&t.data.type&&(this.subscriptions[t.data.type]||[]).forEach((function(e){e(t.data,t.origin,t.source)}))},e.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},t}(),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new i,n.recevier.on("updateHeight",(function(t,e,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(t.msg||0)+"px",n.props.onUpdateHeight(t.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(t){t.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==t.disableHeightSync&&t.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var t=this,e=this.props,n=e.className,r=e.id,i=e.style,l=e.url;return l?a.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},i),ref:function(e){t.container=e}},a.createElement("iframe",{src:l,style:{border:"none",width:"100%",height:"100%"},ref:function(e){t.iframe=e}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},e}(a.PureComponent);l.displayName="bg-iframe"},67133:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(21810),a=n(86919),i=(n(59301),n(99278)),l=n(50199),o=["components"],p={title:"\u641c\u7d22",order:12},d="\u641c\u7d22",c={unversionedId:"components/advanced/search",id:"components/advanced/search",title:"\u641c\u7d22",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/search.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/search",permalink:"/developer-site/docs/components/advanced/search",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/search.mdx",tags:[],version:"current",frontMatter:{title:"\u641c\u7d22",order:12},sidebar:"components",previous:{title:"\u83dc\u5355",permalink:"/developer-site/docs/components/advanced/menu"},next:{title:"\u8fdb\u5ea6\u6761",permalink:"/developer-site/docs/components/advanced/progress"}},s=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:s};function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u641c\u7d22"},"\u641c\u7d22"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9875\u9762\u3001\u8868\u5355\u6570\u636e\u641c\u7d22\u65f6\u4f7f\u7528\uff1b")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(l.Z,{url:"https://www.aliwork.com/developer/search-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"size"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5927\u5c0f",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'large'('\u5927') 'medium'('\u5c0f')"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'medium'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b shape=normal: primary/secondary; shape=simple: normal/dark;",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'primary', 'secondary', 'normal', 'dark'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'normal'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"shape"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5f62\u72b6",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'normal', 'simple'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'normal'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8f93\u5165\u5173\u952e\u5b57\u65f6\u7684\u56de\u6389",(0,i.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),": Function(value: Object) => void",(0,i.kt)("strong",{parentName:"td"},"\u53c2\u6570"),": ",(0,i.kt)("em",{parentName:"td"},"value"),": {Object} \u8f93\u5165\u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"func.noop")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"onSearch"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u53d1\u7684\u56de\u8c03",(0,i.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),": Function(value: Object) => void",(0,i.kt)("strong",{parentName:"td"},"\u53c2\u6570"),": ",(0,i.kt)("em",{parentName:"td"},"value"),": {Object} \u8f93\u5165\u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"func.noop")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"defaultFilterValue"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5668\u9ed8\u8ba4\u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"filter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5668"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"filterValue"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5668\u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"onFilterChange"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5668\u53d1\u751f\u53d8\u5316\u65f6\u56de\u8c03",(0,i.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),": Function(filter: Object) => void",(0,i.kt)("strong",{parentName:"td"},"\u53c2\u6570"),": ",(0,i.kt)("em",{parentName:"td"},"filter"),": {Object} value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"func.noop")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u641c\u7d22\u6846\u4e0b\u62c9\u8054\u60f3\u5217\u8868"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"placeholder"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u63d0\u793a"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"searchText"),(0,i.kt)("td",{parentName:"tr",align:"left"},"button \u7684\u5185\u5bb9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hasClear"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u7981\u7528"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false")))))}f.isMDXComponent=!0}}]);