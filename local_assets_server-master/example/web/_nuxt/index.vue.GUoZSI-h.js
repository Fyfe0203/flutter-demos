import{_ as B}from"./Title.vue.UQd4CmLy.js";import{_ as D}from"./Search.vue.t5UEXxX8.js";import{E as S}from"./el-select.RruZyq39.js";import{_ as j}from"./Select.vue.5j3iQw2k.js";import H from"./Item.6KbkTIyk.js";import U from"./Empty.YJn_-HYo.js";import{_ as A}from"./Pagination.vue.xemVAasr.js";import{u as F,a as P}from"./entry.nbMAVAIE.js";import{d as G,r as I,ad as L,c as O,a as R,E as W,an as X,F as n,G as i,H as m,W as c,Y as p,a6 as d,a2 as _,u as o,T as b,al as h,R as Y,X as f,Z}from"./swiper-vue.o0IHd9hR.js";const q={class:"p-5 home-div3"},J={class:"flex-center-x layout-1200 gap-3 pt-5 pb-[50px] cus-form"},K={class:"flex-1 inline-flex items-center justify-center sm:justify-start"},M=m("br",null,null,-1),Q={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9 layout-1200 items-start justify-start"},me=G({__name:"index",async setup(ee){let l,g;const x=F().enum,s=I({sortType:1,botName:"",num:1,size:12}),{data:v,pending:V}=([l,g]=L(()=>P.get("/market/bot/view",s,{lazy:!0})),l=await l,g(),l),k=O(()=>{var a,e;return((e=(a=v.value)==null?void 0:a.data)==null?void 0:e.pagination.total)??0}),r=R([]);return W(()=>{var a,e;V.value?r.value=Array(12).fill(0).map((y,u)=>({botNo:u+"",loading:!0})):r.value=((e=(a=v.value)==null?void 0:a.data)==null?void 0:e.content)??[]}),(a,e)=>{const y=B,u=D,$=S,w=j,N=H,C=U,T=A,E=X("auto-animate");return n(),i("div",q,[m("div",J,[m("div",K,[c(y,{desc:"",class:"text-xl md:text-[28px] font-semibold"},{content:p(()=>[m("div",null,[d(_(a.$t("bot.t968"))+" ",1),M,d(" "+_(a.$t("bot.t969")),1)])]),default:p(()=>[d(_(a.$t("bot.t967"))+" ",1)]),_:1})]),c(u,{modelValue:o(s).botName,"onUpdate:modelValue":e[0]||(e[0]=t=>o(s).botName=t),class:"!w-[200px] !hidden sm:!inline-block",placeholder:"Search bot name",style:{"--height":"40px"}},null,8,["modelValue"]),c(w,{modelValue:o(s).sortType,"onUpdate:modelValue":e[1]||(e[1]=t=>o(s).sortType=t),placeholder:a.$t("bot.t970"),class:"!w-[150px] !h-10 !hidden sm:!inline-block"},{default:p(()=>[(n(!0),i(b,null,h(o(x).sortTypes,t=>(n(),f($,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),Y((n(),i("div",Q,[(n(!0),i(b,null,h(o(r),(t,z)=>(n(),f(N,{key:z,loading:t.loading,info:t},null,8,["loading","info"]))),128))])),[[E]]),o(r).length?Z("",!0):(n(),f(C,{key:0,class:"py-20"})),c(T,{"current-page":o(s).num,"onUpdate:currentPage":e[2]||(e[2]=t=>o(s).num=t),"page-size":o(s).size,total:o(k),class:"py-12"},null,8,["current-page","page-size","total"])])}}});export{me as _};