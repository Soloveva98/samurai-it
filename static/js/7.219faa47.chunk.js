(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{229:function(t,r,e){"use strict";e.d(r,"b",(function(){return l})),e.d(r,"a",(function(){return d})),e.d(r,"c",(function(){return m}));var n=e(3),c=e(232),o=(e(0),e(230)),i=e.n(o),a=e(107),u=e(2),s=["input","meta","child"],j=["input","meta","child"],b=function(t){t.input;var r=t.meta,e=r.touched,n=r.error,c=t.children,o=e&&n;return Object(u.jsxs)("div",{className:i.a.formControl+" "+(o?i.a.error:""),children:[Object(u.jsx)("div",{children:c}),o&&Object(u.jsx)("span",{children:n})]})},l=function(t){var r=t.input,e=(t.meta,t.child,Object(c.a)(t,s));return Object(u.jsx)(b,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({},r),e))}))},d=function(t){var r=t.input,e=(t.meta,t.child,Object(c.a)(t,j));return Object(u.jsx)(b,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("input",Object(n.a)(Object(n.a)({},r),e))}))},m=function(t,r,e,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(a.a,Object(n.a)({placeholder:t,name:r,validate:e,component:c},o)),i]})}},230:function(t,r,e){t.exports={formControl:"FormsControl_formControl__2Q_HW",error:"FormsControl_error__3yYxs",formSummaryError:"FormsControl_formSummaryError__1OOzH"}},231:function(t,r,e){"use strict";e.d(r,"b",(function(){return n})),e.d(r,"a",(function(){return c}));var n=function(t){if(!t)return"Field is required"},c=function(t){return function(r){if(r.length>t)return"Max length is ".concat(t," symbols")}}},306:function(t,r,e){"use strict";e.r(r);e(0);var n=e(23),c=e(108),o=e(231),i=e(229),a=e(26),u=e(6),s=e(230),j=e.n(s),b=e(2),l=Object(c.a)({form:"login"})((function(t){var r=t.handleSubmit,e=t.error;return Object(b.jsxs)("form",{onSubmit:r,children:[Object(i.c)("Login","email",[o.b],i.a),Object(i.c)("Password","password",[o.b],i.a,{type:"password"}),Object(i.c)(null,"rememberMe",[],i.a,{type:"checkbox"},"remember me"),e&&Object(b.jsx)("div",{className:j.a.formSummaryError,children:e}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})}));r.default=Object(n.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:a.c,logout:a.d})((function(t){return t.isAuth?Object(b.jsx)(u.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(l,{onSubmit:function(r){t.login(r.email,r.password,r.rememberMe)}})]})}))}}]);
//# sourceMappingURL=7.219faa47.chunk.js.map