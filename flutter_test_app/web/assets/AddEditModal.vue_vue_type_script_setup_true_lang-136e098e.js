import{d as g,r as i,t as N,l as k,o as x,m as B,w as s,e as V,f as l,g as e,i as d,j as C,E as S,B as P,k as R}from"./index-0207282d.js";import{E as F,a as I}from"./el-form-item-cffcfafd.js";/* empty css                  */import{_ as M}from"./UploadAvatar.vue_vue_type_script_setup_true_lang-6923552b.js";/* empty css                 */import{u as j}from"./useRule-31f8c705.js";const A={class:"grid"},G=V("div",{class:"text-xs pt-2"},"支持格式：PNG、JPG，大小不超过2M",-1),q=g({__name:"AddEditModal",props:{row:{type:Object,default:()=>{}}},emits:["close"],setup(v,{emit:p}){const u=v,m=i(),o=i({}),f=j.empty();N(()=>{u.row.id&&(o.value={...u.row})});const r=i(!1),y=()=>{m.value.validate(async _=>{if(_)try{r.value=!0,await C.post("/profile/opt",o.value),p("close",!0)}finally{r.value=!1}})};return(_,t)=>{const c=S,n=F,z=k("Plus"),E=P,w=M,b=R,U=I;return x(),B(U,{ref_key:"formRef",ref:m,model:e(o),size:"large","label-position":"top"},{default:s(()=>[V("div",A,[l(n,{label:"图片名称",prop:"profileName",rules:e(f)},{default:s(()=>[l(c,{modelValue:e(o).profileName,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).profileName=a)},null,8,["modelValue"])]),_:1},8,["rules"]),l(n,{label:"图片",prop:"profileUrl",rules:e(f)},{default:s(()=>[l(w,{modelValue:e(o).profileUrl,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).profileUrl=a),"file-size":e(o).profileSize,"onUpdate:fileSize":t[2]||(t[2]=a=>e(o).profileSize=a),class:"w-full h-20"},{default:s(()=>[l(E,{size:25,class:"!w-full !h-full border border-dashed border-[#ccc] rounded-lg"},{default:s(()=>[l(z)]),_:1})]),_:1},8,["modelValue","file-size"]),G]),_:1},8,["rules"]),l(n,{label:"图片大小"},{default:s(()=>[l(c,{modelValue:e(o).profileSize,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).profileSize=a),disabled:""},{append:s(()=>[d("KB")]),_:1},8,["modelValue"])]),_:1})]),l(n,{class:"pt-4"},{default:s(()=>[l(b,{type:"info",disabled:e(r),onClick:t[4]||(t[4]=a=>p("close"))},{default:s(()=>[d("关闭")]),_:1},8,["disabled"]),l(b,{type:"primary",loading:e(r),onClick:y},{default:s(()=>[d("保存")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}});export{q as _};