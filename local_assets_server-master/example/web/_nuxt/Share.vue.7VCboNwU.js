import{b as y,t as d,b$ as C,d as B}from"./entry.nbMAVAIE.js";import F from"./Button.bEOq16Ty.js";import{E as $}from"./el-button.fhXFyBz0.js";import D from"./Popover.Yc1BA_KB.js";import{u as R}from"./useClipboard.p3y3gosB.js";import{d as z,a as u,c as A,w as E,an as I,F as U,X as N,Y as t,W as e,a2 as S,H as s,R as T,u as c,k as V}from"./swiper-vue.o0IHd9hR.js";const j={class:"panel"},H={class:"panel-title px-[30px] !h-[60px] md:!h-20"},M={class:"flex-1 text-base md:text-xl text-gray2"},W={class:"panel-content p-[30px]"},X={class:"w-full rounded-lg",alt:""},Y={class:"bg-[#F5F7FC] flex items-center justify-evenly py-6 text-[#A8ADB4] text-[30px]"},Q=z({__name:"Share",setup(q){const a=u(!1),i=A(()=>location.href),{copy:f,copied:m}=R();E(m,()=>{m.value&&y.success(d("common.t10"))});const r=u(!1),x=async()=>{r.value=!0;try{await C("/static/img/home/2015008.png")}finally{r.value=!1}},_=d("bot.t964"),v=()=>{window.open("https://t.me/share/url?url="+i.value+"&text="+_,"_blank")},h=()=>{window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(_)+"&url="+encodeURIComponent(i.value),"_blank")};return(b,o)=>{const n=B,w=F,l=$,g=D,k=I("lazy");return U(),N(g,{visible:c(a),"onUpdate:visible":o[2]||(o[2]=p=>V(a)?a.value=p:null),placement:"bottom",width:380,trigger:"click","popper-class":"cus-share-popper"},{reference:t(()=>[e(w,{class:"!h-[46px] !w-[46px]",plain:""},{default:t(()=>[e(n,{name:"bot/share"})]),_:1})]),default:t(()=>[s("div",j,[s("div",H,[s("div",M,S(b.$t("bot.t963")),1),s("button",{class:"text-[26px] flex-center text-[#B0A0E2] hover:text-[var(--text-gray2)] z-1",onClick:o[0]||(o[0]=p=>a.value=!1)},[e(n,{name:"close"})])]),s("div",W,[T(s("img",X,null,512),[[k,"/static/img/home/2015008.png"]])]),s("div",Y,[e(l,{class:"circle-btn",circle:"",onClick:h},{default:t(()=>[e(n,{name:"link/twitter"})]),_:1}),e(l,{class:"circle-btn",circle:"",onClick:v},{default:t(()=>[e(n,{name:"share/im"})]),_:1}),e(l,{class:"circle-btn",circle:"",onClick:o[1]||(o[1]=p=>c(f)(c(i)))},{default:t(()=>[e(n,{name:"share/link"})]),_:1}),e(l,{class:"circle-btn",circle:"",loading:c(r),onClick:x},{default:t(()=>[e(n,{name:"share/down"})]),_:1},8,["loading"])])])]),_:1},8,["visible"])}}});export{Q as _};
