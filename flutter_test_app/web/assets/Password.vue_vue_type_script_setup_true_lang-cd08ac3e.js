import{d as i,r as a,N as f,o as _,m as c,w,f as V,g as t,ao as v,E as x}from"./index-0207282d.js";/* empty css                 */import{_ as g}from"./SvgIcon-a1a53ffe.js";const B=i({__name:"Password",props:{modelValue:{type:String,required:!0,default:""}},emits:["update:modelValue"],setup(r,{emit:l}){const u=r,o=a("");o.value=u.modelValue;const s=a(!0),p=f(()=>s.value?"password_off":"password_on");return(I,e)=>{const m=g,d=x;return _(),c(d,{modelValue:t(o),"onUpdate:modelValue":e[1]||(e[1]=n=>v(o)?o.value=n:null),autocomplete:"off",type:t(s)?"password":"text",onInput:e[2]||(e[2]=n=>l("update:modelValue",t(o)))},{suffix:w(()=>[V(m,{name:t(p),filled:"",class:"text-base cursor-pointer",onClick:e[0]||(e[0]=n=>s.value=!t(s))},null,8,["name"])]),_:1},8,["modelValue","type"])}}});export{B as _};
