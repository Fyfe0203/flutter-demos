import{d as k,r,a2 as w,o as C,m as E,w as l,f as s,g as o,i as d,C as c,j as V,b as $,E as F,k as x}from"./index-0207282d.js";import{E as B,a as I}from"./el-form-item-cffcfafd.js";/* empty css                  *//* empty css                 */import{u as R}from"./useRule-31f8c705.js";import{E as S}from"./message-4c47188d.js";import"./castArray-b8a06b61.js";import"./_Uint8Array-5054225c.js";import"./_initCloneObject-d522ba90.js";const q=k({__name:"SetPhone",props:{info:{type:Object,default:()=>{}}},emits:["close"],setup(_,{emit:u}){const b=_,y={phone:R.empty()},i=r(),n=r({phone:""});w(()=>{n.value.phone=b.info.phone});const a=r(!1),g=t=>{t==null||t.validate(async e=>{if(e){a.value=!0;try{await V.putForm("/info/set/phone",n.value),S.success("设置成功"),$().getUserInfo(),u("close",!0)}finally{a.value=!1}}})};return(t,e)=>{const h=F,m=B,f=x,v=I;return C(),E(v,{ref_key:"formRef",ref:i,model:o(n),rules:y,"label-width":"100px","label-position":"left"},{default:l(()=>[s(m,{label:t.$t("user.t3"),prop:"phone"},{default:l(()=>[s(h,{modelValue:o(n).phone,"onUpdate:modelValue":e[0]||(e[0]=p=>o(n).phone=p),type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),s(m,null,{default:l(()=>[s(f,{type:"default",disabled:o(a),onClick:e[1]||(e[1]=p=>u("close"))},{default:l(()=>[d(c(t.$t("public.t3")),1)]),_:1},8,["disabled"]),s(f,{type:"primary",loading:o(a),onClick:e[2]||(e[2]=p=>g(o(i)))},{default:l(()=>[d(c(t.$t("public.t2")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}});export{q as default};
