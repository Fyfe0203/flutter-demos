import{d as i,o as r,c as p,f as o,w as t,i as s,C as c}from"./index-0207282d.js";import{E as m,a as d}from"./el-table-column-def74e1d.js";import"./el-checkbox-816fe3b3.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-90f9afbe.js";import"./el-tag-0efdc75d.js";const g=i({__name:"CoinList",props:{row:{type:Object,default:()=>({})}},setup(a){return(_,w)=>{const e=m,l=d;return r(),p("div",null,[o(l,{data:a.row.coinVoList,class:"w-full",stripe:"",border:""},{default:t(()=>[o(e,{label:"序号","min-width":"60",align:"center","show-overflow-tooltip":""},{default:t(n=>[s(c(n.$index+1),1)]),_:1}),o(e,{label:"链类型",prop:"chainType","min-width":"160",align:"center","show-overflow-tooltip":""}),o(e,{label:"币种",prop:"coinCode","min-width":"160",align:"center","show-overflow-tooltip":""})]),_:1},8,["data"])])}}});export{g as _};