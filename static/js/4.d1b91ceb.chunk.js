(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{229:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return f}));var s=n(3),r=n(232),c=(n(0),n(230)),i=n.n(c),o=n(107),a=n(2),u=["input","meta","child"],j=["input","meta","child"],l=function(t){t.input;var e=t.meta,n=e.touched,s=e.error,r=t.children,c=n&&s;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(a.jsx)("div",{children:r}),c&&Object(a.jsx)("span",{children:s})]})},d=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,u));return Object(a.jsx)(l,Object(s.a)(Object(s.a)({},t),{},{children:Object(a.jsx)("textarea",Object(s.a)(Object(s.a)({},e),n))}))},b=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,j));return Object(a.jsx)(l,Object(s.a)(Object(s.a)({},t),{},{children:Object(a.jsx)("input",Object(s.a)(Object(s.a)({},e),n))}))},f=function(t,e,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.a,Object(s.a)({placeholder:t,name:e,validate:n,component:r},c)),i]})}},230:function(t,e,n){t.exports={formControl:"FormsControl_formControl__2Q_HW",error:"FormsControl_error__3yYxs",formSummaryError:"FormsControl_formSummaryError__1OOzH"}},231:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var s=function(t){if(!t)return"Field is required"},r=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},239:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var s=n(3),r=n(34),c=n(35),i=n(37),o=n(36),a=n(0),u=n.n(a),j=n(23),l=n(6),d=n(2),b=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(i.a)(a,e);var n=Object(o.a)(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(s.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),a}(u.a.Component);return Object(j.b)(b)(e)}},241:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(60);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(s=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);s=!0);}catch(a){r=!0,c=a}finally{try{s||null==o.return||o.return()}finally{if(r)throw c}}return n}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},242:function(t,e,n){},255:function(t,e,n){t.exports={intro:"ProfileInfo_intro__Ib_Jh",descriptionBlock:"ProfileInfo_descriptionBlock__RZLbZ",photo:"ProfileInfo_photo__2bhRX",info:"ProfileInfo_info__2FDFz",title:"ProfileInfo_title__3P_0V",contacts:"ProfileInfo_contacts__3_iIs"}},256:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__2uHUJ",posts:"MyPosts_posts__38niZ"}},257:function(t,e,n){t.exports={item:"Post_item__3qM8z"}},307:function(t,e,n){"use strict";n.r(e);var s=n(3),r=n(34),c=n(35),i=n(37),o=n(36),a=n(0),u=n.n(a),j=(n(242),n(68),n(256)),l=n.n(j),d=n(257),b=n.n(d),f=n(2),p=function(t){return Object(f.jsxs)("div",{className:b.a.item,children:[Object(f.jsx)("img",{src:"https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",alt:""}),t.message,Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"like"})," ",t.likesCount]})]})},h=n(107),O=n(108),m=n(231),x=n(229),v=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(f.jsx)(p,{message:t.message,likesCount:t.likesCount})}));return Object(f.jsxs)("div",{className:l.a.postsBlock,children:[Object(f.jsx)("h3",{children:"My posts"}),Object(f.jsx)(g,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(f.jsx)("div",{className:l.a.posts,children:e})]})})),_=Object(m.a)(10),g=Object(O.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{name:"newPostText",component:x.b,placeholder:"Post message",validate:[m.b,_]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add post"})})]})})),y=v,P=n(46),S=n(255),k=n.n(S),I=n(241),N=function(t){var e=Object(a.useState)(!1),n=Object(I.a)(e,2),s=n[0],r=n[1],c=Object(a.useState)(t.status),i=Object(I.a)(c,2),o=i[0],u=i[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:[!s&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"----"})}),s&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(o)},value:o})})]})},w=function(t){var e=t.profile,n=t.status,s=t.updateStatus;return e?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:k.a.intro,children:Object(f.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"})}),Object(f.jsxs)("div",{className:k.a.descriptionBlock,children:[Object(f.jsxs)("div",{className:k.a.photo,children:[Object(f.jsx)("img",{src:e.photos.large}),Object(f.jsx)(N,{status:n,updateStatus:s})]}),Object(f.jsxs)("div",{className:k.a.info,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:k.a.title,children:"Name:"})," ",e.fullName]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:k.a.title,children:"Info"}),": ",e.aboutMe]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:k.a.title,children:"Contacts:"}),Object(f.jsxs)("div",{className:k.a.contacts,children:[Object(f.jsx)("div",{children:e.contacts.facebook}),Object(f.jsx)("div",{children:e.contacts.vk}),Object(f.jsx)("div",{children:e.contacts.twitter}),Object(f.jsx)("div",{children:e.contacts.instagram}),Object(f.jsx)("div",{children:e.contacts.youtube}),Object(f.jsx)("div",{children:e.contacts.github})]})]})]})]})]}):Object(f.jsx)(P.a,{})},C=n(61),A=n(23),F=Object(A.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(C.a)(e))}}}))(y),M=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)(w,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)(F,{})]})},B=n(6),J=n(239),T=n(22),U=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(f.jsx)(M,Object(s.a)(Object(s.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(u.a.Component);e.default=Object(T.d)(Object(A.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:C.d,getStatus:C.c,updateStatus:C.e}),B.f,J.a)(U)}}]);
//# sourceMappingURL=4.d1b91ceb.chunk.js.map