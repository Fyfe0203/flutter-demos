import{d as m,_ as y}from"./entry.nbMAVAIE.js";import{d as g,a as d,F as a,G as c,H as s,T as k,al as x,u as r,X as i,a7 as v,P as _,a2 as h,Z as b,aj as w,ak as C}from"./swiper-vue.o0IHd9hR.js";const F=t=>(w("data-v-701f589c"),t=t(),C(),t),E={class:"!mt-12"},P=F(()=>s("div",{class:"text-[50px] leading-snug font-semibold text-center mb-12"},"Ongoing Activities",-1)),B={class:"layout-1200 grid grid-cols-3 gap-2 text-lg font-semibold bg-[#D9F9FF] items-center py-4 rounded-full !mb-12"},I=["onClick"],R={class:"ongoing-box"},S={class:"layout-1200"},D=g({__name:"Ongoing",setup(t){const p=d([{key:"Meeting",desc:"Meeting Gift"},{key:"Referral",desc:"Referral Reward"},{key:"Play2Earn",desc:"Play2Earn"}]),n=d("Meeting"),l=o=>o.key==="Play2Earn",u=o=>{l(o)||(n.value=o.key)};return(o,M)=>{const f=m;return a(),c("div",E,[P,s("div",B,[(a(!0),c(k,null,x(r(p),e=>(a(),c("div",{key:e.key,class:_(["flex-center",{choosed:e.key===r(n)}]),onClick:$=>u(e)},[s("div",{class:_(["flex-1 max-w-[206px] py-5 cursor-pointer flex-center",{"!cursor-not-allowed":l(e)}])},[s("span",null,h(e.desc),1),e.key==="Play2Earn"?(a(),i(f,{key:0,name:"reward/lock",filled:"",class:"text-[22px] ml-2"})):b("",!0)],2)],10,I))),128))]),s("div",R,[s("div",S,[(a(),i(v(`Reward${r(n)}`)))])])])}}}),O=y(D,[["__scopeId","data-v-701f589c"]]);export{O as default};
