/*! For license information please see 5.894279ee.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{232:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10);function o(e,t){if(null==e)return{};var n,o,s=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},239:function(e,t,n){"use strict";t.a=n.p+"static/media/user.d02b4357.png"},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,s=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},302:function(e,t,n){e.exports={paginator:"Paginator_paginator__27FPQ",pageNumber:"Paginator_pageNumber__2TfCl",selectedPage:"Paginator_selectedPage__KTswk"}},303:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},304:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__JJn4c"}},309:function(e,t,n){"use strict";n.r(t);var r=n(34),o=n(35),s=n(37),i=n(36),a=n(0),c=n.n(a),u=n(232),l=n(67),p=n(242),f=n(302),g=n.n(f),d=n(303),j=n.n(d),b=n(2),h=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,c=Math.ceil(t/n),u=[],f=1;f<=c;f++)u.push(f);var d=Math.ceil(c/i),h=Object(a.useState)(1),O=Object(p.a)(h,2),P=O[0],v=O[1],m=(P-1)*i+1,y=P*i;return Object(b.jsxs)("div",{className:g.a.paginator,children:[P>1&&Object(b.jsx)("button",{onClick:function(){v(P-1)},children:"PREV"}),u.filter((function(e){return e>=m&&e<=y})).map((function(e){return Object(b.jsx)("span",{className:j()(Object(l.a)({},g.a.selectedPage,r===e),g.a.pageNumber),onClick:function(t){o(e)},children:e},e)})),d>P&&Object(b.jsx)("button",{onClick:function(){v(P+1)},children:"NEXT"})]})},O=n(304),P=n.n(O),v=n(239),m=n(15),y=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(m.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:v.a,className:P.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.location.country"}),Object(b.jsx)("div",{children:"user.location.city"})]})]})]})},w=["currentPage","totalItemsCount","pageSize","onPageChanged","users"],x=function(e){var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,o=e.onPageChanged,s=e.users,i=Object(u.a)(e,w);return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),Object(b.jsx)("div",{children:s.map((function(e){return Object(b.jsx)(y,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},C=n(23),S=n(54),I=n(46),_=n(22),z=function(e){return e.usersPage.users},k=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},F=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},E=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(I.a,{}):null,Object(b.jsx)(x,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component);t.default=Object(_.d)(Object(C.b)((function(e){return{users:z(e),pageSize:k(e),totalUsersCount:U(e),currentPage:F(e),isFetching:N(e),followingInProgress:A(e)}}),{follow:S.b,unfollow:S.f,setCurrentPage:S.d,toggleFollowingProgress:S.e,requestUsers:S.c}))(E)}}]);
//# sourceMappingURL=5.894279ee.chunk.js.map