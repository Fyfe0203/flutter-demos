import{b as y,t as g,d as h}from"./entry.nbMAVAIE.js";import{E as C}from"./el-input.LbCLpOjr.js";import k from"./Button.bEOq16Ty.js";import{u as V}from"./useClipboard.p3y3gosB.js";import{_ as w}from"./tm.27JzO-UQ.js";import{d as M,a as _,w as B,F as i,G as c,H as t,P as u,u as o,W as l,Y as r,k as E,a6 as m}from"./swiper-vue.o0IHd9hR.js";import"./typescript.WBLZcIum.js";import"./el-button.fhXFyBz0.js";const T={class:"relative"},$={class:"absolute -top-12 left-8 text-lg text-gray2 font-semibold flex-center-x gap-4"},A=t("div",{class:"w-[1px] h-8 bg-[#B0A0E2]"},null,-1),D={key:0,class:"p-[30px] cus-form"},N=t("div",{class:"text-base mb-5"}," DM CatMaster Bot in Telegram and send the following MSG to Verify your Account. ",-1),S={class:"flex-center gap-2 text-lg"},F={class:"pt-10"},G=t("span",{class:"flex-center gap-3"},[t("img",{src:w,class:"w-[30px] h-[30px] rounded-full",alt:""}),m(" DM@CatMaster ")],-1),z={key:1,class:"p-[30px]"},H=t("div",{class:"text-base text-center"},"Verify and bind your Telegram Account",-1),I={class:"pt-10"},O=M({__name:"BindTM",setup(P){const s=_(1),{copy:f,copied:d}=V();B(d,()=>{d.value&&y.success(g("common.t10"))});const n=_("Verify F2E3166D"),x=()=>{window.open("https://t.me/sograph_bsc_bot","_blank"),s.value=2};return(R,e)=>{const v=h,b=C,p=k;return i(),c("div",T,[t("div",$,[t("button",{class:u({"text-linear1":o(s)===1}),onClick:e[0]||(e[0]=a=>s.value=1)},"Step1",2),A,t("button",{class:u({"text-linear1":o(s)===2}),onClick:e[1]||(e[1]=a=>s.value=2)},"Step2",2)]),o(s)===1?(i(),c("div",D,[N,l(b,{modelValue:o(n),"onUpdate:modelValue":e[3]||(e[3]=a=>E(n)?n.value=a:null),readonly:""},{suffix:r(()=>[t("div",S,[t("button",{type:"button",class:"text-main2",onClick:e[2]||(e[2]=a=>o(f)(o(n)))},[l(v,{name:"copy+",filled:""})])])]),_:1},8,["modelValue"]),t("div",F,[l(p,{onClick:x},{default:r(()=>[G]),_:1})])])):(i(),c("div",z,[H,t("div",I,[l(p,null,{default:r(()=>[m("Vefify")]),_:1})])]))])}}});export{O as default};
