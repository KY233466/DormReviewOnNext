(()=>{var e={};e.id=476,e.ids=[476],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},72858:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>p,routeModule:()=>_,tree:()=>l});var s=t(73137),i=t(54647),n=t(4183),a=t.n(n),o=t(71775),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);t.d(r,u);let c=s.AppPageRouteModule,l=["",{children:["verify-email",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,18028)),"C:\\Users\\katyang\\DormReviewOnNext\\app\\verify-email\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,67554)),"C:\\Users\\katyang\\DormReviewOnNext\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,51918,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\katyang\\DormReviewOnNext\\app\\verify-email\\page.js"],d="/verify-email/page",x={require:t,loadChunk:()=>Promise.resolve()},_=new c({definition:{kind:i.x.APP_PAGE,page:"/verify-email/page",pathname:"/verify-email",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},46609:(e,r,t)=>{Promise.resolve().then(t.bind(t,79990))},79990:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=t(60080),i=t(9885),n=t(34595),a=t(57114),o=t(66173),u=t.n(o);let __WEBPACK_DEFAULT_EXPORT__=function(){let e=(0,a.useRouter)();return(0,i.useEffect)(()=>{let r=setInterval(()=>{n.v0().currentUser?.reload().then(()=>{n.v0().currentUser?.emailVerified&&(clearInterval(r),e.push("/"))}).catch(e=>{alert(e.message)})},4e3)},[(0,n.v0)().currentUser,e]),s.jsx("div",{className:u().container,children:(0,s.jsxs)("div",{className:u().card,children:[s.jsx("div",{children:" A Verification email has been sent "}),s.jsx("h1",{children:" Please check your junk mail! "}),s.jsx("h1",{children:" You must verify your email before browsing or leaving reviews "}),s.jsx("div",{children:" Follow the instruction in the email to verify your account "})]})})}},66173:e=>{e.exports={container:"verification_container__FKhKc",card:"verification_card__jkOzC"}},18028:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>n,default:()=>u});var s=t(17536);let i=(0,s.createProxy)(String.raw`C:\Users\katyang\DormReviewOnNext\app\verify-email\page.js`),{__esModule:n,$$typeof:a}=i,o=i.default,u=o},57114:(e,r,t)=>{e.exports=t(82778)}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[447,358],()=>__webpack_exec__(72858));module.exports=t})();