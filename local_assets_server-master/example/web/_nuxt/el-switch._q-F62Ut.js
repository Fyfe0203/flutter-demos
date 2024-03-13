import{d as G,c as d,a as V,w as E,C as x,F as o,G as v,H as N,u as a,P as u,ap as ee,X as c,Y as p,a7 as y,Z as r,a2 as T,W as ae,N as U,Q as _,a4 as te,n as ie,g as oe}from"./swiper-vue.o0IHd9hR.js";import{K as ne,ag as k,ae as le,a8 as A,aP as I,aa as B,a6 as P,ac as D,cq as K,$ as se,M as ce,N as re,a0 as ue,ap as de,bb as ve,a3 as fe,P as h,aX as pe,Q as he,Z as me,cr as $,aO as ye,R as be}from"./entry.iYjkhHK1.js";import{i as ge}from"./validator.SQwMGO7Q.js";const Ce=ne({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:ge},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:k},activeActionIcon:{type:k},activeIcon:{type:k},inactiveIcon:{type:k},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:le(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),Se={[A]:s=>I(s)||B(s)||P(s),[D]:s=>I(s)||B(s)||P(s),[K]:s=>I(s)||B(s)||P(s)},ke=["onClick"],Ie=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ve=["aria-hidden"],Ee=["aria-hidden"],z="ElSwitch",Ne=G({name:z}),Te=G({...Ne,props:Ce,emits:Se,setup(s,{expose:H,emit:f}){const t=s,L=oe(),{formItem:b}=se(),Q=ce(),i=re("switch");(e=>{e.forEach(l=>{me({from:l[0],replacement:l[1],scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d(()=>{var S;return!!((S=L.vnode.props)!=null&&S[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:R}=ue(t,{formItemContext:b}),g=de(d(()=>t.loading)),w=V(t.modelValue!==!1),m=V(),W=V(),X=d(()=>[i.b(),i.m(Q.value),i.is("disabled",g.value),i.is("checked",n.value)]),Z=d(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),q=d(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),Y=d(()=>({width:ve(t.width)}));E(()=>t.modelValue,()=>{w.value=!0}),E(()=>t.value,()=>{w.value=!1});const F=d(()=>w.value?t.modelValue:t.value),n=d(()=>F.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(F.value)||(f(A,t.inactiveValue),f(D,t.inactiveValue),f(K,t.inactiveValue)),E(n,e=>{var l;m.value.checked=e,t.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(S=>fe()))});const C=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(A,e),f(D,e),f(K,e),ie(()=>{m.value.checked=n.value})},M=()=>{if(g.value)return;const{beforeChange:e}=t;if(!e){C();return}const l=e();[$(l),I(l)].includes(!0)||ye(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),$(l)?l.then(O=>{O&&C()}).catch(O=>{}):l&&C()},j=d(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),J=()=>{var e,l;(l=(e=m.value)==null?void 0:e.focus)==null||l.call(e)};return x(()=>{m.value.checked=n.value}),H({focus:J,checked:n}),(e,l)=>(o(),v("div",{class:u(a(X)),style:_(a(j)),onClick:te(M,["prevent"])},[N("input",{id:a(R),ref_key:"input",ref:m,class:u(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(g),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(g),tabindex:e.tabindex,onChange:C,onKeydown:ee(M,["enter"])},null,42,Ie),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:u(a(Z))},[e.inactiveIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(y(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},T(e.inactiveText),9,we)):r("v-if",!0)],2)):r("v-if",!0),N("span",{ref_key:"core",ref:W,class:u(a(i).e("core")),style:_(a(Y))},[e.inlinePrompt?(o(),v("div",{key:0,class:u(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),c(a(h),{key:0,class:u(a(i).is("icon"))},{default:p(()=>[(o(),c(y(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:u(a(i).is("text")),"aria-hidden":!a(n)},T(a(n)?e.activeText:e.inactiveText),11,Ve)):r("v-if",!0)],2)):r("v-if",!0),N("div",{class:u(a(i).e("action"))},[e.loading?(o(),c(a(h),{key:0,class:u(a(i).is("loading"))},{default:p(()=>[ae(a(pe))]),_:1},8,["class"])):a(n)?U(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(y(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(n)?r("v-if",!0):U(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(y(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:u(a(q))},[e.activeIcon?(o(),c(a(h),{key:0},{default:p(()=>[(o(),c(y(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},T(e.activeText),9,Ee)):r("v-if",!0)],2)):r("v-if",!0)],14,ke))}});var Be=he(Te,[["__file","switch.vue"]]);const ze=be(Be);export{ze as E};