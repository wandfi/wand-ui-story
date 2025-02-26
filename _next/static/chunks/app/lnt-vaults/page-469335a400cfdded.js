(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3537],{62653:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(55731),a=s(64103),l=s(13012),r=s(40460);let i={0:"grid-cols-none",1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12"},c={0:"sm:grid-cols-none",1:"sm:grid-cols-1",2:"sm:grid-cols-2",3:"sm:grid-cols-3",4:"sm:grid-cols-4",5:"sm:grid-cols-5",6:"sm:grid-cols-6",7:"sm:grid-cols-7",8:"sm:grid-cols-8",9:"sm:grid-cols-9",10:"sm:grid-cols-10",11:"sm:grid-cols-11",12:"sm:grid-cols-12"},o={0:"md:grid-cols-none",1:"md:grid-cols-1",2:"md:grid-cols-2",3:"md:grid-cols-3",4:"md:grid-cols-4",5:"md:grid-cols-5",6:"md:grid-cols-6",7:"md:grid-cols-7",8:"md:grid-cols-8",9:"md:grid-cols-9",10:"md:grid-cols-10",11:"md:grid-cols-11",12:"md:grid-cols-12"},d={0:"lg:grid-cols-none",1:"lg:grid-cols-1",2:"lg:grid-cols-2",3:"lg:grid-cols-3",4:"lg:grid-cols-4",5:"lg:grid-cols-5",6:"lg:grid-cols-6",7:"lg:grid-cols-7",8:"lg:grid-cols-8",9:"lg:grid-cols-9",10:"lg:grid-cols-10",11:"lg:grid-cols-11",12:"lg:grid-cols-12"},u=(0,l.fn)("Grid"),Grid_c=(e,t)=>e&&Object.keys(t).includes(String(e))?t[e]:"",m=a.forwardRef((e,t)=>{let{numItems:s=1,numItemsSm:l,numItemsMd:m,numItemsLg:x,children:f,className:p}=e,g=(0,n.__rest)(e,["numItems","numItemsSm","numItemsMd","numItemsLg","children","className"]),h=(0,a.useMemo)(()=>{let e=Grid_c(s,i),t=Grid_c(l,c),n=Grid_c(m,o),a=Grid_c(x,d);return(0,r.q)(e,t,n,a)},[s,l,m,x]);return a.createElement("div",Object.assign({ref:t,className:(0,r.q)(u("root"),"grid",h,p)},g),f)});m.displayName="Grid"},62600:function(e,t,s){"use strict";s.d(t,{r:function(){return n.Z}});var n=s(62653)},36834:function(e,t,s){"use strict";s.d(t,{k:function(){return n.Z}});var n=s(78321)},37740:function(e,t,s){Promise.resolve().then(s.bind(s,69423))},69423:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Vaults}});var n=s(31113),a=s(4283),l=s(38894),r=s(95889),i=s(22139),c=s(59175),o=s(26361),d=s(78403),u=s(55349),m=s(83978),x=s.n(m),f=s(64103),p=s(96670),g=s(84944);function useLntVault(e){return(0,u.o)(t=>t.sliceLntVaultsStore.vaults[e]||(0,o.Yb)({current:(0,o.Yb)({},0n)},0n),["sliceLntVaultsStore.vaults.".concat(e)])}function useUpLntVaultForUserAction(e,t){let{address:s}=(0,p.m)();return()=>{(0,o.XD)(async()=>{if(null==t||t(),!s)return;await Promise.all([u.w.getState().sliceTokenStore.updateTokensBalance([e.vToken,e.vestingToken],s),u.w.getState().sliceTokenStore.updateNftBalance([e.asset],s),u.w.getState().sliceTokenStore.updateTokenTotalSupply([e.vToken,e.vestingToken]),u.w.getState().sliceLntVaultsStore.updateLntVaults([e]),u.w.getState().sliceLntVaultsStore.updateUserNftStat(e,s)]);let n=u.w.getState().sliceLntVaultsStore.vaults[e.vault];n.epochCount>0n&&(await u.w.getState().sliceLntVaultsStore.updateEpoches(e,n.epochCount>1n?[n.epochCount,n.epochCount-1n]:[n.epochCount]),await u.w.getState().sliceLntVaultsStore.updateUserEpoches(e,s))},3,1e3)}}function useLntVaultNftStat(e){return(0,u.o)(t=>t.sliceLntVaultsStore.userNftStat[e]||[],["sliceLntVaultsStore.userNftStat.".concat(e)])}function calcVtAmountBy(e,t){if(!e.initialized)return 0n;let s=e.nftVestingEndTime,n=e.nftVestingDuration,a=e.nftVtAmount,l=s-t;l<0n&&(l=0n),l>n&&(l=n);let r=n>0n?l*a/n:0n;return r}function calcItemVtAmount(e,t){return calcVtAmountBy(e,"Deposited"==t.stat?t.claimableTime:t.startTime)}var h=s(36602),v=s(64370),j=s(36834),b=s(69708),N=s(12485),y=s(36847),w=s(93650),S=s(14993),T=s(85665),k=s(58409),C=s(20265),L=s(99548),V=s(91214),I=s(99971),B=s(68535),P=s(49041),A=s(64217),E=s(11292);let bnToNum=e=>x().round(parseFloat((0,E.d)(BigInt(e))),5),logTrans=e=>x().round(Math.log10(90*e+1),5),revertLog=e=>x().round((Math.pow(10,e)-1)/90,5);function LntVaultEpochYtPrices(e){let{vc:t,epochId:s}=e,{data:a}=(0,v.a)({queryKey:["bvualt-epoch-yt-prices",t.vault,s],queryFn:()=>(0,B.cb)(t.vault,s),initialData:[]}),[l,r]=(0,S.Z)(!0),{options:i}=(0,f.useMemo)(()=>{let e=a.map(e=>[(0,o.G$)(1e3*e.time,o.mv.ALL),l?logTrans(bnToNum(e.price)):bnToNum(e.price)]),valueFormater=e=>l?revertLog(e).toString():e.toString(),t={animation:!0,animationDuration:200,tooltip:{trigger:"axis",valueFormatter:valueFormater},grid:{top:30,bottom:30,right:20,show:!1},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1,axisLine:{onZero:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1},max:e=>1.1*e.max,axisLabel:{formatter:valueFormater}},dataZoom:[{type:"inside",start:0,end:100,minValueSpan:10},{show:!1}],series:[{name:"YT Price",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(30, 202, 83)"},areaStyle:{origin:"start",color:new A.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(30, 202, 83)"},{offset:1,color:"rgba(30, 202, 83, 0.2)"}])},data:e}]};return{data:e,options:t}},[a,l]);return(0,n.jsxs)("div",{className:"card p-4 mx-auto max-w-4xl w-full min-w-0",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-2 items-center",children:[(0,n.jsx)("span",{className:"text-base font-bold",children:"YT Price Chart"}),(0,n.jsx)("span",{className:"text-xs font-medium dark:text-[#FBECEC]"})]}),(0,n.jsx)("div",{className:"flex gap-2 justify-end items-center mt-2",children:(0,n.jsx)("span",{className:(0,o.cn)("cursor-pointer text-xs px-1 py-0 rounded border-primary border",l?"bg-primary":"bg-transparent"),onClick:()=>r(),children:"LOG"})}),(0,n.jsx)(P.Z,{option:i,style:{height:240}})]})}var F=s(2987),Y=s(75496),D=s(60689),q=s(54825),R=s(15506);function LntVaultYInfo(e){let{vc:t}=e,s=useLntVault(t.vault),l=s.current,r=s.current.yTokenTotalSupply>s.current.vaultYTokenBalance?s.nftVtAmount*i.Pq/s.current.yTokenTotalSupply-s.current.vaultYTokenBalance:0n,[c]=function(e){let t=(0,u.o)(()=>(function(e){let t=u.w.getState(),s=t.sliceLntVaultsStore.vaults[e],n=(null==s?void 0:s.current.vaultYTokenBalance)||0n,a=(null==s?void 0:s.Y)||0n,l=a>0n?n*i.Pq/a:0n,r=((null==s?void 0:s.current.yTokenTotalSupply)||0n)-((null==s?void 0:s.current.vaultYTokenBalance)||0n),c=(null==s?void 0:s.nftVtAmount)||0n,o=r>0n?c*i.Pq/r:0n;console.info("calcBootst:",(0,g.d)(l),(0,g.d)(o));let d=o*l/i.Pq;return d})(e),["sliceLntVaultsStore.vaults.".concat(e)]);return[(0,g.d)(t,0),t]}(t.vault);return(0,n.jsxs)("div",{className:"card !p-0 overflow-hidden flex flex-col",children:[(0,n.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,n.jsx)(a.Z,{className:"text-[3.375rem]",showBg:!0}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,n.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Yield token"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-between p-5 gap-5 flex-1",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-4 flex-wrap",children:[(0,n.jsxs)("div",{className:"text-base font-medium",children:[(0,n.jsx)("div",{className:"text-xs",children:"Yield Boosted"}),(0,n.jsxs)("span",{className:"text-4xl font-semibold",children:[c,"x"]})]}),(0,n.jsxs)("span",{className:"text-xs rounded-full whitespace-nowrap bg-slate-400 self-end px-1",children:["1YT = Yield of ",(0,g.d)(r,2)," token"]})]}),(0,n.jsxs)("div",{className:"text-base font-medium",children:[(0,n.jsx)("div",{className:"text-xs",children:"Total Supply"}),(0,n.jsx)("div",{className:"font-semibold",children:(0,g.d)(s.current.yTokenTotalSupply)})]}),l&&(0,n.jsxs)("div",{className:"dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{children:"Epoch ".concat(l.epochId.toString())}),(0,n.jsxs)("span",{className:"scale-90",children:["~",(0,o.Y)((l.startTime+l.duration)*1000n-BigInt(new Date().getTime()))," remaining"]})]}),(0,n.jsx)(j.k,{value:(e=>{let t=BigInt(Math.floor(new Date().getTime()/1e3));if(t<e.startTime)return 0;if(t-l.startTime>=l.duration)return 100;let s=(t-l.startTime)*100n/e.duration;return parseInt(s.toString())})(l),className:"mt-2 rounded-full overflow-hidden"}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{className:"scale-90",children:(0,o.G$)(1000n*l.startTime,o.mv.ALL2)}),(0,n.jsx)("span",{className:"scale-90",children:(0,o.G$)((l.startTime+l.duration)*1000n,o.mv.ALL2)})]})]})]})]})}function LntVaultYTrans(e){let{vc:t}=e,[s,a]=(0,f.useState)(""),m=(0,o.su)(s),x=useLntVault(t.vault),p=(0,u.o)(e=>e.sliceTokenStore.balances[x.current.ytSwapPaymentToken]||0n,["sliceTokenStore.balances.".concat(x.current.ytSwapPaymentToken)]),h=(0,c.p)(),[j,b]=(0,f.useState)(["calcSwap",t.vault,m,h]);(0,w.Z)(()=>b(["calcSwap",t.vault,m,h]),300,["calcSwap",t.vault,m,h]);let{data:y,isFetching:T}=(0,v.a)({queryKey:j,enabled:!!x.initialized,queryFn:()=>(0,d.B)().readContract({abi:l.qU,address:t.vault,functionName:"calcSwap",args:[m]})}),[k,C]=(0,S.Z)(!1),I=x.current.vaultYTokenBalance,B=(0,o.ok)(y,"1"),P=I>0n?x.Y*i.Pq/I:0n,A=P>0n?i.Pq*i.Pq/P:0n,E=k?"1 PayToken=".concat((0,g.d)(A)," YT"):"1 YT=".concat((0,g.d)(P)," ","PayToken"),F=I>B?(x.Y+m)*i.Pq/(I-B):0n,Y=(0,o.Kl)(B,void 0,!0),D=F>P&&P>0n?(F-P)*BigInt(1e10)/P:0n,q=useUpLntVaultForUserAction(t);return(0,n.jsxs)("div",{className:"card !p-4 flex flex-col h-[24.25rem] gap-1",children:[(0,n.jsx)(V.W,{asset:"PayToken",amount:s,balance:p,setAmount:a}),(0,n.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,n.jsx)(V.W,{asset:t.yTokenSymbol,assetIcon:"Venom",loading:T&&!!s,readonly:!0,disable:!0,checkBalance:!1,amount:Y}),(0,n.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(N.k$E,{className:"text-sm text-primary cursor-pointer inline-block",onClick:()=>C()}),(0,n.jsx)("span",{children:"Price: ".concat(E)})]}),(0,n.jsx)("div",{className:"flex gap-2 items-center",children:"Price Impact: ".concat((0,o.Jh)(D,10,2))})]}),(0,n.jsx)(L.v,{className:"mx-auto mt-auto",tx:"Buy",disabled:!x.current.ytSwapPaymentToken||m<=0n||m>p,confirmations:r.EI,config:{abi:l.qU,address:t.vault,functionName:"swap",args:[m]},approves:x.current.ytSwapPaymentToken?{[x.current.ytSwapPaymentToken]:m}:{},spender:t.vault,onTxSuccess:()=>{a(""),q()}})]})}function BribeTit(e){return(0,n.jsxs)("div",{className:"flex items-center justify-start pl-5 gap-3",children:[(0,n.jsx)(I.c,{symbol:"GreenDot",size:14}),(0,n.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function LntVaultPools(e){var t;let{vc:s}=e,[a,i]=(0,f.useState)(!1),c=function(e){let t=(0,u.o)(t=>{let s=t.sliceLntVaultsStore.vaults[e];if(!s||s.epochCount<=0n)return[];let n=x().range(1,parseInt((s.epochCount+1n).toString())).reverse(),a=t.sliceLntVaultsStore.epoches;return n.map(t=>a["".concat(e,"_").concat(t)]).filter(e=>null!=e)},["sliceLntVaultsStore.vaults.".concat(e),"sliceLntVaultsStore.epoches"]),s=(0,u.o)(t=>t.sliceLntVaultsStore.userEpoches[e]||[],["sliceLntVaultsStore.userEpoches.".concat(e)]);return(0,f.useMemo)(()=>{let e=s.reduce((e,t)=>({...e,[t.epochId.toString()]:t}),{});return t.map(t=>(0,o.Yb)({...t,...e[t.epochId.toString()]||{opt1:[],opt2:[]}},0n))},[t,s])}(s.vault),d=(0,f.useMemo)(()=>(console.info("epochesData:",c),a?c.filter(e=>e.opt1.reduce((e,t)=>e+t.earned,0n)>0n||e.opt2.reduce((e,t)=>e+t.earned,0n)>0n||e.userClaimableYTPoints>0n):c),[c,a]),[m,p]=(0,T.Z)(),[h,v]=(0,f.useState)(null===(t=d[0])||void 0===t?void 0:t.epochId),j=(0,f.useMemo)(()=>h?d.find(e=>e.epochId==h):d[0],[d,h]),b=(null==j?void 0:j.userBalanceYToken)||0n,N=(null==j?void 0:j.userYTPoints)||0n,y=(null==j?void 0:j.userClaimableYTPoints)||0n,onRowClick=e=>{var t;v(null===(t=d[e])||void 0===t?void 0:t.epochId)},w=(null==j?void 0:j.opt2)||[];null==j||j.opt1;let S=useUpLntVaultForUserAction(s);return(0,n.jsxs)("div",{className:"md:h-[24.25rem] card !p-4",children:[(0,n.jsx)("div",{className:"font-bold text-base",children:"Harvest"}),(0,n.jsxs)("div",{className:(0,o.cn)("flex flex-col md:flex-row gap-4 mt-2"),children:[(0,n.jsxs)("div",{className:"flex flex-col gap-4 shrink-0 w-full md:w-[14.375rem]",ref:m,children:[(0,n.jsxs)("div",{className:"flex items-center gap-8 text-sm font-semibold",children:[(0,n.jsx)("span",{children:"My Pool Only"}),(0,n.jsx)(q.r,{checked:a,onChange:i})]}),(0,n.jsx)(C.aV,{className:d.length>6?"pr-5":"",width:p.width,height:280,rowHeight:e=>{let{index:t}=e;return t<d.length-1?76:56},overscanRowCount:6,rowCount:d.length,rowRenderer:function(e){let{key:t,style:s,index:a}=e,l=d[a],r="".concat((0,o.G$)(1000n*l.startTime),"-").concat((0,o.G$)((l.startTime+l.duration)*1000n));return(0,n.jsx)("div",{style:s,className:"cursor-pointer",onClick:()=>onRowClick(a),children:(0,n.jsxs)("div",{className:(0,o.cn)("h-[56px] card !rounded-lg !px-5 !py-2 font-semibold",a<d.length-1?"mb-[20px]":""),children:[(0,n.jsxs)("div",{className:"text-sm",children:["Epoch ",d[a].epochId.toString()]}),(0,n.jsx)("div",{className:"text-xs dark:text-white/60 mt-1",children:r})]})},t)}})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,n.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,n.jsx)("span",{className:"text-sm",children:"Rewards"}),(0,n.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==j?void 0:j.epochId)||1n).toString()]})]}),(0,n.jsxs)("div",{className:"flex-1 overflow-y-auto flex flex-col gap-4 font-semibold text-sm",children:[(0,n.jsxs)("div",{className:"flex gap-20 items-end font-semibold",children:[(0,n.jsx)("span",{className:"text-sm",children:"YT Balance"}),(0,n.jsx)("span",{className:"text-xs dark:text-white/60",children:(0,g.d)(b)})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsx)("span",{className:"text-sm",children:"YT Points"}),(0,n.jsx)("span",{className:" dark:text-white/60 ml-16",children:(0,g.d)(N,void 0,23)}),(0,n.jsxs)("div",{className:"flex flex-col gap-1 absolute left-1/2 top-0",children:[(0,n.jsx)("span",{className:"dark:text-white/60",children:"Claimable"}),(0,n.jsx)("span",{children:(0,g.d)(y,void 0,23)})]}),(0,n.jsx)(L.v,{className:"w-28 ml-auto",tx:"Claim",disabled:!j,confirmations:r.EI,config:{abi:l.Ww,address:null==j?void 0:j.ytRewardsPoolOpt2,functionName:"collectYt"},onTxSuccess:()=>{S()}})]}),w.length>0&&(0,n.jsxs)("div",{className:"flex flex-col gap-5 justify-start relative pt-8 items-center",children:[w.map(e=>(0,n.jsxs)("div",{className:"flex items-center w-full relative gap-20 pl-[20%]",children:[(0,n.jsx)(BribeTit,{name:e.symbol}),(0,n.jsx)("div",{className:"absolute left-1/2",children:(0,g.d)(e.earned)})]},e.token)),(0,n.jsx)("span",{className:"absolute left-0 top-0",children:"Bonus base on YT Points"}),(0,n.jsx)("span",{className:"absolute left-1/2 top-0 dark:text-white/60",children:"Claimable"}),(0,n.jsx)(L.v,{className:"absolute w-28 top-0 right-0",tx:"Claim",disabled:!j,confirmations:r.EI,config:{abi:l.Ww,address:null==j?void 0:j.ytRewardsPoolOpt2,functionName:"getRewards"},onTxSuccess:()=>{S()}})]})]})]})]})]})}function LntVaultDeposit(e){let{vc:t,onSuccess:s}=e,a=useLntVault(t.vault),[i,c]=(0,k.Z)({}),d=x().keys(i).filter(e=>i[e]).map(e=>BigInt(e)),u=(0,h.b7)(t.asset),m=useUpLntVaultForUserAction(t);return(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center p-5",children:[(0,n.jsx)("div",{className:"w-full text-start",children:"Licenses ID"}),(0,n.jsx)("div",{className:"w-[32rem] h-72 overflow-y-auto",children:(0,n.jsx)("div",{className:"w-full gap-2 grid grid-cols-4 ",children:u.map(e=>(0,n.jsxs)("div",{className:(0,o.cn)("flex gap-1 items-center cursor-pointer",{"text-primary":i[e.toString()]}),onClick:()=>c({[e.toString()]:!i[e.toString()]}),children:[(0,n.jsx)("div",{className:(0,o.cn)("w-3 h-3 border border-black/20 bg-[#EBEBEB] rounded-full",{"bg-primary":i[e.toString()]})}),"#",e.toString()]},e.toString()))})}),(0,n.jsxs)("div",{className:"text-center w-full",children:[(0,n.jsx)("span",{children:"Receive"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"text-4xl font-medium mr-1",children:(0,g.d)(function(e,t){if(0==t)return 0n;let s=BigInt(Math.round(x().now()/1e3))+e.NftDepositLeadingTime+1n;return calcVtAmountBy(e,s)*BigInt(t)}(a,d.length))}),"VT"]})]}),(0,n.jsx)(L.L,{tx:"Deposit",approves:{[t.asset]:!0},spender:t.vault,confirmations:r.EI,onTxSuccess:()=>{let e={};d.forEach(t=>{e[t.toString()]=!1}),c(e),s(),m()},config:{abi:l.qU,address:t.vault,functionName:"batchDepositNft",enabled:d.length>0,args:[d]}}),(0,n.jsxs)("div",{children:["Wait Time: ",(0,o.Y)(1000n*a.NftDepositLeadingTime)]}),(0,n.jsx)("div",{children:"Please claim VT in the ‘History Activities’ section."})]})}function LntVaultWithdraw(e){var t;let{vc:s,onSuccess:a}=e,i=useLntVault(s.vault),[c,d]=(0,k.Z)({}),u=x().keys(c).filter(e=>c[e]).map(e=>BigInt(e)),m=useLntVaultNftStat(s.vault).filter(e=>"DepositedClaimed"==e.stat),f=m.map(e=>e.nftTokenId);m.filter(e=>c["".concat(e.nftTokenId)]);let p=useUpLntVaultForUserAction(s),v=(0,h.ln)(),j=i.epochCount>0n?(i.current.startTime+i.current.duration)*1000n-BigInt(x().now()):0n,b=j>1000n*i.NftRedeemWaitingPeriod?j:1000n*i.NftRedeemWaitingPeriod;return(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center p-5",children:[(0,n.jsx)("div",{className:"w-full text-start",children:"Licenses ID"}),(0,n.jsx)("div",{className:"w-[32rem] h-72 overflow-y-auto",children:(0,n.jsx)("div",{className:"w-full gap-2 grid grid-cols-4 ",children:f.map(e=>(0,n.jsxs)("div",{className:(0,o.cn)("flex gap-1 items-center cursor-pointer",{"text-primary":c[e.toString()]}),onClick:()=>d({[e.toString()]:!c[e.toString()]}),children:[(0,n.jsx)("div",{className:(0,o.cn)("w-3 h-3 border border-black/20 bg-[#EBEBEB] rounded-full",{"bg-primary":c[e.toString()]})}),"#",e.toString()]},e.toString()))})}),(0,n.jsxs)("div",{className:"text-center w-full",children:[(0,n.jsx)("span",{children:"Need to Burn"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"text-4xl font-medium mr-1",children:(0,g.d)(0==(t=u.length)?0n:calcVtAmountBy(i,BigInt(Math.round(x().now()/1e3)))*BigInt(t))}),"VT"]}),(0,n.jsxs)("div",{children:["VT Balance: ",(0,g.d)(v[s.vToken])]})]}),(0,n.jsx)(L.L,{tx:"Request",confirmations:r.EI,onTxSuccess:()=>{let e={};u.forEach(t=>{e[t.toString()]=!1}),d(e),a(),p()},config:{abi:l.qU,address:s.vault,functionName:"batchRedeemNft",enabled:u.length>0,args:[u]}}),(0,n.jsxs)("div",{children:["Wait Time: ",(0,o.Y)(b)]}),(0,n.jsx)("div",{children:"Please claim Licenses in the ‘History Activities’ section."})]})}function LntVesting(e){let{vc:t}=e,s=useLntVault(t.vault),[{swap:a,receive:i},c]=(0,k.Z)({swap:{token:t.asset,symbol:t.assetSymbol},receive:{token:t.vToken,symbol:t.vTokenSymbol}}),[d,u]=(0,f.useState)("");(0,o.su)(d);let m=(0,f.useRef)(null),v=(0,f.useRef)(null),j=useLntVaultNftStat(t.vault),b=(0,h.A5)(t.vToken),w=j.filter(e=>"Deposited"==e.stat),S=j.filter(e=>"Redeemed"==e.stat),{address:T}=(0,p.m)(),{data:C,refetch:B}=(0,R.D2)({query:{enabled:!!T&&!!s.current.ytSwapPaymentToken},abi:l.zn,address:t.nftStakingPool,functionName:"earned",args:[T,s.current.ytSwapPaymentToken]}),P=useUpLntVaultForUserAction(t);return(0,n.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-5 text-sm font-medium",children:[(0,n.jsxs)("div",{className:"card lg:col-span-3 flex flex-col gap-6",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:["Deposited",(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"text-base font-semibold",children:j.length})," Licenses"]})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:["Claimable Fees",(0,n.jsx)(I.c,{symbol:t.vestingSymbol,size:16,className:"ml-auto"}),(0,n.jsx)("span",{className:"text-base font-semibold ml-1",children:(0,g.d)(C)}),(0,n.jsx)(L.v,{className:"w-20 ml-4",tx:"Claim",onTxSuccess:()=>{B(),P()},confirmations:r.EI,config:{abi:l.zn,address:t.nftStakingPool,functionName:"getRewards"}})]}),(0,n.jsxs)("div",{className:"flex justify-between gap-5 items-center",children:[(0,n.jsx)(F.o,{triggerRef:m,triggerProps:{className:"flex-1"},trigger:(0,n.jsx)(D.k,{className:"flex-1",children:"Deposit"}),children:(0,n.jsx)(LntVaultDeposit,{vc:t,onSuccess:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.click()}})}),(0,n.jsx)(F.o,{triggerRef:v,triggerProps:{className:"flex-1"},trigger:(0,n.jsx)(D.k,{className:"flex-1",children:"Withdraw"}),children:(0,n.jsx)(LntVaultWithdraw,{vc:t,onSuccess:()=>{var e;return null===(e=v.current)||void 0===e?void 0:e.click()}})})]})]}),(0,n.jsxs)("div",{className:"card lg:order-1 flex flex-col gap-2 text-center",children:[(0,n.jsx)("div",{children:"Total Deposited"}),(0,n.jsx)("div",{className:"text-base font-semibold",children:s.nftCount.toString()}),(0,n.jsx)("div",{className:"opacity-70",children:"Licenses"})]}),(0,n.jsxs)("div",{className:"card lg:order-1 flex flex-col gap-2 text-center",children:[(0,n.jsx)("div",{children:"vERA Total Supply"}),(0,n.jsx)("div",{className:"text-base font-semibold",children:(0,g.d)(b)}),(0,n.jsx)("div",{className:"opacity-70",children:"$3,121,000"})]}),(0,n.jsxs)("div",{className:"card lg:order-1 flex flex-col gap-2 text-center",children:[(0,n.jsx)("div",{children:"Buyback"}),(0,n.jsx)("div",{className:"text-base font-semibold",children:"921,000,231.222"}),(0,n.jsxs)("div",{className:"flex w-full items-center ",children:[(0,n.jsx)("div",{className:"flex w-full h-3 bg-gray-200 rounded-full ",children:(0,n.jsx)("div",{className:"h-full rounded-full",style:{width:"".concat(40,"%"),background:"linear-gradient(90deg, #C2B7FD 0%, #6466F1 100%)"}})}),(0,n.jsxs)("div",{className:"text-sm  text-right opacity-60 ml-[10px]",children:[40,"%"]})]})]}),(0,n.jsxs)("div",{className:"card lg:row-span-2 lg:col-span-2 flex flex-col gap-2 justify-between items-center",children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"text-base font-semibold mb-1",children:"Swap"}),(0,n.jsx)(V.W,{asset:a.symbol,amount:d,balance:(0,o.su)("123.4"),setAmount:u})]}),(0,n.jsx)("div",{className:"rounded-full w-8 h-8 border-2 border-primary text-primary hover:opacity-60 cursor-pointer text-2xl flex justify-center items-center",children:(0,n.jsx)(y.y5_,{className:"m-auto"})}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"text-base font-semibold mb-1",children:"Receive"}),(0,n.jsx)(V.W,{asset:i.symbol,disable:!0,amount:"124.123"}),(0,n.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none mt-1",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(N.k$E,{className:"text-sm text-primary cursor-pointer inline-block"}),(0,n.jsx)("span",{children:"Price: 1".concat(a.symbol," = 0.73").concat(i.symbol)})]}),(0,n.jsx)("div",{className:"flex gap-2 items-center",children:"Price Impact: ".concat((0,o.Jh)(0n,10,2))})]})]})]})]}),(0,n.jsx)("div",{children:"Historical Activities"}),(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{children:"Deposit"}),(0,n.jsx)(Y.ZP,{header:["Licenses ID","Start Time","Due Time","Tx","VT Minted",""],data:w.map(e=>["#".concat(e.nftTokenId),(0,o.G$)(1000n*e.startTime,o.mv.ALL),(0,o.G$)(1000n*e.claimableTime,o.mv.ALL),(0,o.lS)(e.tx),(0,g.d)(calcItemVtAmount(s,e)),(0,n.jsx)(L.v,{tx:"Claim",className:"w-32",onTxSuccess:P,disabled:!s.initialized||1000n*e.claimableTime>BigInt(x().now()),confirmations:r.EI,config:{abi:l.qU,address:t.vault,functionName:"claimDepositNft",args:[e.nftTokenId]}},"claim")])})]}),(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{children:"Withdraw"}),(0,n.jsx)(Y.ZP,{header:["Licenses ID","Start Time","Due Time","Tx","VT Burned",""],data:S.map(e=>["#".concat(e.nftTokenId),(0,o.G$)(1000n*e.startTime,o.mv.ALL),(0,o.G$)(1000n*e.claimableTime,o.mv.ALL),(0,o.lS)(e.tx),(0,g.d)(calcItemVtAmount(s,e)),(0,n.jsx)(L.v,{tx:"Claim",className:"w-32",onTxSuccess:P,disabled:!s.initialized||1000n*e.claimableTime>BigInt(x().now()),confirmations:r.EI,config:{abi:l.qU,address:t.vault,functionName:"claimRedeemNft",args:[e.nftTokenId]}},"claim")])})]})]})}function LntYield(e){let{vc:t}=e,s=useLntVault(t.vault);return(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-5",children:[(0,n.jsx)(LntVaultYInfo,{vc:t}),(0,n.jsx)(LntVaultEpochYtPrices,{vc:t,epochId:s.epochCount}),(0,n.jsx)(LntVaultYTrans,{vc:t}),(0,n.jsx)(LntVaultPools,{vc:t})]})}function LntOperators(e){let{vc:t}=e;return(0,n.jsx)("div",{className:"card",children:(0,n.jsx)(Y.ZP,{header:["Operator","Address","Delegted","Fill rate(7d)","Status"],data:[1,2,3,4,5].map(e=>["Operator".concat(e),"0x29ef789...df678","".concat(9*e),"99%",(0,n.jsx)("div",{className:"px-2 py-1 rounded-xl bg-green-400 w-fit text-white dark:text-black",children:"Active"},"status")])})})}function LNTVaultCard(e){var t;let{vc:s}=e,a=(0,b.useRouter)(),l=useLntVault(s.vault),r="flex flex-col gap-1 font-medium text-sm",i="opacity-60 text-xs font-semibold",c=(0,h.A5)(s.vToken);return(0,n.jsxs)("div",{className:(0,o.cn)("card  overflow-hidden flex p-6 items-center justify-between cursor-pointer",{}),onClick:()=>a.push("/lnt-vaults?vault=".concat(s.vault)),children:[(0,n.jsx)("img",{src:"/logo-alt.svg"}),(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)("div",{className:i,children:"Total Delegated"}),(0,n.jsx)("div",{children:(0,g.d)(null==l?void 0:l.nftCount,0,0)})]}),(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)("div",{className:i,children:"VT Supply"}),(0,n.jsx)("div",{children:(0,g.d)(c)})]}),(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)("div",{className:i,children:"YT Supply"}),(0,n.jsx)("div",{children:(0,g.d)(null==l?void 0:null===(t=l.current)||void 0===t?void 0:t.yTokenTotalSupply)})]}),(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)("div",{className:i,children:"VT Buyback"}),(0,n.jsxs)("div",{className:"flex w-36 items-center ",children:[(0,n.jsx)("div",{className:"flex w-full h-4 bg-gray-200 rounded-full ",children:(0,n.jsx)("div",{className:"h-full rounded-full",style:{width:"".concat(40,"%"),background:"linear-gradient(90deg, #C2B7FD 0%, #6466F1 100%)"}})}),(0,n.jsxs)("div",{className:"text-sm  text-right opacity-60 ml-[10px]",children:[40,"%"]})]})]})]})}var U=s(44939),_=s(16738),M=s(31889),O=s(62600),Z=s(59781);function LntVaultPage(e){var t;let{vc:s,tab:a}=e,{address:l}=(0,p.m)(),r=useLntVault(s.vault);(0,v.a)({queryKey:["UpdateLntVaultDetails",s,l,r.epochCount.toString()],enabled:r.epochCount>0n,queryFn:async()=>!!l&&(await Promise.all([u.w.getState().sliceLntVaultsStore.updateEpoches(s),u.w.getState().sliceLntVaultsStore.updateUserEpoches(s,l)]),!0)}),(0,v.a)({queryKey:["UpdateUserLntVault",s,l,r.epochCount.toString()],queryFn:async()=>!!l&&(await Promise.all([u.w.getState().sliceLntVaultsStore.updateUserNftStat(s,l),u.w.getState().sliceTokenStore.updateNftBalance([s.asset],l)]),!0)});let i=(0,b.useRouter)(),c=[{tab:"Vesting Token",content:(0,n.jsx)(LntVesting,{vc:s})},{tab:"Yield Token",content:(0,n.jsx)(LntYield,{vc:s})},{tab:"Node Operators",content:(0,n.jsx)(LntOperators,{vc:s})}],d=(null===(t=c.find(e=>(0,o.pi)(e.tab)==a))||void 0===t?void 0:t.tab)||c[0].tab;return(0,n.jsx)(_.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",currentTab:d,onTabChange:e=>(0,Z.p2)(i,s.vault,e),data:c})}function Vaults(){let e=(0,c.p)(),t=r.f_[e].filter(e=>!e.onEnv||e.onEnv.includes(i.Vi)),s=(0,b.useSearchParams)(),a=s.get("vault"),l=s.get("tab"),o=t.find(e=>e.vault==a);return(0,M.tK)(),(0,n.jsx)(U.E,{children:(0,n.jsx)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:o?(0,n.jsx)(LntVaultPage,{vc:o,tab:l}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"page-title",children:"LNT-Vaults"}),(0,n.jsx)(O.r,{numItems:1,className:"gap-5 mt-4",children:t.map((e,t)=>(0,n.jsx)(LNTVaultCard,{vc:e},"group_vault_item_".concat(t)))})]})})})}},4283:function(e,t,s){"use strict";s.d(t,{Z:function(){return Icon}});var n=s(31113);function Icon(e){return(0,n.jsxs)("svg",{...e,width:"1em",height:"1em",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"paint0_linear_44_1614",x1:"11",y1:"12",x2:"40",y2:"46",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"#EBC013"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#B4630C"})]})}),(0,n.jsx)("path",{d:"M53.5 27C53.5 41.6355 41.6355 53.5 27 53.5C12.3645 53.5 0.5 41.6355 0.5 27C0.5 12.3645 12.3645 0.5 27 0.5C41.6355 0.5 53.5 12.3645 53.5 27Z",stroke:e.showOutline?"currentColor":"transparent",fill:e.showBg?"url(#paint0_linear_44_1614)":"none"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.8858 12.6242C30.0381 11.1982 32.0074 9.73158 34.2967 10.042C36.7014 10.368 39.1876 12.6144 41.2947 18.1891L41.3243 18.2674V22.7031C41.9003 23.067 42.4415 23.5927 42.7824 24.2799C43.1751 25.0715 43.2852 26.0449 42.9197 27.1593C42.2131 29.3134 39.7403 31.9737 34.1498 35.0849C34.2369 36.6497 34.1823 38.9077 33.7465 40.9502C33.5147 42.0368 33.1703 43.0858 32.6655 43.9413C32.1599 44.7983 31.4746 45.4912 30.5547 45.8003L29.9602 46V36.9471L27.3753 38.5102C27.2803 38.5676 27.1728 38.5858 27.0714 38.5694C26.97 38.5858 26.8626 38.5676 26.7676 38.5102L24.1827 36.9471V46L23.5881 45.8003C22.6683 45.4912 21.983 44.7983 21.4773 43.9413C20.9726 43.0858 20.6281 42.0368 20.3963 40.9502C19.9606 38.9077 19.9059 36.6497 19.9931 35.0849C14.4026 31.9737 11.9298 29.3134 11.2232 27.1593C10.8576 26.0449 10.9677 25.0715 11.3604 24.2799C11.7014 23.5927 12.2425 23.067 12.8185 22.7031V18.2674L12.8481 18.1891C14.9552 12.6144 17.4414 10.368 19.8461 10.042C22.1355 9.73158 24.1048 11.1982 25.2571 12.6242H28.8858ZM24.839 13.4881C24.9051 13.5208 24.978 13.5367 25.051 13.5347H28.9613C28.9854 13.5347 29.0091 13.5328 29.0322 13.5291C29.1906 13.5547 29.3575 13.4943 29.4622 13.3572C30.513 11.9803 32.2677 10.6856 34.1763 10.9444C36.0559 11.1992 38.3514 13.0004 40.4209 18.4353V23.2341L40.6563 23.3635C41.1937 23.659 41.6872 24.1084 41.9744 24.6872C42.2559 25.2547 42.3556 25.9781 42.0619 26.8735C41.4605 28.7069 39.2025 31.2708 33.4645 34.4254L33.2095 34.5655L33.2302 34.8575C33.3371 36.3661 33.304 38.693 32.8633 40.7588C32.6429 41.7918 32.3254 42.7362 31.889 43.4759C31.5943 43.9754 31.254 44.3677 30.8636 44.6368V35.3388L27.0714 37.6321L23.2793 35.3388V44.6368C22.8889 44.3677 22.5486 43.9754 22.2539 43.4759C21.8174 42.7362 21.4999 41.7918 21.2796 40.7588C20.8389 38.693 20.8057 36.3661 20.9127 34.8575L20.9334 34.5655L20.6784 34.4254C14.9403 31.2708 12.6824 28.7069 12.081 26.8735C11.7873 25.9781 11.8869 25.2547 12.1685 24.6872C12.4556 24.1084 12.9492 23.659 13.4866 23.3635L13.722 23.2341V18.4353C15.7915 13.0004 18.0869 11.1992 19.9666 10.9444C21.8707 10.6862 23.6215 11.9742 24.6732 13.3474C24.693 13.3748 24.7157 13.3998 24.7409 13.422C24.771 13.4487 24.804 13.4707 24.839 13.4881Z",fill:"currentColor",stroke:"currentColor",strokeLinecap:"round"})]})}},75496:function(e,t,s){"use strict";var n=s(31113),a=s(26361);function DefEmpty(){return(0,n.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,n.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}s(64103),t.ZP=e=>{let{header:t,data:s,span:l={},empty:r=(0,n.jsx)(DefEmpty,{}),className:i="relative min-w-full bg-transparent ",headerClassName:c,headerItemClassName:o,tbodyClassName:d="",rowClassName:u,rowStyle:m,cellClassName:x,onClickRow:f,onRowMouseHover:p}=e;return(0,n.jsxs)("table",{className:(0,a.cn)("relative min-w-full bg-transparent ",i),children:[(0,n.jsx)("thead",{className:"",children:(0,n.jsx)("tr",{className:(0,a.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",c),children:t.map((e,t)=>(0,n.jsx)("th",{colSpan:l[t],scope:"col",className:(0,a.cn)(0==l[t]?"p-0 w-0":"p-3 font-normal text-sm",o),children:e},t))})}),(0,n.jsxs)("tbody",{className:(0,a.cn)(d),children:[s.map((e,s)=>(0,n.jsx)("tr",{onClick:()=>f&&f(s),onMouseEnter:()=>p&&p(s),onMouseLeave:()=>p&&p(-1),style:"function"==typeof m?m(s):m,className:(0,a.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",f?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof u?u(s):u),children:e.map((e,r)=>r>=t.length?(0,n.jsx)(n.Fragment,{children:e}):(0,n.jsx)("td",{colSpan:l[r],className:(0,a.cn)(0==l[r]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof x?x(s,r):x),children:e},r))},s)),0===s.length&&r]})]})}},54825:function(e,t,s){"use strict";s.d(t,{r:function(){return Switch}});var n=s(31113),a=s(26361),l=s(12045);function Switch(e){let t=(0,l.l)();return(0,n.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #6366F1 0%, #6366F1 36.26%, #6366F1 92.54%)":"light"==t.theme?"radial-gradient(#FAFAFA,#FAFAFA),radial-gradient(#0A1114,#0A1114)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,a.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,n.jsx)("div",{className:(0,a.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"left-[1em]":"-left-[1px]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #6366F1 0%, #6366F1 100%)":"#3B4144"}})})}},15506:function(e,t,s){"use strict";s.d(t,{D2:function(){return useWandContractRead},uX:function(){return useWandContractReads}}),s(78403);var n=s(83978),a=s.n(n);s(64103);var l=s(30308),r=s(59307),i=s(93108);let c=(0,i.Ue)(e=>({time:a().now(),update:()=>{e({time:a().now()})}}));function useWandContractRead(e){let{time:t}=c();return(0,l.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=c();return(0,r.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},36602:function(e,t,s){"use strict";s.d(t,{A5:function(){return useTotalSupply},b7:function(){return useNftBalance},ln:function(){return useBalances}});var n=s(26361),a=s(55349);function useBalances(){return(0,a.o)(e=>(0,n.Yb)(e.sliceTokenStore.balances,0n),["sliceTokenStore.balances"])}function useNftBalance(e){return(0,a.o)(t=>t.sliceTokenStore.nftBalance[e]||[],["sliceTokenStore.nftBalance.".concat(e)])}function useTotalSupply(e){return(0,a.o)(t=>{var s;return null!==(s=t.sliceTokenStore.totalSupply[e])&&void 0!==s?s:0n},["sliceTokenStore.totalSupply.".concat(e)])}},58409:function(e,t,s){"use strict";var n=s(64103);t.Z=function(e){void 0===e&&(e={});var t=(0,n.useState)(e),s=t[0],a=t[1];return[s,(0,n.useCallback)(function(e){a(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]}},25e3:function(e,t,s){"use strict";s.d(t,{L:function(){return readContract}});var n=s(12537),a=s(96685);function readContract(e,t){let{chainId:s,...l}=t,r=e.getClient({chainId:s}),i=(0,a.s)(r,n.L,"readContract");return i(l)}},64828:function(e,t,s){"use strict";s.d(t,{J:function(){return readContracts}});var n=s(33066),a=s(74659),l=s(96685);async function multicall_multicall(e,t){let{allowFailure:s=!0,chainId:n,contracts:r,...i}=t,c=e.getClient({chainId:n}),o=(0,l.s)(c,a.A,"multicall");return o({allowFailure:s,contracts:r,...i})}var r=s(25e3);async function readContracts(e,t){let{allowFailure:s=!0,blockNumber:a,blockTag:l,...i}=t,c=t.contracts;try{let t=c.reduce((t,s,n)=>{let a=s.chainId??e.state.chainId;return{...t,[a]:[...t[a]||[],{contract:s,index:n}]}},{}),n=(await Promise.all(Object.entries(t).map(([t,n])=>multicall_multicall(e,{...i,allowFailure:s,blockNumber:a,blockTag:l,chainId:parseInt(t),contracts:n.map(({contract:e})=>e)})))).flat(),r=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return n.reduce((e,t,s)=>(e&&(e[r[s]]=t),e),[])}catch(t){if(t instanceof n.uq)throw t;let promises=()=>c.map(t=>(0,r.L)(e,{...t,blockNumber:a,blockTag:l}));if(s)return(await Promise.allSettled(promises())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(promises())}}},96685:function(e,t,s){"use strict";function getAction(e,t,s){let n=e[t.name];if("function"==typeof n)return n;let a=e[s];return"function"==typeof a?a:s=>t(e,s)}s.d(t,{s:function(){return getAction}})},30308:function(e,t,s){"use strict";s.d(t,{u:function(){return useReadContract}});var n=s(25e3),a=s(55046),l=s(44178),r=s(90283),i=s(57728);function useReadContract(e={}){let{abi:t,address:s,functionName:c,query:o={}}=e,d=(0,i.Z)(e),u=(0,r.x)({config:d}),m=function(e,t={}){return{async queryFn({queryKey:s}){let a=t.abi;if(!a)throw Error("abi is required");let{address:l,functionName:r,scopeKey:i,...c}=s[1];if(!l)throw Error("address is required");if(!r)throw Error("functionName is required");let o=c.args;return(0,n.L)(e,{abi:a,address:l,functionName:r,args:o,...c})},queryKey:function(e={}){let{abi:t,...s}=e;return["readContract",(0,a.O)(s)]}(t)}}(d,{...e,chainId:e.chainId??u}),x=!!(s&&t&&c&&(o.enabled??!0));return(0,l.aM)({...o,...m,enabled:x,structuralSharing:o.structuralSharing??l.if})}},59307:function(e,t,s){"use strict";s.d(t,{N:function(){return useReadContracts}});var n=s(64828),a=s(55046),l=s(64103),r=s(44178),i=s(90283),c=s(57728);function useReadContracts(e={}){let{contracts:t=[],query:s={}}=e,o=(0,c.Z)(e),d=(0,i.x)({config:o}),u=function(e,t={}){return{async queryFn({queryKey:s}){let a=[],l=s[1].contracts.length;for(let e=0;e<l;e++){let n=s[1].contracts[e],l=t.contracts?.[e].abi;a.push({...n,abi:l})}let{scopeKey:r,...i}=s[1];return(0,n.J)(e,{...i,contracts:a})},queryKey:function(e={}){let t=[];for(let s of e.contracts??[]){let{abi:n,...a}=s;t.push({...a,chainId:a.chainId??e.chainId})}return["readContracts",(0,a.O)({...e,contracts:t})]}(t)}}(o,{...e,chainId:d}),m=(0,l.useMemo)(()=>{let e=!1;for(let s of t){let{abi:t,address:n,functionName:a}=s;if(!t||!n||!a){e=!1;break}e=!0}return!!(e&&(s.enabled??!0))},[t,s.enabled]);return(0,r.aM)({...u,...s,enabled:m,structuralSharing:s.structuralSharing??r.if})}}},function(e){e.O(0,[4881,7495,7622,4105,7073,931,4300,359,6466,7717,5228,6002,2536,7093,604,1744],function(){return e(e.s=37740)}),_N_E=e.O()}]);