import{d as y,o as d,c as x,f as t,w as e,e as E,i as l,Y as F,m as N,g as a,C as $,ax as B,j as D,k as R}from"./index-0207282d.js";import{v as T}from"./el-loading-080c5bc8.js";import{u as z,_ as S,a as V}from"./useTable-c580cec4.js";import{E as j,a as L}from"./el-table-column-def74e1d.js";import"./el-checkbox-816fe3b3.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-90f9afbe.js";import"./el-tag-0efdc75d.js";/* empty css                  */import{_ as A}from"./AddEditModal.vue_vue_type_script_setup_true_lang-ae4974bd.js";import{u as H}from"./useConfirm-47e716c6.js";import{E as M}from"./message-4c47188d.js";import"./el-form-item-cffcfafd.js";import"./castArray-b8a06b61.js";import"./_Uint8Array-5054225c.js";import"./_initCloneObject-d522ba90.js";/* empty css                 */import"./el-select-69ed96fa.js";import"./strings-185a2c5e.js";import"./isEqual-7382b5a8.js";import"./index-83327429.js";import"./hasIn-41f90f84.js";import"./flatten-24f36df1.js";import"./raf-fd37df43.js";import"./enum-569bea9e.js";import"./useRule-31f8c705.js";const P={class:"p-4"},Q={class:"flex justify-end flex-1"},ht=y({__name:"index",setup(Y){const{pending:m,tableData:_,pagination:f,search:u,refresh:r,reset:h}=z({method:"post",url:"/task/page"}),c=o=>{B.add({component:A,type:"dialog",width:"600px",title:o!=null&&o.id?"编辑任务":"新增任务",showClose:!1,props:{row:o??{}},afterClose(n){n&&r()}})},g=o=>{H("确定删除该数据吗？",async n=>{try{await D.post("/task/delete",{taskNo:o.taskNo}),M.success("操作成功"),r()}finally{n()}})};return(o,n)=>{const p=R,i=j,w=L,k=S,C=V,b=T;return d(),x("div",P,[t(C,{onSearchFun:a(u),onResetFun:a(h),pending:a(m)},{action:e(()=>[E("div",Q,[t(p,{type:"primary",size:"small",onClick:c},{default:e(()=>[l("新增任务")]),_:1})])]),result:e(()=>[F((d(),N(w,{data:a(_),stripe:"",class:"w-full"},{default:e(()=>[t(i,{label:"序号",width:"60",align:"center","show-overflow-tooltip":""},{default:e(s=>[l($(s.$index+1),1)]),_:1}),t(i,{prop:"taskName",label:"任务名称",align:"center","min-width":"120","show-overflow-tooltip":""}),t(i,{prop:"taskDesc",label:"任务描述",align:"center","min-width":"90","show-overflow-tooltip":""}),t(i,{prop:"taskRewardCoin",label:"奖励币种",align:"center","min-width":"80","show-overflow-tooltip":""}),t(i,{prop:"taskRewardAmount",label:"奖励数量",align:"center","min-width":"80","show-overflow-tooltip":""}),t(i,{label:"操作",fixed:"right",align:"center",width:"200"},{default:e(s=>[t(p,{type:"primary",size:"small",plain:"",onClick:v=>c(s.row)},{default:e(()=>[l(" 编辑 ")]),_:2},1032,["onClick"]),t(p,{type:"danger",size:"small",plain:"",onClick:v=>g(s.row)},{default:e(()=>[l("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[b,a(m)]]),t(k,{pagination:a(f),class:"mt-4",onChange:a(r)},null,8,["pagination","onChange"])]),_:1},8,["onSearchFun","onResetFun","pending"])])}}});export{ht as default};
