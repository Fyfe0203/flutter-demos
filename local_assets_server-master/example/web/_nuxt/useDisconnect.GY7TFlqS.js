import{u as f}from"./useMutation.aoGi9GE9.js";import{bF as l,bG as m}from"./entry.nbMAVAIE.js";import{s as p,c as v}from"./swiper-vue.o0IHd9hR.js";async function C(n,t={}){var r,i;let e;if(t.connector)e=t.connector;else{const{connections:o,current:c}=n.state,a=o.get(c);e=a==null?void 0:a.connector}const s=n.state.connections;e&&(await e.disconnect(),e.emitter.off("change",n._internal.events.change),e.emitter.off("disconnect",n._internal.events.disconnect),e.emitter.on("connect",n._internal.events.connect),s.delete(e.uid)),n.setState(o=>{if(s.size===0)return{...o,connections:new Map,current:void 0,status:"disconnected"};const c=s.values().next().value;return{...o,connections:new Map(s),current:c.connector.uid}});{const o=n.state.current;if(!o)return;const c=(r=n.state.connections.get(o))==null?void 0:r.connector;if(!c)return;await((i=n.storage)==null?void 0:i.setItem("recentConnectorId",c.id))}}let u=[];function d(n){const t=[...n.state.connections.values()];return n.state.status==="reconnecting"||l(u,t)?u:(u=t,t)}function h(n,t){const{onChange:e}=t;return n.subscribe(()=>d(n),e,{equalityFn:l})}function w(n){return{mutationFn(t){return C(n,t)},mutationKey:["disconnect"]}}function y(n={}){const t=m(n),e=p(d(t));return h(t,{onChange(){e.value=d(t)}}),e}function _(n={}){const{mutation:t}=n,e=m(n),s=w(e),{mutate:r,mutateAsync:i,...o}=f({...t,...s});return{...o,connectors:v(()=>y().value.map(c=>c.connector)),disconnect:r,disconnectAsync:i}}export{_ as u};
