import{bB as f}from"./entry.nbMAVAIE.js";import{d as h,c,an as F,F as o,G as a,T as g,al as b,R as i,H as e,u as r,X as C,Y as v,Z as x}from"./swiper-vue.o0IHd9hR.js";const k={class:"flex flex-wrap pl-[5px]"},w=["data-key"],y=["data-key"],B=e("button",{class:"w-6 h-6 rounded-full flex-center bg-[#CAE6FF] gap-[1px] ml-[-5px] relative"},[e("span",{class:"w-1 h-1 bg-[#4FACFF] rounded-full"}),e("span",{class:"w-1 h-1 bg-[#4FACFF] rounded-full"}),e("span",{class:"w-1 h-1 bg-[#4FACFF] rounded-full"})],-1),U=h({__name:"Coins",props:{list:{default:()=>[]},limit:{default:0}},setup(d){const t=d,m=c(()=>t.list.map(l=>l.coinName).join("、 ")),u=c(()=>t.limit?t.list.slice(0,t.limit):t.list);return(l,A)=>{const p=f,n=F("lazy");return o(),a("div",k,[(o(!0),a(g,null,b(r(u),(s,_)=>(o(),a("div",{key:_,class:"relative ml-[-5px]"},[i(e("img",{"data-key":s.coinCode,class:"h-6 w-6 rounded-full object-cover",alt:""},null,8,w),[[n,s.coinUrl||s.imgUrl]]),i(e("img",{"data-key":s.chainType,class:"h-[10px] w-[10px] rounded-full object-cover absolute right-0 bottom-0",alt:""},null,8,y),[[n,s.chainUrl]])]))),128)),l.limit&&l.limit<l.list.length?(o(),C(p,{key:0,content:r(m),placement:"bottom",effect:"light"},{default:v(()=>[B]),_:1},8,["content"])):x("",!0)])}}});export{U as _};