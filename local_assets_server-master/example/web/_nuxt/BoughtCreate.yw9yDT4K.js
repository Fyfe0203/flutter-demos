import{E as I}from"./el-button.fhXFyBz0.js";import{u as S,a as j,j as G,w as H,d as L}from"./entry.nbMAVAIE.js";import P from"./Button.bEOq16Ty.js";import{_ as D}from"./Gift.vue.70WnRpdB.js";import{_ as U,E as W}from"./TableColumn.vue.UMN7wlCg.js";import{_ as X}from"./Timekeeping.vue.YtFmEfTE.js";import{_ as Y}from"./Num.vue.DVqKCmb3.js";import Z from"./Empty.YJn_-HYo.js";import{_ as q}from"./Pagination.vue.xemVAasr.js";/* empty css                 *//* empty css                    *//* empty css                     */import{d as J,r as K,ad as M,c as h,F as l,G as u,T as O,al as Q,H as d,a2 as c,W as e,Y as r,a6 as _,u as a,X as w,Z as $}from"./swiper-vue.o0IHd9hR.js";import"./el-tag.LFe8JwdU.js";import"./_initCloneObject.aIezyqVt.js";import"./raf.JIemjHgP.js";import"./useFormat.c8XsG793.js";import"./useDialogDemo.rVmU9QRz.js";import"./el-input.LbCLpOjr.js";import"./typescript.WBLZcIum.js";import"./validator.82JMvZTK.js";import"./el-select.RruZyq39.js";import"./strings.4WpO55ZO.js";import"./useScrollIntoView.iqzQf8Ei.js";const R={class:"px-4 lg:px-7 pt-4"},tt={class:"bg-[#F1F5FF] h-[50px] px-5 flex-center-x gap-2 relative rounded-t-2xl"},et={class:"truncate text-sm md:text-base"},ot=d("div",{class:"flex-1"},null,-1),at={class:"flex-center-x gap-3 justify-end"},Et=J({__name:"BoughtCreate",async setup(nt){let m,b;const i=K({num:1,size:10,tradeType:1}),v=S().enum,{data:f}=([m,b]=M(()=>j.get("/account/bot/trade/view",i,{lazy:!0})),m=await m,b(),m),x=h(()=>{var t,n;return((n=(t=f.value)==null?void 0:t.data)==null?void 0:n.pagination.total)??0}),y=h(()=>{var t,n;return((n=(t=f.value)==null?void 0:t.data)==null?void 0:n.content)??[]});return(t,n)=>{const C=I,k=L,T=P,F=D,p=U,B=X,E=Y,N=W,z=Z,V=q;return l(),u("div",R,[(l(!0),u(O,null,Q(a(y),(s,A)=>(l(),u("div",{key:A,class:"rounded-2xl border border-[#F2F5F9] bg-white pb-2 mb-[10px]"},[d("div",tt,[d("div",et,c(s.botName),1),ot,d("div",at,[e(C,{type:"primary",class:"!h-6 md:!h-8 md:!w-20 !rounded-full !text-sm",onClick:o=>{var g;return t.$router.push("/create/"+((g=("findItem"in t?t.findItem:a(G))(a(v).botsList,+s.botType))==null?void 0:g.key)+"/"+s.botNo)}},{default:r(()=>[_(c(t.$t("common.t11")),1)]),_:2},1032,["onClick"]),e(T,{type:"primary",class:"!w-6 !h-6 md:!h-8 md:!w-8 !p-0 !rounded-full",onClick:o=>t.$router.push("/bot/"+s.botNo)},{default:r(()=>[e(k,{name:"account/detail_sold",class:"text-xs md:text-base"})]),_:2},1032,["onClick"])]),s.proxyFlag===1?(l(),w(F,{key:0,border:!1,class:"-top-3"})):$("",!0)]),e(N,{data:[s],class:"cus-table mobile",style:{"--py":"8px","--table-border":"transparent"}},{default:r(()=>[e(p,{label:t.$t("bot.t18"),"min-width":160},{default:r(o=>[_(c(("EBotTypes"in t?t.EBotTypes:a(H))[o.row.botType]),1)]),_:1},8,["label"]),e(p,{label:t.$t("bot.t19"),"min-width":160},{default:r(o=>[e(B,{"begin-time":o.row.tradeTimestamp},null,8,["begin-time"])]),_:1},8,["label"]),e(p,{label:t.$t("bot.t20",[t.$stableCoin]),"min-width":140},{default:r(o=>[e(E,{value:o.row.tradeAmount,color:"",prev:"",add0:""},null,8,["value"])]),_:1},8,["label"]),e(p,{label:t.$t("bot.t21"),"min-width":145,align:"right"},{default:r(o=>[_(c(o.row.tradeNick),1)]),_:1},8,["label"])]),_:2},1032,["data"])]))),128)),a(y).length?$("",!0):(l(),w(z,{key:0,class:"py-10"})),e(V,{"current-page":a(i).num,"onUpdate:currentPage":n[0]||(n[0]=s=>a(i).num=s),"page-size":a(i).size,total:a(x),class:"pb-6"},null,8,["current-page","page-size","total"])])}}});export{Et as default};
