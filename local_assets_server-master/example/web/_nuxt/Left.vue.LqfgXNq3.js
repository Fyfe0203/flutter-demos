import{u as b,a as F,d as $}from"./entry.iYjkhHK1.js";import{_ as k}from"./Num.vue.S3KHwF00.js";import{d as D,c as x,a as h,w as A,an as C,F as l,G as i,u as t,R as E,H as e,a2 as n,W as w,X as f}from"./swiper-vue.o0IHd9hR.js";const B={class:"py-4 sm:py-6 px-[10px] sm:px-5 lg:px-7 xl:px-10 flex flex-col gap-5 h-full"},z={key:0,class:"flex-center-x gap-2"},N={class:"border border-[#E6E9ED] rounded-full w-8 h-8 sm:w-[50px] sm:h-[50px]"},S={class:"text-sm sm:text-xl font-semibold text-gray"},j=e("div",{class:"flex-1"},null,-1),H={key:1,class:"flex-center gap-5"},I={class:"grid sm:grid-cols-3 gap-[10px] sm:gap-5"},P={class:"bg-[#FFEDA7] rounded-[10px] p-4 flex flex-row sm:flex-col items-center sm:items-start justify-between"},V={class:"text-gray sm:mb-2 text-xs lg:text-sm"},G={key:1,class:"text-sm lg:text-lg text-main font-semibold sm:w-full"},L={class:"bg-[#FFEDA7] rounded-[10px] p-4 flex flex-row sm:flex-col items-center sm:items-start justify-between"},R={class:"text-gray sm:mb-2 text-xs lg:text-sm"},U={key:1,class:"text-sm lg:text-lg text-main font-semibold sm:w-full"},W={class:"bg-[#FFEDA7] rounded-[10px] p-4 flex flex-row sm:flex-col items-center sm:items-start justify-between"},X={class:"text-gray sm:mb-2 text-xs lg:text-sm"},q={key:1,class:"text-sm lg:text-lg text-main font-semibold sm:w-full"},T=D({__name:"Left",setup(J){const p=x(()=>b().app.user),m=x(()=>b().app.authorization),a=h(!0),r=h(),u=x(()=>r.value&&!a.value);return A(m,async()=>{var o;if(!m.value)return;const{data:s}=await F.get("/account/bot/overview");r.value=(o=s.value)==null?void 0:o.data,a.value=!1},{immediate:!0}),(s,o)=>{var v,_;const g=$,c=k,y=C("lazy");return l(),i("div",B,[t(m)?(l(),i("div",z,[E(e("img",N,null,512),[[y,(v=t(p))==null?void 0:v.headUrl]]),e("div",S,n((_=t(p))==null?void 0:_.nickname),1),e("button",{class:"text-gray-sec flex-center",onClick:o[0]||(o[0]=d=>a.value=!t(a))},[w(g,{name:t(a)?"password_off":"password_on"},null,8,["name"])]),j,e("button",{class:"text-sm sm:text-xl transform rotate-180 text-[#FFEDA7]",onClick:o[1]||(o[1]=d=>s.$router.push("/account/bot"))},[w(g,{name:"layout/arr_left"})])])):(l(),i("div",H,[e("button",{class:"h-12 w-[140px] rounded-[10px] border border-[#FF7A00] text-[#FF7A00] text-sm hover:bg-[#FF7A00] font-semibold hover:text-white",onClick:o[2]||(o[2]=d=>s.$router.push("/login"))},n(s.$t("login.t34")),1),e("button",{class:"h-12 w-[140px] rounded-[10px] text-sm bg-[linear-gradient(90deg,#FFB015_0%,#FD8A02_100%)] font-semibold hover:bg-[linear-gradient(90deg,#FD8A02_0%,#FD8A02_100%)] text-white",onClick:o[3]||(o[3]=d=>s.$router.push("/login/register"))},n(s.$t("login.t12")),1)])),e("div",I,[e("div",P,[e("div",V,n(s.$t("account.t16")),1),t(u)?(l(),f(c,{key:0,value:t(r).totalProfit,unit:" "+s.$stableCoin,class:"text-sm lg:text-lg text-main font-semibold sm:w-full"},null,8,["value","unit"])):(l(),i("div",G,n(t(a)?"********":"-"),1))]),e("div",L,[e("div",R,n(s.$t("account.t17")),1),t(u)?(l(),f(c,{key:0,value:t(r).botPnl,unit:" "+s.$stableCoin,color:"",prev:"",class:"text-sm lg:text-lg text-main font-semibold sm:w-full"},null,8,["value","unit"])):(l(),i("div",U,n(t(a)?"********":"-"),1))]),e("div",W,[e("div",X,n(s.$t("account.t18")),1),t(u)?(l(),f(c,{key:0,value:t(r).mySale,unit:" "+s.$stableCoin,class:"text-sm lg:text-lg text-main font-semibold sm:w-full"},null,8,["value","unit"])):(l(),i("div",q,n(t(a)?"********":"-"),1))])])])}}});export{T as _};