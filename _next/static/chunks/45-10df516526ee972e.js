(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{79391:function(){},35664:function(e,t,n){"use strict";n.d(t,{Z:function(){return ConnectBtn}});var a=n(31113),u=n(3367),l=n(44726),s=n(96670),o=n(60689);function ConnectBtn(){(0,l.Z)(1024);let{isConnected:e,chainId:t}=(0,s.m)(),n=(0,u.We)();return e?(0,a.jsx)(u.NL,{chainStatus:"none",showBalance:!1}):(0,a.jsx)(o.k,{className:"mt-0 w-fit",onClick:()=>{var e;return null===(e=n.openConnectModal)||void 0===e?void 0:e.call(n)},children:(0,a.jsx)("span",{className:"font-medium text-sm px-5 whitespace-nowrap",children:"Connect Wallet"})})}},6371:function(e,t,n){"use strict";n.d(t,{C:function(){return Tip}});var a=n(31113),u=n(26361),l=n(52653),s=n(55966);function Tip(e){let{children:t,node:n,className:o,inFlex:r}=e,c=document.getElementById("tooltip-root");return t?(0,a.jsx)(l.zt,{children:(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,onClickCapture:e=>{e.preventDefault(),e.stopPropagation()},children:n?(0,a.jsx)("div",{className:(0,u.cn)("inline-block cursor-default",o),style:{verticalAlign:"text-bottom"},children:n}):(0,a.jsx)("div",{className:(0,u.cn)(r?"flex":"translate-y-[-6%] inline-block"," px-[3px] cursor-default relative",o),children:(0,a.jsx)(s.apP,{className:"inline-block stroke-slate-500"})})}),(0,a.jsx)(l.h_,{container:c,children:(0,a.jsxs)(l.VY,{className:"max-w-xs text-sm text-white bg-slate-900 shadow-lg dark:bg-[#333333] rounded-md p-4",children:[t,(0,a.jsx)(l.Eh,{})]})})]})}):n}},88439:function(e,t,n){"use strict";n.d(t,{b:function(){return useMemoOfChainId}});var a=n(64103),u=n(59175);function useMemoOfChainId(e){let t=(0,u.p)(),n=(0,a.useRef)({});return(0,a.useMemo)(()=>(n.current[t]||(n.current[t]=e()),n.current[t]),[t])}},45438:function(e,t,n){"use strict";n.d(t,{i:function(){return i},p:function(){return useUpdatePtypoolApy}});var a=n(19757),u=n(22139),l=n(55349),s=n(64103),o=n(33737),r=n(93108),c=n(59175);let i=(0,r.Ue)(e=>({update:e}));function useUpdatePtypoolApy(e){let t=(0,c.p)(),n=a.iK[t]||[],r=(0,l.o)(e=>e.sliceLVaultsStore.lvaults,["sliceLVaultsStore.lvaults"]);(0,s.useEffect)(()=>{console.info("updatePtypoolApy"),null==n||n.forEach(n=>{let l=r[n.vault];if(n.ptyPoolAboveAddress&&l&&l.sellPoolTotalStaking&&i.getState().update({[n.ptyPoolAboveAddress]:{staking:(0,o.v)("0.025",10),matching:0n}}),n.ptyPoolBelowAddress&&l&&l.buyPoolTotalStaking&&!l.isStable){let s=l&&l.sellPoolTotalStaking*e[a.O1[t]],o=s>0n&&l.settingsDecimals>0n?l.M_ETHx*l.Y*e[n.xTokenAddress]*u.Pq/2n/s/l.settingsDecimals**10n:0n;i.getState().update({[n.ptyPoolBelowAddress]:{staking:o*10n**10n/u.Pq,matching:0n}})}})},[n,r,e,t])}},15506:function(e,t,n){"use strict";n.d(t,{D2:function(){return useWandContractRead},uX:function(){return useWandContractReads}}),n(78403);var a=n(83978),u=n.n(a);n(64103);var l=n(30308),s=n(59307),o=n(93108);let r=(0,o.Ue)(e=>({time:u().now(),update:()=>{e({time:u().now()})}}));function useWandContractRead(e){let{time:t}=r();return(0,l.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=r();return(0,s.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},52671:function(e,t,n){"use strict";n.d(t,{g:function(){return m},A:function(){return FetcherProvider}});var a=n(31113),u=n(19757),l=n(22139),s=n(59175),o=n(64103),r=n(25233),c=n(87958),i=n(41340),d=n(73216),p=n(88439),f=n(45438),S=n(26361),v=n(64370),h=n(55349),B=n(18358),V=n(39577);let m=(0,o.createContext)({prices:(0,S.Yb)({},0n),usbApr:{apr:0n,aprDecimals:10}}),FetcherProvider=e=>{let{children:t}=e;(0,B.d6)();let n=(0,s.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.m)({chainId:e});o.useMemo(()=>(t&&(d.ON.provider=function(e){var t,n;let{chain:a,transport:u}=e,l={chainId:a.id,name:a.name,ensAddress:null===(n=a.contracts)||void 0===n?void 0:null===(t=n.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===u.type?new c.H(u.transports.map(e=>{let{value:t}=e;return new i.r(null==t?void 0:t.url,l)})):new i.r(u.url,l)}(t)),d.ON.provider),[t])}();let g=(0,p.b)(()=>(0,S.Yb)({[u.O1[n]]:l.Pq},0n));(0,V.$$)(g);let b=(0,V.UM)();return(0,f.p)(g),(0,v.a)({queryKey:["updateDefTokenList",n],staleTime:36e5,queryFn:async()=>(await h.w.getState().sliceTokenStore.updateDefTokenList(),!0)}),(0,a.jsx)(m.Provider,{value:{prices:g,usbApr:b},children:t})}},18358:function(e,t,n){"use strict";n.d(t,{R3:function(){return useUpBVaultForUserAction},Vw:function(){return useEpochesData},Zd:function(){return useBVaultEpoches},d6:function(){return useResetBVaultsData},gz:function(){return useCalcClaimable},lL:function(){return calcBVaultPTApy},nr:function(){return useBVault},oU:function(){return useBVaultApy},pg:function(){return calcBVaultBoost},v7:function(){return useBVaultBoost}});var a=n(22139),u=n(59175),l=n(26361),s=n(84944),o=n(83978),r=n.n(o),c=n(64103),i=n(96670),d=n(55349);function useResetBVaultsData(){let e=(0,u.p)(),{address:t}=(0,i.m)();(0,c.useEffect)(()=>{},[e]),(0,c.useEffect)(()=>{d.w.getState().sliceUserBVaults.reset()},[t])}function useBVault(e){return(0,d.o)(t=>t.sliceBVaultsStore.bvaults[e]||(0,l.Yb)({current:(0,l.Yb)({},0n)},0n),["sliceBVaultsStore.bvaults.".concat(e)])}function useBVaultEpoches(e){return(0,d.o)(t=>{let n=t.sliceBVaultsStore.bvaults[e];if(!n||n.epochCount<=0n)return[];let a=r().range(1,parseInt((n.epochCount+1n).toString())).reverse(),u=t.sliceBVaultsStore.epoches;return a.map(t=>u["".concat(e,"_").concat(t)]).filter(e=>null!=e)},["sliceBVaultsStore.bvaults.".concat(e),"sliceBVaultsStore.epoches"])}function useEpochesData(e){let t=useBVaultEpoches(e),n=(0,d.o)(t=>t.sliceUserBVaults.epoches[e]||[],["sliceUserBVaults.epoches.".concat(e)]);return(0,c.useMemo)(()=>{let e=n.reduce((e,t)=>({...e,[t.epochId.toString()]:t}),{});return t.map(t=>(0,l.Yb)({...t,...e[t.epochId.toString()]||{bribes:[],sBribes:[],aBribes:[]}},0n))},[t,n])}function useCalcClaimable(e){let t=useEpochesData(e);return(0,c.useMemo)(()=>{let e=t.filter(e=>e.claimableAssetBalance&&e.settled);return{ids:e.map(e=>e.epochId),claimable:e.reduce((e,t)=>e+t.claimableAssetBalance,0n)}},[t])}function calcBVaultBoost(e){let t=d.w.getState(),n=t.sliceBVaultsStore.bvaults[e],u=(null==n?void 0:n.current.vaultYTokenBalance)||0n,l=(null==n?void 0:n.Y)||0n,o=l>0n?u*a.Pq/l:0n,r=(null==n?void 0:n.current.yTokenAmountForSwapYT)||0n,c=(null==n?void 0:n.lockedAssetTotal)||0n,i=r>0n?c*a.Pq/r:0n;return console.info("calcBootst:",(0,s.d)(o),(0,s.d)(i)),a.Pq,o}function useBVaultBoost(e){let t=(0,d.o)(()=>calcBVaultBoost(e),["sliceBVaultsStore.bvaults.".concat(e)]);return[(0,s.d)(t,0),t]}function calcBVaultPTApy(e){let t=d.w.getState(),n=t.sliceBVaultsStore.bvaults[e],u=(0,l.ok)(t.sliceBVaultsStore.yTokenSythetic,[e]),s=n&&n.current.assetTotalSwapAmount&&u?n.current.assetTotalSwapAmount*a.SH*BigInt(1e10)/u:0n;return s}function useBVaultApy(e){let t=(0,d.o)(()=>calcBVaultPTApy(e),["sliceBVaultsStore.bvaults.".concat(e),"sliceBVaultsStore.yTokenSythetic.".concat(e)]);return[(0,l.Jh)(t,10),t]}function useUpBVaultForUserAction(e,t){let{address:n}=(0,i.m)();return()=>{(0,l.XD)(async()=>{if(null==t||t(),!n)return;await Promise.all([d.w.getState().sliceTokenStore.updateTokensBalance([e.asset,e.pToken],n),d.w.getState().sliceTokenStore.updateTokenTotalSupply([e.asset,e.pToken]),d.w.getState().sliceBVaultsStore.updateBvaults([e]),d.w.getState().sliceBVaultsStore.updateYTokenSythetic([e])]);let a=d.w.getState().sliceBVaultsStore.bvaults[e.vault];await d.w.getState().sliceBVaultsStore.updateEpoches(e,a.epochCount>1n?[a.epochCount,a.epochCount-1n]:[a.epochCount]);let u=[];for(let t=parseInt(a.epochCount.toString());t>0;t--){let n=d.w.getState().sliceBVaultsStore.epoches["".concat(e.vault,"_").concat(t)];u.push(n)}console.info("onUserAction:epoches",u),await d.w.getState().sliceUserBVaults.updateEpoches(e,n,u)},3,1e3)}}},39577:function(e,t,n){"use strict";n.d(t,{$$:function(){return useSetLVaultPrices},UM:function(){return useUSBApr},aS:function(){return useValutsLeverageRatio},hC:function(){return useLVault},hY:function(){return useUserLVault},so:function(){return useUpLVaultOnUserAction},z6:function(){return useVaultLeverageRatio}});var a=n(19757),u=n(22139),l=n(59175),s=n(88439),o=n(26361),r=n(55349),c=n(96670),i=n(73216);let d=(0,o.Yb)({vaultMode:0,discountEnable:!1},0n),p=(0,o.Yb)({},0n);function useLVault(e){return(0,r.o)(t=>t.sliceLVaultsStore.lvaults[e]||d,["sliceLVaultsStore.lvaults.".concat(e)])}function useUserLVault(e){return(0,r.o)(t=>t.sliceLVaultsStore.user[e]||p,["sliceLVaultsStore.user.".concat(e)])}function useVaultLeverageRatio(e){let t=useLVault(e.vault),n=(0,o.pF)(t.aar,t.AARDecimals);return Math.max(0,1+1/(n-1))}function useValutsLeverageRatio(){let e=(0,l.p)(),t=a.iK[e]||[],n=(0,s.b)(()=>(0,o.Yb)({},0)),u=(0,r.o)(e=>e.sliceLVaultsStore.lvaults);return null==t||t.forEach(e=>{let t=u[e.vault],a=t?(0,o.pF)(t.aar,t.AARDecimals):0;n[e.vault]=Math.max(0,1+1/(a-1))}),n}function useSetLVaultPrices(e){var t;let n=(0,r.o)(e=>e.sliceLVaultsStore.lvaults),s=(0,r.o)(e=>e.sliceTokenStore.totalSupply),o=(0,l.p)();null===(t=a.iK[o])||void 0===t||t.forEach(t=>{let l=n[t.vault]||d,r=l.assetBalance,c=l.latestPrice,i=l.usbTotalSupply,p=s[t.xTokenAddress]||0n,f=p>0n&&r>0n&&c>0n&&i>0n&&r*c>i*u.Pq?(r*c-i*u.Pq)/p:0n;e[t.xTokenAddress]=f,e[t.assetTokenAddress]=c,p>0n&&r>0n&&c>0n&&i>0n&&r*c<i*u.Pq&&(e[a.O1[o]]=r*c/i)})}function useUSBApr(){var e;let t=(0,l.p)(),n=(0,r.o)(e=>e.sliceLVaultsStore.lvaults),u=0,s=0n,o=0n;return null===(e=a.iK[t])||void 0===e||e.forEach(e=>{let t=n[e.vault]||d;t.isStable?(s+=t.M_USB_USDC*t.Y*t.aar/10n**t.AARDecimals,o+=t.M_USB_USDC,t.M_USB_USDC>0n&&t.Y>0n&&u++):(s+=t.M_USB_ETH*t.Y,o+=t.M_USB_ETH,t.M_USB_ETH>0n&&t.Y>0n&&u++)}),{apr:o>0n?s/o:0n,aprDecimals:10}}function useUpLVaultOnUserAction(e){let{address:t}=(0,c.m)();return()=>{(0,o.XD)(async()=>{if(!t)return;let n=r.w.getState().sliceLVaultsStore,u=[e.assetTokenAddress,e.xTokenAddress,a.O1[(0,i.BV)()]];await Promise.all([n.updateLVaults([e]),n.updateUserLVault(e,t),r.w.getState().sliceTokenStore.updateTokensBalance(u,t),r.w.getState().sliceTokenStore.updateTokenTotalSupply(u)])},3,1e3).catch(console.error)}}}}]);