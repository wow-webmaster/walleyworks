(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[40],{1321:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var l=i(2),c=i(26),n=i(75),s=i.n(n),r=i(123),a=i(312),j=i(1221),o=i(38),b=i(1339),d=i(0),x=["links","activeLast"];function h(e){var t=e.links,i=e.activeLast,n=void 0!==i&&i,s=Object(c.a)(e,x),j=t[t.length-1].name,o=t.map((function(e){return Object(d.jsx)(O,{link:e},e.name)})),h=t.map((function(e){return Object(d.jsx)("div",{children:e.name!==j?Object(d.jsx)(O,{link:e}):Object(d.jsx)(a.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:j})},e.name)}));return Object(d.jsx)(b.a,Object(l.a)(Object(l.a)({separator:Object(d.jsx)(r.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:n?o:h}))}function O(e){var t=e.link,i=t.href,l=t.name,c=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:o.b,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(d.jsx)(r.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),l]},l)}var y=["links","action","heading","moreLink","sx"];function g(e){var t=e.links,i=e.action,n=e.heading,o=e.moreLink,b=void 0===o?[]:o,x=e.sx,O=Object(c.a)(e,y);return Object(d.jsxs)(r.a,{sx:Object(l.a)({mb:5},x),children:[Object(d.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(d.jsx)(a.a,{variant:"h4",gutterBottom:!0,children:n}),Object(d.jsx)(h,Object(l.a)({links:t},O))]}),i&&Object(d.jsx)(r.a,{sx:{flexShrink:0},children:i})]}),Object(d.jsx)(r.a,{sx:{mt:2},children:s()(b)?Object(d.jsx)(j.a,{href:b,target:"_blank",rel:"noopener",variant:"body2",children:b}):b.map((function(e){return Object(d.jsx)(j.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1716:function(e,t){},1717:function(e,t){},1835:function(e,t){},2091:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return J}));var l=i(433),c=i.n(l),n=i(6),s=i(1379),r=i(1298),a=i(1315),j=i(1294),o=i(123),b=i(312),d=i(1376),x=i(1377),h=i(1378),O=i(1380),y=i(1381),g=i(1268),m=i(24),u=i(233),p=i(167),f=i(63),w=i(420),v=i(235),T=i(59),V=i(95),C=i(1321),_=i(1461);_.Font.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});var S=_.StyleSheet.create({col4:{width:"25%"},col8:{width:"75%"},col6:{width:"50%"},mb8:{marginBottom:8},mb40:{marginBottom:40},overline:{fontSize:8,marginBottom:8,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase"},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},subtitle2:{fontSize:9,fontWeight:700},alignRight:{textAlign:"right"},page:{padding:"40px 24px 0 24px",fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#fff",textTransform:"capitalize"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#DFE3E8"},gridContainer:{flexDirection:"row",justifyContent:"space-between"},table:{display:"flex",width:"auto"},tableHeader:{},tableBody:{},tableRow:{padding:"8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#DFE3E8"},noBorder:{paddingTop:8,paddingBottom:0,borderBottomWidth:0},tableCell_1:{width:"5%"},tableCell_2:{width:"50%",paddingRight:16},tableCell_3:{width:"15%"}}),z=i(0);function k(e){var t=e.invoice,i=t.id,l=t.items,n=t.taxes,s=t.status,r=t.discount,a=t.invoiceTo,j=t.invoiceFrom,o=c()(l.map((function(e){return e.price*e.qty}))),b=o-r+n;return Object(z.jsx)(_.Document,{children:Object(z.jsxs)(_.Page,{size:"A4",style:S.page,children:[Object(z.jsxs)(_.View,{style:[S.gridContainer,S.mb40],children:[Object(z.jsx)(_.Image,{source:"/logo/logo_full.jpg",style:{height:32}}),Object(z.jsxs)(_.View,{style:{alignItems:"flex-end",flexDirection:"column"},children:[Object(z.jsx)(_.Text,{style:S.h3,children:s}),Object(z.jsxs)(_.Text,{children:["INV-",i]})]})]}),Object(z.jsxs)(_.View,{style:[S.gridContainer,S.mb40],children:[Object(z.jsxs)(_.View,{style:S.col6,children:[Object(z.jsx)(_.Text,{style:[S.overline,S.mb8],children:"Invoice from"}),Object(z.jsx)(_.Text,{style:S.body1,children:j.name}),Object(z.jsx)(_.Text,{style:S.body1,children:j.address}),Object(z.jsx)(_.Text,{style:S.body1,children:j.phone})]}),Object(z.jsxs)(_.View,{style:S.col6,children:[Object(z.jsx)(_.Text,{style:[S.overline,S.mb8],children:"Invoice to"}),Object(z.jsx)(_.Text,{style:S.body1,children:a.name}),Object(z.jsx)(_.Text,{style:S.body1,children:a.address}),Object(z.jsx)(_.Text,{style:S.body1,children:a.phone})]})]}),Object(z.jsx)(_.Text,{style:[S.overline,S.mb8],children:"Invoice Details"}),Object(z.jsxs)(_.View,{style:S.table,children:[Object(z.jsx)(_.View,{style:S.tableHeader,children:Object(z.jsxs)(_.View,{style:S.tableRow,children:[Object(z.jsx)(_.View,{style:S.tableCell_1,children:Object(z.jsx)(_.Text,{style:S.subtitle2,children:"#"})}),Object(z.jsx)(_.View,{style:S.tableCell_2,children:Object(z.jsx)(_.Text,{style:S.subtitle2,children:"Description"})}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{style:S.subtitle2,children:"Qty"})}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{style:S.subtitle2,children:"Unit price"})}),Object(z.jsx)(_.View,{style:[S.tableCell_3,S.alignRight],children:Object(z.jsx)(_.Text,{style:S.subtitle2,children:"Total"})})]})}),Object(z.jsxs)(_.View,{style:S.tableBody,children:[l.map((function(e,t){return Object(z.jsxs)(_.View,{style:S.tableRow,children:[Object(z.jsx)(_.View,{style:S.tableCell_1,children:Object(z.jsx)(_.Text,{children:t+1})}),Object(z.jsxs)(_.View,{style:S.tableCell_2,children:[Object(z.jsx)(_.Text,{style:S.subtitle2,children:e.title}),Object(z.jsx)(_.Text,{children:e.description})]}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{children:e.qty})}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{children:e.price})}),Object(z.jsx)(_.View,{style:[S.tableCell_3,S.alignRight],children:Object(z.jsx)(_.Text,{children:Object(u.a)(e.price*e.qty)})})]},e.id)})),Object(z.jsxs)(_.View,{style:[S.tableRow,S.noBorder],children:[Object(z.jsx)(_.View,{style:S.tableCell_1}),Object(z.jsx)(_.View,{style:S.tableCell_2}),Object(z.jsx)(_.View,{style:S.tableCell_3}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{children:"Subtotal"})}),Object(z.jsx)(_.View,{style:[S.tableCell_3,S.alignRight],children:Object(z.jsx)(_.Text,{children:Object(u.a)(o)})})]}),Object(z.jsxs)(_.View,{style:[S.tableRow,S.noBorder],children:[Object(z.jsx)(_.View,{style:S.tableCell_1}),Object(z.jsx)(_.View,{style:S.tableCell_2}),Object(z.jsx)(_.View,{style:S.tableCell_3}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{children:"Discount"})}),Object(z.jsx)(_.View,{style:[S.tableCell_3,S.alignRight],children:Object(z.jsx)(_.Text,{children:Object(u.a)(-r)})})]}),Object(z.jsxs)(_.View,{style:[S.tableRow,S.noBorder],children:[Object(z.jsx)(_.View,{style:S.tableCell_1}),Object(z.jsx)(_.View,{style:S.tableCell_2}),Object(z.jsx)(_.View,{style:S.tableCell_3}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{children:"Taxes"})}),Object(z.jsx)(_.View,{style:[S.tableCell_3,S.alignRight],children:Object(z.jsx)(_.Text,{children:Object(u.a)(n)})})]}),Object(z.jsxs)(_.View,{style:[S.tableRow,S.noBorder],children:[Object(z.jsx)(_.View,{style:S.tableCell_1}),Object(z.jsx)(_.View,{style:S.tableCell_2}),Object(z.jsx)(_.View,{style:S.tableCell_3}),Object(z.jsx)(_.View,{style:S.tableCell_3,children:Object(z.jsx)(_.Text,{style:S.h4,children:"Total"})}),Object(z.jsx)(_.View,{style:[S.tableCell_3,S.alignRight],children:Object(z.jsx)(_.Text,{style:S.h4,children:Object(u.a)(b)})})]})]})]}),Object(z.jsxs)(_.View,{style:[S.gridContainer,S.footer],children:[Object(z.jsxs)(_.View,{style:S.col8,children:[Object(z.jsx)(_.Text,{style:S.subtitle2,children:"NOTES"}),Object(z.jsx)(_.Text,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),Object(z.jsxs)(_.View,{style:[S.col4,S.alignRight],children:[Object(z.jsx)(_.Text,{style:S.subtitle2,children:"Have a Question?"}),Object(z.jsx)(_.Text,{children:"support@abcapp.com"})]})]})]})})}var R=i(2),I=i(13),B=i(26),D=i(1),W=i(1218),E=i(1432),F=i(1222),P=i(1223),q=i(1292),A=i(27),H=i(43),N=["invoice"],L=Object(n.a)("div")((function(e){return{display:"flex",alignItems:"center",justifyContent:"flex-end",marginBottom:e.theme.spacing(5)}}));function Q(e){var t=e.invoice,i=Object(B.a)(e,N),l=Object(D.useState)(!1),c=Object(I.a)(l,2),n=c[0],s=c[1];return Object(z.jsxs)(L,Object(R.a)(Object(R.a)({},i),{},{children:[Object(z.jsx)(W.a,{color:"error",size:"small",variant:"contained",endIcon:Object(z.jsx)(A.a,{icon:"eva:share-fill"}),children:"Share"}),Object(z.jsx)(W.a,{color:"info",size:"small",variant:"contained",onClick:function(){s(!0)},endIcon:Object(z.jsx)(A.a,{icon:"eva:eye-fill"}),sx:{mx:1},children:"Preview"}),Object(z.jsx)(_.PDFDownloadLink,{document:Object(z.jsx)(k,{invoice:t}),fileName:"INVOICE-".concat(t.id),style:{textDecoration:"none"},children:function(e){var t=e.loading;return Object(z.jsx)(q.a,{size:"small",loading:t,variant:"contained",loadingPosition:"end",endIcon:Object(z.jsx)(A.a,{icon:"eva:download-fill"}),children:"Download"})}}),Object(z.jsx)(H.a,{fullScreen:!0,open:n,children:Object(z.jsxs)(o.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(z.jsx)(E.a,{sx:{zIndex:9,padding:"12px !important",boxShadow:function(e){return e.customShadows.z8}},children:Object(z.jsx)(F.a,{title:"Close",children:Object(z.jsx)(P.a,{color:"inherit",onClick:function(){s(!1)},children:Object(z.jsx)(A.a,{icon:"eva:close-fill"})})})}),Object(z.jsx)(o.a,{sx:{flexGrow:1,height:"100%",overflow:"hidden"},children:Object(z.jsx)(_.PDFViewer,{width:"100%",height:"100%",style:{border:"none"},children:Object(z.jsx)(k,{invoice:t})})})]})})]}))}var G=Object(n.a)(s.a)((function(e){var t=e.theme;return{"& td":{paddingTop:t.spacing(1),paddingBottom:t.spacing(1)}}}));function J(){var e=Object(f.a)().themeStretch,t=c()(p.z.items.map((function(e){return e.price*e.qty}))),i=t-p.z.discount+p.z.taxes;return Object(z.jsx)(w.a,{title:"Ecommerce: Invoice",children:Object(z.jsxs)(r.a,{maxWidth:!e&&"lg",children:[Object(z.jsx)(C.a,{heading:"Invoice Details",links:[{name:"Dashboard",href:m.c.root},{name:"E-Commerce",href:m.c.eCommerce.root},{name:"Invoice"}]}),Object(z.jsx)(Q,{invoice:p.z}),Object(z.jsxs)(a.a,{sx:{pt:5,px:5},children:[Object(z.jsxs)(j.a,{container:!0,children:[Object(z.jsx)(j.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:Object(z.jsx)(T.a,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:"/logo/logo_full.svg",sx:{maxWidth:120}})}),Object(z.jsx)(j.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:Object(z.jsxs)(o.a,{sx:{textAlign:{sm:"right"}},children:[Object(z.jsx)(v.a,{color:"success",sx:{textTransform:"uppercase",mb:1},children:p.z.status}),Object(z.jsxs)(b.a,{variant:"h6",children:["INV-",p.z.id]})]})}),Object(z.jsxs)(j.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:[Object(z.jsx)(b.a,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice from"}),Object(z.jsx)(b.a,{variant:"body2",children:p.z.invoiceFrom.name}),Object(z.jsx)(b.a,{variant:"body2",children:p.z.invoiceFrom.address}),Object(z.jsxs)(b.a,{variant:"body2",children:["Phone: ",p.z.invoiceFrom.phone]})]}),Object(z.jsxs)(j.a,{item:!0,xs:12,sm:6,sx:{mb:5},children:[Object(z.jsx)(b.a,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice to"}),Object(z.jsx)(b.a,{variant:"body2",children:p.z.invoiceTo.name}),Object(z.jsx)(b.a,{variant:"body2",children:p.z.invoiceTo.address}),Object(z.jsxs)(b.a,{variant:"body2",children:["Phone: ",p.z.invoiceTo.phone]})]})]}),Object(z.jsx)(V.a,{children:Object(z.jsx)(d.a,{sx:{minWidth:960},children:Object(z.jsxs)(x.a,{children:[Object(z.jsx)(h.a,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)},"& th":{backgroundColor:"transparent"}},children:Object(z.jsxs)(s.a,{children:[Object(z.jsx)(O.a,{width:40,children:"#"}),Object(z.jsx)(O.a,{align:"left",children:"Description"}),Object(z.jsx)(O.a,{align:"left",children:"Qty"}),Object(z.jsx)(O.a,{align:"right",children:"Unit price"}),Object(z.jsx)(O.a,{align:"right",children:"Total"})]})}),Object(z.jsxs)(y.a,{children:[p.z.items.map((function(e,t){return Object(z.jsxs)(s.a,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[Object(z.jsx)(O.a,{children:t+1}),Object(z.jsx)(O.a,{align:"left",children:Object(z.jsxs)(o.a,{sx:{maxWidth:560},children:[Object(z.jsx)(b.a,{variant:"subtitle2",children:e.title}),Object(z.jsx)(b.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.description})]})}),Object(z.jsx)(O.a,{align:"left",children:e.qty}),Object(z.jsx)(O.a,{align:"right",children:Object(u.a)(e.price)}),Object(z.jsx)(O.a,{align:"right",children:Object(u.a)(e.price*e.qty)})]},t)})),Object(z.jsxs)(G,{children:[Object(z.jsx)(O.a,{colSpan:3}),Object(z.jsxs)(O.a,{align:"right",children:[Object(z.jsx)(o.a,{sx:{mt:2}}),Object(z.jsx)(b.a,{children:"Subtotal"})]}),Object(z.jsxs)(O.a,{align:"right",width:120,children:[Object(z.jsx)(o.a,{sx:{mt:2}}),Object(z.jsx)(b.a,{children:Object(u.a)(t)})]})]}),Object(z.jsxs)(G,{children:[Object(z.jsx)(O.a,{colSpan:3}),Object(z.jsx)(O.a,{align:"right",children:Object(z.jsx)(b.a,{children:"Discount"})}),Object(z.jsx)(O.a,{align:"right",width:120,children:Object(z.jsx)(b.a,{sx:{color:"error.main"},children:Object(u.a)(-p.z.discount)})})]}),Object(z.jsxs)(G,{children:[Object(z.jsx)(O.a,{colSpan:3}),Object(z.jsx)(O.a,{align:"right",children:Object(z.jsx)(b.a,{children:"Taxes"})}),Object(z.jsx)(O.a,{align:"right",width:120,children:Object(z.jsx)(b.a,{children:Object(u.a)(p.z.taxes)})})]}),Object(z.jsxs)(G,{children:[Object(z.jsx)(O.a,{colSpan:3}),Object(z.jsx)(O.a,{align:"right",children:Object(z.jsx)(b.a,{variant:"h6",children:"Total"})}),Object(z.jsx)(O.a,{align:"right",width:140,children:Object(z.jsx)(b.a,{variant:"h6",children:Object(u.a)(i)})})]})]})]})})}),Object(z.jsx)(g.a,{sx:{mt:5}}),Object(z.jsxs)(j.a,{container:!0,children:[Object(z.jsxs)(j.a,{item:!0,xs:12,md:9,sx:{py:3},children:[Object(z.jsx)(b.a,{variant:"subtitle2",children:"NOTES"}),Object(z.jsx)(b.a,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),Object(z.jsxs)(j.a,{item:!0,xs:12,md:3,sx:{py:3,textAlign:"right"},children:[Object(z.jsx)(b.a,{variant:"subtitle2",children:"Have a Question?"}),Object(z.jsx)(b.a,{variant:"body2",children:"support@minimals.cc"})]})]})]})]})})}}}]);
//# sourceMappingURL=40.2282735a.chunk.js.map