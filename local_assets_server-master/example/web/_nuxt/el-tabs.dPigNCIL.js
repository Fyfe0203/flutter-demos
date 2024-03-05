import{bt as ge,K as D,ae as J,aO as X,N as K,W as le,Q as oe,bu as Ne,bv as Ce,P as V,b1 as Te,aW as Pe,O as we,a9 as I,Z as Se,bw as Ee,a8 as re,a5 as ae,aa as $e,a6 as xe,bx as se,R as Be,am as Oe}from"./entry.nbMAVAIE.js";import{m as ie}from"./typescript.WBLZcIum.js";import{c as R}from"./strings.4WpO55ZO.js";import{s as Re,J as ke,d as F,i as Y,a as C,w as k,n as ee,F as ce,G as ue,P as de,u as B,Q as ze,g as U,c as M,C as be,as as Ae,W as v,p as Fe,N as G,a3 as Me,r as Le,j as Ve,R as Ie,_ as De,Z as Ke}from"./swiper-vue.o0IHd9hR.js";const Ue=(e,n,d)=>ge(e.subTree).filter(t=>{var l;return ke(t)&&((l=t.type)==null?void 0:l.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>d[t]).filter(t=>!!t),We=(e,n)=>{const d={},T=Re([]);return{children:T,addChild:l=>{d[l.uid]=l,T.value=Ue(e,n,d)},removeChild:l=>{delete d[l],T.value=T.value.filter($=>$.uid!==l)}}},W=Symbol("tabsRootContextKey"),je=D({tabs:{type:J(Array),default:()=>ie([])}}),ve="ElTabBar",qe=F({name:ve}),He=F({...qe,props:je,setup(e,{expose:n}){const d=e,T=U(),i=Y(W);i||X(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=K("tabs"),l=C(),$=C(),b=()=>{let f=0,m=0;const c=["top","bottom"].includes(i.props.tabPosition)?"width":"height",o=c==="width"?"x":"y",O=o==="x"?"left":"top";return d.tabs.every(E=>{var a,w;const _=(w=(a=T.parent)==null?void 0:a.refs)==null?void 0:w[`tab-${E.uid}`];if(!_)return!1;if(!E.active)return!0;f=_[`offset${R(O)}`],m=_[`client${R(c)}`];const S=window.getComputedStyle(_);return c==="width"&&(d.tabs.length>1&&(m-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight)),f+=Number.parseFloat(S.paddingLeft)),!1}),{[c]:`${m}px`,transform:`translate${R(o)}(${f}px)`}},h=()=>$.value=b();return k(()=>d.tabs,async()=>{await ee(),h()},{immediate:!0}),le(l,()=>h()),n({ref:l,update:h}),(f,m)=>(ce(),ue("div",{ref_key:"barRef",ref:l,class:de([B(t).e("active-bar"),B(t).is(B(i).props.tabPosition)]),style:ze($.value)},null,6))}});var Qe=oe(He,[["__file","tab-bar.vue"]]);const Ze=D({panes:{type:J(Array),default:()=>ie([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ge={tabClick:(e,n,d)=>d instanceof Event,tabRemove:(e,n)=>n instanceof Event},ne="ElTabNav",Je=F({name:ne,props:Ze,emits:Ge,setup(e,{expose:n,emit:d}){const T=U(),i=Y(W);i||X(ne,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),l=Ne(),$=Ce(),b=C(),h=C(),f=C(),m=C(),c=C(!1),o=C(0),O=C(!1),E=C(!0),a=M(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),w=M(()=>({transform:`translate${a.value==="width"?"X":"Y"}(-${o.value}px)`})),_=()=>{if(!b.value)return;const r=b.value[`offset${R(a.value)}`],u=o.value;if(!u)return;const s=u>r?u-r:0;o.value=s},S=()=>{if(!b.value||!h.value)return;const r=h.value[`offset${R(a.value)}`],u=b.value[`offset${R(a.value)}`],s=o.value;if(r-s<=u)return;const g=r-s>u*2?s+u:r-u;o.value=g},z=async()=>{const r=h.value;if(!c.value||!f.value||!b.value||!r)return;await ee();const u=f.value.querySelector(".is-active");if(!u)return;const s=b.value,g=["top","bottom"].includes(i.props.tabPosition),N=u.getBoundingClientRect(),y=s.getBoundingClientRect(),x=g?r.offsetWidth-y.width:r.offsetHeight-y.height,P=o.value;let p=P;g?(N.left<y.left&&(p=P-(y.left-N.left)),N.right>y.right&&(p=P+N.right-y.right)):(N.top<y.top&&(p=P-(y.top-N.top)),N.bottom>y.bottom&&(p=P+(N.bottom-y.bottom))),p=Math.max(p,0),o.value=Math.min(p,x)},L=()=>{var r;if(!h.value||!b.value)return;e.stretch&&((r=m.value)==null||r.update());const u=h.value[`offset${R(a.value)}`],s=b.value[`offset${R(a.value)}`],g=o.value;s<u?(c.value=c.value||{},c.value.prev=g,c.value.next=g+s<u,u-g<s&&(o.value=u-s)):(c.value=!1,g>0&&(o.value=0))},pe=r=>{const u=r.code,{up:s,down:g,left:N,right:y}=I;if(![s,g,N,y].includes(u))return;const x=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),P=x.indexOf(r.target);let p;u===N||u===s?P===0?p=x.length-1:p=P-1:P<x.length-1?p=P+1:p=0,x[p].focus({preventScroll:!0}),x[p].click(),te()},te=()=>{E.value&&(O.value=!0)},j=()=>O.value=!1;return k(l,r=>{r==="hidden"?E.value=!1:r==="visible"&&setTimeout(()=>E.value=!0,50)}),k($,r=>{r?setTimeout(()=>E.value=!0,50):E.value=!1}),le(f,L),be(()=>setTimeout(()=>z(),0)),Ae(()=>L()),n({scrollToActiveTab:z,removeFocus:j}),k(()=>e.panes,()=>T.update(),{flush:"post",deep:!0}),()=>{const r=c.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!c.value.prev)],onClick:_},[v(V,null,{default:()=>[v(Te,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!c.value.next)],onClick:S},[v(V,null,{default:()=>[v(Pe,null,null)]})])]:null,u=e.panes.map((s,g)=>{var N,y,x,P;const p=s.uid,q=s.props.disabled,H=(y=(N=s.props.name)!=null?N:s.index)!=null?y:`${g}`,Q=!q&&(s.isClosable||e.editable);s.index=`${g}`;const he=Q?v(V,{class:"is-icon-close",onClick:A=>d("tabRemove",s,A)},{default:()=>[v(we,null,null)]}):null,ye=((P=(x=s.slots).label)==null?void 0:P.call(x))||s.props.label,_e=!q&&s.active?0:-1;return v("div",{ref:`tab-${p}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",q),t.is("closable",Q),t.is("focus",O.value)],id:`tab-${H}`,key:`tab-${p}`,"aria-controls":`pane-${H}`,role:"tab","aria-selected":s.active,tabindex:_e,onFocus:()=>te(),onBlur:()=>j(),onClick:A=>{j(),d("tabClick",s,H,A)},onKeydown:A=>{Q&&(A.code===I.delete||A.code===I.backspace)&&d("tabRemove",s,A)}},[ye,he])});return v("div",{ref:f,class:[t.e("nav-wrap"),t.is("scrollable",!!c.value),t.is(i.props.tabPosition)]},[r,v("div",{class:t.e("nav-scroll"),ref:b},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:h,style:w.value,role:"tablist",onKeydown:pe},[e.type?null:v(Qe,{ref:m,tabs:[...e.panes]},null),u])])])}}}),Xe=D({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:J(Function),default:()=>!0},stretch:Boolean}),Z=e=>$e(e)||xe(e),Ye={[re]:e=>Z(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>Z(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>Z(e),tabAdd:()=>!0},et=F({name:"ElTabs",props:Xe,emits:Ye,setup(e,{emit:n,slots:d,expose:T}){var i,t;const l=K("tabs"),{children:$,addChild:b,removeChild:h}=We(U(),"ElTabPane"),f=C(),m=C((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),c=async(a,w=!1)=>{var _,S,z;if(!(m.value===a||ae(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,m.value))!==!1&&(m.value=a,w&&(n(re,a),n("tabChange",a)),(z=(S=f.value)==null?void 0:S.removeFocus)==null||z.call(S))}catch{}},o=(a,w,_)=>{a.props.disabled||(c(w,!0),n("tabClick",a,_))},O=(a,w)=>{a.props.disabled||ae(a.props.name)||(w.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},E=()=>{n("edit",void 0,"add"),n("tabAdd")};return Se({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!e.activeName)),k(()=>e.activeName,a=>c(a)),k(()=>e.modelValue,a=>c(a)),k(m,async()=>{var a;await ee(),(a=f.value)==null||a.scrollToActiveTab()}),Fe(W,{props:e,currentName:m,registerPane:b,unregisterPane:h}),T({currentName:m}),()=>{const a=d.addIcon,w=e.editable||e.addable?v("span",{class:l.e("new-tab"),tabindex:"0",onClick:E,onKeydown:z=>{z.code===I.enter&&E()}},[a?G(d,"addIcon"):v(V,{class:l.is("icon-plus")},{default:()=>[v(Ee,null,null)]})]):null,_=v("div",{class:[l.e("header"),l.is(e.tabPosition)]},[w,v(Je,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:$.value,stretch:e.stretch,onTabClick:o,onTabRemove:O},null)]),S=v("div",{class:l.e("content")},[G(d,"default")]);return v("div",{class:[l.b(),l.m(e.tabPosition),{[l.m("card")]:e.type==="card",[l.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,S]:[S,_]])}}}),tt=D({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),at=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",st=F({name:fe}),nt=F({...st,props:tt,setup(e){const n=e,d=U(),T=Me(),i=Y(W);i||X(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=K("tab-pane"),l=C(),$=M(()=>n.closable||i.props.closable),b=se(()=>{var o;return i.currentName.value===((o=n.name)!=null?o:l.value)}),h=C(b.value),f=M(()=>{var o;return(o=n.name)!=null?o:l.value}),m=se(()=>!n.lazy||h.value||b.value);k(b,o=>{o&&(h.value=!0)});const c=Le({uid:d.uid,slots:T,props:n,paneName:f,active:b,index:l,isClosable:$});return be(()=>{i.registerPane(c)}),Ve(()=>{i.unregisterPane(c.uid)}),(o,O)=>B(m)?Ie((ce(),ue("div",{key:0,id:`pane-${B(f)}`,class:de(B(t).b()),role:"tabpanel","aria-hidden":!B(b),"aria-labelledby":`tab-${B(f)}`},[G(o.$slots,"default")],10,at)),[[De,B(b)]]):Ke("v-if",!0)}});var me=oe(nt,[["__file","tab-pane.vue"]]);const ct=Be(et,{TabPane:me}),ut=Oe(me);export{ct as E,ut as a};