import{E as $}from"./el-input.LbCLpOjr.js";import{E as R,a as U}from"./el-form.bSdGaXOr.js";import q from"./Button.bEOq16Ty.js";import{_ as G}from"./LoginButton.vue.u8k5YzTr.js";import{E as H}from"./el-button.fhXFyBz0.js";import{n as X,u as Y,b as Z,t as j}from"./entry.nbMAVAIE.js";import{u as z}from"./useRule.yaNZg3ZK.js";import{g as J}from"./ether.STda0jBd.js";import{u as K}from"./useClipboard.p3y3gosB.js";import{u as O}from"./useSwitchChain.qquz7Xbd.js";import{u as P}from"./useSignMessage.sgOAricP.js";import{u as Q}from"./useSignTypedData.rj4mLqG7.js";import{d as ee,a as te,r as se,c as oe,E as ae,w as ne,F as m,G as l,W as o,Y as a,u as e,H as i,a6 as d,a2 as n,Z as C,T as ie,al as re,X as me}from"./swiper-vue.o0IHd9hR.js";import"./typescript.WBLZcIum.js";import"./castArray.IfhTYq5g.js";import"./_baseClone.DMOROgmz.js";import"./_initCloneObject.aIezyqVt.js";import"./useDialogDemo.rVmU9QRz.js";import"./validator.82JMvZTK.js";import"./useMutation.aoGi9GE9.js";import"./getConnectorClient.p5LqdYNQ.js";const ce={class:"login-index min-h-[500px] p-8"},le=i("div",{class:"text-[26px] font-semibold pb-6"},"Welcome to CatMaster",-1),de={key:0,class:"py-5"},pe={key:1},ue={class:"flex gap-3 py-3"},fe=i("span",null,"(switching)",-1),$e=ee({__name:"test",setup(_e){const{chain:p}=X(),{chains:h,switchChain:k}=O(),x={message:z.empty()},u=te(),r=se({message:""}),f=oe(()=>Y().web3.address),{data:_,error:g,signMessage:w}=P(),A=c=>{c==null||c.validate(t=>{t&&w({message:{raw:J(r.message)}})})},{data:E,isError:B,isSuccess:I,signTypedData:M}=Q();ae(()=>{console.log(E.value,B.value,I.value)});const{copy:S,copied:y}=K();ne(y,()=>{y.value&&Z.success(j("common.t10"))});const F=()=>{S(r.message)};return(c,t)=>{const N=$,T=U,V=q,v=G,D=H,L=R;return m(),l("div",ce,[le,o(L,{ref_key:"formRef",ref:u,"label-position":"top",model:e(r),"hide-required-asterisk":"",class:"cus-form max-w-[400px]"},{default:a(()=>{var b;return[o(T,{label:"Enter a message to sign",prop:"message",rules:x.message},{default:a(()=>[o(N,{modelValue:e(r).message,"onUpdate:modelValue":t[0]||(t[0]=s=>e(r).message=s),placeholder:"The quick brown fox..."},null,8,["modelValue"])]),_:1},8,["rules"]),i("div",null,[o(V,{class:"mb-5",onClick:F},{default:a(()=>[d("Copy")]),_:1}),o(v,{class:"mb-5",onClick:t[1]||(t[1]=s=>A(e(u)))},{default:a(()=>[d(n(e(f)?"Sign Message":"Login Wallet"),1)]),_:1}),o(v,{onClick:t[2]||(t[2]=s=>e(M)({domain:{name:"BitMeow Account",chainId:80001,version:"1",verifyingContract:"0x1d222c37ad870eae7fc50970acc999b779f14e82"},types:{License:[{name:"chainId",type:"uint256"},{name:"tokenContract",type:"address"},{name:"tokenId",type:"uint256"},{name:"bitMeowAccount",type:"address"},{name:"permitNonce",type:"uint256"},{name:"manager",type:"address"},{name:"validUntil",type:"uint48"},{name:"validAfter",type:"uint48"}]},message:{botNo:"B1193971322509246465",chainId:80001,tokenContract:"0x00000000BA7c8C9134460264008F8C899fe26dfF",tokenId:"1100",bitMeowAccount:"0x1d222c37ad870eae7fc50970acc999b779f14e82",permitNonce:0,manager:"0xA5d55E7A556fbA22974479497E6bf7e097D81b5e",validUntil:1736303965,validAfter:1704767965},primaryType:"License"}))},{default:a(()=>[d(n(e(f)?"Sign Typed Data ":"Login Wallet"),1)]),_:1})]),e(_)?(m(),l("div",de,[i("div",null,"signature "+n(e(_)),1)])):C("",!0),i("div",null,n(((b=e(g))==null?void 0:b.message)??e(g)),1),e(p)?(m(),l("div",pe,"Connected to "+n(e(p).name),1)):C("",!0),i("div",ue,[(m(!0),l(ie,null,re(e(h),(s,W)=>(m(),me(D,{key:W,type:"primary",onClick:ge=>e(k)({chainId:s.id})},{default:a(()=>[d(n(s.name)+" ",1),fe]),_:2},1032,["onClick"]))),128))])]}),_:1},8,["model"])])}}});export{$e as default};