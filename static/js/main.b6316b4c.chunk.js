(this.webpackJsonpslugs=this.webpackJsonpslugs||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),i=(n(13),n(2)),l=n(3),s=n(4),u=n(5),d=n(1),h=(a.a.Component,function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={hovered:!1,modalOpen:!1},o.handleMouseEnter=o.handleMouseEnter.bind(Object(d.a)(o)),o.handleMouseLeave=o.handleMouseLeave.bind(Object(d.a)(o)),o.openPhotoModal=o.openPhotoModal.bind(Object(d.a)(o)),o.closePhotoModal=o.closePhotoModal.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"handleMouseEnter",value:function(){this.setState({hovered:!0})}},{key:"handleMouseLeave",value:function(){this.setState({hovered:!1})}},{key:"openPhotoModal",value:function(e){e.target.classList.contains("openOnClick")&&this.setState({modalOpen:!0})}},{key:"closePhotoModal",value:function(e){e.target.classList.contains("closeOnClick")&&this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=this.props.url,t=this.state;t.modalOpen,t.hovered;return a.a.createElement("img",{src:e,style:{objectFit:"cover",borderRadius:"5px",cursor:"pointer"},className:"photo",loading:"lazy"})}}]),n}(a.a.Component)),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){for(var e=[],t=1;t<306;t++)e.push("img/".concat(t,".jpeg"));var n={backgroundImage:"url(".concat("img/a.jpg",")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",height:"100vh",width:"100vw",position:"fixed",zIndex:"-5",opacity:"0.6"};return console.log("urls"),console.log(e),a.a.createElement("div",null,a.a.createElement("div",{style:n}),a.a.createElement("div",{style:{paddingTop:"100px",display:"flex",flexDirection:"column",alignItems:"center"}},e.map((function(e){return a.a.createElement(h,{key:e,url:e})}))))}}]),n}(a.a.Component);var v=function(){return a.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b6316b4c.chunk.js.map