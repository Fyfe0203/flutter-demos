import{_ as D}from"./SelectLike.vue.rJtvCcKc.js";import{_ as E}from"./InputDecimal.vue.tmlsZSYi.js";import{a as T,E as U}from"./el-form.bSdGaXOr.js";import{_ as M}from"./Balance.vue.nGELT4DT.js";import L from"./Button.bEOq16Ty.js";import{n as Q,u as W,a as x,b as N,t as q}from"./entry.nbMAVAIE.js";import{v as G}from"./el-loading.D22Kx2rY.js";import{u as Y}from"./useDialogDemo.rVmU9QRz.js";import{g as j}from"./ether.STda0jBd.js";import{g as J}from"./form-rules.35IDw2pm.js";import{u as K}from"./useLoopQuery.o-PQc6Nl.js";import{u as P}from"./useSignMessage.sgOAricP.js";import{d as X,a as l,c as Z,r as oo,E as eo,R as to,u as o,F as so,G as ao,W as r,Y as m,H as no,a2 as I,a6 as $,k as H}from"./swiper-vue.o0IHd9hR.js";import"./Empty.YJn_-HYo.js";import"./Popover.Yc1BA_KB.js";import"./el-input.LbCLpOjr.js";import"./typescript.WBLZcIum.js";import"./castArray.IfhTYq5g.js";import"./_baseClone.DMOROgmz.js";import"./_initCloneObject.aIezyqVt.js";import"./Num.vue.DVqKCmb3.js";import"./useFormat.c8XsG793.js";import"./el-button.fhXFyBz0.js";import"./validator.82JMvZTK.js";import"./useMutation.aoGi9GE9.js";import"./getConnectorClient.p5LqdYNQ.js";const io={class:"p-8 text-main2"},ro={class:"text-gray2 text-base flex-center gap-2"},So=X({__name:"Invest",props:{botNo:{},chainType:{}},emits:["close"],setup(F,{emit:z}){const{isConnected:B}=Q(),{signMessageAsync:O}=P(),{loopQuery:y}=K(),g=F,h=W().app,c=l({}),R=z,C=Z(()=>h.investCoins(g.chainType)),n=oo({amount:"",coinCode:""}),S=J(c);eo(()=>{n.coinCode=C.value[0].coinCode});const u=l(!1),w=l(""),V=l(),A=a=>{a==null||a.validate(async e=>{var d,f,_;if(e){u.value=!0;try{const{data:i}=await x.post("/bot/change/invest",{...n,botNo:g.botNo}),t=(d=i.value)==null?void 0:d.data;if(!(t!=null&&t.bizId))throw new Error("No bizId");if(w.value=t.bizId,t!=null&&t.signFlag){B.value||await Y.loginWithoutSign();const v=await O({message:{raw:j(t.userOpHash)}}),{data:b}=await x.post("/bot/change/invest/sign",{botNo:g.botNo,bizId:w.value,signature:v}),s=(_=(f=b.value)==null?void 0:f.data)==null?void 0:_.userOpHash;if(!s)throw new Error("userOpHash is null");y(s,k)}else y(t.userOpHash,k)}catch(i){u.value=!1,N.error(i.message??i)}}})},k=()=>{u.value=!1,R("close",!0),N.success(q("bot.t85"))},p=l(!0);return(a,e)=>{const d=D,f=E,_=T,i=U,t=M,v=L,b=G;return to((so(),ao("div",io,[r(i,{ref_key:"formRef",ref:V,"label-position":"top",model:o(n),class:"cus-form",style:{"--placeholder":"var(--text-gray-sec)"},"hide-required-asterisk":""},{default:m(()=>[r(_,{prop:"amount",label:a.$t("account.t11"),rules:o(S).amount},{default:m(()=>[r(f,{modelValue:o(n).amount,"onUpdate:modelValue":e[1]||(e[1]=s=>o(n).amount=s),placeholder:a.$t("bot.t84",[o(h).minInvestAmount])},{suffix:m(()=>[r(d,{modelValue:o(n).coinCode,"onUpdate:modelValue":e[0]||(e[0]=s=>o(n).coinCode=s),list:o(C),"label-key":"coinCode","value-key":"coinCode",class:"!w-[100px] no-border -mr-[10px] text-right"},null,8,["modelValue","list"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"]),no("div",ro,[r(t,{modelValue:o(c),"onUpdate:modelValue":e[2]||(e[2]=s=>H(c)?c.value=s:null),loading:o(p),"onUpdate:loading":e[3]||(e[3]=s=>H(p)?p.value=s:null),"chain-type":a.chainType,"coin-code":o(n).coinCode,"num-class":"font-semibold"},{default:m(()=>[$(I(a.$t("bot.t56"))+"： ",1)]),_:1},8,["modelValue","loading","chain-type","coin-code"])]),r(v,{class:"mt-5",loading:o(u),onClick:e[4]||(e[4]=s=>A(o(V)))},{default:m(()=>[$(I(a.$t("bot.t70")),1)]),_:1},8,["loading"])])),[[b,o(p)]])}}});export{So as default};
