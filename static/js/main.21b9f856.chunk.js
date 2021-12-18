(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{138:function(e,t,n){},139:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,306)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},i=n(47),s=n.n(i),u=(n(138),n(34)),o=n(35),l=n(37),f=n(36),d=(n(139),n(15)),p=n(8),b=n.n(p),j=n(2),h=function(){return Object(j.jsxs)("nav",{className:b.a.nav,children:[Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(d.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(j.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(j.jsx)(d.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(j.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(j.jsx)(d.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(d.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(d.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(d.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(d.b,{to:"/friends",className:b.a.friends,activeClassName:b.a.active,children:"Friends"})})]})},O=n(7),v=n(3),g=n(57),m=n.n(g),x=function(e){return Object(j.jsxs)("header",{className:m.a.header,children:[Object(j.jsx)("img",{src:"https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png"}),Object(j.jsx)("div",{className:m.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{children:[e.login," - ",Object(j.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(j.jsx)(d.b,{to:"/login",children:"Login"})})]})},w=n(24),y=n(27),_=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(x,Object(v.a)({},this.props))}}]),n}(a.a.Component),S=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:y.d})(_),C=(n(9),"INITIALIZED_SUCCESS"),P={initialized:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},N=n(22),k=n(38),I=n(86),T=n(61),U=n(77),A={},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return e},F=n(54),D=n(83),z=Object(N.c)({profilePage:T.b,dialogsPage:U.a,sidebar:L,usersPage:F.a,auth:y.a,form:D.a,app:E}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d,M=Object(N.e)(z,R(Object(N.a)(I.a)));window.__store__=M;var G=M,H=function(e){return function(t){return Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)(k.a,{}),children:Object(j.jsx)(e,Object(v.a)({},t))})}},B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,308))})),V=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,310))})),Y=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,307))})),W=a.a.lazy((function(){return n.e(5).then(n.bind(null,309))})),J=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(S,{}),Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(O.b,{path:"/profile/:userId?",render:H(B)}),Object(j.jsx)(O.b,{path:"/dialogs",render:H(V)}),Object(j.jsx)(O.b,{path:"/users",render:H(W)}),Object(j.jsx)(O.b,{path:"/login",render:H(Y)})]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{}),Object(j.jsx)("a",{children:"Loading"})]})}}]),n}(a.a.Component),X=Object(N.d)(O.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(y.b)());Promise.all([t]).then((function(){e({type:C})}))}}}))(J),q=function(e){return Object(j.jsx)(d.a,{children:Object(j.jsx)(w.a,{store:G,children:Object(j.jsx)(X,{})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),c()},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}));var r=n(5),a=n.n(r),c=n(10),i=n(3),s=n(23),u=n(9),o="samurai-network/auth/SET_USER_DATA",l="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",f={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},d=function(e,t,n,r){return{type:o,payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,i=r.email,s=r.login,t(d(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var i=Object(c.a)(a.a.mark((function c(i){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n,r);case 2:0===(o=a.sent).resultCode?i(p()):(10===o.resultCode&&i(j()),l=o.messages.length>0?o.messages[0]:"Some error",i(Object(s.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t({type:l,payload:{captchaUrl:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:case l:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}}},38:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.12a73942.svg",a=n(2);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},54:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"f",(function(){return C}));var r=n(5),a=n.n(r),c=n(10),i=n(28),s=n(3),u=n(9),o=(n(0),function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))}),l="FOLLOW",f="UNFOLLOW",d="SET_USERS",p="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",j="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},v=function(e){return{type:l,userId:e}},g=function(e){return{type:f,userId:e}},m=function(e){return{type:p,currentPage:e}},x=function(e){return{type:j,isFetching:e}},w=function(e,t){return{type:h,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(m(e)),n.next=4,u.d.getUsers(e,t);case 4:c=n.sent,r(x(!1)),r((i=c.items,{type:d,users:i})),r((a=c.totalCount,{type:b,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.d.follow.bind(u.d),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.d.unfollow.bind(u.d),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case p:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case b:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.count});case j:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},57:function(e,t,n){e.exports={header:"Header_header__1wsQD",loginBlock:"Header_loginBlock__2YOi-"}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(5),a=n.n(r),c=n(10),i=n(28),s=n(3),u=n(23),o=n(9),l="ADD-POST",f="SET_USER_PROFILE",d="SET_STATUS",p="DELETE_POST",b="SAVE_PHOTO_SUCCESS",j={posts:[{id:1,message:"Hi, how are you?",likesCount:0},{id:2,message:"It's my first post",likesCount:40},{id:3,message:"Blalalala",likesCount:40},{id:4,message:"Hey? honey?",likesCount:40}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:d,status:e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.getProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(O(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:b,photos:a}));case 5:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=8;break}n(v(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:" "});case f:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case p:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case b:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(28),a=n(3),c="SEND-MESSAGE",i={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},8:function(e,t,n){e.exports={nav:"Navbar_nav__109qw",item:"Navbar_item__3EsWV",active:"Navbar_active__3NkMM",friends:"Navbar_friends__m8Veu"}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(68),a=(n(54),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d783cd10-f5d3-4103-8ff3-3d1977f73cd8"}})),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}},s={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}}},[[228,2,3]]]);
//# sourceMappingURL=main.21b9f856.chunk.js.map