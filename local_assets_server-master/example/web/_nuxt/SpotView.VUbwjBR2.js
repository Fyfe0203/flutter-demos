import{_ as A}from"./Chain.vue.dC5ZSlkM.js";import{_ as N}from"./Gift.vue.70WnRpdB.js";import{_ as V,E as j}from"./TableColumn.vue.UMN7wlCg.js";import{_ as z}from"./Num.vue.DVqKCmb3.js";import{_ as B}from"./Action.vue.cBMRL9Ms.js";import S from"./Button.bEOq16Ty.js";import G from"./Empty.YJn_-HYo.js";import{E as f}from"./entry.nbMAVAIE.js";/* empty css                 *//* empty css                    *//* empty css                     */import{u as x}from"./useDialogDemo.rVmU9QRz.js";import{d as F,an as H,F as s,G as c,W as o,Y as a,P,H as i,R,a2 as m,a6 as p,Z as u,X as _,u as n}from"./swiper-vue.o0IHd9hR.js";import"./el-tag.LFe8JwdU.js";import"./_initCloneObject.aIezyqVt.js";import"./raf.JIemjHgP.js";import"./useFormat.c8XsG793.js";import"./el-button.fhXFyBz0.js";import"./el-input.LbCLpOjr.js";import"./typescript.WBLZcIum.js";import"./validator.82JMvZTK.js";const U={class:"w-9 h-9 relative"},W={class:"rounded-full w-full h-full object-cover",alt:""},X={class:"text-xs text-gray2 font-normal md:hidden"},Y={key:0,class:"mt-1 text-gray-sec font-normal text-sm"},Z={class:"absolute right-5 top-3 md:static"},q={key:0,class:"flex-center-x gap-3 text-[30px] justify-end"},I={key:0,class:"mx-5 py-5"},ye=F({__name:"SpotView",props:{list:{}},emits:["refresh"],setup(J,{emit:C}){const $=C,y=e=>{e&&$("refresh")};return(e,l)=>{var b;const h=A,k=N,r=V,v=z,d=B,w=S,D=G,E=j,T=H("lazy");return s(),c("div",null,[o(E,{data:e.list,class:"cus-table mobile",style:{"--py":"30px","--px":"20px"},"row-class-name":"relative"},{empty:a(()=>[o(D,{class:"py-10"})]),default:a(()=>[o(r,{label:e.$t("account.t10"),"min-width":130,"hide-label":"","class-name":"!static"},{default:a(t=>[i("div",{class:P(["flex-center-x gap-2",{"pt-4 md:pt-0":t.row.experience}])},[i("div",U,[R(i("img",W,null,512),[[T,t.row.coinUrl]]),o(h,{"chain-type":t.row.chainType,name:!1,class:"w-4 h-4 absolute right-0 bottom-0 md:hidden"},null,8,["chain-type"])]),i("div",null,[i("div",null,[p(m(t.row.coinCode)+" ",1),i("span",X," / "+m(t.row.chainType),1)]),t.row.experience?u("",!0):(s(),c("div",Y,m(t.row.coinName),1))])],2),t.row.experience?(s(),_(k,{key:0})):u("",!0)]),_:1},8,["label"]),o(r,{label:e.$t("account.t09"),"min-width":110,"class-name":"hidden md:table-cell"},{default:a(t=>[o(h,{"chain-type":t.row.chainType,class:"flex-center-x gap-2 truncate"},null,8,["chain-type"])]),_:1},8,["label"]),o(r,{label:e.$t("account.t31"),"min-width":130,"hide-label":"","class-name":"!static"},{default:a(t=>[i("div",Z,[o(v,{value:t.row.hold,class:"w-full justify-end md:justify-start"},null,8,["value"]),t.row.experience?u("",!0):(s(),_(v,{key:0,value:t.row.worth,lessmin:.01,prev:"$",class:"mt-1 text-gray-sec font-normal text-sm w-full"},{default:a(()=>[p(" ≈ ")]),_:2},1032,["value"]))])]),_:1},8,["label"]),o(r,{label:e.$t("bot.t22"),align:"right",width:"140px",fixed:"right","hide-label":""},{default:a(t=>[t.row.experience?(s(),_(w,{key:1,class:"!h-10 !px-5 relative z-5 !font-normal !text-sm",onClick:l[0]||(l[0]=g=>e.$router.push("/create/smart?experience=1"))},{default:a(()=>[p(" Create bot ")]),_:1})):(s(),c("div",q,[o(d,{action:("EActivityTypes"in e?e.EActivityTypes:n(f)).Deposit,class:"flex-none",onClick:g=>("useDialogDemo"in e?e.useDialogDemo:n(x)).deposit({props:t.row,afterClose:y})},null,8,["action","onClick"]),o(d,{action:("EActivityTypes"in e?e.EActivityTypes:n(f)).Send,class:"flex-none",onClick:g=>("useDialogDemo"in e?e.useDialogDemo:n(x)).transfer({props:t.row,afterClose:y})},null,8,["action","onClick"]),o(d,{action:("EActivityTypes"in e?e.EActivityTypes:n(f)).Swap,class:"flex-none"},null,8,["action"])]))]),_:1},8,["label"])]),_:1},8,["data"]),((b=e.list)==null?void 0:b.length)>5?(s(),c("div",I,[o(w,{class:"primary",style:{"--height":"42px"},onClick:l[1]||(l[1]=t=>e.$router.push("/account/spot"))},{default:a(()=>[p(m(e.$t("bot.t38")),1)]),_:1})])):u("",!0)])}}});export{ye as default};
