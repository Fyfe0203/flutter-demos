import{n as V,y as k,d as D,q as I,N as E,aX as Se,aY as fe,aZ as Ue,a_ as ve,aK as me,a$ as Le,X as oe,o as g,c as C,x as h,g as e,e as N,ak as A,v as S,C as X,aa as _,m as T,w as L,A as Re,B as j,_ as W,F as ge,Q as ae,b0 as ye,a7 as he,a1 as x,b1 as U,ai as Fe,b2 as J,r as M,$ as Pe,ac as Te,h as be,ag as q,f as B,b3 as De,aN as Oe,b4 as Be,af as Ne,z as ze,aJ as ee,a6 as ne,b5 as Ae,b6 as je,U as te,b7 as Me,V as Ie,s as qe,a9 as Ve,au as re,J as G,b as Ke,b8 as We,Y as He,ao as H}from"./index-0207282d.js";import{v as Xe}from"./el-loading-080c5bc8.js";import{E as le}from"./message-4c47188d.js";import{b as Ge}from"./el-form-item-cffcfafd.js";import{i as Je}from"./isEqual-7382b5a8.js";var Ye=1,Qe=4;function ie(n){return Ge(n,Ye|Qe)}const Ze=V({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:n=>n>=0&&n<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:k(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:k([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:k(Function),default:n=>`${n}%`}}),xe=["aria-valuenow"],et={viewBox:"0 0 100 100"},tt=["d","stroke","stroke-linecap","stroke-width"],st=["d","stroke","opacity","stroke-linecap","stroke-width"],at={key:0},ot=D({name:"ElProgress"}),nt=D({...ot,props:Ze,setup(n){const t=n,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},o=I("progress"),p=E(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:F(t.percentage)})),f=E(()=>(t.strokeWidth/t.width*100).toFixed(1)),v=E(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(f.value)/2}`,10):0),$=E(()=>{const i=v.value,P=t.type==="dashboard";return`
          M 50 50
          m 0 ${P?"":"-"}${i}
          a ${i} ${i} 0 1 1 0 ${P?"-":""}${i*2}
          a ${i} ${i} 0 1 1 0 ${P?"":"-"}${i*2}
          `}),y=E(()=>2*Math.PI*v.value),d=E(()=>t.type==="dashboard"?.75:1),w=E(()=>`${-1*y.value*(1-d.value)/2}px`),c=E(()=>({strokeDasharray:`${y.value*d.value}px, ${y.value}px`,strokeDashoffset:w.value})),r=E(()=>({strokeDasharray:`${y.value*d.value*(t.percentage/100)}px, ${y.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),u=E(()=>{let i;return t.color?i=F(t.percentage):i=a[t.status]||a.default,i}),s=E(()=>t.status==="warning"?Se:t.type==="line"?t.status==="success"?fe:Ue:t.status==="success"?ve:me),m=E(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),l=E(()=>t.format(t.percentage));function b(i){const P=100/i.length;return i.map((R,z)=>oe(R)?{color:R,percentage:(z+1)*P}:R).sort((R,z)=>R.percentage-z.percentage)}const F=i=>{var P;const{color:O}=t;if(Le(O))return O(i);if(oe(O))return O;{const R=b(O);for(const z of R)if(z.percentage>i)return z.color;return(P=R[R.length-1])==null?void 0:P.color}};return(i,P)=>(g(),C("div",{class:h([e(o).b(),e(o).m(i.type),e(o).is(i.status),{[e(o).m("without-text")]:!i.showText,[e(o).m("text-inside")]:i.textInside}]),role:"progressbar","aria-valuenow":i.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[i.type==="line"?(g(),C("div",{key:0,class:h(e(o).b("bar"))},[N("div",{class:h(e(o).be("bar","outer")),style:A({height:`${i.strokeWidth}px`})},[N("div",{class:h([e(o).be("bar","inner"),{[e(o).bem("bar","inner","indeterminate")]:i.indeterminate},{[e(o).bem("bar","inner","striped")]:i.striped},{[e(o).bem("bar","inner","striped-flow")]:i.stripedFlow}]),style:A(e(p))},[(i.showText||i.$slots.default)&&i.textInside?(g(),C("div",{key:0,class:h(e(o).be("bar","innerText"))},[S(i.$slots,"default",{percentage:i.percentage},()=>[N("span",null,X(e(l)),1)])],2)):_("v-if",!0)],6)],6)],2)):(g(),C("div",{key:1,class:h(e(o).b("circle")),style:A({height:`${i.width}px`,width:`${i.width}px`})},[(g(),C("svg",et,[N("path",{class:h(e(o).be("circle","track")),d:e($),stroke:`var(${e(o).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":i.strokeLinecap,"stroke-width":e(f),fill:"none",style:A(e(c))},null,14,tt),N("path",{class:h(e(o).be("circle","path")),d:e($),stroke:e(u),fill:"none",opacity:i.percentage?1:0,"stroke-linecap":i.strokeLinecap,"stroke-width":e(f),style:A(e(r))},null,14,st)]))],6)),(i.showText||i.$slots.default)&&!i.textInside?(g(),C("div",{key:2,class:h(e(o).e("text")),style:A({fontSize:`${e(m)}px`})},[S(i.$slots,"default",{percentage:i.percentage},()=>[i.status?(g(),T(e(j),{key:1},{default:L(()=>[(g(),T(Re(e(s))))]),_:1})):(g(),C("span",at,X(e(l)),1))])],6)):_("v-if",!0)],10,xe))}});var rt=W(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const lt=ge(rt),ke=Symbol("uploadContextKey"),it="ElUpload";class ut extends Error{constructor(t,a,o,p){super(t),this.name="UploadAjaxError",this.status=a,this.method=o,this.url=p}}function ue(n,t,a){let o;return a.response?o=`${a.response.error||a.response}`:a.responseText?o=`${a.responseText}`:o=`fail to ${t.method} ${n} ${a.status}`,new ut(o,a.status,t.method,n)}function dt(n){const t=n.responseText||n.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const ct=n=>{typeof XMLHttpRequest>"u"&&ae(it,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=n.action;t.upload&&t.upload.addEventListener("progress",f=>{const v=f;v.percent=f.total>0?f.loaded/f.total*100:0,n.onProgress(v)});const o=new FormData;if(n.data)for(const[f,v]of Object.entries(n.data))ye(v)&&v.length?o.append(f,...v):o.append(f,v);o.append(n.filename,n.file,n.file.name),t.addEventListener("error",()=>{n.onError(ue(a,n,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return n.onError(ue(a,n,t));n.onSuccess(dt(t))}),t.open(n.method,a,!0),n.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const p=n.headers||{};if(p instanceof Headers)p.forEach((f,v)=>t.setRequestHeader(v,f));else for(const[f,v]of Object.entries(p))he(v)||t.setRequestHeader(f,String(v));return t.send(o),t},$e=["text","picture","picture-card"];let pt=1;const se=()=>Date.now()+pt++,we=V({action:{type:String,default:"#"},headers:{type:k(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>x({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:k(Array),default:()=>x([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:k(Function),default:ct},disabled:Boolean,limit:Number}),ft=V({...we,beforeUpload:{type:k(Function),default:U},beforeRemove:{type:k(Function)},onRemove:{type:k(Function),default:U},onChange:{type:k(Function),default:U},onPreview:{type:k(Function),default:U},onSuccess:{type:k(Function),default:U},onProgress:{type:k(Function),default:U},onError:{type:k(Function),default:U},onExceed:{type:k(Function),default:U}}),vt=V({files:{type:k(Array),default:()=>x([])},disabled:{type:Boolean,default:!1},handlePreview:{type:k(Function),default:U},listType:{type:String,values:$e,default:"text"}}),mt={remove:n=>!!n},gt=["onKeydown"],yt=["src"],ht=["onClick"],bt=["title"],kt=["onClick"],$t=["onClick"],wt=D({name:"ElUploadList"}),_t=D({...wt,props:vt,emits:mt,setup(n,{emit:t}){const{t:a}=Fe(),o=I("upload"),p=I("icon"),f=I("list"),v=J(),$=M(!1),y=d=>{t("remove",d)};return(d,w)=>(g(),T(Ne,{tag:"ul",class:h([e(o).b("list"),e(o).bm("list",d.listType),e(o).is("disabled",e(v))]),name:e(f).b()},{default:L(()=>[(g(!0),C(Pe,null,Te(d.files,c=>(g(),C("li",{key:c.uid||c.name,class:h([e(o).be("list","item"),e(o).is(c.status),{focusing:$.value}]),tabindex:"0",onKeydown:be(r=>!e(v)&&y(c),["delete"]),onFocus:w[0]||(w[0]=r=>$.value=!0),onBlur:w[1]||(w[1]=r=>$.value=!1),onClick:w[2]||(w[2]=r=>$.value=!1)},[S(d.$slots,"default",{file:c},()=>[d.listType==="picture"||c.status!=="uploading"&&d.listType==="picture-card"?(g(),C("img",{key:0,class:h(e(o).be("list","item-thumbnail")),src:c.url,alt:""},null,10,yt)):_("v-if",!0),c.status==="uploading"||d.listType!=="picture-card"?(g(),C("div",{key:1,class:h(e(o).be("list","item-info"))},[N("a",{class:h(e(o).be("list","item-name")),onClick:q(r=>d.handlePreview(c),["prevent"])},[B(e(j),{class:h(e(p).m("document"))},{default:L(()=>[B(e(De))]),_:1},8,["class"]),N("span",{class:h(e(o).be("list","item-file-name")),title:c.name},X(c.name),11,bt)],10,ht),c.status==="uploading"?(g(),T(e(lt),{key:0,type:d.listType==="picture-card"?"circle":"line","stroke-width":d.listType==="picture-card"?6:2,percentage:Number(c.percentage),style:A(d.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):_("v-if",!0)],2)):_("v-if",!0),N("label",{class:h(e(o).be("list","item-status-label"))},[d.listType==="text"?(g(),T(e(j),{key:0,class:h([e(p).m("upload-success"),e(p).m("circle-check")])},{default:L(()=>[B(e(fe))]),_:1},8,["class"])):["picture-card","picture"].includes(d.listType)?(g(),T(e(j),{key:1,class:h([e(p).m("upload-success"),e(p).m("check")])},{default:L(()=>[B(e(ve))]),_:1},8,["class"])):_("v-if",!0)],2),e(v)?_("v-if",!0):(g(),T(e(j),{key:2,class:h(e(p).m("close")),onClick:r=>y(c)},{default:L(()=>[B(e(me))]),_:2},1032,["class","onClick"])),_(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),_(" This is a bug which needs to be fixed "),_(" TODO: Fix the incorrect navigation interaction "),e(v)?_("v-if",!0):(g(),C("i",{key:3,class:h(e(p).m("close-tip"))},X(e(a)("el.upload.deleteTip")),3)),d.listType==="picture-card"?(g(),C("span",{key:4,class:h(e(o).be("list","item-actions"))},[N("span",{class:h(e(o).be("list","item-preview")),onClick:r=>d.handlePreview(c)},[B(e(j),{class:h(e(p).m("zoom-in"))},{default:L(()=>[B(e(Oe))]),_:1},8,["class"])],10,kt),e(v)?_("v-if",!0):(g(),C("span",{key:0,class:h(e(o).be("list","item-delete")),onClick:r=>y(c)},[B(e(j),{class:h(e(p).m("delete"))},{default:L(()=>[B(e(Be))]),_:1},8,["class"])],10,$t))],2)):_("v-if",!0)])],42,gt))),128)),S(d.$slots,"append")]),_:3},8,["class","name"]))}});var de=W(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Et=V({disabled:{type:Boolean,default:!1}}),Ct={file:n=>ye(n)},St=["onDrop","onDragover"],_e="ElUploadDrag",Ut=D({name:_e}),Lt=D({...Ut,props:Et,emits:Ct,setup(n,{emit:t}){const a=ze(ke);a||ae(_e,"usage: <el-upload><el-upload-dragger /></el-upload>");const o=I("upload"),p=M(!1),f=J(),v=y=>{if(f.value)return;p.value=!1,y.stopPropagation();const d=Array.from(y.dataTransfer.files),w=a.accept.value;if(!w){t("file",d);return}const c=d.filter(r=>{const{type:u,name:s}=r,m=s.includes(".")?`.${s.split(".").pop()}`:"",l=u.replace(/\/.*$/,"");return w.split(",").map(b=>b.trim()).filter(b=>b).some(b=>b.startsWith(".")?m===b:/\/\*$/.test(b)?l===b.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(b)?u===b:!1)});t("file",c)},$=()=>{f.value||(p.value=!0)};return(y,d)=>(g(),C("div",{class:h([e(o).b("dragger"),e(o).is("dragover",p.value)]),onDrop:q(v,["prevent"]),onDragover:q($,["prevent"]),onDragleave:d[0]||(d[0]=q(w=>p.value=!1,["prevent"]))},[S(y.$slots,"default")],42,St))}});var Rt=W(Lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Ft=V({...we,beforeUpload:{type:k(Function),default:U},onRemove:{type:k(Function),default:U},onStart:{type:k(Function),default:U},onSuccess:{type:k(Function),default:U},onProgress:{type:k(Function),default:U},onError:{type:k(Function),default:U},onExceed:{type:k(Function),default:U}}),Pt=["onKeydown"],Tt=["name","multiple","accept"],Dt=D({name:"ElUploadContent",inheritAttrs:!1}),Ot=D({...Dt,props:Ft,setup(n,{expose:t}){const a=n,o=I("upload"),p=J(),f=ee({}),v=ee(),$=s=>{if(s.length===0)return;const{autoUpload:m,limit:l,fileList:b,multiple:F,onStart:i,onExceed:P}=a;if(l&&b.length+s.length>l){P(s,b);return}F||(s=s.slice(0,1));for(const O of s){const R=O;R.uid=se(),i(R),m&&y(R)}},y=async s=>{if(v.value.value="",!a.beforeUpload)return d(s);let m,l={};try{const F=a.data,i=a.beforeUpload(s);l=ne(a.data)?ie(a.data):a.data,m=await i,ne(a.data)&&Je(F,l)&&(l=ie(a.data))}catch{m=!1}if(m===!1){a.onRemove(s);return}let b=s;m instanceof Blob&&(m instanceof File?b=m:b=new File([m],s.name,{type:s.type})),d(Object.assign(b,{uid:s.uid}),l)},d=(s,m)=>{const{headers:l,data:b,method:F,withCredentials:i,name:P,action:O,onProgress:R,onSuccess:z,onError:Ee,httpRequest:Ce}=a,{uid:Y}=s,Q={headers:l||{},withCredentials:i,file:s,data:m??b,method:F,filename:P,action:O,onProgress:K=>{R(K,s)},onSuccess:K=>{z(K,s),delete f.value[Y]},onError:K=>{Ee(K,s),delete f.value[Y]}},Z=Ce(Q);f.value[Y]=Z,Z instanceof Promise&&Z.then(Q.onSuccess,Q.onError)},w=s=>{const m=s.target.files;m&&$(Array.from(m))},c=()=>{p.value||(v.value.value="",v.value.click())},r=()=>{c()};return t({abort:s=>{Ae(f.value).filter(s?([l])=>String(s.uid)===l:()=>!0).forEach(([l,b])=>{b instanceof XMLHttpRequest&&b.abort(),delete f.value[l]})},upload:y}),(s,m)=>(g(),C("div",{class:h([e(o).b(),e(o).m(s.listType),e(o).is("drag",s.drag)]),tabindex:"0",onClick:c,onKeydown:be(q(r,["self"]),["enter","space"])},[s.drag?(g(),T(Rt,{key:0,disabled:e(p),onFile:$},{default:L(()=>[S(s.$slots,"default")]),_:3},8,["disabled"])):S(s.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:v,class:h(e(o).e("input")),name:s.name,multiple:s.multiple,accept:s.accept,type:"file",onChange:w,onClick:m[0]||(m[0]=q(()=>{},["stop"]))},null,42,Tt)],42,Pt))}});var ce=W(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const pe="ElUpload",Bt=n=>{var t;(t=n.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(n.url)},Nt=(n,t)=>{const a=je(n,"fileList",void 0,{passive:!0}),o=r=>a.value.find(u=>u.uid===r.uid);function p(r){var u;(u=t.value)==null||u.abort(r)}function f(r=["ready","uploading","success","fail"]){a.value=a.value.filter(u=>!r.includes(u.status))}const v=(r,u)=>{const s=o(u);s&&(console.error(r),s.status="fail",a.value.splice(a.value.indexOf(s),1),n.onError(r,s,a.value),n.onChange(s,a.value))},$=(r,u)=>{const s=o(u);s&&(n.onProgress(r,s,a.value),s.status="uploading",s.percentage=Math.round(r.percent))},y=(r,u)=>{const s=o(u);s&&(s.status="success",s.response=r,n.onSuccess(r,s,a.value),n.onChange(s,a.value))},d=r=>{he(r.uid)&&(r.uid=se());const u={name:r.name,percentage:0,status:"ready",size:r.size,raw:r,uid:r.uid};if(n.listType==="picture-card"||n.listType==="picture")try{u.url=URL.createObjectURL(r)}catch(s){Me(pe,s.message),n.onError(s,u,a.value)}a.value=[...a.value,u],n.onChange(u,a.value)},w=async r=>{const u=r instanceof File?o(r):r;u||ae(pe,"file to be removed not found");const s=m=>{p(m);const l=a.value;l.splice(l.indexOf(m),1),n.onRemove(m,l),Bt(m)};n.beforeRemove?await n.beforeRemove(u,a.value)!==!1&&s(u):s(u)};function c(){a.value.filter(({status:r})=>r==="ready").forEach(({raw:r})=>{var u;return r&&((u=t.value)==null?void 0:u.upload(r))})}return te(()=>n.listType,r=>{r!=="picture-card"&&r!=="picture"||(a.value=a.value.map(u=>{const{raw:s,url:m}=u;if(!m&&s)try{u.url=URL.createObjectURL(s)}catch(l){n.onError(l,u,a.value)}return u}))}),te(a,r=>{for(const u of r)u.uid||(u.uid=se()),u.status||(u.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:p,clearFiles:f,handleError:v,handleProgress:$,handleStart:d,handleSuccess:y,handleRemove:w,submit:c}},zt=D({name:"ElUpload"}),At=D({...zt,props:ft,setup(n,{expose:t}){const a=n,o=J(),p=ee(),{abort:f,submit:v,clearFiles:$,uploadFiles:y,handleStart:d,handleError:w,handleRemove:c,handleSuccess:r,handleProgress:u}=Nt(a,p),s=E(()=>a.listType==="picture-card"),m=E(()=>({...a,fileList:y.value,onStart:d,onProgress:u,onSuccess:r,onError:w,onRemove:c}));return Ie(()=>{y.value.forEach(({url:l})=>{l!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(l)})}),qe(ke,{accept:Ve(a,"accept")}),t({abort:f,submit:v,clearFiles:$,handleStart:d,handleRemove:c}),(l,b)=>(g(),C("div",null,[e(s)&&l.showFileList?(g(),T(de,{key:0,disabled:e(o),"list-type":l.listType,files:e(y),"handle-preview":l.onPreview,onRemove:e(c)},re({append:L(()=>[B(ce,G({ref_key:"uploadRef",ref:p},e(m)),{default:L(()=>[l.$slots.trigger?S(l.$slots,"trigger",{key:0}):_("v-if",!0),!l.$slots.trigger&&l.$slots.default?S(l.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)]),_:2},[l.$slots.file?{name:"default",fn:L(({file:F})=>[S(l.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0),!e(s)||e(s)&&!l.showFileList?(g(),T(ce,G({key:1,ref_key:"uploadRef",ref:p},e(m)),{default:L(()=>[l.$slots.trigger?S(l.$slots,"trigger",{key:0}):_("v-if",!0),!l.$slots.trigger&&l.$slots.default?S(l.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)):_("v-if",!0),l.$slots.trigger?S(l.$slots,"default",{key:2}):_("v-if",!0),S(l.$slots,"tip"),!e(s)&&l.showFileList?(g(),T(de,{key:3,disabled:e(o),"list-type":l.listType,files:e(y),"handle-preview":l.onPreview,onRemove:e(c)},re({_:2},[l.$slots.file?{name:"default",fn:L(({file:F})=>[S(l.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0)]))}});var jt=W(At,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Mt=ge(jt);const It=D({__name:"Upload",props:{limit:{},accept:{}},emits:["update:url","update:size","update:preview","update:loading"],setup(n,{emit:t}){const a=n,o=Ke(),p=E(()=>a.limit??2),f=E(()=>a.accept??""),v="/backstage-api/file/upload",$=E(()=>({Authorization:o.authorization})),y=(c,r)=>{t("update:size",+(r.size/1024).toFixed(2)),t("update:url",c.data),t("update:loading",!1)},d=()=>{t("update:preview",""),t("update:loading",!1)},w=c=>{if(We(c.type||c.name.split(".").slice(-1)[0],f.value)){if(c.size/1024/1024>p.value)return le.error("上传文件大小不能超过 "+p.value+"MB!"),!1}else return le.error("只能上传 "+f.value+" 类型的文件"),!1;const u=URL.createObjectURL(c);return t("update:preview",u),t("update:loading",!0),!0};return(c,r)=>{const u=Mt;return g(),T(u,G(c.$attrs,{action:v,"show-file-list":!1,"on-success":y,"on-error":d,"before-upload":w,headers:e($),accept:e(f)}),{default:L(()=>[S(c.$slots,"default")]),_:3},16,["headers","accept"])}}});const qt=["src"],Gt=D({__name:"UploadAvatar",props:{modelValue:{},imgCls:{},outCls:{}},emits:["update:fileSize","update:modelValue"],setup(n,{emit:t}){const a=n,o=M(),p=M(),f=M(),v=E(()=>o.value||a.modelValue),$=M(!1);return te(p,()=>{t("update:modelValue",p.value),t("update:fileSize",f.value)}),(y,d)=>{const w=It,c=Xe;return g(),T(w,{preview:e(o),"onUpdate:preview":d[0]||(d[0]=r=>H(o)?o.value=r:null),size:e(f),"onUpdate:size":d[1]||(d[1]=r=>H(f)?f.value=r:null),loading:e($),"onUpdate:loading":d[2]||(d[2]=r=>H($)?$.value=r:null),url:e(p),"onUpdate:url":d[3]||(d[3]=r=>H(p)?p.value=r:null),accept:".png,.jpg,.jpeg"},{default:L(()=>[He((g(),C("div",G(y.$attrs,{class:y.outCls}),[e(v)?(g(),C("img",{key:0,src:e(v),class:h(["h-full w-full rounded-lg",y.imgCls||"object-cover"])},null,10,qt)):S(y.$slots,"default",{key:1})],16)),[[c,e($)]])]),_:3},8,["preview","size","loading","url"])}}});export{Gt as _};
