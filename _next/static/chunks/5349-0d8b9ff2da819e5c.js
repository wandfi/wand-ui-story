"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5349],{68535:function(e,t,a){let n;a.d(t,{l6:function(){return getBvaultEpochYtPrices},_c:function(){return getBvaultsPtSynthetic},cb:function(){return getLntVaultEpochYtPrices},mq:function(){return getLntVaultNftStatByUser},Sr:function(){return getLntVaultsDeposited},ZK:function(){return getNftTokensIdsByUser},LJ:function(){return getTokenPricesBySymbol}});var r=a(35004),l=a(73216),s=a(22139),o=a(44769),u=a(83606);let instance=()=>{let e=l.Af.find(e=>e.id==(0,l.BV)()),t=(s.Sz||null!=e&&e.testnet,"https://story-api.".concat(o.Kh.value));return n&&n.defaults.baseURL===t||(n=u.Z.create({baseURL:t,timeout:1e4,headers:{"Content-Type":"application/json"}})),n};var i={get:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let r=await instance().get(e,{...n,params:a});if(console.info("res:",null==r?void 0:r.data),(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.code)!==200)throw r.data;return r.data.data},post:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let r=await instance().post(e,a,n);if((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.code)!==200)throw r.data;return r.data.data}};a(26361);let getBvaultEpochYtPrices=(e,t)=>i.get("/api/bvault/getEpochYTPrices/".concat(e,"/").concat(t)),getLntVaultEpochYtPrices=(e,t)=>i.get("/api/lntvault/getEpochYTPrices/".concat(e,"/").concat(t)),getBvaultsPtSynthetic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return i.post("/api/bvault/batchGetEpochPtSynthetic",{bvaults:e})},getLntVaultsDeposited=e=>i.post("/api/lntvault/batchNfts",{vaults:e}),getLntVaultNftStatByUser=(e,t)=>i.get("/api/lntvault/".concat(e,"/").concat(t,"/nftstat")),getNftTokensIdsByUser=(e,t)=>i.post("/api/nft/".concat(t,"/tokenIds"),{tokens:e}),getTokenPricesBySymbol=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["IP"];return u.Z.get("https://api.g.alchemy.com/prices/v1/7UXJgo01vxWHLJDk09Y0qZct8Y3zMDbX/tokens/by-symbol?".concat(e.map(e=>"symbols="+e).join("&"))).then(e=>e.data.data.filter(e=>e.prices.length).map(e=>({symbol:e.symbol,price:(0,r.f)(e.prices[0].value)})))}},44020:function(e,t,a){a.d(t,{P:function(){return n}});let n={}},55349:function(e,t,a){a.d(t,{w:function(){return y},o:function(){return useStore}});var n=a(83978),r=a.n(n),l=a(64103),s=a(93108),o=a(38894),u=a(68535),i=a(78403),c=a(73216),d=a(44020),p=a(22139),f=a(26361),h=a(62531);a(87031);var v=a(19757),m=a(58714);let g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(a,n)=>r().mapValues(e,(e,r)=>e(e=>a({[r]:{...n()[r],...e}}),()=>n()[r],t[r]))}({sliceBVaultsStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},getBvaultLpData=async(e,t)=>{let a=t.asset,[[n,r],l]=await Promise.all([e.readContract({abi:o.hd,address:"0x4Be03f781C497A489E3cB0287833452cA9B9E80B",functionName:"getPoolTokens",args:[d.P[a].poolId]}),e.readContract({abi:o.IB,address:a,functionName:d.P[a].isStable?"getActualSupply":"totalSupply"})]),s=n.findIndex(e=>e==d.P[a].base),u=n.findIndex(e=>e==d.P[a].quote);return{lp:a,vault:t.vault,baseBalance:r[s],quoteBalance:r[u],totalSupply:l}},updateBvaults=async a=>{let n=r().now();console.info("timeStart:updateBvaults",n);let l=(0,i.B)(),[s,u]=await Promise.all([Promise.all(a.map(e=>l.readContract({abi:e.isOld?o.VH:o.Pe,address:e.bQueryAddres,functionName:"queryBVault",args:[e.vault]}).then(t=>({vault:e.vault,item:t})))),c.yg.id==(0,c.BV)()?Promise.all(a.map(e=>{var t;return(null===(t=d.P[e.asset])||void 0===t?void 0:t.poolId)?getBvaultLpData(l,e):Promise.resolve(null)})):Promise.resolve(null)]);console.info("timeEND:updateBvaults",r().now()-n);let h=r().filter(s,e=>null!=e).reduce((e,t)=>({...e,[t.vault]:t.item}),{});if(u){for(let e of u)if(e){let t=h[e.vault];t.lpLiq=t.lockedAssetTotal;let a=t.lpLiq*p.Pq/e.totalSupply;t.lpBase=(0,f.UA)(e.baseBalance*a/p.Pq,d.P[e.lp].baseDecimal),t.lpQuote=(0,f.UA)(e.quoteBalance*a/p.Pq,d.P[e.lp].quoteDecimal)}}return e({bvaults:{...t().bvaults,...h}}),h},updateEpoches=async(a,n)=>{var l;let s=n||r().range(1,parseInt((((null===(l=t().bvaults[a.vault])||void 0===l?void 0:l.epochCount)||0n)+1n).toString())).map(e=>BigInt(e));if(0==s.length)return{};let u=(0,i.B)(),c=await Promise.all(s.map(e=>u.readContract({abi:a.isOld?o.VH:o.Pe,address:a.bQueryAddres,functionName:"queryBVaultEpoch",args:[a.vault,e]}))),d=c.reduce((e,t)=>({...e,["".concat(a.vault,"_").concat(t.epochId.toString())]:t}),{});return e({epoches:{...t().epoches,...d}}),d},updateYTokenSythetic=async a=>{let n=(null==a?void 0:a.map(e=>e.vault))||r().keys(t().bvaults),l=await (0,u._c)(n),s=r().mapValues(l,e=>BigInt(e));return e({yTokenSythetic:{...t().yTokenSythetic,...s}}),s};return{bvaults:{},epoches:{},yTokenSythetic:{},...a,updateBvaults,updateEpoches,updateYTokenSythetic}},sliceLVaultsStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},updateLVaults=async a=>{let n=(0,i.B)();if(0==a.length)return{};let r=await Promise.all(a.map(e=>Promise.all([n.readContract({abi:o.Wn,address:e.vaultQuery,functionName:e.isStable?"getStableVaultState":"getVaultState",args:[e.vault]}),n.readContract({abi:o.WW,address:e.vault,functionName:"assetBalance"}),n.readContract({abi:o.WW,address:e.vault,functionName:"usdTotalSupply"}),n.readContract({abi:o.WW,address:e.vault,functionName:"vaultMode"}),n.readContract({abi:o.WW,address:e.vault,functionName:"paramValue",args:[(0,h.$G)("Y",{size:32})]}),e.ptyPoolBelowAddress?n.readContract({abi:o.aT,address:e.ptyPoolBelowAddress,functionName:"totalStakingBalance"}):Promise.resolve(0n),e.ptyPoolAboveAddress?n.readContract({abi:o.aT,address:e.ptyPoolAboveAddress,functionName:"totalStakingBalance"}):Promise.resolve(0n),e.ptyPoolBelowAddress?n.getBalance({address:e.ptyPoolBelowAddress}):Promise.resolve(0n),n.readContract({abi:o.nq,address:e.assetTokenFeed,functionName:"latestPrice"}),n.readContract({abi:o.WW,address:e.vault,functionName:"paramValue",args:[(0,h.$G)("CircuitBreakPeriod",{size:32})]})]).then(t=>{let[a,n,r,l,s,o,u,i,c,d]=t,f=BigInt(Math.floor(new Date().getTime()/1e3)),h=e.isStable?a.M_USDCx>0n&&a.aar<a.AARS:2==l&&(a.aar>=a.AARC||f-a.AARBelowCircuitBreakerLineTime>d);return{...{...a,isStable:!!e.isStable},assetBalance:n,usbTotalSupply:r,vaultMode:e.isStable?a.aar<a.AARS&&a.M_USDC>0n?2:1:l,Y:s,buyPoolTotalStaking:o,sellPoolTotalStaking:u,buyPoolBalance:i,latestPrice:c*p.Pq/p.pn,CircuitBreakPeriod:d,discountEnable:h}}))),l=r.reduce((e,t,n)=>({...e,[a[n].vault]:t}),{});return e({lvaults:{...t().lvaults,...l}}),l},updateUserLVault=async(a,n)=>{let r=(0,i.B)();if(a.isStable)return;let[l,s,u,c,d,p,f]=await Promise.all([r.readContract({abi:o.aT,address:a.ptyPoolBelowAddress,functionName:"userStakingBalance",args:[n]}),r.readContract({abi:o.aT,address:a.ptyPoolBelowAddress,functionName:"earnedMatchedToken",args:[n]}),r.readContract({abi:o.aT,address:a.ptyPoolBelowAddress,functionName:"earnedStakingYields",args:[n]}).catch(()=>0n),r.readContract({abi:o.aT,address:a.ptyPoolBelowAddress,functionName:"earnedMatchingYields",args:[n]}),r.readContract({abi:o.aT,address:a.ptyPoolAboveAddress,functionName:"userStakingBalance",args:[n]}),r.readContract({abi:o.aT,address:a.ptyPoolAboveAddress,functionName:"earnedMatchedToken",args:[n]}),r.readContract({abi:o.aT,address:a.ptyPoolAboveAddress,functionName:"earnedMatchingYields",args:[n]})]),h={buyPool_userStakingBalance:l,buyPool_earnedMatchedToken:s,buyPool_earnedStakingYields:u,buyPool_earnedMatchingYields:c,sellPool_userStakingBalance:d,sellPool_earnedMatchedToken:p,sellPool_earnedMatchingYields:f};return e({user:{...t().user,[a.vault]:h}}),h};return{lvaults:{},user:{},...a,updateLVaults,updateUserLVault}},sliceLntVaultsStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},updateLntVaults=async a=>{let n=(0,i.B)(),l=await Promise.all(a.map(e=>n.readContract({abi:o.Q3,address:e.queryAddres,functionName:"queryVault",args:[e.vault]}).then(t=>({vault:e.vault,item:t})))),s=await (0,u.Sr)(a.map(e=>e.vault)),c=r().filter(l,e=>null!=e).reduce((e,t)=>({...e,[t.vault]:{...t.item,nftCount:BigInt(s[t.vault]||0)}}),{});return e({vaults:{...t().vaults,...c}}),c},updateEpoches=async(a,n)=>{var l;let s=n||r().range(1,parseInt((((null===(l=t().vaults[a.vault])||void 0===l?void 0:l.epochCount)||0n)+1n).toString())).map(e=>BigInt(e));if(0==s.length)return{};let u=(0,i.B)(),c=await Promise.all(s.map(e=>u.readContract({abi:o.Q3,address:a.queryAddres,functionName:"queryVaultEpoch",args:[a.vault,e]}))),d=c.reduce((e,t)=>({...e,["".concat(a.vault,"_").concat(t.epochId.toString())]:t}),{});return e({epoches:{...t().epoches,...d}}),d},updateUserEpoches=async(a,n)=>{var l;let s=(0,i.B)(),u=r().range(1,parseInt((((null===(l=t().vaults[a.vault])||void 0===l?void 0:l.epochCount)||0n)+1n).toString())).map(e=>BigInt(e));if(u.length>0){let r=await Promise.all(u.map(e=>s.readContract({abi:o.Q3,address:a.queryAddres,functionName:"queryVaultEpochUser",args:[a.vault,e,n]})));return e({userEpoches:{...t().userEpoches,[a.vault]:r}}),r}return[]},updateUserNftStat=async(a,n)=>{let r=await (0,u.mq)(a.vault,n),l=(0,i.B)();if(r.length>0){let n=(await Promise.all(r.map(e=>{let{tokenId:t,stat:n,tx:r}=e;return l.readContract({abi:o.qU,address:a.vault,functionName:"Redeemed"==n?"nftRedeemInfo":"nftDepositInfo",args:[BigInt(t)]}).then(e=>{let t="Redeemed"==n?e.redeemTime:e.depositTime,a=e.claimableTime;return{stat:n,tx:r,nftTokenId:e.nftTokenId,startTime:t,claimableTime:a,claimed:e.claimed}}).catch(e=>null)}))).filter(Boolean);return e({userNftStat:{...t().userNftStat,[a.vault]:n}}),n}return{}};return{vaults:{},epoches:{},userEpoches:{},userNftStat:{},...a,updateLntVaults,updateEpoches,updateUserEpoches,updateUserNftStat}},sliceTokenStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},updateTokenTotalSupply=async a=>{if(0==a.length)return{};let n=(0,i.B)(),r=await Promise.all(a.map(e=>e==v.K8?Promise.resolve(0n):n.readContract({abi:m.Wo,address:e,functionName:"totalSupply"}))),l=r.reduce((e,t,n)=>({...e,[a[n]]:t}),{});return e({totalSupply:{...t().totalSupply,...l}}),l},updateTokensBalance=async(a,n)=>{if(0==a.length)return{};let r=(0,i.B)(),l=await Promise.all(a.map(e=>e==v.K8?r.getBalance({address:n}):r.readContract({abi:m.Wo,address:e,functionName:"balanceOf",args:[n]}))),s=l.reduce((e,t,n)=>({...e,[a[n]]:t}),{});return e({balances:{...t().balances,...s}}),s},updateTokenPrices=async a=>{let n=r().groupBy(a,e=>d.P[e]?"lp":"token"),l=n.lp||[];if(0!==l.length){console.info("mlps;",a,l);let e=(0,c.I$)();e.id===c.A2.id||(e.id,c.yg.id)}let s=await (0,u.LJ)(["IP"]);return s.length&&e({prices:{...t().prices,"0x5267F7eE069CEB3D8F1c760c215569b79d0685aD":s[0].price}}),{}},updateDefTokenList=async()=>{let t={[c.yg.id]:"https://hub.berachain.com/internal-env/defaultTokenList.json",[c.A2.id]:"https://raw.githubusercontent.com/berachain/default-lists/main/src/tokens/bartio/defaultTokenList.json"},a=t[(0,c.BV)()];if(!a)return[];let n=await fetch(a).then(e=>e.json()).then(e=>e.tokens.filter(e=>e.chainId===(0,c.BV)()).map(e=>({symbol:e.symbol,address:e.address,decimals:e.decimals,name:e.name,url:(e.logoURI||"").replace("https://https://","https://")})));return localStorage.setItem("catchedDefTokenList_"+(0,c.BV)(),JSON.stringify(n)),e({defTokenList:n}),n},updateNftBalance=async(a,n)=>{let l=await (0,u.ZK)(a,n),s=r().mapValues(l,e=>e.map(e=>BigInt(e)));return e({nftBalance:{...t().nftBalance,...s}}),{}};return{totalSupply:{},updateTokenTotalSupply,balances:{},updateTokensBalance,prices:{"0x549943e04f40284185054145c6E4e9568C1D3241":p.Pq,"0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce":p.Pq},updateTokenPrices,defTokenList:(()=>{try{return JSON.parse(localStorage.getItem("catchedDefTokenList_"+(0,c.BV)())||"[]")}catch(e){return[]}})(),updateDefTokenList,nftBalance:{},updateNftBalance,...a}},sliceUserBVaults:(e,t,a)=>{let updateEpoches=async(a,n,r)=>{let l=r.filter(e=>e.epochId>0n);if(0==l.length)return{};let s=(0,i.B)(),u=await Promise.all(l.map(e=>s.readContract({abi:a.isOld?o.VH:o.Pe,address:a.bQueryAddres,functionName:"queryBVaultEpochUser",args:[a.vault,e.epochId,n]})));return e({epoches:{...t().epoches,[a.vault]:u}}),u};return{epoches:{},...a,updateEpoches,reset:()=>e({epoches:{}})}}},{}),y=(0,s.Ue)(g);function useStore(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],a=y();return(0,l.useMemo)(()=>e(a),t.map(e=>e?r().get(a,e):a))}}}]);