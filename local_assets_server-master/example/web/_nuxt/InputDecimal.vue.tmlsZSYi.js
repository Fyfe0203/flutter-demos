import{E as v}from"./el-input.LbCLpOjr.js";import"./entry.nbMAVAIE.js";import{d as x,a as V,w as n,F as _,X as g,Y as t,N as u,u as w,k}from"./swiper-vue.o0IHd9hR.js";const $=x({__name:"InputDecimal",props:{modelValue:{default:""},min:{default:void 0},max:{default:void 0},precision:{default:6},unit:{default:""}},emits:["update:modelValue"],setup(s,{emit:m}){const r=m,e=s,a=V();n([()=>e.max,()=>e.min,()=>e.modelValue],()=>{a.value=e.modelValue,a.value!==""&&a.value!==void 0&&(e.max!==void 0&&+a.value>e.max&&(a.value=e.max),e.min!==void 0&&+a.value<e.min&&(a.value=e.min))},{immediate:!0});const d=i=>(i&&(e.min!==void 0&&i<e.min&&(i=e.min),e.max!==void 0&&i>e.max&&(i=e.max)),String(i).split(".").map((l,o)=>o&&e.precision!==void 0?l.slice(0,e.precision):l).join(".")+e.unit),p=i=>i.replace(new RegExp((e.unit||"%")+"|,","g"),"").split(".").slice(0,2).join("."),f=()=>{a.value!==""&&a.value!==void 0&&(e.modelValue!==a.value||String(a.value).slice(-1)===".")&&(a.value=parseFloat(a.value))};return n(a,()=>{r("update:modelValue",a.value)}),(i,l)=>{const o=v;return _(),g(o,{modelValue:w(a),"onUpdate:modelValue":l[0]||(l[0]=c=>k(a)?a.value=c:null),formatter:d,parser:p,class:"cus-input-decimal",onBlur:f},{suffix:t(()=>[u(i.$slots,"suffix")]),prefix:t(()=>[u(i.$slots,"prefix")]),default:t(()=>[u(i.$slots,"default")]),_:3},8,["modelValue"])}}});export{$ as _};
