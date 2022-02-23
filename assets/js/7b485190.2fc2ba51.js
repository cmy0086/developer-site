"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[9414],{94579:function(e,t,i){var n=i(97218),r=i(59301),o=(i(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(n.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},50199:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(44117),r=i(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),d=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new o,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,o=t.style,d=t.url;return d?r.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);d.displayName="bg-iframe"},15351:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=i(21810),r=i(86919),o=(i(59301),i(99278)),d=i(50199),a=i(94579),s=["components"],c={title:"\u8f6e\u64ad\u56fe",order:6},l="\u8f6e\u64ad\u56fe",u={unversionedId:"components/advanced/slider",id:"components/advanced/slider",title:"\u8f6e\u64ad\u56fe",description:"\u8f6e\u64ad\u7ec4\u4ef6\uff0c\u5c31\u662f\u4ee5\u5e7b\u706f\u7247\u7684\u65b9\u5f0f\uff0c\u5728\u9875\u9762\u4e2d\u6a2a\u5411\u5c55\u793a\u8bf8\u591a\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002",source:"@site/docs/components/advanced/slider.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/slider",permalink:"/developer-site/docs/components/advanced/slider",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/slider.mdx",tags:[],version:"current",frontMatter:{title:"\u8f6e\u64ad\u56fe",order:6},sidebar:"components",previous:{title:"\u8868\u683c",permalink:"/developer-site/docs/components/advanced/table"},next:{title:"\u6c14\u6ce1\u63d0\u793a",permalink:"/developer-site/docs/components/advanced/balloon"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8f6e\u64ad\u56fe"},"\u8f6e\u64ad\u56fe"),(0,o.kt)("p",null,"\u8f6e\u64ad\u7ec4\u4ef6\uff0c\u5c31\u662f\u4ee5\u5e7b\u706f\u7247\u7684\u65b9\u5f0f\uff0c\u5728\u9875\u9762\u4e2d\u6a2a\u5411\u5c55\u793a\u8bf8\u591a\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f6e\u64ad\u5185\u5bb9\u76f8\u4e92\u72ec\u7acb\uff0c\u524d\u540e\u5728\u5185\u5bb9\u4ee5\u53ca\u6570\u636e\u4e0a\u90fd\u4e0d\u5b58\u5728\u903b\u8f91\u5173\u7cfb\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5355\u56fe\u8f6e\u64ad\uff1a\u8be5\u6837\u5f0f\u901a\u5e38\u7528\u4e8e\u627f\u8f7d\u8fd0\u8425 banner\uff0c\u662f\u4e00\u4e2a\u4f4d\u7f6e\u76f8\u5bf9\u56fa\u5b9a\u7684\u6a21\u5757\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u56fe\u8f6e\u64ad\uff1a\u5355\u5143\u4fe1\u606f\u6d4f\u89c8")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(d.Z,{url:"https://www.aliwork.com/developer/slider-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(a.Z,{dataSource:[{attr:"\u8f6e\u64ad\u9879",code:"images",type:"object",demo:"{src: 'https://test.png', title: 'title'}",dafault:"",desc:""},{attr:"\u7c7b\u578b",code:"type",type:"String",demo:"'single', 'multi' ",dafault:"",desc:"\u8f6e\u64ad\u65b9\u5f0f, \u5355\u56fe, \u591a\u56fe"},{attr:"\u56fe\u7247\u5bbd\u5ea6",code:"slideImageWidth",type:"String",demo:"'100%'",dafault:"  ",desc:""},{attr:"\u56fe\u7247\u9ad8\u5ea6",code:"slideImageHeight",type:"String",demo:"'300px'",dafault:"",desc:""},{attr:"\u56fe\u7247\u95f4\u8ddd",code:"margin",type:"number",demo:"10",dafault:"",desc:""},{attr:"\u540c\u65f6\u5c55\u793a\u7684\u56fe\u7247\u6570\u91cf",code:"slidesToShow",type:"number",demo:"2",dafault:"",desc:""},{attr:"\u540c\u65f6\u6ed1\u52a8\u7684\u56fe\u7247\u6570\u91cf",code:"slidesToScroll",type:"number",demo:"1",dafault:"",desc:""},{attr:"\u5c45\u4e2d\u6a21\u5f0f",code:"centerMode",type:"Boolean",demo:"false",dafault:'"b" ',desc:""},{attr:"\u591a\u56fe\u8f6e\u64ad\u65f6\uff0c\u70b9\u51fb\u9009\u4e2d\u540e\u81ea\u52a8\u5c45\u4e2d",code:"focusOnSelect",type:"Boolean",demo:"false",dafault:"",desc:""},{attr:"\u8f6e\u64ad\u65b9\u5411",code:"slideDirection",type:"String",demo:" 'hoz'",dafault:" 'hoz', 'ver'",desc:""},{attr:"\u8f6e\u64ad\u901f\u5ea6",code:"speed",type:"number",demo:"500",dafault:"\u5355\u4f4d: ms ",desc:""},{attr:"\u52a8\u6548\u7c7b\u578b",code:"animation",type:"String",demo:"'slide'",dafault:"'slide', 'fade' ",desc:""},{attr:"\u7bad\u5934",code:"arrows",type:"Boolean",demo:"true",dafault:"",desc:""},{attr:"\u7bad\u5934\u5927\u5c0f",code:"arrowSize",type:"String",demo:"'medium' ",dafault:"'medium', 'large'",desc:""},{attr:"\u7bad\u5934\u4f4d\u7f6e",code:"arrowPosition",type:"String",demo:"'inner' ",dafault:" 'inner', 'outer'",desc:""},{attr:"\u7bad\u5934\u65b9\u5411",code:"arrowDirection ",type:"String",demo:"'hoz' ",dafault:"'hoz', 'ver'",desc:""},{attr:"\u81ea\u52a8\u64ad\u653e",code:"autoplay",type:"Boolean",demo:"false ",dafault:"",desc:""},{attr:"\u81ea\u52a8\u64ad\u653e\u7684\u901f\u5ea6",code:"autoplaySpeed",type:"number",demo:"3000 ",dafault:"",desc:""},{attr:"\u5bfc\u822a\u951a\u70b9",code:"dots",type:"Boolean",demo:"true ",dafault:"",desc:""},{attr:"\u5bfc\u822a\u951a\u70b9\u4f4d\u7f6e",code:"dotsDirection",type:"String",demo:"'hoz' ",dafault:"",desc:""},{attr:"\u951a\u70b9\u5bfc\u822a\u89e6\u53d1\u65b9\u5f0f",code:"triggerType",type:"String",demo:"'click' ",dafault:"'click', 'hover'",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);