(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/preloader.7361e6fb.svg"},32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},38:function(e,t,a){},4:function(e,t,a){e.exports={gifBlock:"gif_gifBlock__DnKsi",preloader:"gif_preloader__2exB6",gif_item:"gif_gif_item__2iuEK",gif_action:"gif_gif_action__yZJsr",popup:"gif_popup__38aYQ",showpopup:"gif_showpopup__ZY8Xx"}},62:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),o=a.n(c),r=(a(37),a(38),a(3)),s=a(10),f=a(2),u={gifData:[],offsetCount:25,isFetching:!1,searchText:""};function g(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-GIF":return Object(f.a)(Object(f.a)({},e),{},{gifData:[].concat(Object(s.a)(e.gifData),Object(s.a)(t.gifData))});case"SET-GIF":return Object(f.a)(Object(f.a)({},e),{},{gifData:Object(s.a)(t.gifData)});case"TOGGLE-IS-FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case"ADD-OFFSET-COUNT":return Object(f.a)(Object(f.a)({},e),{},{offsetCount:e.offsetCount+t.offsetCount});case"CHANGE-SEARCH-TEXT":return Object(f.a)(Object(f.a)({},e),{},{searchText:t.newSearchText});default:return e}},p=a(25),h=Object(r.c)({gif:l}),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,m=Object(r.e)(h,d(Object(r.a)(p.a)));window.store=m;var E=m,T=a(5),G=a(27),O=a(28),b=a(31),v=a(30),_=a(15),y=a(4),I=a.n(y),j=a(14),F=a.n(j);function w(e){var t=Object(n.useState)(!0),a=Object(_.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!1),s=Object(_.a)(r,2),f=s[0],u=s[1];return i.a.createElement("div",{className:I.a.gif_item+" "+(c?null:I.a.gif_action)},i.a.createElement("img",{src:F.a,style:c?{display:"block"}:{display:"none"}}),i.a.createElement("img",{onClick:function(){navigator.clipboard.writeText(e.gif),u(!0),setTimeout((function(){u(!1)}),1e3)},onLoad:function(){return o(!1)},src:e.gif,draggable:"false",style:c?{visibility:"hidden"}:{visibility:"visible"}}),i.a.createElement("span",{style:f?{display:"block"}:{display:"none"},className:I.a.popup},"Copied!"))}var C=function(e){var t=e.gifData.map((function(e){return i.a.createElement(w,{key:e.id,gif:e.images.downsized_large.url})}));return e.isFetching?i.a.createElement("div",{className:I.a.gifBlock},i.a.createElement("img",{className:I.a.preloader,src:F.a})):i.a.createElement("div",{className:I.a.gifBlock,onScroll:function(t){return function(t){t.target.scrollTop+t.target.offsetHeight==t.target.scrollHeight&&e.moreGif()}(t)}},t)},S=a(6),D=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).moreGif=function(){S.get(e.props.searchText&&""!=e.props.searchText?"https://api.giphy.com/v1/gifs/search?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&q=".concat(e.props.searchText,"&limit=25&offset=").concat(e.props.offsetCount,"&rating=G&lang=en"):"https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G&offset=".concat(e.props.offsetCount)).then((function(t){e.props.getGif(t.data.data)})),e.props.addOffsetCount(25)},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.setFetching(!0),S.get("https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G").then((function(t){e.props.getGif(t.data.data),e.props.setFetching(!1)}))}},{key:"render",value:function(){return i.a.createElement(C,{gifData:this.props.gifData,moreGif:this.moreGif,isFetching:this.props.isFetching})}}]),a}(i.a.Component),x=Object(T.b)((function(e){return{gifData:e.gif.gifData,offsetCount:e.gif.offsetCount,isFetching:e.gif.isFetching,searchText:e.gif.searchText}}),(function(e){return{getGif:function(t){e(function(e){return{type:"GET-GIF",gifData:e}}(t))},setFetching:function(t){e(g(t))},addOffsetCount:function(t){e(function(e){return{type:"ADD-OFFSET-COUNT",offsetCount:e}}(t))}}}))(D),k=a(29);var A=function(e){return i.a.createElement("header",null,i.a.createElement("div",{className:"head"},i.a.createElement("div",{className:"logo"},"GIF"),i.a.createElement("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a..",onChange:function(t){var a=t.currentTarget.value;Object(k.a)(300,(function(){e.setFetching(!0),""===a?S.get("https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G").then((function(t){e.setGif(t.data.data),e.setFetching(!1)})):S.get("https://api.giphy.com/v1/gifs/search?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&q=".concat(a,"&limit=25&offset=0&rating=G&lang=en")).then((function(t){e.setGif(t.data.data),e.setFetching(!1)}))}))(),e.setSearchText(a)},value:e.searchText})))},N=Object(T.b)((function(e){return{searchText:e.gif.searchText}}),(function(e){return{setGif:function(t){e(function(e){return{type:"SET-GIF",gifData:e}}(t))},setSearchText:function(t){e(function(e){return{type:"CHANGE-SEARCH-TEXT",newSearchText:e}}(t))},setFetching:function(t){e(g(t))}}}))(A);var L=function(){return i.a.createElement(T.a,{store:E},i.a.createElement(N,null),i.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.bfcd6aa3.chunk.js.map