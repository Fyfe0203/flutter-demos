import{b$ as U,c0 as be,c1 as ve,c2 as me,bY as X,c3 as F,X as A,aD as K,bd as z,z as $,N as h,b_ as D,b2 as fe,c4 as P,U as j,b7 as J,a8 as Q,D as Z,r as G,b0 as E,a6 as ke,c5 as q,at as H,c6 as _,d as L,aA as ee,q as O,o as C,m as ae,w as ne,e as Y,x,g as i,Y as w,c as y,ao as I,ag as N,c7 as V,v as M,$ as pe,i as le,C as te,aa as T,A as oe,_ as R,ak as he,n as ge,y as xe,s as Ce,bf as ye,F as Se,G as se}from"./index-0207282d.js";import{i as Le}from"./isEqual-7382b5a8.js";import{i as Be,h as Ee}from"./hasIn-41f90f84.js";import{f as $e}from"./flatten-24f36df1.js";function we(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}var Ie=800,Ne=16,Ve=Date.now;function Fe(e){var a=0,l=0;return function(){var n=Ve(),r=Ne-(n-l);if(l=n,r>0){if(++a>=Ie)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function ze(e){return function(){return e}}var De=U?function(e,a){return U(e,"toString",{configurable:!0,enumerable:!1,value:ze(a),writable:!0})}:Be;const Ge=De;var Te=Fe(Ge);const Pe=Te;var W=Math.max;function Oe(e,a,l){return a=W(a===void 0?e.length-1:a,0),function(){for(var n=arguments,r=-1,d=W(n.length-a,0),c=Array(d);++r<d;)c[r]=n[a+r];r=-1;for(var t=Array(a+1);++r<a;)t[r]=n[r];return t[a]=l(c),we(e,this,t)}}function Me(e){return Pe(Oe(e,void 0,$e),e+"")}function Re(e,a,l){for(var n=-1,r=a.length,d={};++n<r;){var c=a[n],t=be(e,c);l(t,c)&&ve(d,me(c,e),t)}return d}function Ue(e,a){return Re(e,a,function(l,n){return Ee(e,n)})}var Ae=Me(function(e,a){return e==null?{}:Ue(e,a)});const Ke=Ae,ie={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:X,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ue={[F]:e=>A(e)||K(e)||z(e),change:e=>A(e)||K(e)||z(e)},B=Symbol("checkboxGroupContextKey"),qe=({model:e,isChecked:a})=>{const l=$(B,void 0),n=h(()=>{var d,c;const t=(d=l==null?void 0:l.max)==null?void 0:d.value,f=(c=l==null?void 0:l.min)==null?void 0:c.value;return!D(t)&&e.value.length>=t&&!a.value||!D(f)&&e.value.length<=f&&a.value});return{isDisabled:fe(h(()=>(l==null?void 0:l.disabled.value)||n.value)),isLimitDisabled:n}},He=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:r,isLabeledByFormItem:d})=>{const c=$(B,void 0),{formItem:t}=P(),{emit:f}=Z();function o(s){var v,m;return s===e.trueLabel||s===!0?(v=e.trueLabel)!=null?v:!0:(m=e.falseLabel)!=null?m:!1}function k(s,v){f("change",o(s),v)}function p(s){if(l.value)return;const v=s.target;f("change",o(v.checked),s)}async function S(s){l.value||!n.value&&!r.value&&d.value&&(s.composedPath().some(b=>b.tagName==="LABEL")||(a.value=o([!1,e.falseLabel].includes(a.value)),await Q(),k(a.value,s)))}const u=h(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return j(()=>e.modelValue,()=>{u.value&&(t==null||t.validate("change").catch(s=>J()))}),{handleChange:p,onClickRoot:S}},Ye=e=>{const a=G(!1),{emit:l}=Z(),n=$(B,void 0),r=h(()=>D(n)===!1),d=G(!1);return{model:h({get(){var t,f;return r.value?(t=n==null?void 0:n.modelValue)==null?void 0:t.value:(f=e.modelValue)!=null?f:a.value},set(t){var f,o;r.value&&E(t)?(d.value=((f=n==null?void 0:n.max)==null?void 0:f.value)!==void 0&&t.length>(n==null?void 0:n.max.value),d.value===!1&&((o=n==null?void 0:n.changeEvent)==null||o.call(n,t))):(l(F,t),a.value=t)}}),isGroup:r,isLimitExceeded:d}},We=(e,a,{model:l})=>{const n=$(B,void 0),r=G(!1),d=h(()=>{const o=l.value;return z(o)?o:E(o)?ke(e.label)?o.map(q).some(k=>Le(k,e.label)):o.map(q).includes(e.label):o!=null?o===e.trueLabel:!!o}),c=H(h(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value}),{prop:!0}),t=H(h(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value})),f=h(()=>!!(a.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:r,checkboxSize:t,hasOwnLabel:f}},Xe=(e,{model:a})=>{function l(){E(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&l()},re=(e,a)=>{const{formItem:l}=P(),{model:n,isGroup:r,isLimitExceeded:d}=Ye(e),{isFocused:c,isChecked:t,checkboxButtonSize:f,checkboxSize:o,hasOwnLabel:k}=We(e,a,{model:n}),{isDisabled:p}=qe({model:n,isChecked:t}),{inputId:S,isLabeledByFormItem:u}=_(e,{formItemContext:l,disableIdGeneration:k,disableIdManagement:r}),{handleChange:s,onClickRoot:v}=He(e,{model:n,isLimitExceeded:d,hasOwnLabel:k,isDisabled:p,isLabeledByFormItem:u});return Xe(e,{model:n}),{inputId:S,isLabeledByFormItem:u,isChecked:t,isDisabled:p,isFocused:c,checkboxButtonSize:f,checkboxSize:o,hasOwnLabel:k,model:n,handleChange:s,onClickRoot:v}},je=["tabindex","role","aria-checked"],Je=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Qe=["id","aria-hidden","disabled","value","name","tabindex"],Ze=L({name:"ElCheckbox"}),_e=L({...Ze,props:ie,emits:ue,setup(e){const a=e,l=ee(),{inputId:n,isLabeledByFormItem:r,isChecked:d,isDisabled:c,isFocused:t,checkboxSize:f,hasOwnLabel:o,model:k,handleChange:p,onClickRoot:S}=re(a,l),u=O("checkbox"),s=h(()=>[u.b(),u.m(f.value),u.is("disabled",c.value),u.is("bordered",a.border),u.is("checked",d.value)]),v=h(()=>[u.e("input"),u.is("disabled",c.value),u.is("checked",d.value),u.is("indeterminate",a.indeterminate),u.is("focus",t.value)]);return(m,b)=>(C(),ae(oe(!i(o)&&i(r)?"span":"label"),{class:x(i(s)),"aria-controls":m.indeterminate?m.controls:null,onClick:i(S)},{default:ne(()=>[Y("span",{class:x(i(v)),tabindex:m.indeterminate?0:void 0,role:m.indeterminate?"checkbox":void 0,"aria-checked":m.indeterminate?"mixed":void 0},[m.trueLabel||m.falseLabel?w((C(),y("input",{key:0,id:i(n),"onUpdate:modelValue":b[0]||(b[0]=g=>I(k)?k.value=g:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",name:m.name,tabindex:m.tabindex,disabled:i(c),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:b[1]||(b[1]=(...g)=>i(p)&&i(p)(...g)),onFocus:b[2]||(b[2]=g=>t.value=!0),onBlur:b[3]||(b[3]=g=>t.value=!1),onClick:b[4]||(b[4]=N(()=>{},["stop"]))},null,42,Je)),[[V,i(k)]]):w((C(),y("input",{key:1,id:i(n),"onUpdate:modelValue":b[5]||(b[5]=g=>I(k)?k.value=g:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",disabled:i(c),value:m.label,name:m.name,tabindex:m.tabindex,onChange:b[6]||(b[6]=(...g)=>i(p)&&i(p)(...g)),onFocus:b[7]||(b[7]=g=>t.value=!0),onBlur:b[8]||(b[8]=g=>t.value=!1),onClick:b[9]||(b[9]=N(()=>{},["stop"]))},null,42,Qe)),[[V,i(k)]]),Y("span",{class:x(i(u).e("inner"))},null,2)],10,je),i(o)?(C(),y("span",{key:0,class:x(i(u).e("label"))},[M(m.$slots,"default"),m.$slots.default?T("v-if",!0):(C(),y(pe,{key:0},[le(te(m.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var ea=R(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const aa=["name","tabindex","disabled","true-value","false-value"],na=["name","tabindex","disabled","value"],la=L({name:"ElCheckboxButton"}),ta=L({...la,props:ie,emits:ue,setup(e){const a=e,l=ee(),{isFocused:n,isChecked:r,isDisabled:d,checkboxButtonSize:c,model:t,handleChange:f}=re(a,l),o=$(B,void 0),k=O("checkbox"),p=h(()=>{var u,s,v,m;const b=(s=(u=o==null?void 0:o.fill)==null?void 0:u.value)!=null?s:"";return{backgroundColor:b,borderColor:b,color:(m=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?m:"",boxShadow:b?`-1px 0 0 0 ${b}`:void 0}}),S=h(()=>[k.b("button"),k.bm("button",c.value),k.is("disabled",d.value),k.is("checked",r.value),k.is("focus",n.value)]);return(u,s)=>(C(),y("label",{class:x(i(S))},[u.trueLabel||u.falseLabel?w((C(),y("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=v=>I(t)?t.value=v:null),class:x(i(k).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),"true-value":u.trueLabel,"false-value":u.falseLabel,onChange:s[1]||(s[1]=(...v)=>i(f)&&i(f)(...v)),onFocus:s[2]||(s[2]=v=>n.value=!0),onBlur:s[3]||(s[3]=v=>n.value=!1),onClick:s[4]||(s[4]=N(()=>{},["stop"]))},null,42,aa)),[[V,i(t)]]):w((C(),y("input",{key:1,"onUpdate:modelValue":s[5]||(s[5]=v=>I(t)?t.value=v:null),class:x(i(k).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),value:u.label,onChange:s[6]||(s[6]=(...v)=>i(f)&&i(f)(...v)),onFocus:s[7]||(s[7]=v=>n.value=!0),onBlur:s[8]||(s[8]=v=>n.value=!1),onClick:s[9]||(s[9]=N(()=>{},["stop"]))},null,42,na)),[[V,i(t)]]),u.$slots.default||u.label?(C(),y("span",{key:2,class:x(i(k).be("button","inner")),style:he(i(r)?i(p):void 0)},[M(u.$slots,"default",{},()=>[le(te(u.label),1)])],6)):T("v-if",!0)],2))}});var de=R(ta,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const oa=ge({modelValue:{type:xe(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:X,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),sa={[F]:e=>E(e),change:e=>E(e)},ia=L({name:"ElCheckboxGroup"}),ua=L({...ia,props:oa,emits:sa,setup(e,{emit:a}){const l=e,n=O("checkbox"),{formItem:r}=P(),{inputId:d,isLabeledByFormItem:c}=_(l,{formItemContext:r}),t=async o=>{a(F,o),await Q(),a("change",o)},f=h({get(){return l.modelValue},set(o){t(o)}});return Ce(B,{...Ke(ye(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:t}),j(()=>l.modelValue,()=>{l.validateEvent&&(r==null||r.validate("change").catch(o=>J()))}),(o,k)=>{var p;return C(),ae(oe(o.tag),{id:i(d),class:x(i(n).b("group")),role:"group","aria-label":i(c)?void 0:o.label||"checkbox-group","aria-labelledby":i(c)?(p=i(r))==null?void 0:p.labelId:void 0},{default:ne(()=>[M(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ce=R(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const va=Se(ea,{CheckboxButton:de,CheckboxGroup:ce});se(de);se(ce);export{va as E,Oe as o,Ke as p,Pe as s};
