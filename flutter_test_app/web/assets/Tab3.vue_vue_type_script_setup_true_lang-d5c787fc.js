import{d as x,r as o,o as R,m as E,w as n,f as l,g as s,e as u,C as b,i as k,j as p,E as V,k as B}from"./index-0207282d.js";import{E as C,a as F}from"./el-form-item-cffcfafd.js";/* empty css                  *//* empty css                 */import{u as h}from"./useMath-036b4770.js";import{u as c}from"./useRule-31f8c705.js";import{E as I}from"./message-4c47188d.js";const N={class:"mb-5 text-gray-600 text-xs"},U=x({__name:"Tab3",setup(D){const r=o(),e=o({}),d={singleRewards:[c.empty(),c.gteint()]},i=async()=>{const t=await p.postForm("/config/integral/invest/single-rewards");e.value=t||{}},a=o(!1),f=()=>{r.value.validate(async t=>{if(t)try{a.value=!0,await p.post("/config/opt/invest/single-rewards",e.value),I.success("操作成功"),i()}finally{a.value=!1}})};return i(),(t,m)=>{const _=V,g=C,w=B,v=F;return R(),E(v,{ref_key:"formRef",ref:r,model:s(e),size:"large","label-position":"top","hide-required-asterisk":"",class:"max-w-[500px]"},{default:n(()=>[l(g,{label:"投资奖励单次积分",prop:"singleRewards",rules:d.singleRewards},{default:n(()=>[l(_,{modelValue:s(e).singleRewards,"onUpdate:modelValue":m[0]||(m[0]=y=>s(e).singleRewards=y)},null,8,["modelValue"])]),_:1},8,["rules"]),u("div",N," * 被邀请人和邀请人各得 "+b(s(h).Div(s(e).singleRewards,2))+" 会员积分 ",1),u("div",null,[l(w,{type:"primary",loading:s(a),onClick:f},{default:n(()=>[k("保存")]),_:1},8,["loading"])])]),_:1},8,["model"])}}});export{U as _};
