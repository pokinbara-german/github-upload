(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{305:function(e,r,t){e.exports={firstColumnWrapper:"User_firstColumnWrapper__2Ioum",overflowWrap:"User_overflowWrap__3Sm9M"}},306:function(e,r,t){"use strict";r.decode=r.parse=t(307),r.encode=r.stringify=t(308)},307:function(e,r,t){"use strict";function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e.exports=function(e,r,t,a){r=r||"&",t=t||"=";var i={};if("string"!==typeof e||0===e.length)return i;var s=/\+/g;e=e.split(r);var c=1e3;a&&"number"===typeof a.maxKeys&&(c=a.maxKeys);var p=e.length;c>0&&p>c&&(p=c);for(var l=0;l<p;++l){var u,f,d,m,b=e[l].replace(s,"%20"),j=b.indexOf(t);j>=0?(u=b.substr(0,j),f=b.substr(j+1)):(u=b,f=""),d=decodeURIComponent(u),m=decodeURIComponent(f),n(i,d)?o(i[d])?i[d].push(m):i[d]=[i[d],m]:i[d]=m}return i};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},308:function(e,r,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,t,s){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"===typeof e?a(i(e),(function(i){var s=encodeURIComponent(n(i))+t;return o(e[i])?a(e[i],(function(e){return s+encodeURIComponent(n(e))})).join(r):s+encodeURIComponent(n(e[i]))})).join(r):s?encodeURIComponent(n(s))+t+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var i=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},315:function(e,r,t){"use strict";t.r(r);var n=t(6),o=t(124),a=t(13),i=t(0),s=t.n(i),c=t(81),p=t(305),l=t.n(p),u=t(38),f=t(79),d=t(188),m=t(297),b=t(243),j=t(298),h=t(107),y=t(186),O=t(187),g=t(57),v=t(2),x={small:null,large:null},w=Object(y.a)((function(e){return Object(O.a)({root:{display:"flex","& > *":{margin:e.spacing(1)}},largeAvatar:{width:e.spacing(9),height:e.spacing(9),margin:e.spacing(1)},userCard:{display:"flex",padding:e.spacing(2),margin:e.spacing(2,2),flexBasis:390}})})),C=s.a.memo((function(e){var r=e.followingInProgress.some((function(r){return r===e.userId}));return e.isFollowed?Object(v.jsx)(m.a,{variant:"contained",onClick:function(){e.unfollowUser(e.userId)},disabled:r,children:"Unfollow"}):Object(v.jsx)(m.a,{variant:"contained",onClick:function(){e.followUser(e.userId)},disabled:r,children:"Follow"})})),P=function(e){return Object(v.jsx)(j.a,{children:Object(v.jsxs)("span",{children:[Object(v.jsx)(h.a,{variant:"h6",className:l.a.overflowWrap,children:e.userName}),Object(v.jsx)(h.a,{className:l.a.overflowWrap,children:e.userStatus||"No status"})]})})},S=function(e){var r=Object(a.d)(g.i),t=w(),n=e.user;return n.photos=e.user.photos||x,Object(v.jsxs)(b.a,{variant:"outlined",className:t.userCard,children:[Object(v.jsxs)("div",{className:l.a.firstColumnWrapper,children:[Object(v.jsx)(u.c,{to:"/profile/"+n.id,children:Object(v.jsx)(d.a,{className:t.largeAvatar,alt:"ava",src:n.photos.small||f.a})}),Object(v.jsx)("div",{children:r&&Object(v.jsx)(C,{isFollowed:n.followed,userId:n.id,followingInProgress:e.followingInProgress,followUser:e.followUser,unfollowUser:e.unfollowUser})})]}),Object(v.jsx)(P,{userName:n.name,userStatus:n.status})]})},T=t(44),I=t(17),U=t(19),A=t(29),N=Object(y.a)((function(e){return Object(O.a)({root:{display:"flex",justifyContent:"center","& > *":{margin:e.spacing(1)}},searchButton:{alignSelf:"center"}})})),K=s.a.memo((function(e){var r=N(),t=Object(a.d)(g.q);var n={searchTerm:t.searchTerm||"",friend:String(t.friend)},o=Object(T.d)({initialValues:n,enableReinitialize:!0,onSubmit:function(r,t){var n=t.setSubmitting,o={searchTerm:r.searchTerm||null,friend:"null"===r.friend?null:"true"===r.friend};e.onPageChanged(o),n(!1)}});return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:I.c.users.title}),Object(v.jsxs)("form",{onSubmit:o.handleSubmit,className:r.root,children:[Object(v.jsxs)(T.c,{value:o,children:[Object(U.c)(void 0,"Enter user name or it's part","searchTerm",U.b,Object(A.d)([])),Object(U.c)(void 0,void 0,"friend",U.d,Object(A.d)([]),{value:o.values.friend,children:[{key:"null",value:"All"},{key:"true",value:"Only followed"},{key:"false",value:"Only unfollowed"}]})]}),Object(v.jsx)(m.a,{className:r.searchButton,color:"primary",variant:"contained",type:"submit",disabled:o.isSubmitting||!o.dirty,children:"Submit"})]})]})})),R=t(67),k=t(1),W=(t(3),t(95));function z(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}function E(e){var r=function(r){var t=e(r);return r.css?Object(k.a)({},Object(W.a)(t,e(Object(k.a)({theme:r.theme},r.css))),z(r.css,[e.filterProps])):r.sx?Object(k.a)({},Object(W.a)(t,e(Object(k.a)({theme:r.theme},r.sx))),z(r.sx,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css","sx"].concat(Object(R.a)(e.filterProps)),r}var B=E;var F=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=function(e){return r.reduce((function(r,t){var n=t(e);return n?Object(W.a)(r,n):r}),{})};return n.propTypes={},n.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),n},_=t(15),G=t(133);function H(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var M=function(e){var r=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,o=e.themeKey,a=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=H(e.theme,o)||{};return Object(G.a)(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=H(i,e)||e,a&&(r=a(r))),!1===n?r:Object(_.a)({},n,r)}))};return i.propTypes={},i.filterProps=[r],i};function q(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var J=F(M({prop:"border",themeKey:"borders",transform:q}),M({prop:"borderTop",themeKey:"borders",transform:q}),M({prop:"borderRight",themeKey:"borders",transform:q}),M({prop:"borderBottom",themeKey:"borders",transform:q}),M({prop:"borderLeft",themeKey:"borders",transform:q}),M({prop:"borderColor",themeKey:"palette"}),M({prop:"borderRadius",themeKey:"shape"})),D=F(M({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),M({prop:"display"}),M({prop:"overflow"}),M({prop:"textOverflow"}),M({prop:"visibility"}),M({prop:"whiteSpace"})),L=F(M({prop:"flexBasis"}),M({prop:"flexDirection"}),M({prop:"flexWrap"}),M({prop:"justifyContent"}),M({prop:"alignItems"}),M({prop:"alignContent"}),M({prop:"order"}),M({prop:"flex"}),M({prop:"flexGrow"}),M({prop:"flexShrink"}),M({prop:"alignSelf"}),M({prop:"justifyItems"}),M({prop:"justifySelf"})),V=F(M({prop:"gridGap"}),M({prop:"gridColumnGap"}),M({prop:"gridRowGap"}),M({prop:"gridColumn"}),M({prop:"gridRow"}),M({prop:"gridAutoFlow"}),M({prop:"gridAutoColumns"}),M({prop:"gridAutoRows"}),M({prop:"gridTemplateColumns"}),M({prop:"gridTemplateRows"}),M({prop:"gridTemplateAreas"}),M({prop:"gridArea"})),Q=F(M({prop:"position"}),M({prop:"zIndex",themeKey:"zIndex"}),M({prop:"top"}),M({prop:"right"}),M({prop:"bottom"}),M({prop:"left"})),X=F(M({prop:"color",themeKey:"palette"}),M({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),Y=M({prop:"boxShadow",themeKey:"shadows"});function Z(e){return e<=1?"".concat(100*e,"%"):e}var $=M({prop:"width",transform:Z}),ee=M({prop:"maxWidth",transform:Z}),re=M({prop:"minWidth",transform:Z}),te=M({prop:"height",transform:Z}),ne=M({prop:"maxHeight",transform:Z}),oe=M({prop:"minHeight",transform:Z}),ae=(M({prop:"size",cssProperty:"width",transform:Z}),M({prop:"size",cssProperty:"height",transform:Z}),F($,ee,re,te,ne,oe,M({prop:"boxSizing"}))),ie=t(303),se=F(M({prop:"fontFamily",themeKey:"typography"}),M({prop:"fontSize",themeKey:"typography"}),M({prop:"fontStyle",themeKey:"typography"}),M({prop:"fontWeight",themeKey:"typography"}),M({prop:"letterSpacing"}),M({prop:"lineHeight"}),M({prop:"textAlign"})),ce=t(4),pe=t(5),le=t(59),ue=t.n(le),fe=t(245);function de(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}var me=t(80),be=function(e){var r=function(e){return function(r){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.name,a=Object(ce.a)(n,["name"]),i=o,c="function"===typeof r?function(e){return{root:function(t){return r(Object(k.a)({theme:e},t))}}}:{root:r},p=Object(fe.a)(c,Object(k.a)({Component:e,name:o||e.displayName,classNamePrefix:i},a));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=s.a.forwardRef((function(r,n){var o=r.children,a=r.className,i=r.clone,c=r.component,l=Object(ce.a)(r,["children","className","clone","component"]),u=p(r),f=Object(pe.a)(u.root,a),d=l;if(t&&(d=de(d,t)),i)return s.a.cloneElement(o,Object(k.a)({className:Object(pe.a)(o.props.className,f)},d));if("function"===typeof o)return o(Object(k.a)({className:f},d));var m=c||e;return s.a.createElement(m,Object(k.a)({ref:n,className:f},d),o)}));return ue()(l,e),l}}(e);return function(e,t){return r(e,Object(k.a)({defaultTheme:me.a},t))}},je=B(F(J,D,L,V,Q,X,Y,ae,ie.b,se)),he=be("div")(je,{name:"MuiBox"}),ye=Object(y.a)((function(){return Object(O.a)({usersWrapper:{display:"flex",flexWrap:"wrap",justifyContent:"center"}})})),Oe=function(e){var r=Object(a.d)(g.r),t=Object(a.d)(g.k),n=Object(a.d)(g.h),i=ye(),s=Object(a.c)(),p=function(e){s(Object(o.b)(e))},l=function(e){s(Object(o.d)(e))},u=r.map((function(e){return Object(v.jsx)(S,{user:e,unfollowUser:l,followUser:p,followingInProgress:n},"User"+e.id)})),f=function(){return Object(v.jsx)(he,{textAlign:"center",padding:"20px",children:Object(v.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return e.onPageChanged()},children:"More Users"})})};return Object(v.jsxs)("div",{children:[Object(v.jsx)(K,{onPageChanged:e.onPageChanged}),Object(v.jsx)("div",{className:i.usersWrapper,children:u}),t?Object(v.jsx)(c.a,{}):Object(v.jsx)(f,{})]})},ge=t(23),ve=t(306);r.default=function(){var e=Object(a.d)(g.d),r=Object(a.d)(g.p),t=Object(a.d)(g.q),s=Object(ge.g)(),c=Object(a.c)();function p(n){var a=t,i=e;n&&(a=n,i=0),c(Object(o.c)(r,i,a))}return Object(i.useEffect)((function(){var e=ve.parse(s.location.search.substr(1)),r=Object(n.a)({},t);r.searchTerm=e.searchTerm||null,r.friend=void 0===e.friend?null:"true"===e.friend,p(r)}),[]),Object(i.useEffect)((function(){var e=function(e){var r={};e.searchTerm&&(r.searchTerm=e.searchTerm);null!==e.friend&&(r.friend=String(e.friend));return r}(t);s.push({pathname:s.location.pathname,search:ve.stringify(e)})}),[t,s]),Object(v.jsx)(Oe,{onPageChanged:p})}}}]);
//# sourceMappingURL=3.aa2d431c.chunk.js.map