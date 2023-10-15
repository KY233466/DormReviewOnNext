exports.id=179,exports.ids=[179],exports.modules={82179:(e,t,i)=>{"use strict";i.d(t,{Z:()=>components_Details});var s=i(60080),a=i(9885),n=i(34972),r=i.n(n),l=i(10413),o=i.n(l),c=i(61522),d=i(23509),h=i(72586),u=i(65099),m=i(90393),x=i.n(m);let Details_Header=function({title:e,location:t}){let i=(0,h.Z)("(max-width:860px)");return(0,s.jsxs)("div",{className:x().header,children:[s.jsx("a",{href:i?"/map":"/",className:x().btn,children:s.jsx(u.Z,{sx:{color:"white"}})}),(0,s.jsxs)("div",{className:x().bold,children:[" ",e," "]}),(0,s.jsxs)("div",{className:x().location,children:[" ",t," "]})]})};var p=i(25262),v=i(15705),b=i(71609),_=i.n(b);let components_Details=function({title:e,path:t,path2:i,path3:n,available:l,bed_laundry:h,rooms:u,moreInfo:m,description:x,location:b,pic:g,pro:j,con:w,changeDetail:f}){let[y,C]=(0,a.useState)(!0),[S,N]=(0,a.useState)(!0),[R,k]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let getReviews=async()=>{try{let e=await (0,c.PL)((0,c.hJ)(d.db,n));k(e.docs.map(e=>({...e.data()}))),C(!1)}catch(e){console.error("Error fetching documents:",e)}};getReviews()},[n]),(0,s.jsxs)("div",{className:_().container,children:[S&&(0,s.jsxs)("div",{className:_().leftContainer,children:[s.jsx(Details_Header,{title:e,location:b},e),s.jsx("img",{alt:"dorm",src:g,className:_().dormPic}),(0,s.jsxs)("div",{className:_().info,children:[(0,s.jsxs)("div",{className:_().sum,children:[y?s.jsx(o(),{width:"100%",height:"35px"}):s.jsx("div",{className:_().data,children:R?.map(e=>s.jsxs("div",{className:_().reviewData,children:[e.Rate.toFixed(1),s.jsx(r(),{index:e.index,name:"read-only",value:e.Rate,precision:.5,readOnly:!0},"{element}"),e.nReviews," reviews"]},e.nReviews))}),(0,s.jsxs)("div",{children:[" ",l," "]}),(0,s.jsxs)("div",{children:[" ",h," "]}),(0,s.jsxs)("div",{style:{fontSize:"14px"},children:[" ",u," "]})]}),s.jsx("hr",{}),s.jsx(p.Z,{pro:j,con:w},j),s.jsx("a",{className:_().link,href:m,target:"_blank",rel:"noreferrer",children:"View more about room, bathroom, and amenities"}),s.jsx("hr",{}),s.jsx("div",{className:_().text,children:(0,s.jsxs)("div",{style:{fontSize:"14px"},children:[" ",x," "]})}),s.jsx("hr",{}),s.jsx(v.Z,{path:t,path2:i,path3:n})]})]}),s.jsx("div",{className:_().btn,onClick:()=>void(f(),N(!S)),children:S?s.jsx("img",{alt:"",src:"//maps.gstatic.com/tactile/pane/arrow_left_2x.png",className:_().img}):s.jsx("img",{alt:"",src:"//maps.gstatic.com/tactile/pane/arrow_left_2x.png",className:_().imgR})})]})}},25262:(e,t,i)=>{"use strict";i.d(t,{Z:()=>components_ProCon});var s=i(60080),a=i(72586),n=i(17737),r=i.n(n);let ProCon_icon=function({title:e,index:t,pic:i,isMobile:a}){return(0,s.jsxs)("div",{className:a?r().iconsMobile:r().icons,children:[s.jsx("img",{alt:e,src:i}),(0,s.jsxs)("div",{style:{marginTop:"5px",fontSize:"12px"},children:[" ",e," "]})]})};var l=i(64870),o=i.n(l);let components_ProCon=({pro:e,con:t})=>{let i=(0,a.Z)("(max-width:860px)");return(0,s.jsxs)("div",{className:i?o().containerMobile:o().container,children:[(0,s.jsxs)("div",{className:i?o().proMobile:o().pro,children:[s.jsx("div",{className:o().bold,children:" Pros: "}),s.jsx("div",{className:i?o().subSectionsMobile:o().subSections,children:e?.map((e,t)=>s.jsx(ProCon_icon,{index:e.index,title:e.title,pic:e.pic,isMobile:i},e.title))})]}),(0,s.jsxs)("div",{children:[s.jsx("div",{className:o().bold,children:" Cons: "}),s.jsx("div",{className:i?o().subSectionsMobile:o().subSections,children:t?.map((e,t)=>s.jsx(ProCon_icon,{index:e.index,title:e.title,pic:e.pic,isMobile:i},e.title))})]})]})}},15705:(e,t,i)=>{"use strict";i.d(t,{Z:()=>components_Review});var s=i(60080),a=i(9885),n=i(24937),r=i(23031),l=i(57114),o=i(34972),c=i.n(o),d=i(89440),h=i.n(d),u=i(43872),m=i(81932),x=i.n(m),p=i(72586),v=i(61522),b=i(34595),_=i(23509),g=i(54136),j=i.n(g);let w={position:"absolute",height:"calc(100% - 45px)",width:"calc(100% - 30px)",bgcolor:"background.paper",p:4,padding:"15px 15px 30px 15px",display:"flex",flexDirection:"column",alignItems:"center",overflowY:"auto",overflowX:"hidden"},f={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:550,height:500,bgcolor:"background.paper",boxShadow:24,borderRadius:"18px",p:4,display:"flex",alignItems:"center"},dormReview=function({name:e,path:t,path2:i,open:n,setOpen:r}){let handleClose=(e,t)=>{"backdropClick"!==t&&(r(!1),m(null),R(void 0),S(""),M(!1))},o=(0,v.hJ)(_.db,t),[d,m]=(0,a.useState)(-1),[g,y]=(0,a.useState)(0),[C,S]=(0,a.useState)(""),[N,R]=(0,a.useState)(void 0),[k,M]=(0,a.useState)(!1),[D,q]=(0,a.useState)(""),[P,I]=(0,a.useState)(!1),[W,Z]=(0,a.useState)(!1),[U,E]=(0,a.useState)([]),T=(0,p.Z)("(max-width:860px)");(0,p.Z)("(max-width:460px)");let z=(0,l.useRouter)();(0,a.useEffect)(()=>{let getReviews=async()=>{try{let e=await (0,v.QT)((0,v.JU)(_.db,i,"rate"));e.exists()?E(e.data()):E(null)}catch(e){console.error("Error fetching documents:",e)}};getReviews()},[i]),(0,a.useEffect)(()=>{b.v0().currentUser?.reload().then(()=>{b.v0().currentUser?.emailVerified&&Z(!0)}).catch(e=>{alert(e.message)})},[(0,b.v0)().currentUser]),(0,a.useEffect)(()=>{b.v0().currentUser?.reload().then(()=>{null!=b.v0().currentUser&&y(b.v0().currentUser.uid)}).catch(e=>{alert(e.message)})},[(0,b.v0)().currentUser]);let handleSubmit=t=>{M(!0),-1===d?(I(!0),q("Please give a rating that's minimum of 0.5"),M(!1)):void 0===N||""===N?(I(!0),q("Please select school year"),M(!1)):((0,v.ET)(o,{dName:e,rate:d,year:N,message:C,uid:g}).then(()=>{null==U?(0,v.pl)((0,v.JU)(_.db,i,"rate"),{Rate:d,nReviews:1}):(0,v.pl)((0,v.JU)(_.db,i,"rate"),{Rate:(U.Rate*U.nReviews+d)/(U.nReviews+1),nReviews:U.nReviews+1}),M(!1),alert("Your message has been submitted\uD83D\uDC4D"),z.reload()}).catch(e=>{alert(e.message),M(!1)}),handleClose())};return s.jsx(h(),{open:n,onClose:handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:s.jsx(u.Z,{sx:T?w:f,children:W?(0,s.jsxs)("form",{className:T?j().formMobile:j().form,onSubmit:handleSubmit,children:[P?s.jsx(x(),{onClose:()=>{I(!1)},severity:"warning",sx:{width:"500px",marginBottom:"5px"},children:D}):null,s.jsx("div",{className:j().bold,children:" Write a review "}),s.jsx("div",{children:" All posts are anonymous "}),s.jsx("label",{className:j().question,children:"Rate for which academic year? *"}),(0,s.jsxs)("select",{value:N,name:"year",required:!0,onChange:e=>R(e.target.value),children:[s.jsx("option",{value:"",children:" --select an option-- "}),s.jsx("option",{value:"2022-2023",children:" 2023 - 2024 "}),s.jsx("option",{value:"2022-2023",children:" 2022 - 2023 "}),s.jsx("option",{value:"2021-2022",children:" 2021 - 2022 "}),s.jsx("option",{value:"2020-2021",children:" 2020 - 2021 "}),s.jsx("option",{value:"2019-2020",children:" 2019 - 2020 "})]}),s.jsx("label",{className:j().question,children:" What is your rating? * "}),s.jsx(c(),{name:"half-rating",size:"large",value:d,defaultValue:0,precision:.5,onChange:(e,t)=>{m(t)},sx:{marginBottom:"10px"}}),s.jsx("label",{className:j().question,children:"What comments do you have?"}),s.jsx("textarea",{maxLength:"400",rows:"5",className:j().textarea,placeholder:"Message",value:C,onChange:e=>S(e.target.value)}),(0,s.jsxs)("div",{className:j().btnS,children:[s.jsx("button",{onClick:handleClose,type:"submit",style:{cursor:"pointer",width:"100px",background:"white",color:"black",border:"1px solid teal",fontSize:"0.9rem",borderRadius:"10px",padding:"5px"},children:"Cancel"}),s.jsx("button",{onClick:handleSubmit,type:"submit",style:{cursor:"pointer",width:"100px",background:k?"#ccc":"#2C5A7B",fontSize:"0.9rem",color:"white",border:"none",borderRadius:"10px",padding:"5px"},children:"Post"})]})]}):(0,s.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"40px"},children:[s.jsx("div",{children:"Please sign - up and verify with your Tufts email first"}),s.jsx("button",{onClick:handleClose,type:"submit",style:{cursor:"pointer",width:"100px",background:"#2C5A7B",color:"white",fontSize:"0.9rem",border:"none",borderRadius:"10px",padding:"5px"},children:"Close"})]})})})},y={position:"absolute",height:"calc(100% - 45px)",width:"calc(100% - 30px)",bgcolor:"background.paper",p:4,padding:"15px 15px 30px 15px",display:"flex",flexDirection:"column",alignItems:"center",overflowY:"auto",overflowX:"hidden"},C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,borderRadius:"18px",p:4,display:"flex",alignItems:"center"},roomReview=function({name:e,path:t,open:i,setOpen:n}){let handleClose=(e,t)=>{"backdropClick"!==t&&(n(!1),P(!1),g(-1),d(-1),N(-1),k(void 0),D(void 0),f(""))},r=(0,v.hJ)(_.db,t),[o,d]=(0,a.useState)(-1),[m,g]=(0,a.useState)(-1),[w,f]=(0,a.useState)(""),[S,N]=(0,a.useState)(-1),[R,k]=(0,a.useState)(void 0),[M,D]=(0,a.useState)(void 0),[q,P]=(0,a.useState)(!1),[I,W]=(0,a.useState)(!1),[Z,U]=(0,a.useState)(""),[E,T]=(0,a.useState)(!1),[z,A]=(0,a.useState)(!1),[B,J]=(0,a.useState)(0),Y=(0,p.Z)("(max-width:460px)"),L=(0,p.Z)("(max-width:860px)"),V=(0,l.useRouter)();(0,a.useEffect)(()=>{b.v0().currentUser?.reload().then(()=>{null!=b.v0().currentUser&&J(b.v0().currentUser.uid)}).catch(e=>{alert(e.message)})},[(0,b.v0)().currentUser]),(0,a.useEffect)(()=>{b.v0().currentUser?.reload().then(()=>{b.v0().currentUser?.emailVerified&&A(!0)}).catch(e=>{alert(e.message)})},[(0,b.v0)().currentUser]);let handleSubmit=t=>{P(!0),-1===o?(T(!0),U("Please enter your room number"),P(!1)):-1===m?(T(!0),U("Please give a rating that's minimum of 0.5"),P(!1)):void 0===R||""===R?(T(!0),U("Please select school year"),P(!1)):void 0===M||""===M?(T(!0),U("Please select your grade"),P(!1)):(I&&N(S.toString()+" (waitlist)"),(0,v.ET)(r,{dName:e,room:o,rate:m,year:R,lottery:I?S.toString()+" (waitlist)":S,schoolYear:M,message:w,uid:B}).then(()=>{P(!1),alert("Your message has been submitted\uD83D\uDC4D"),V.reload()}).catch(e=>{alert(e.message),P(!1)}),handleClose())};return s.jsx(h(),{open:i,onClose:handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:s.jsx(u.Z,{sx:Y?y:C,children:z?(0,s.jsxs)("form",{className:L?j().formMobile:j().form,onSubmit:handleSubmit,children:[E?s.jsx(x(),{onClose:()=>{T(!1)},severity:"warning",sx:{width:"500px",marginBottom:"5px"},children:Z}):null,s.jsx("div",{className:j().bold,children:" Write a review for room "}),s.jsx("div",{style:{marginBottom:"5px"},children:" All posts are anonymous "}),s.jsx("label",{className:j().question,children:"What was the room number? *"}),s.jsx("input",{style:{width:"150px"},type:"text",pattern:"[0-9]",id:"room",name:"room",onChange:e=>d(e.target.value),required:!0}),s.jsx("label",{className:j().question,children:"What comments do you have?"}),s.jsx("textarea",{id:"textarea",name:"textarea",maxLength:"400",cols:"50",rows:"2",className:j().textarea,placeholder:"Message",value:w,onChange:e=>f(e.target.value)}),s.jsx("hr",{}),Y?(0,s.jsxs)(s.Fragment,{children:[s.jsx("label",{children:"Rate for which academic year? *"}),(0,s.jsxs)("select",{value:R,name:"year",required:!0,onChange:e=>k(e.target.value),children:[s.jsx("option",{value:"",children:" --select an option-- "}),s.jsx("option",{value:"2022-2023",children:" 2022 - 2023 "}),s.jsx("option",{value:"2021-2022",children:" 2021 - 2022 "}),s.jsx("option",{value:"2020-2021",children:" 2020 - 2021 "}),s.jsx("option",{value:"2019-2020",children:" 2019 - 2020 "})]}),s.jsx("label",{children:"What is your rating? *"}),s.jsx(c(),{name:"half-rating",size:"large",value:m,defaultValue:0,precision:.5,onChange:(e,t)=>{g(t)},sx:{marginBottom:"10px"}})]}):(0,s.jsxs)("div",{className:j().leftRight,children:[(0,s.jsxs)("div",{className:j().vertical,children:[s.jsx("label",{className:j().question,children:"Rate for which academic year? *"}),(0,s.jsxs)("select",{value:R,name:"year",required:!0,onChange:e=>k(e.target.value),children:[s.jsx("option",{value:"",children:" --select an option-- "}),s.jsx("option",{value:"2022-2023",children:" 2022 - 2023 "}),s.jsx("option",{value:"2021-2022",children:" 2021 - 2022 "}),s.jsx("option",{value:"2020-2021",children:" 2020 - 2021 "}),s.jsx("option",{value:"2019-2020",children:" 2019 - 2020 "})]})]}),(0,s.jsxs)("div",{className:j().vertical,children:[s.jsx("label",{className:j().question,children:"What is your rating? *"}),s.jsx(c(),{name:"half-rating",size:"large",value:m,defaultValue:0,precision:.5,onChange:(e,t)=>{g(t)},sx:{marginBottom:"10px"}})]})]}),Y?(0,s.jsxs)(s.Fragment,{children:[s.jsx("label",{className:j().question,children:"What is the lottery number used to get the room? (optional)"}),s.jsx("input",{style:{width:"150px"},type:"text",pattern:"[0-9]",id:"lottery",name:"lottery",onChange:e=>N(e.target.value)}),(0,s.jsxs)("div",{className:j().isWaitlist,children:[s.jsx("input",{type:"checkbox",id:"waitlist_num",name:"waitlist_num",value:"waitlist_num",style:{marginRight:"10px",width:"auto"},onChange:e=>W(e.target.checked)}),s.jsx("label",{children:" It is a waitlist number"})]}),s.jsx("label",{className:j().question,children:" You were a * "}),(0,s.jsxs)("select",{value:M,name:"year",required:!0,onChange:e=>D(e.target.value),children:[s.jsx("option",{value:"",children:" --select an option-- "}),s.jsx("option",{value:"sophomore",children:" Sophomore "}),s.jsx("option",{value:"junior",children:" Junior "}),s.jsx("option",{value:"senior",children:" Senior "})]})]}):(0,s.jsxs)("div",{className:j().leftRight,children:[(0,s.jsxs)("div",{className:j().vertical,children:[s.jsx("label",{className:j().question,children:"What is the lottery number "}),s.jsx("label",{style:{marginTop:0,textAlign:"left",width:"100%"},children:"used to get the room? (optional)"}),s.jsx("input",{style:{width:"150px"},type:"text",pattern:"[0-9]",id:"lottery",name:"lottery",onChange:e=>N(e.target.value)}),(0,s.jsxs)("div",{className:j().isWaitlist,children:[s.jsx("input",{type:"checkbox",id:"waitlist_num",name:"waitlist_num",value:"waitlist_num",style:{marginRight:"10px",width:"auto"},onChange:e=>W(e.target.checked)}),s.jsx("label",{children:" It is a waitlist number"})]})]}),(0,s.jsxs)("div",{className:j().vertical,children:[s.jsx("label",{className:j().question,children:" You were a * "}),(0,s.jsxs)("select",{value:M,name:"year",required:!0,onChange:e=>D(e.target.value),children:[s.jsx("option",{value:"",children:" --select an option-- "}),s.jsx("option",{value:"sophomore",children:" Sophomore "}),s.jsx("option",{value:"junior",children:" Junior "}),s.jsx("option",{value:"senior",children:" Senior "})]})]})]}),(0,s.jsxs)("div",{className:j().btnS,children:[s.jsx("button",{onClick:handleClose,type:"submit",style:{cursor:"pointer",width:"100px",background:"white",color:"black",border:"1px solid teal",fontSize:"0.9rem",borderRadius:"10px",padding:"5px"},children:"Cancel"}),s.jsx("button",{onClick:handleSubmit,type:"submit",style:{cursor:"pointer",width:"100px",background:q?"#ccc":"#2C5A7B",fontSize:"0.9rem",color:"white",border:"none",borderRadius:"10px",padding:"5px"},children:"Post"})]})]}):(0,s.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"40px"},children:[s.jsx("div",{children:"Please sign - up and verify with your Tufts email first"}),s.jsx("button",{onClick:handleClose,type:"submit",style:{cursor:"pointer",width:"100px",background:"#2C5A7B",color:"white",fontSize:"0.9rem",border:"none",borderRadius:"10px",padding:"5px"},children:"Close"})]})})})};var S=i(10413),N=i.n(S),R=i(12738),k=i(60951),M=i(57345),D=i.n(M);let reviewTab=({path:e,path2:t})=>{let[i,n]=(0,a.useState)(!0),[r,l]=(0,a.useState)(!0),[o,c]=(0,a.useState)([]),[d,h]=(0,a.useState)([]),handleChange=e=>{if(0===e){l(!0);return}l(!1)};return(0,a.useEffect)(()=>{let getReviews=async()=>{try{let t=await (0,v.PL)((0,v.hJ)(_.db,e));c(t.docs.map(e=>({...e.data()}))),n(!1)}catch(e){console.error("Error fetching documents:",e)}};getReviews()},[e]),(0,a.useEffect)(()=>{let getReviewsRoom=async()=>{try{let e=await (0,v.PL)((0,v.hJ)(_.db,t));h(e.docs.map(e=>({...e.data()}))),n(!1)}catch(e){console.error("Error fetching documents:",e)}};getReviewsRoom()},[t]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:D().header,children:[s.jsx("div",{className:r?D().bold:null,onClick:()=>handleChange(0),children:"Dorm Review"}),s.jsx("div",{className:r?null:D().bold,onClick:()=>handleChange(1),children:"Room Review"})]}),i?s.jsx(N(),{width:"100%",height:"150px"}):r?0===o.length?s.jsx("div",{className:D().nothing,children:"Be the first to leave a dorm review!"}):o?.map((e,t)=>s.jsx(R.Z,{index:t,year:e.year,rate:e.rate,message:e.message,divider:t!==o.length-1},e.message)):0===d.length?s.jsx("div",{className:D().nothing,children:"Be the first to leave a room review!"}):d?.map((e,t)=>s.jsx(k.Z,{index:t,room:e.room,rate:e.rate,year:e.year,lottery:e.lottery,schoolYear:e.schoolYear,message:e.message,divider:t!==o.length-1},e.message))]})},components_Review=function({path:e,path2:t,path3:i,isMobile:l}){let[o,c]=(0,a.useState)(!1),[d,h]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:j().container,children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[(0,s.jsxs)("div",{className:l?j().btnMobile:j().btn,onClick:()=>c(!0),children:[s.jsx(n.Z,{className:l?j().btnIconMobile:j().btnIcon}),"Write review for dorm"]}),(0,s.jsxs)("div",{className:l?j().btnMobile:j().btn,onClick:()=>h(!0),children:[s.jsx(r.Z,{className:l?j().btnIconMobile:j().btnIcon}),"Write review for room"]})]}),s.jsx(dormReview,{name:e,path:e,path2:i,open:o,setOpen:c}),s.jsx(roomReview,{name:e,path:t,open:d,setOpen:h}),s.jsx("div",{className:j().reviewSection,children:s.jsx(reviewTab,{path:e,path2:t})})]})}},90393:e=>{e.exports={header:"header_header__X_r0M",btn:"header_btn__jPt5H",invisBtn:"header_invisBtn__4_de_",bold:"header_bold__Ps_ne",location:"header_location__dYLbo"}},71609:e=>{e.exports={container:"details_container__ys2oi",leftContainer:"details_leftContainer__pxR4U",btn:"details_btn__fndAt",reviewData:"details_reviewData__wsvv_",img:"details_img__7T5qN",imgR:"details_imgR__99vTV",dormPic:"details_dormPic__L0cQZ",info:"details_info__rFoA2",sum:"details_sum__ClrmY",data:"details_data__ECnmg",text:"details_text__gdS1x",link:"details_link__Q1LfD"}},17737:e=>{e.exports={icons:"icon_icons__ut6XG",iconsMobile:"icon_iconsMobile__wAzIm"}},64870:e=>{e.exports={container:"procon_container__sxNl_",containerMobile:"procon_containerMobile__hAjZc",bold:"procon_bold__v87Y_",proMobile:"procon_proMobile__jR95M",pro:"procon_pro__7J_d3",subSections:"procon_subSections__ahFca",subSectionsMobile:"procon_subSectionsMobile__4ecuz",iconsMobile:"procon_iconsMobile__JAqHI",icons:"procon_icons__Jig_t"}},54136:e=>{e.exports={container:"review_container__1sCXg",isWaitlist:"review_isWaitlist__ws0Ox",btn:"review_btn__L5DbT",btnMobile:"review_btnMobile__QLWij",btnIcon:"review_btnIcon__pOC2b",btnIconMobile:"review_btnIconMobile__ocFmb",section:"review_section__VvmKu",reviewSection:"review_reviewSection__RAVRO",bold:"review_bold__idWsn",btnS:"review_btnS__C1HID",leftRight:"review_leftRight__KD9s9",question:"review_question__Ao505",vertical:"review_vertical__iCiIY",formMobile:"review_formMobile___glHL",form:"review_form__WW_rw"}},57345:e=>{e.exports={header:"reviewTab_header__qq4q2",bold:"reviewTab_bold__C8kH_",nothing:"reviewTab_nothing__oidOf"}}};