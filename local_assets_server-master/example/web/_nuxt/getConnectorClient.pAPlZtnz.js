import{c8 as l,cf as h,cg as C,c7 as f,ch as y,ci as g}from"./entry.iYjkhHK1.js";class w extends l{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}function A(o,t={}){const{key:n="custom",name:c="Custom Provider",retryDelay:e}=t;return({retryCount:u})=>h({key:n,name:c,request:o.request.bind(o),retryCount:t.retryCount??u,retryDelay:e,type:"custom"})}function p(o,t,n){const c=o[t.name??n];return typeof c=="function"?c:e=>t(o,e)}async function b(o,t={}){let n;if(t.connector){const{connector:r}=t,[i,d]=await Promise.all([r.getAccounts(),r.getChainId()]);n={accounts:i,chainId:d,connector:r}}else n=o.state.connections.get(o.state.current);if(!n)throw new C;const c=t.chainId??n.chainId,e=n.connector;if(e.getClient)return e.getClient({chainId:c});const u=f(t.account??n.accounts[0]),a=o.chains.find(r=>r.id===c),s=await n.connector.getProvider({chainId:c});if(t.account&&!n.accounts.includes(u.address))throw new y({address:u.address,connector:e});return g({account:u,chain:a,name:"Connector Client",transport:r=>A(s)({...r,retryCount:0})})}export{w as A,p as a,b as g};