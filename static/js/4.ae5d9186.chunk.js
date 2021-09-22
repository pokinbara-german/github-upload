(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{304:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(39),s=a(0),c=a.n(s),r=a(287),i=a(2),o=function(e){var t=e.messages,a=c.a.useRef(null),s=c.a.useState(!0),o=Object(n.a)(s,2),l=o[0],d=o[1];return c.a.useEffect((function(){l&&setTimeout((function(){var e;null===(e=a.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end"})}),500)}),[t,l]),Object(i.jsxs)(r.a,{style:{height:e.height,overflowY:"auto",width:"100%"},onScroll:function(e){var t=e.currentTarget;t.scrollHeight-t.scrollTop===t.clientHeight?!l&&d(!0):l&&d(!1)},children:[t,Object(i.jsx)("li",{ref:a})]})}},309:function(e,t,a){"use strict";var n=a(20),s=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=s(a(0)),r=(0,n(a(22)).default)(c.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=r},316:function(e,t,a){"use strict";a.r(t);var n=a(62),s=a(0),c=a.n(s),r=a(77),i=a(296),o=a(13),l=a(23),d=a(186),u=a(187),j=a(298),b=a(107),f=a(2),O=function(){var e=Object(d.a)((function(e){return Object(u.a)({helperText:Object(n.a)({display:"flex",flexGrow:1,alignItems:"center",justifyContent:"center"},e.breakpoints.down("xs"),{display:"none"})})}))();return Object(f.jsx)(j.a,{className:e.helperText,children:Object(f.jsx)(b.a,{variant:"h4",color:"textSecondary",children:"Please click on user name to start dialog"})})},h=a(57),p=a(121),g=a(126),x=a(125),m=a(304),v=a(290),y=a(309),w=a.n(y),I=a(17),k=a(297),M=function(e){var t=Object(o.c)();return Object(f.jsx)("li",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsx)(k.a,{variant:"outlined",color:"primary",onClick:function(){t(Object(r.d)(e.currentDialogId))},children:"More messages"})})},N=Object(d.a)((function(e){return Object(u.a)({messages:{flexGrow:1,width:"20%",margin:e.spacing(3)},goBackButtonWrapper:Object(n.a)({},e.breakpoints.up("sm"),{display:"none"})})}));var C=function(e){var t,a=e.currentDialogId,n=Object(o.d)(h.e),s=Object(o.d)(h.f),d=Object(o.d)(h.n),u=null===(t=Object(o.d)(h.o))||void 0===t?void 0:t.small,j=Object(o.d)(h.d),b=N(),O=Object(l.g)(),y=Object(o.c)(),k=function(e,t){var a=e.filter((function(e){return e.id===t?e:void 0}));return a.length?a[0]:null}(s,a),C=k?k.photos.small:null;c.a.useEffect((function(){a&&k&&k.hasNewMessages&&y(r.b.chatMessagesRead(a))}),[a,y,k]);var W=n.map((function(e){var t=e.senderId===d,a=t?e.viewed?x.a.textWithOk(e.body,e.addedAt):x.a.textWithWait(e.body,e.addedAt):x.a.onlyText(e.body,e.addedAt);return Object(f.jsx)(p.a,{postId:e.id,action:a,avatar:t?u||null:C,userName:"",rightSided:t},"Message"+e.id)}));return j&&W.unshift(Object(f.jsx)(M,{currentDialogId:a},"MoreMessagesButton")),Object(f.jsxs)("div",{className:b.messages,children:[Object(f.jsxs)("div",{className:b.goBackButtonWrapper,children:[Object(f.jsx)(v.a,{onClick:function(){O.push("/".concat(Object(I.b)(I.c.dialogs.id)))},children:Object(f.jsx)(w.a,{})}),Object(f.jsx)(i.a,{})]}),Object(f.jsx)(m.a,{messages:W,height:"70vh"}),Object(f.jsx)(i.a,{}),Object(f.jsx)(g.a,{blockWidth:"30ch",sendMessage:r.f,buttonText:"Send",minTextLength:2})]})},W=a(123),D=a(78),T=a(134),L=a(287),S=Object(d.a)((function(){return Object(u.a)({dialogsItems:{height:"90vh",overflowY:"auto",flexGrow:1,"& > li > div":{flexGrow:1}}})})),B=function(e){var t=Object(o.d)(h.f),a=S(),n=t.map((function(t){var a=t.newMessagesCount>0?Object(f.jsx)(T.a,{count:t.newMessagesCount,inCorner:!0}):void 0;return Object(f.jsx)(p.a,{postId:String(t.id),avatar:t.photos.small,userName:t.userName,userId:t.id,primaryLink:t.id!==e.currentDialogId,action:a},"User"+t.id)}));return Object(f.jsx)(L.a,{className:a.dialogsItems,children:n})};t.default=Object(l.h)(Object(W.a)((function(e){var t=Object(o.d)(h.j),a=Object(o.c)(),s=e.match.params.userId?parseInt(e.match.params.userId):0,l=Object(d.a)((function(e){return Object(u.a)({dialogsWrapper:{display:"flex",margin:e.spacing(-3)},dialogs:Object(n.a)({display:"flex"},e.breakpoints.down("xs"),{display:s?"none":"flex",width:"100%"}),emptyDialogsList:{minWidth:200}})}))();return c.a.useEffect((function(){s&&(a(r.b.chatChanged(s)),a(Object(r.d)(s)))}),[s,a]),c.a.useEffect((function(){a(Object(r.c)())}),[]),Object(f.jsxs)("div",{className:l.dialogsWrapper,children:[Object(f.jsxs)("div",{className:l.dialogs,children:[t?Object(f.jsx)("div",{className:l.emptyDialogsList,children:Object(f.jsx)(D.a,{})}):Object(f.jsx)(B,{currentDialogId:s}),Object(f.jsx)(i.a,{orientation:"vertical"})]}),s?Object(f.jsx)(C,{currentDialogId:s}):Object(f.jsx)(O,{})]})})))}}]);
//# sourceMappingURL=4.ae5d9186.chunk.js.map