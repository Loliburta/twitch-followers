(this["webpackJsonptwitch-followers"]=this["webpackJsonptwitch-followers"]||[]).push([[0],{22:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(14),s=n.n(a),o=(n(22),n(7)),u=n(3),i=n.n(u),l=n(6),f=Object(r.createContext)(["",function(){}]),j=n(1),p=function(){var t=Object(r.useContext)(f),e=Object(o.a)(t,2)[1];return Object(j.jsx)("input",{onChange:function(t){return e(t.target.value)},type:"text",className:"SearchBar",placeholder:"Search"})},d=n(17),h=n(2),b=new Headers({"Client-ID":"igmu2hehs0ztcjdqy6k9wpp7meh7lk",Authorization:"Bearer ".concat("pfp0m0pyy4xljqvtb9dzdj0e1y9wqy")}),v=function(){var t=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.twitch.tv/helix/users?login="+e,{headers:b});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(h.g)().USER_LOGIN,e=Object(r.useContext)(f),n=Object(o.a)(e,1)[0],c=Object(r.useState)(!1),a=Object(o.a)(c,2),s=a[0],u=a[1],b=Object(r.useState)(""),x=Object(o.a)(b,2),O=x[0],w=x[1],m=function(){var t=Object(l.a)(i.a.mark((function t(e){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:if(c=t.sent,null===c||void 0===c||null===(n=c.data[0])||void 0===n?void 0:n.id){t.next=6;break}return t.abrupt("return",!1);case 6:return t.abrupt("return",null===c||void 0===c||null===(r=c.data[0])||void 0===r?void 0:r.id);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){t&&w("".concat(t," was not found"))}),[]);var y=function(){var t=Object(l.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),w("searching for ".concat(n)),t.next=4,m(n);case 4:t.sent?u(!0):w("".concat(n," was not found"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s?Object(j.jsx)(h.a,{to:"".concat("/twitch-followers","/").concat(n)}):Object(j.jsx)("div",{className:"SearchPage",children:Object(j.jsxs)("form",{onSubmit:y,className:"searchField",children:[Object(j.jsx)(d.a,{icon:"logos:twitch",className:"searchField__icon"}),Object(j.jsx)("div",{className:"searchField__text",children:Object(j.jsx)("p",{children:"Search for twitch user"})}),Object(j.jsx)(p,{}),O]})})},O=function(){var t=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("pfp0m0pyy4xljqvtb9dzdj0e1y9wqy"),t.prev=1,t.next=4,fetch("https://api.twitch.tv/helix/users/follows?first=10&from_id="+e,{headers:b});case 4:return n=t.sent,t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),w=function(t){var e=t.follows;return Object(j.jsx)("div",{children:e.map((function(t){return t.to_name}))})},m=function(){var t=Object(h.g)().USER_LOGIN,e=Object(r.useState)(),n=Object(o.a)(e,2),c=n[0],a=n[1],s=Object(r.useState)(!1),u=Object(o.a)(s,2),f=u[0],p=u[1],d=function(){var t=Object(l.a)(i.a.mark((function t(e){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:if(r=t.sent,null===r||void 0===r||null===(n=r.data[0])||void 0===n?void 0:n.id){t.next=6;break}return t.abrupt("return",!1);case 6:return t.abrupt("return",null===r||void 0===r?void 0:r.data[0].id);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:if(n=e.sent){e.next=7;break}p(!0),e.next=12;break;case 7:return e.t0=a,e.next=10,b(n);case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),f?(console.log(t),Object(j.jsx)(h.a,{to:"".concat("/twitch-followers","/error/").concat(t)})):Object(j.jsx)("div",{className:"profilePage",children:(null===c||void 0===c?void 0:c.data)&&Object(j.jsx)(w,{follows:c.data})})},y=n(8),g=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(j.jsx)(y.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)(h.d,{children:Object(j.jsxs)(f.Provider,{value:[n,c],children:[Object(j.jsx)(h.b,{path:["".concat("/twitch-followers","/"),"".concat("/twitch-followers","/error/:USER_LOGIN")],exact:!0,children:Object(j.jsx)(x,{})}),Object(j.jsx)(h.b,{path:"".concat("/twitch-followers","/:USER_LOGIN"),exact:!0,children:Object(j.jsx)(m,{})})]})})})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1de51649.chunk.js.map