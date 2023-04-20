import{Q as f,C as w,_ as r,b as i,a as v,a3 as W,c as A,d as T,e as y,f as b,a4 as E,k as R,G as k,h as S,l as N,a1 as x,a5 as F,a6 as I,m as U,n as M,P as O,B as c,x as m,o as L,A as B,T as u}from"./index.7c483686.js";class l extends f{constructor(t,e,s){var a;let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,e,h,p);super(g,s,d),a=this,r(this,"abi",void 0),r(this,"encoder",void 0),r(this,"estimator",void 0),r(this,"metadata",void 0),r(this,"app",void 0),r(this,"sales",void 0),r(this,"platformFees",void 0),r(this,"events",void 0),r(this,"roles",void 0),r(this,"interceptor",void 0),r(this,"royalties",void 0),r(this,"claimConditions",void 0),r(this,"revealer",void 0),r(this,"checkout",void 0),r(this,"erc721",void 0),r(this,"owner",void 0),r(this,"createBatch",i(async(n,o)=>this.erc721.lazyMint.prepare(n,o))),r(this,"claimTo",i(async function(n,o){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return a.erc721.claimTo.prepare(n,o,{checkERC20Allowance:C})})),r(this,"claim",i(async function(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.claimTo.prepare(await a.contractWrapper.getSignerAddress(),n,o)})),r(this,"burn",i(async n=>this.erc721.burn.prepare(n))),r(this,"transfer",i(async(n,o)=>this.erc721.transfer.prepare(n,o))),r(this,"setApprovalForAll",i(async(n,o)=>this.erc721.setApprovalForAll.prepare(n,o))),r(this,"setApprovalForToken",i(async(n,o)=>u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[n,o]}))),this.abi=h,this.metadata=new v(this.contractWrapper,W,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,l.contractRoles),this.royalties=new y(this.contractWrapper,this.metadata),this.sales=new b(this.contractWrapper),this.claimConditions=new E(this.contractWrapper,this.metadata,this.storage),this.encoder=new R(this.contractWrapper),this.estimator=new k(this.contractWrapper),this.events=new S(this.contractWrapper),this.platformFees=new N(this.contractWrapper),this.erc721=new x(this.contractWrapper,this.storage,d),this.revealer=new F(this.contractWrapper,this.storage,I.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new U(this.contractWrapper),this.owner=new M(this.contractWrapper),this.checkout=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),e=await this.totalUnclaimedSupply();return t.add(e)}async getAllClaimed(t){const e=c.from((t==null?void 0:t.start)||0).toNumber(),s=c.from((t==null?void 0:t.count)||m).toNumber(),a=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),e+s);return await Promise.all(Array.from(Array(a).keys()).map(p=>this.get(p.toString())))}async getAllUnclaimed(t){const e=c.from((t==null?void 0:t.start)||0).toNumber(),s=c.from((t==null?void 0:t.count)||m).toNumber(),a=c.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),e)),p=c.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),a.toNumber()+s));return await Promise.all(Array.from(Array(p.sub(a).toNumber()).keys()).map(h=>this.erc721.getTokenMetadata(a.add(h).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(L("transfer"),B)}async getClaimTransaction(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,e,{checkERC20Allowance:s})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,e){return this.erc721.isApproved(t,e)}async prepare(t,e,s){return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:s})}async call(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),a=1;a<e;a++)s[a-1]=arguments[a];return this.contractWrapper.call(t,...s)}}r(l,"contractRoles",["admin","minter","transfer"]);export{l as NFTDrop};
