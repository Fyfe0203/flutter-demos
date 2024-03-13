import{E as q}from"./el-input.2YP29THG.js";import{a as I,E as N}from"./el-form.UODZHNuU.js";import{_ as R}from"./nuxt-link.7fi0nmz6.js";import{q as S,a as U,u as H,v as M}from"./entry.iYjkhHK1.js";import T from"./Button.0ywGpm4G.js";import{_ as W}from"./WalletBtn.vue.8ugZgQxU.js";import{_ as G}from"./EmailVer.vue.KJopnFU1.js";import X from"./Layout.tg61W_Bw.js";/* empty css                    */import{d as Y,a as c,r as j,ao as z,F as f,X as A,Y as l,u as t,G as $,H as n,a2 as i,W as s,a6 as m,a4 as y}from"./swiper-vue.o0IHd9hR.js";import{u as w}from"./useRule.CHyDcC58.js";import{u as J}from"./useMd5.P3WT83Q7.js";import{u as K}from"./useDialogDemo.maJlTrXP.js";import"./typescript.WBLZcIum.js";import"./castArray.0RPp3WxM.js";import"./_baseClone._afwB-RI.js";import"./_initCloneObject.cX7xIYQh.js";import"./el-button.EgmKH-rJ.js";import"./BtnCode.vue.9OF_cFag.js";import"./raf.eY1FXr7V.js";import"./validator.SQwMGO7Q.js";const O={key:0},P={class:"text-xl md:text-[26px] font-semibold pb-6"},Q={class:"flex-center-x"},Z={class:"flex-1"},ee={class:"flex-center text-base pt-5 pb-2 gap-2"},oe={key:1},te={class:"flex-center text-base pt-6"},Ce=Y({__name:"index",setup(se){const p=c(1),{t:g}=S(),u={email:w.email("/check-email-exists",!1),password:w.empty(g("rule.t011")),read:[{type:"enum",required:!0,enum:[!0],message:g("common.t09")}]},v=c(),a=j({email:"",password:"",read:!0}),d=c(!1),x=e=>{e==null||e.validate(o=>{o&&p.value===1&&(p.value=2)})},V=async e=>{d.value=!0;try{const{data:o}=await U.postForm("/email-login",{username:a.email,password:J(a.password),code:e});H().app.login(o.value.data)}catch{}finally{d.value=!1}};return(e,o)=>{const k=q,_=I,b=R,C=z("i18n-t"),D=M,h=T,B=W,E=N,F=G,L=X;return f(),A(L,{class:"login-index"},{default:l(()=>[t(p)===1?(f(),$("div",O,[n("div",P,i(e.$t("login.t01")),1),s(E,{ref_key:"formRef",ref:v,"label-position":"top",model:t(a),"hide-required-asterisk":"",class:"cus-form"},{default:l(()=>[s(_,{label:e.$t("login.t02"),prop:"email",rules:u.email},{default:l(()=>[s(k,{modelValue:t(a).email,"onUpdate:modelValue":o[0]||(o[0]=r=>t(a).email=r),placeholder:e.$t("login.t03")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),s(_,{prop:"password",rules:u.password},{label:l(()=>[n("div",Q,[n("div",Z,i(e.$t("login.t04")),1),s(b,{to:"/login/forget",class:"link-a text-base"},{default:l(()=>[m(i(e.$t("login.t05")),1)]),_:1})])]),default:l(()=>[s(k,{modelValue:t(a).password,"onUpdate:modelValue":o[1]||(o[1]=r=>t(a).password=r),type:"password",placeholder:e.$t("login.t06")},null,8,["modelValue","placeholder"])]),_:1},8,["rules"]),s(_,{prop:"read",rules:u.read},{default:l(()=>[s(D,{modelValue:t(a).read,"onUpdate:modelValue":o[4]||(o[4]=r=>t(a).read=r),class:"text-base w-full mb-3"},{default:l(()=>[s(C,{keypath:"login.t07"},{terms:l(()=>[n("span",{class:"link-a",onClick:o[2]||(o[2]=y(()=>{},["stop","prevent"]))},i(e.$t("login.t08")),1)]),privacy:l(()=>[n("span",{class:"link-a",onClick:o[3]||(o[3]=y(()=>{},["stop","prevent"]))},i(e.$t("login.t09")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),n("div",null,[s(h,{onClick:o[5]||(o[5]=r=>x(t(v)))},{default:l(()=>[m(i(e.$t("login.t10")),1)]),_:1})]),s(B),n("div",ee,[m(i(e.$t("login.t11"))+" ",1),s(b,{to:"/login/register",class:"link-a"},{default:l(()=>[m(i(e.$t("login.t12")),1)]),_:1})])]),_:1},8,["model"])])):(f(),$("div",oe,[s(F,{email:t(a).email,type:"4",loading:t(d),onSubmit:V},null,8,["email","loading"]),n("div",te,[n("button",{class:"link-a",onClick:o[6]||(o[6]=r=>("useDialogDemo"in e?e.useDialogDemo:t(K)).registerTop({email:t(a).email}))},i(e.$t("login.t15")),1)])]))]),_:1})}}});export{Ce as default};