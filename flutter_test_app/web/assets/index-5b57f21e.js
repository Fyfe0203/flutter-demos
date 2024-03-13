import{d as z,a as D,o as c,c as u,f as e,w as o,$ as N,ac as L,g as a,e as g,i as r,Y as S,m as j,C as P,ax as R,j as U,k as H}from"./index-cba2b4c0.js";import{v as I}from"./el-loading-73839a64.js";import{u as K,_ as M,a as Q}from"./useTable-141dc978.js";import{E as Y,a as q}from"./el-table-column-29b9dcad.js";import"./el-checkbox-ee806963.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-b7327fbb.js";import{_ as A}from"./Timekeeping.vue_vue_type_script_setup_true_lang-17672903.js";import"./el-tag-3e82924f.js";import{E as G}from"./el-image-viewer-7539d068.js";/* empty css                  */import{E as J,a as O}from"./el-tab-pane-614915ab.js";import{_ as W}from"./AddEditModal.vue_vue_type_script_setup_true_lang-9bd33072.js";import{u as X}from"./useConfirm-a0ba45e7.js";import{E as Z}from"./message-71d8a824.js";import"./el-form-item-a7ed5b06.js";import"./castArray-8dcd6c67.js";import"./_Uint8Array-4a491129.js";import"./_initCloneObject-d933937d.js";/* empty css                 */import"./el-select-7e09c5da.js";import"./strings-091bd2d7.js";import"./isEqual-014128fa.js";import"./index-877b19ec.js";import"./hasIn-40dec949.js";import"./flatten-b246eae0.js";import"./raf-5985b260.js";import"./useDate-0bf7f9c9.js";import"./UploadAvatar.vue_vue_type_script_setup_true_lang-8f21207f.js";import"./useRule-31f8c705.js";const ee={class:"p-4"},te={class:"flex justify-end flex-1"},oe=g("div",{class:"text-xs text-gray-400"},"预览失败",-1),Le=z({__name:"index",setup(ae){const s=D({type:1}),h=[{code:1,desc:"账户模块-账户概览页面"},{code:2,desc:"策略模块-策略广场页面"}],{pending:d,tableData:b,pagination:w,search:_,refresh:m,reset:y}=K({method:"get",url:n=>`/banner/list/${n.type}`,form:s}),f=n=>{R.add({component:W,type:"dialog",width:"500px",title:n!=null&&n.id?"编辑":"新增",showClose:!1,props:{row:n??{},type:s.type},afterClose(l){l&&m()}})},v=n=>{X("确定删除该数据吗？",async l=>{try{await U.postForm("/banner/delete/"+n.id),Z.success("操作成功"),m()}finally{l()}})};return(n,l)=>{const C=J,x=O,p=H,k=G,i=Y,E=A,T=q,F=M,$=Q,B=I;return c(),u("div",ee,[e(x,{modelValue:a(s).type,"onUpdate:modelValue":l[0]||(l[0]=t=>a(s).type=t),class:"demo-tabs",onTabChange:a(_)},{default:o(()=>[(c(),u(N,null,L(h,t=>e(C,{key:t.code,label:t.desc,name:t.code},null,8,["label","name"])),64))]),_:1},8,["modelValue","onTabChange"]),e($,{onSearchFun:a(_),onResetFun:a(y),pending:a(d)},{action:o(()=>[g("div",te,[e(p,{type:"primary",size:"small",onClick:f},{default:o(()=>[r("新增")]),_:1})])]),result:o(()=>[S((c(),j(T,{data:a(b),stripe:"",class:"w-full"},{default:o(()=>[e(i,{label:"图片",align:"center","min-width":"100"},{default:o(t=>[e(k,{src:t.row.url,lazy:"",class:"w-[100px] h-10 flex-center",fit:"cover"},{error:o(()=>[oe]),_:2},1032,["src"])]),_:1}),e(i,{prop:"name",label:"图片名称",align:"center","min-width":"120","show-overflow-tooltip":""}),e(i,{label:"图片大小",align:"center","min-width":"120","show-overflow-tooltip":""},{default:o(t=>[r(P(t.row.size)+"KB",1)]),_:1}),e(i,{prop:"linkUrl",label:"活动链接",align:"center","min-width":"120","show-overflow-tooltip":""}),e(i,{prop:"createTimestamp",label:"上传时间",align:"center","min-width":"120","show-overflow-tooltip":""},{default:o(t=>[e(E,{"begin-time":t.row.createTimestamp},null,8,["begin-time"])]),_:1}),e(i,{prop:"userName",label:"上传用户",align:"center","min-width":"120","show-overflow-tooltip":""}),e(i,{label:"操作",fixed:"right",align:"center",width:"140"},{default:o(t=>[e(p,{type:"primary",size:"small",plain:"",onClick:V=>f(t.row)},{default:o(()=>[r(" 编辑 ")]),_:2},1032,["onClick"]),e(p,{type:"danger",size:"small",plain:"",onClick:V=>v(t.row)},{default:o(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[B,a(d)]]),e(F,{pagination:a(w),class:"mt-4",onChange:a(m)},null,8,["pagination","onChange"])]),_:1},8,["onSearchFun","onResetFun","pending"])])}}});export{Le as default};