(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(4),r=a.n(i),o=(a(17),a(5)),c=a(6),l=a(10),m=a(7),u=a(9),p=a(1),g=a(2),d=["user-top-read","user-read-currently-playing","user-read-playback-state","user-modify-playback-state"],y=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e},{});window.location.hash="";var h=y,f=(a(18),function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},a={width:100*e.progress_ms/e.item.duration_ms+"%"};return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"main-wrapper"},s.a.createElement("div",{className:"now-playing__img"},s.a.createElement("img",{src:e.item.album.images[0].url})),s.a.createElement("div",{className:"now-playing__side"},s.a.createElement("div",{className:"now-playing__name"},e.item.name),s.a.createElement("div",{className:"now-playing__artist"},e.item.artists[0].name),s.a.createElement("div",{className:"now-playing__status"},e.is_playing?"Playing":"Paused"),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress__bar",style:a}))),s.a.createElement("div",{className:"background",style:t})," "))}),v=a(8),_=a.n(v),w=(a(19),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={timer:0,numSongs:61,token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=h.access_token;t&&(this.setState({token:t}),setInterval(function(){e.state.timer<=1?e.skipNext(t):e.setState({timer:e.state.timer-1})},1e3))}},{key:"getCurrentlyPlaying",value:function(e){var t=this;console.log(e),g.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){e&&t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms})}})}},{key:"skipNext",value:function(e){var t=this;g.ajax({url:"https://api.spotify.com/v1/me/player/next",type:"POST",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(a){console.log(a),t.setState(function(e){return{timer:60,numSongs:e.numSongs-1}}),t.getCurrentlyPlaying(e)},error:function(e){console.log(e)}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},!this.state.token&&s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:_.a,className:"App-logo",alt:"logo"}),s.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("d4450f0cf6874de186d3516d6dd095a8","&redirect_uri=").concat("http://khevamann.com/spotify-power-hour/","&scope=").concat(d.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify")),this.state.token&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,this.state.timer," seconds left"),s.a.createElement("p",null,this.state.numSongs,"/60 songs left"),s.a.createElement(f,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.progress_ms}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.228e56e3.chunk.js.map