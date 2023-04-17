"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[358],{929:function(n,e,r){r.d(e,{C1:function(){return g},HK:function(){return Z},JH:function(){return b},N5:function(){return w},TP:function(){return k},Vr:function(){return j},iR:function(){return x},jh:function(){return v},pQ:function(){return m}});var t,i,a,o,c,u,s,d,p,l=r(168),f=r(87),h=r(444),x=h.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  gap: 50px;\n  margin: 30px;\n"]))),g=h.ZP.h3(i||(i=(0,l.Z)(["\n  color: #fff;\n"]))),v=h.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 30px;\n  background-color: #1d3557;\n"]))),m=h.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),b=(0,h.ZP)(f.NavLink)(c||(c=(0,l.Z)(["\n  background-color: #457b9d;\n  color: #fff;\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n\n  &:hover {\n    background-color: #e63946;\n  }\n\n  &.active {\n    background-color: #e63946;\n  }\n"]))),k=(0,h.ZP)(f.Link)(u||(u=(0,l.Z)(["\n  display: inline-block;\n  margin: 20px;\n  background-color: #457b9d;\n  color: #fff;\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n"]))),Z=h.ZP.form(s||(s=(0,l.Z)(["\n  margin: 30px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: #000 1px solid;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=h.ZP.button(d||(d=(0,l.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),j=h.ZP.input(p||(p=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])))},358:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t=r(439),i=r(791),a=r(689),o=r(323),c=r(929),u=r(184),s=function(n){var e,r=n.movie;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.iR,{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:r.title,width:300}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:r.title}),(0,u.jsxs)("p",{children:["User score: ",Math.round(10*r.vote_average),"%"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:r.overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:null===(e=r.genres)||void 0===e?void 0:e.map((function(n){return(0,u.jsxs)("span",{children:[n.name," "]},n.id)}))})]})]}),(0,u.jsxs)(c.jh,{children:[(0,u.jsx)(c.C1,{children:"Additional information"}),(0,u.jsxs)(c.pQ,{children:[(0,u.jsx)(c.JH,{to:"cast",children:"Cast"}),(0,u.jsx)(c.JH,{to:"reviews",children:"Reviews"})]})]})]})},d=function(){var n,e,r=(0,a.UO)(),d=(0,i.useState)([]),p=(0,t.Z)(d,2),l=p[0],f=p[1],h=(0,a.TH)(),x=(0,i.useRef)(null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,i.useEffect)((function(){try{(0,o.HI)(r.movieId).then((function(n){f(n)}))}catch(n){console.log(n)}}),[r.movieId]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.TP,{to:x.current,children:"go back"}),(0,u.jsx)(s,{movie:l}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(a.j3,{})})]})}},323:function(n,e,r){r.d(e,{HI:function(){return d},IQ:function(){return p},Jh:function(){return l},XT:function(){return s},qF:function(){return f}});var t=r(861),i=r(757),a=r.n(i),o=r(243),c="https://api.themoviedb.org/3/",u="5c8223fe177d644ec0560696e1a12ddd",s=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"trending/all/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=358.95323615.chunk.js.map