import{d as G,a as n,w as z,c as m,C as K,L as X,F as h,G as y,H as A,P as L,Z as B,N as M,T as Q,al as Z,Q as J}from"./swiper-vue.o0IHd9hR.js";(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vue3-marquee{display:flex!important;position:relative}.vue3-marquee.horizontal{overflow-x:hidden!important;flex-direction:row!important;width:100%;height:max-content}.vue3-marquee.vertical{overflow-y:hidden!important;flex-direction:column!important;height:100%;width:max-content}.vue3-marquee:hover>.marquee{animation-play-state:var(--pauseOnHover)}.vue3-marquee:active>.marquee{animation-play-state:var(--pauseOnClick)}.vue3-marquee>.marquee{flex:0 0 auto;min-width:var(--min-width);min-height:var(--min-height);z-index:1;animation:var(--orientation) var(--duration) linear var(--delay) var(--loops);animation-play-state:var(--pauseAnimation);animation-direction:var(--direction)}.vue3-marquee.horizontal>.marquee{display:flex;flex-direction:row;align-items:center}.vue3-marquee.vertical>.marquee{display:flex;flex-direction:column;align-items:center}@keyframes scrollX{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes scrollY{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.vue3-marquee>.overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.transparent-overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.overlay:before,.vue3-marquee>.overlay:after{content:"";position:absolute;z-index:2}.vue3-marquee.horizontal>.overlay:before,.vue3-marquee.horizontal>.overlay:after{background:linear-gradient(to right,var(--gradient-color));height:100%;width:var(--gradient-length)}.vue3-marquee.vertical>.overlay:before,.vue3-marquee.vertical>.overlay:after{background:linear-gradient(to bottom,var(--gradient-color));height:var(--gradient-length);width:100%}.vue3-marquee.horizontal>.overlay:after{transform:rotate(180deg)}.vue3-marquee.vertical>.overlay:after{transform:rotate(-180deg)}.vue3-marquee>.overlay:before{left:0;top:0}.vue3-marquee.horizontal>.overlay:after{right:0;top:0}.vue3-marquee.vertical>.overlay:after{left:0;bottom:0}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();var _=Object.defineProperty,N=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,E=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,I=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&E(e,t,a[t]);if(N)for(var t of N(a))ee.call(a,t)&&E(e,t,a[t]);return e},ae=(e,a)=>{const t=e.__vccOpts||e;for(const[l,o]of a)t[l]=o;return t};const te=G({props:{vertical:{type:Boolean,default:!1},direction:{type:String,default:"normal"},duration:{type:Number,default:20},delay:{type:Number,default:0},loop:{type:Number,default:0},clone:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},gradientColor:{type:Array,default:[255,255,255]},gradientWidth:{type:String},gradientLength:{type:String},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},pause:{type:Boolean,default:!1},animateOnOverflowOnly:{type:Boolean,default:!1}},emits:["onComplete","onLoopComplete","onPause","onResume","onOverflowDetected","onOverflowCleared"],setup(e,{emit:a}){const t=n(0),l=n("100%"),o=n("100%"),p=n(0),r=n(!1),g=n(!1),v=n(0),d=n(0),C=n(0),$=n(0),c=n(!1),f=n(!1),b=n(0),O=n(null),k=n("200px"),H=n(!1),u=n(null),s=n(null),w=async()=>{await P(),p.value++},P=async()=>{e.vertical&&(r.value=!0),setInterval(()=>{if(l.value="0%",o.value="0%",u.value!==null&&s.value!==null&&u.value&&s.value)if(e.vertical&&"clientHeight"in u.value&&"clientHeight"in s.value){$.value=u.value.clientHeight,C.value=s.value.clientHeight;const i=Math.ceil(C.value/$.value);return t.value=isFinite(i)?i:0,r.value=!1,t.value}else if(!e.vertical&&"clientWidth"in u.value&&"clientWidth"in s.value){if(d.value=u.value.clientWidth,v.value=s.value.clientWidth,e.animateOnOverflowOnly)return d.value<v.value?(g.value=!0,a("onOverflowDetected")):(g.value=!1,a("onOverflowCleared")),0;const i=Math.ceil(v.value/d.value);return t.value=isFinite(i)?i:0,t.value}else return l.value="100%",o.value="100%",0;else return l.value="100%",o.value="100%",0},100)};z(d,async()=>{e.clone&&w()}),z(v,async()=>{(e.clone||e.animateOnOverflowOnly)&&w()}),z(()=>e.pause,(i,q)=>{i!==q&&a(i?"onResume":"onPause")});const D=()=>{e.pauseOnHover&&(a("onPause"),c.value=!0)},F=()=>{e.pauseOnHover&&(a("onResume"),c.value=!1)},U=()=>{e.pauseOnClick&&(a("onPause"),f.value=!0)},V=()=>{e.pauseOnClick&&(a("onResume"),f.value=!1)},S=m(()=>e.pause||e.vertical&&r.value||e.animateOnOverflowOnly&&g.value?"paused":"running"),j=m(()=>e.pauseOnHover&&(c.value||f.value)||!e.pauseOnHover&&S.value==="paused"?"paused":"running"),R=m(()=>e.pauseOnHover&&c.value||e.pauseOnClick&&f.value||!e.pauseOnHover&&S.value==="paused"?"paused":"running"),T=m(()=>{const i={"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--direction":`${e.direction}`,"--pauseOnHover":`${j.value}`,"--pauseOnClick":`${R.value}`,"--pauseAnimation":`${S.value}`,"--loops":`${e.loop===0?"infinite":e.loop}`,"--gradient-color":`rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 1), rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 0)`,"--gradient-length":`${k.value}`,"--min-width":`${l.value}`,"--min-height":`${o.value}`},q={"--orientation":"scrollX",orientation:"horizontal"};return e.vertical&&(q["--orientation"]="scrollY"),I(I({},i),q)}),Y=m(()=>!!e.gradient),W=async()=>{e.vertical?(o.value="100%",l.value="auto",e.animateOnOverflowOnly&&console.warn("The `animateOnOverflowOnly` prop is not supported for vertical marquees.")):(o.value="auto",e.animateOnOverflowOnly?l.value="auto":l.value="100%"),e.gradient&&(e.gradientWidth?(console.warn("The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."),k.value=e.gradientWidth):e.gradientLength&&(k.value=e.gradientLength)),(e.clone||e.animateOnOverflowOnly)&&(await P(),w()),H.value=!0};return K(async()=>{W(),O.value=setInterval(()=>{b.value++,e.loop!==0&&b.value===e.loop&&(a("onComplete"),clearInterval(O.value)),a("onLoopComplete")},e.duration*1e3)}),X(()=>{clearInterval(O.value)}),{ready:H,contentWidth:d,containerWidth:v,contentHeight:$,containerHeight:C,loopCounter:b,loopInterval:O,mouseOverMarquee:c,mouseDownMarquee:f,minWidth:l,minHeight:o,animateOnOverflowPause:g,marqueeContent:u,marqueeOverlayContainer:s,componentKey:p,showGradient:Y,cloneAmount:t,ForcesUpdate:w,checkForClone:P,setupMarquee:W,getCurrentStyle:T,hoverStarted:D,hoverEnded:F,mouseDown:U,mouseUp:V}}}),ne={class:"transparent-overlay",ref:"marqueeOverlayContainer","aria-hidden":!0},re={class:"marquee",ref:"marqueeContent"},le={key:1,"aria-hidden":!0,class:"marquee"};function oe(e,a,t,l,o,p){return e.ready?(h(),y("div",{class:L(["vue3-marquee",{vertical:e.vertical,horizontal:!e.vertical}]),style:J(e.getCurrentStyle),key:e.componentKey,onMouseenter:a[0]||(a[0]=(...r)=>e.hoverStarted&&e.hoverStarted(...r)),onMouseleave:a[1]||(a[1]=(...r)=>e.hoverEnded&&e.hoverEnded(...r)),onMousedown:a[2]||(a[2]=(...r)=>e.mouseDown&&e.mouseDown(...r)),onMouseup:a[3]||(a[3]=(...r)=>e.mouseUp&&e.mouseUp(...r))},[A("div",ne,null,512),e.showGradient?(h(),y("div",{key:0,"aria-hidden":!0,class:L(["overlay",{vertical:e.vertical,horizontal:!e.vertical}])},null,2)):B("",!0),A("div",re,[M(e.$slots,"default")],512),!e.animateOnOverflowOnly||e.animateOnOverflowOnly&&!e.animateOnOverflowPause?(h(),y("div",le,[M(e.$slots,"default")])):B("",!0),(h(!0),y(Q,null,Z(e.cloneAmount,r=>(h(),y("div",{"aria-hidden":!0,class:"marquee cloned",key:r},[M(e.$slots,"default")]))),128))],38)):B("",!0)}var se=ae(te,[["render",oe]]);export{se as V};