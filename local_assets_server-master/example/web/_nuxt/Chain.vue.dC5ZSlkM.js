import{u as m}from"./entry.nbMAVAIE.js";import{d as h,c as y,an as f,F as n,G as i,R as _,u as t,Q as v,Z as l,a2 as k}from"./swiper-vue.o0IHd9hR.js";const z=["data-key"],g={key:1},D=h({__name:"Chain",props:{chainType:{default:""},icon:{type:Boolean,default:!0},name:{type:Boolean,default:!0},size:{default:"16px"}},setup(p){const u=p,a=y(()=>m().app.chains.find(e=>e.chainType===u.chainType));return(e,B)=>{var o,s,r,c;const d=f("lazy");return n(),i("div",null,[e.icon?_((n(),i("img",{key:(o=t(a))==null?void 0:o.chainType,"data-key":(s=t(a))==null?void 0:s.chainName,class:"rounded-full object-cover",style:v({width:e.size,height:e.size}),alt:""},null,12,z)),[[d,(r=t(a))==null?void 0:r.imgUrl]]):l("",!0),e.name?(n(),i("div",g,k((c=t(a))==null?void 0:c.chainName),1)):l("",!0)])}}});export{D as _};
