import{u as B,i as p,j as S,h as z,d as N}from"./entry.iYjkhHK1.js";import{_ as V}from"./nuxt-link.7fi0nmz6.js";import $ from"./FootSimple.OaOPoMtr.js";import{d as F,c,a as I,E as v,F as i,G as x,H as t,u as e,W as n,a2 as d,P as _,Y as b,Z as g,T as L,al as j,X as T,a6 as W}from"./swiper-vue.o0IHd9hR.js";const q={class:"xl:py-7 xl:px-5 flex flex-col gap-4 xl:relative"},A={class:"bg-linear2 px-5 xl:hidden"},D={class:"h-[54px] flex-center-x"},G={class:"text-base font-semibold"},H=t("div",{class:"flex-1"},null,-1),K=t("div",{class:"hidden xl:block absolute top-0 left-0 h-[6px] w-full bg-linear1"},null,-1),M={key:0,class:"flex-center flex-col pb-[3vh] text-center !hidden xl:!flex"},P=["src"],Q={class:"text-base font-semibold pt-[3vh] pb-3 truncate w-full"},R={class:"text-sm text-gray max-w-[160px] line-clamp-3"},X={class:"layout-left-menu gap-2"},Y={class:"hidden xl:block"},te=F({__name:"Menu",setup(Z){const k=B().enum,m=c(()=>k.botsList),y=c(()=>p().path),f=c(()=>{var l;return((l=p().params.slug)==null?void 0:l[0])||"smart"}),w=c(()=>{const l=p().query.experience;return l?"?experience="+l:""}),o=c(()=>S(m.value,f.value)),s=I(!1);v(()=>{f.value&&(s.value=!1)});const{width:C}=z();return v(()=>{C.value>=1200&&(s.value=!1)}),(l,r)=>{const u=N,h=V,E=$;return i(),x("div",q,[t("div",A,[t("div",D,[t("div",{class:"flex-center-x text-base gap-[10px] cursor-pointer",onClick:r[0]||(r[0]=a=>s.value=!e(s))},[n(u,{name:e(o).menuIcon,class:"text-xl text-gray2"},null,8,["name"]),t("span",G,d(e(o).label),1),n(u,{name:"arr_down_sold",class:_(["text-[10px] transition-all transform",e(s)?"rotate-180":""])},null,8,["class"])]),H,n(h,{to:"/",class:"text-[#B0A0E2] text-[22px]"},{default:b(()=>[n(u,{name:"close"})]),_:1})])]),K,e(o)?(i(),x("div",M,[t("img",{src:`/static/img/bot/${e(o).icon}`,class:"h-[130px] object-contain",alt:""},null,8,P),t("div",Q,d(e(o).label),1),t("div",R,d(e(o).desc),1)])):g("",!0),t("div",{class:_(["hidden xl:block flex-1 overflow-y-auto",{"absolute left-0 w-full bg-white top-[54px] !block bg-white z-20 rounded-b-2xl p-2":e(s)}])},[t("div",X,[(i(!0),x(L,null,j(e(m),a=>(i(),T(h,{key:a.key,class:_(["left-item",{"router-link-active router-link-exact-active":e(y).includes(a.href)}]),to:a.href+e(w)},{default:b(()=>[n(u,{name:a.menuIcon},null,8,["name"]),W(" "+d(a.label),1)]),_:2},1032,["class","to"]))),128))])],2),t("div",Y,[n(E,{class:"flex-col gap-3 !items-start text-gray2"})]),e(s)?(i(),x("div",{key:1,class:"xl:hidden mask fixed left-0 w-full h-full bg-[var(--el-overlay-color-lighter)] top-[128px] lg:top-[136px] z-10",onClick:r[1]||(r[1]=a=>s.value=!1)})):g("",!0)])}}});export{te as _};