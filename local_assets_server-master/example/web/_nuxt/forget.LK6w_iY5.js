import{E as U}from"./el-input.LbCLpOjr.js";import{a as D,E}from"./el-form.bSdGaXOr.js";import F from"./Button.bEOq16Ty.js";import{_ as I}from"./EmailVer.vue.rWoKBOe2.js";import{_ as L}from"./Password.vue.lYj2H-_H.js";import{_ as N}from"./nuxt-link.cs0oVYfb.js";import S from"./Layout.G465tLIB.js";import{q as H,a as M,s as T,u as q,b as G}from"./entry.nbMAVAIE.js";import{u as _}from"./useRule.yaNZg3ZK.js";import{u as W}from"./useMd5.qOKXMTuC.js";import{d as X,a as k,r as Y,an as j,R as z,F as d,X as V,Y as a,u as t,G as y,H as i,a2 as m,W as l,a6 as f}from"./swiper-vue.o0IHd9hR.js";import"./typescript.WBLZcIum.js";import"./castArray.IfhTYq5g.js";import"./_baseClone.DMOROgmz.js";import"./_initCloneObject.aIezyqVt.js";import"./el-button.fhXFyBz0.js";import"./BtnCode.vue.m3gHXFrQ.js";import"./raf.JIemjHgP.js";import"./Popover.Yc1BA_KB.js";const A={key:0},J={class:"text-xl md:text-[26px] font-semibold pb-7"},K={class:"text-base mb-10"},O={class:"pt-1"},Q={key:2},Z={class:"text-xl md:text-[26px] font-semibold pb-7"},oo={class:"text-base mb-10"},eo={class:"pt-1"},to={class:"flex-center text-base pt-6"},ho=X({__name:"forget",setup(so){const r=k(1),{t:g}=H(),u={email:_.email("/check-email-exists",!1),password:_.empty(g("rule.t011")),confirmPwd:_.passwordConfirm(()=>e.password)},p=k(),e=Y({email:"",code:"",password:"",confirmPwd:""}),b=o=>{o==null||o.validate(async s=>{s&&(r.value===1?r.value=2:(await M.post("/forgot",{email:e.email,pwd:W(e.password),code:e.code}),T(q().app.loginUrl),G.success(g("common.t08"))))})},h=o=>{e.code=o,r.value=3};return(o,s)=>{const x=U,c=D,v=F,w=E,P=I,$=L,C=N,R=S,B=j("auto-animate");return z((d(),V(R,null,{default:a(()=>[t(r)===1?(d(),y("div",A,[i("div",J,m(o.$t("login.t16")),1),i("div",K,m(o.$t("login.t17")),1),l(w,{ref_key:"formRef",ref:p,"label-position":"top",model:t(e),class:"cus-form"},{default:a(()=>[l(c,{label:o.$t("login.t02"),prop:"email",rules:u.email},{default:a(()=>[l(x,{modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(e).email=n),placeholder:o.$t("login.t03")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),i("div",O,[l(v,{onClick:s[1]||(s[1]=n=>b(t(p)))},{default:a(()=>[f(m(o.$t("login.t18")),1)]),_:1})])]),_:1},8,["model"])])):t(r)===2?(d(),V(P,{key:1,email:t(e).email,type:"2",onSubmit:h},null,8,["email"])):(d(),y("div",Q,[i("div",Z,m(o.$t("login.t19")),1),i("div",oo,m(o.$t("login.t20")),1),l(w,{ref_key:"formRef",ref:p,"label-position":"top",model:t(e),class:"cus-form"},{default:a(()=>[l(c,{label:o.$t("login.t21"),prop:"password",rules:u.password},{default:a(()=>[l($,{modelValue:t(e).password,"onUpdate:modelValue":s[2]||(s[2]=n=>t(e).password=n),placeholder:o.$t("login.t22"),"format-tip":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(c,{label:o.$t("login.t23"),prop:"confirmPwd",rules:u.confirmPwd},{default:a(()=>[l($,{modelValue:t(e).confirmPwd,"onUpdate:modelValue":s[3]||(s[3]=n=>t(e).confirmPwd=n),placeholder:o.$t("login.t24")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),i("div",eo,[l(v,{onClick:s[4]||(s[4]=n=>b(t(p)))},{default:a(()=>[f(m(o.$t("login.t25")),1)]),_:1})])]),_:1},8,["model"])])),i("div",to,[l(C,{to:"/login",class:"link-a"},{default:a(()=>[f(m(o.$t("login.t26")),1)]),_:1})])]),_:1})),[[B]])}}});export{ho as default};