(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},56:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(9),r=n.n(s),c=(n(51),n(52),n(13)),o=n.n(c),d=n(29),h=n(16),l=n(17),u=n(18),b=n(22),j=n(21),p=n(33),f=n(98),x=n(4),g=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isPortrait:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=window.innerHeight>window.innerWidth,t={height:e?"200px":"100vh"};return console.log("mobileView:"+e),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"auto",background:"#33495F",margin:"0"},children:Object(x.jsx)("img",{style:t,src:"https://cdn.dribbble.com/users/28455/screenshots/1389791/media/c5abb9d81320af5cedd449fdbc8d5408.gif",alt:"background"})})}}]),n}(i.a.Component),m=n(38),O=n.n(m),y=n(39),v=n.n(y),w=n(41),k=n.n(w),C=n(42),L=n.n(C),S=n(40),I=n.n(S),T=(n(56),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleText=function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a.setState({search:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSearch=function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({search:""}),""===a.state.search?alert("Please enter some value"):(n=a.state.search.toLowerCase(),fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&units=metric&appid=f14902233360bb4bbeb0faae1fcc010b").then((function(e){return e.json()})).then((function(e){return a.setState({weather:e})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleLoading=function(){setTimeout((function(){a.setState({isLoading:!1})}),5e3)},a.state={search:"",temperature:"34",precipitation:"20",Humidity:"65",Wind:"13",isLoading:!0,weather:[]},a.handleLoading=a.handleLoading.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.handleLoading()}},{key:"render",value:function(){var e={display:"flex",width:this.state.isLoading?"none":"100%",height:this.state.isLoading?"none":"100vh",justifyContent:"center",alignItems:"center",background:"#546E7A"},t={color:"#808080",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px 0"};return this.state.isLoading?Object(x.jsx)("div",{style:{background:"green"},children:Object(x.jsx)(g,{})}):Object(x.jsx)("div",{style:e,children:Object(x.jsxs)("div",{style:{width:"auto",position:"fixed",padding:"20px",background:"white",height:"auto",borderRadius:"25px",backgroundSize:"cover",color:"black",boxShadow:"5px 5px 5px black"},children:[Object(x.jsxs)("h1",{children:["Weather Forecast ",Object(x.jsx)("br",{}),Object(x.jsx)(p.a,{size:24,color:"#000"})]}),Object(x.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(f.a,{id:"outlined-search",label:"Search for City",type:"search",onChange:this.handleText.bind(this),value:this.state.search}),Object(x.jsx)("button",{style:{marginTop:"10px",marginLeft:"15px",background:"transparent",border:"none",cursor:"pointer",fontWeight:"bolder"},onClick:this.handleSearch.bind(this),children:Object(x.jsx)(O.a,{className:"send-icon"})})]}),this.state.weather.main&&Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"10px 0"},children:[Object(x.jsxs)("span",{style:{fontSize:"1.5rem"},children:[" ",this.state.weather.name," ","'",this.state.weather.sys.country,"'"]}),Object(x.jsxs)("span",{style:{fontSize:"1.5rem",display:"flex",alignItems:"center"},children:["Temperature ",this.state.weather.main.temp," \xb0C"," ",Object(x.jsx)(v.a,{})]}),Object(x.jsxs)("div",{style:t,children:[Object(x.jsx)(I.a,{}),"Pressure: ",this.state.weather.main.pressure," "]}),Object(x.jsxs)("div",{style:t,children:[Object(x.jsx)(k.a,{}),"Humidity: ",this.state.weather.main.humidity,"%"," "]}),Object(x.jsxs)("div",{style:t,children:[Object(x.jsx)(L.a,{}),"Wind: ",this.state.weather.wind.speed,"km/h"," "]})]})]})})}}]),n}(i.a.Component)),F=T;var P=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(F,{})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root")),W()}},[[64,1,2]]]);
//# sourceMappingURL=main.3beb7a23.chunk.js.map