import{B as c}from"./index.esm.min.PL--WKLo.js";import{d as p,a as f,w as d,F as u,G as m,W as h,u as a}from"./swiper-vue.o0IHd9hR.js";import{c0 as y}from"./entry.nbMAVAIE.js";const b={class:"relative"},_=p({__name:"SmallLine",props:{list:{default:()=>[]},theme:{default:0},title:{default:"No data"}},setup(r){const t=r,l=()=>{const e="rgba(255, 255, 255, 0)",o=["#F73A3F","#00D59D"];return{backgroundColor:"transparent",grid:{left:0,bottom:0,right:0,top:5},xAxis:{type:"category",boundaryGap:!1,show:!1},yAxis:{show:!1},series:[{data:t.list,type:"line",smooth:.6,symbol:"none",legendHoverLink:!1,lineStyle:{width:2,color:o[t.theme]??"blue"},emphasis:{disabled:!0},areaStyle:{opacity:.4,color:new y(0,0,0,1,[{offset:0,color:o[t.theme]??"blue"},{offset:1,color:e}])}}]}},n=()=>({backgroundColor:"transparent",title:{text:t.title,left:"center",top:"center",textStyle:{color:"#88909C",fontSize:12}},grid:{left:0,bottom:0,right:0,top:5},xAxis:{type:"category",boundaryGap:!1,show:!1},yAxis:{show:!1},series:[{data:[120,200,150,80,70,110,130,120,200,150,80,70],type:"bar",color:["rgba(31,42,54,0.03)"]}]}),s=f({}),i=e=>{s.value=e};return d(()=>t.list,e=>{i(e.length?l():n())},{immediate:!0}),(e,o)=>(u(),m("div",b,[h(a(c),{option:a(s),autoresize:"",class:"absolute left-0 top-0 h-full w-full"},null,8,["option"])]))}});export{_};