(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[46],{1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(2),c=a(26),i=a(120),r=a.n(i),s=a(119),o=a(310),l=a(1215),d=a(35),j=a(1332),b=a(0),u=["links","activeLast"];function x(e){var t=e.links,a=e.activeLast,i=void 0!==a&&a,r=Object(c.a)(e,u),l=t[t.length-1].name,d=t.map((function(e){return Object(b.jsx)(h,{link:e},e.name)})),x=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==l?Object(b.jsx)(h,{link:e}):Object(b.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(b.jsx)(j.a,Object(n.a)(Object(n.a)({separator:Object(b.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},r),{},{children:i?d:x}))}function h(e){var t=e.link,a=t.href,n=t.name,c=t.icon;return Object(b.jsxs)(l.a,{variant:"body2",component:d.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(b.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),n]},n)}var m=["links","action","heading","moreLink","sx"];function p(e){var t=e.links,a=e.action,i=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,h=Object(c.a)(e,m);return Object(b.jsxs)(s.a,{sx:Object(n.a)({mb:5},u),children:[Object(b.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:i}),Object(b.jsx)(x,Object(n.a)({links:t},h))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(b.jsx)(s.a,{sx:{mt:2},children:r()(j)?Object(b.jsx)(l.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1332:function(e,t,a){"use strict";var n=a(13),c=a(12),i=a(4),r=a(3),s=a(6),o=a(1),l=(a(200),a(7),a(10)),d=a(164),j=a(5),b=a(14),u=a(310),x=a(51),h=a(47),m=a(0),p=Object(h.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),O=a(1210),v=Object(j.a)(O.a,{skipSx:!0})((function(e){var t=e.theme;return Object(r.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(r.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(r.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(x.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(x.c)(t.palette.grey[600],.12)})})})),f=Object(j.a)(p)({width:24,height:16});var g=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(v,Object(r.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(f,{ownerState:t})}))})},w=a(97),y=a(109);function k(e){return Object(w.a)("MuiBreadcrumbs",e)}var S=Object(y.a)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=Object(j.a)(u.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(i.a)({},"& .".concat(S.li),t.li),t.root]}})({}),N=Object(j.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),L=Object(j.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function A(e,t,a,n){return e.reduce((function(c,i,r){return r<e.length-1?c=c.concat(i,Object(m.jsx)(L,{"aria-hidden":!0,className:t,ownerState:n,children:a},"separator-".concat(r))):c.push(i),c}),[])}var B=o.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),i=a.children,j=a.className,u=a.component,x=void 0===u?"nav":u,h=a.expandText,p=void 0===h?"Show path":h,O=a.itemsAfterCollapse,v=void 0===O?1:O,f=a.itemsBeforeCollapse,w=void 0===f?1:f,y=a.maxItems,S=void 0===y?8:y,L=a.separator,B=void 0===L?"/":L,I=Object(s.a)(a,C),R=o.useState(!1),z=Object(c.a)(R,2),M=z[0],U=z[1],W=Object(r.a)({},a,{component:x,expanded:M,expandText:p,itemsAfterCollapse:v,itemsBeforeCollapse:w,maxItems:S,separator:B}),q=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(W),T=o.useRef(null),E=o.Children.toArray(i).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:q.li,children:e},"child-".concat(t))}));return Object(m.jsx)(P,Object(r.a)({ref:t,component:x,color:"text.secondary",className:Object(l.a)(q.root,j),ownerState:W},I,{children:Object(m.jsx)(N,{className:q.ol,ref:T,ownerState:W,children:A(M||S&&E.length<=S?E:function(e){return w+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,w)),[Object(m.jsx)(g,{"aria-label":p,onClick:function(){U(!0);var e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(n.a)(e.slice(e.length-v,e.length)))}(E),q.separator,B,W)})}))}));t.a=B},2071:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ie}));var n=a(12),c=a(1272),i=a(1),r=a(1293),s=a(2010),o=a(2015),l=a(119),d=a(24),j=a(60),b=a(165),u=a(418),x=a(25),h=a(1314),m=a(1288),p=a(1198),O=a(1308),v=a(310),f=a(1213),g=a(626),w=a(0);function y(e){var t=e.addressBook;return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(w.jsx)(v.a,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),t.map((function(e){return Object(w.jsxs)(g.a,{sx:{p:3,width:1,bgcolor:"background.neutral"},children:[Object(w.jsx)(v.a,{variant:"subtitle1",gutterBottom:!0,children:e.name}),Object(w.jsxs)(v.a,{variant:"body2",gutterBottom:!0,children:[Object(w.jsx)(v.a,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Address: \xa0"}),"".concat(e.street,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country," ").concat(e.zipCode)]}),Object(w.jsxs)(v.a,{variant:"body2",gutterBottom:!0,children:[Object(w.jsx)(v.a,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Phone: \xa0"}),e.phone]}),Object(w.jsxs)(l.a,{sx:{mt:1},children:[Object(w.jsx)(f.a,{color:"error",size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:trash-2-outline"}),onClick:function(){},sx:{mr:1},children:"Delete"}),Object(w.jsx)(f.a,{size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:edit-fill"}),onClick:function(){},children:"Edit"})]})]},e.id)})),Object(w.jsx)(f.a,{size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:plus-fill"}),children:"Add new address"})]})})}var k=a(1217),S=a(1219),C=a(1280),P=a(1286),N=a(84);function L(e){var t=e.cards,a=e.isOpen,n=e.onOpen,c=e.onCancel;return Object(w.jsxs)(O.a,{sx:{p:3},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Payment Method"}),Object(w.jsx)(p.a,{spacing:2,direction:{xs:"column",md:"row"},children:t.map((function(e){return Object(w.jsxs)(g.a,{sx:{p:3,width:1,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.grey[50032])}},children:[Object(w.jsx)(N.a,{alt:"icon",src:"master_card"===e.cardType?"https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg":"https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg",sx:{mb:1,maxWidth:36}}),Object(w.jsx)(v.a,{variant:"subtitle2",children:e.cardNumber}),Object(w.jsx)(k.a,{sx:{top:8,right:8,position:"absolute"},children:Object(w.jsx)(x.a,{icon:"eva:more-vertical-fill",width:20,height:20})})]},e.id)}))}),Object(w.jsx)(l.a,{sx:{mt:3},children:Object(w.jsx)(f.a,{size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:plus-fill"}),onClick:n,children:"Add new card"})}),Object(w.jsx)(S.a,{in:a,children:Object(w.jsx)(l.a,{sx:{padding:3,marginTop:3,borderRadius:1,bgcolor:"background.neutral"},children:Object(w.jsxs)(p.a,{spacing:3,children:[Object(w.jsx)(v.a,{variant:"subtitle1",children:"Add new card"}),Object(w.jsxs)(p.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(w.jsx)(C.a,{fullWidth:!0,label:"Name on card"}),Object(w.jsx)(C.a,{fullWidth:!0,label:"Card number"})]}),Object(w.jsxs)(p.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(w.jsx)(C.a,{fullWidth:!0,label:"Expiration date",placeholder:"MM/YY"}),Object(w.jsx)(C.a,{fullWidth:!0,label:"Cvv"})]}),Object(w.jsxs)(p.a,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[Object(w.jsx)(f.a,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"}),Object(w.jsx)(P.a,{type:"submit",variant:"contained",onClick:c,children:"Save Change"})]})]})})})]})}var A=a(35),B=a(1215),I=a(199),R=a(232);function z(e){var t=e.invoices;return Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[Object(w.jsx)(v.a,{variant:"subtitle1",sx:{width:1},children:"Invoice History"}),Object(w.jsx)(p.a,{spacing:2,sx:{width:1},children:t.map((function(e){return Object(w.jsxs)(p.a,{direction:"row",justifyContent:"space-between",sx:{width:1},children:[Object(w.jsx)(v.a,{variant:"body2",sx:{minWidth:160},children:Object(I.a)(e.createdAt)}),Object(w.jsx)(v.a,{variant:"body2",children:Object(R.a)(e.price)}),Object(w.jsx)(B.a,{component:A.b,to:"#",children:"PDF"})]},e.id)}))}),Object(w.jsx)(f.a,{size:"small",endIcon:Object(w.jsx)(x.a,{icon:"eva:arrow-ios-forward-fill"}),children:"All invoices"})]})}function M(e){var t=e.cards,a=e.addressBook,c=e.invoices,r=Object(i.useState)(!1),s=Object(n.a)(r,2),o=s[0],d=s[1];return Object(w.jsxs)(m.a,{container:!0,spacing:5,children:[Object(w.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(w.jsxs)(p.a,{spacing:3,children:[Object(w.jsxs)(O.a,{sx:{p:3},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),Object(w.jsx)(v.a,{variant:"h4",children:"Premium"}),Object(w.jsxs)(l.a,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[Object(w.jsx)(f.a,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),Object(w.jsx)(f.a,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),Object(w.jsx)(L,{cards:t,isOpen:o,onOpen:function(){return d(!o)},onCancel:function(){return d(!1)}}),Object(w.jsx)(y,{addressBook:a})]})}),Object(w.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(z,{invoices:c})})]})}var U=a(29),W=a(18),q=a.n(W),T=a(235),E=a(237),_=a(420),V=a(38),F=a(201);function D(){var e=Object(E.b)().enqueueSnackbar,t=T.d().shape({oldPassword:T.f().required("Old Password is required"),newPassword:T.f().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:T.f().oneOf([T.e("newPassword"),null],"Passwords must match")}),a=Object(V.f)({resolver:Object(_.a)(t),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),n=a.reset,c=a.handleSubmit,i=a.formState.isSubmitting,r=function(){var t=Object(U.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n(),e("Update success!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsx)(F.a,{methods:a,onSubmit:c(r),children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[Object(w.jsx)(F.h,{name:"oldPassword",type:"password",label:"Old Password"}),Object(w.jsx)(F.h,{name:"newPassword",type:"password",label:"New Password"}),Object(w.jsx)(F.h,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),Object(w.jsx)(P.a,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})})})}var G=a(43);function H(){var e=Object(E.b)().enqueueSnackbar,t=Object(G.a)().user,a=T.d().shape({displayName:T.f().required("Name is required")}),n={displayName:(null===t||void 0===t?void 0:t.displayName)||"",email:(null===t||void 0===t?void 0:t.email)||"",photoURL:(null===t||void 0===t?void 0:t.photoURL)||"",phoneNumber:(null===t||void 0===t?void 0:t.phoneNumber)||"",country:(null===t||void 0===t?void 0:t.country)||"",address:(null===t||void 0===t?void 0:t.address)||"",state:(null===t||void 0===t?void 0:t.state)||"",city:(null===t||void 0===t?void 0:t.city)||"",zipCode:(null===t||void 0===t?void 0:t.zipCode)||"",about:(null===t||void 0===t?void 0:t.about)||"",isPublic:(null===t||void 0===t?void 0:t.isPublic)||""},c=Object(V.f)({resolver:Object(_.a)(a),defaultValues:n}),r=c.setValue,s=c.handleSubmit,o=c.formState.isSubmitting,d=function(){var t=Object(U.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),j=Object(i.useCallback)((function(e){var t=e[0];t&&r("photoURL",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[r]);return Object(w.jsx)(F.a,{methods:c,onSubmit:s(d),children:Object(w.jsxs)(m.a,{container:!0,spacing:3,children:[Object(w.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(w.jsxs)(O.a,{sx:{py:10,px:3,textAlign:"center"},children:[Object(w.jsx)(F.i,{name:"photoURL",accept:"image/*",maxSize:3145728,onDrop:j,helperText:Object(w.jsxs)(v.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(w.jsx)("br",{})," max size of ",Object(R.b)(3145728)]})}),Object(w.jsx)(F.g,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),Object(w.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(w.jsxs)(O.a,{sx:{p:3},children:[Object(w.jsxs)(l.a,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[Object(w.jsx)(F.h,{name:"displayName",label:"Name"}),Object(w.jsx)(F.h,{name:"email",label:"Email Address"}),Object(w.jsx)(F.h,{name:"phoneNumber",label:"Phone Number"}),Object(w.jsx)(F.h,{name:"address",label:"Address"}),Object(w.jsxs)(F.f,{name:"country",label:"Country",placeholder:"Country",children:[Object(w.jsx)("option",{value:""}),b.O.map((function(e){return Object(w.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),Object(w.jsx)(F.h,{name:"state",label:"State/Region"}),Object(w.jsx)(F.h,{name:"city",label:"City"}),Object(w.jsx)(F.h,{name:"zipCode",label:"Zip/Code"})]}),Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[Object(w.jsx)(F.h,{name:"about",multiline:!0,rows:4,label:"About"}),Object(w.jsx)(P.a,{type:"submit",variant:"contained",loading:o,children:"Save Changes"})]})]})})]})})}var Y=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],J=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],Z=!0,K=!0,Q=!1,X=!0,$=!1,ee=!1;function te(){var e=Object(E.b)().enqueueSnackbar,t={activityComments:Z,activityAnswers:K,activityFollows:Q,applicationNews:X,applicationProduct:$,applicationBlog:ee},a=Object(V.f)({defaultValues:t}),n=a.handleSubmit,c=a.formState.isSubmitting,i=function(){var t=Object(U.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsx)(F.a,{methods:a,onSubmit:n(i),children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[Object(w.jsxs)(p.a,{spacing:2,sx:{width:1},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{color:"text.secondary"},children:"Activity"}),Object(w.jsx)(p.a,{spacing:1,children:Y.map((function(e){return Object(w.jsx)(F.g,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),Object(w.jsxs)(p.a,{spacing:2,sx:{width:1},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{color:"text.secondary"},children:"Application"}),Object(w.jsx)(p.a,{spacing:1,children:J.map((function(e){return Object(w.jsx)(F.g,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),Object(w.jsx)(P.a,{type:"submit",variant:"contained",loading:c,children:"Save Changes"})]})})})}var ae=a(1302),ne=[{value:"facebookLink",icon:Object(w.jsx)(x.a,{icon:"eva:facebook-fill",width:24,height:24})},{value:"instagramLink",icon:Object(w.jsx)(x.a,{icon:"ant-design:instagram-filled",width:24,height:24})},{value:"linkedinLink",icon:Object(w.jsx)(x.a,{icon:"eva:linkedin-fill",width:24,height:24})},{value:"twitterLink",icon:Object(w.jsx)(x.a,{icon:"eva:twitter-fill",width:24,height:24})}];function ce(e){var t=e.myProfile,a=Object(E.b)().enqueueSnackbar,n={facebookLink:t.facebookLink,instagramLink:t.instagramLink,linkedinLink:t.linkedinLink,twitterLink:t.twitterLink},c=Object(V.f)({defaultValues:n}),i=c.handleSubmit,r=c.formState.isSubmitting,s=function(){var e=Object(U.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:a("Update success!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsx)(F.a,{methods:c,onSubmit:i(s),children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[ne.map((function(e){return Object(w.jsx)(F.h,{name:e.value,InputProps:{startAdornment:Object(w.jsx)(ae.a,{position:"start",children:e.icon})}},e.value)})),Object(w.jsx)(P.a,{type:"submit",variant:"contained",loading:r,children:"Save Changes"})]})})})}function ie(){var e=Object(j.a)().themeStretch,t=Object(i.useState)("general"),a=Object(n.a)(t,2),m=a[0],p=a[1],O=[{value:"general",icon:Object(w.jsx)(x.a,{icon:"ic:round-account-box",width:20,height:20}),component:Object(w.jsx)(H,{})},{value:"billing",icon:Object(w.jsx)(x.a,{icon:"ic:round-receipt",width:20,height:20}),component:Object(w.jsx)(M,{cards:b.N,addressBook:b.F,invoices:b.L})},{value:"notifications",icon:Object(w.jsx)(x.a,{icon:"eva:bell-fill",width:20,height:20}),component:Object(w.jsx)(te,{})},{value:"social_links",icon:Object(w.jsx)(x.a,{icon:"eva:share-fill",width:20,height:20}),component:Object(w.jsx)(ce,{myProfile:b.E})},{value:"change_password",icon:Object(w.jsx)(x.a,{icon:"ic:round-vpn-key",width:20,height:20}),component:Object(w.jsx)(D,{})}];return Object(w.jsx)(u.a,{title:"User: Account Settings",children:Object(w.jsxs)(r.a,{maxWidth:!e&&"lg",children:[Object(w.jsx)(h.a,{heading:"Account",links:[{name:"Profile",href:d.a.profile.account},{name:"Account Settings"}]}),Object(w.jsx)(s.a,{value:m,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){return p(t)},children:O.map((function(e){return Object(w.jsx)(o.a,{disableRipple:!0,label:Object(c.a)(e.value),icon:e.icon,value:e.value},e.value)}))}),Object(w.jsx)(l.a,{sx:{mb:5}}),O.map((function(e){return e.value===m&&Object(w.jsx)(l.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=46.1477b975.chunk.js.map