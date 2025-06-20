import { abiBVault2, abiHook, abiMintPool } from "@/config/abi/BVault2"
import { BVault2Config } from "@/config/bvaults2"
import { useCurrentChainId } from "@/hooks/useCurrentChainId"
import { logUserAction } from "@/lib/logs"
import { fmtBn, formatPercent, genDeadline, handleError, parseEthers } from "@/lib/utils"
import { getPC } from "@/providers/publicClient"
import { displayBalance } from "@/utils/display"
import { useQuery } from "@tanstack/react-query"
import _ from "lodash"
import { useState } from "react"
import { useDebounce, useToggle } from "react-use"
import { useAccount, useWalletClient } from "wagmi"
import { ApproveAndTx } from "../approve-and-tx"
import { AssetInput } from "../asset-input"
import { Fees } from "../fees"
import { GetvIP } from "../get-lp"
import { CoinIcon } from "../icons/coinicon"
import { SimpleTabs } from "../simple-tabs"
import { Swap, SwapDown } from "../ui/bbtn"
import { reFetWithBvault2 } from "./fetKeys"
import { usePtToken, useYtToken } from "./getToken"
import { useBT2PTPrice, usePTApy } from "./useDatas"
import { useBalance, useTotalSupply } from "../../hooks/useToken"
import { getTokenBy } from "@/config/tokens"

function PTSwap({ vc }: { vc: BVault2Config }) {
    const { address } = useAccount()
    const chainId = useCurrentChainId()
    const bt = getTokenBy(vc.bt, chainId)!
    const pt = usePtToken(vc)!
    const [inputAsset, setInputAsset] = useState('')
    const inputAssetBn = parseEthers(inputAsset)
    const [isToggled, toggle] = useToggle(false)
    const input = isToggled ? pt : bt
    const output = isToggled ? bt : pt
    const inputBalance = useBalance(input)
    const outputBalance = useBalance(output)

    const { result: btPrice } = useBT2PTPrice(vc)
    const price = isToggled ? _.round(1 / btPrice, 2) : _.round(btPrice, 2)
    const swapPrice = `1 ${input.symbol} = ${price} ${output.symbol}`

    const [calcPtSwapKey, setCalcPtSwapKey] = useState<any[]>(['calcPTSwapOut'])
    useDebounce(() => setCalcPtSwapKey(['calcPTSwapOut', isToggled, inputAssetBn]), 300, [isToggled, inputAssetBn])
    const { data: outAmount, isFetching: isFetchingOut } = useQuery({
        queryKey: calcPtSwapKey,
        initialData: 0n,
        queryFn: async () => {
            if (inputAssetBn <= 0n || calcPtSwapKey.length == 1) return 0n
            return getPC().readContract({ abi: abiHook, address: vc.hook, functionName: isToggled ? 'getAmountOutVPTToBT' : 'getAmountOutBTToVPT', args: [inputAssetBn] })
        }
    })
    const errorInput = !isFetchingOut && inputAssetBn > 0 && outAmount == 0n ? 'Market liquidity is insufficient' : ''
    // isInputBT ? -outputBn : inputBn, isInputBT ? inputBn : -outputBn
    const [apy, apyto, priceimpcat] = usePTApy(vc, isToggled ? inputAssetBn : -outAmount, isToggled ? -outAmount : inputAssetBn)
    const onSwitch = () => {
        toggle()
    }
    return <div className='flex flex-col gap-1'>
        <AssetInput asset={input.symbol} amount={inputAsset} balance={inputBalance.result} setAmount={setInputAsset} error={errorInput} />
        <Swap onClick={onSwitch} />
        <div className="flex justify-between items-center">
            <div className="font-bold">Receive</div>
            <GetvIP address={bt.address} />
        </div>
        <AssetInput asset={output.symbol} loading={isFetchingOut && inputAssetBn > 0n} disable amount={fmtBn(outAmount, output.decimals)} />
        <div className="flex justify-between items-center text-xs font-medium">
            <div>Price: {swapPrice}</div>
            <div>Price Impact: {formatPercent(priceimpcat)}</div>
        </div>
        <div className="flex justify-between items-center text-xs font-medium opacity-60">
            <div>Implied APY Change: {formatPercent(apy)} → {formatPercent(apyto)}</div>
            <Fees fees={[{ name: 'Transaction Fees', value: 1.2 }, { name: 'Unstake Fees(Verio)', value: 1.2 }]} />
        </div>
        <ApproveAndTx
            className='mx-auto mt-4'
            tx='Swap'
            disabled={inputAssetBn <= 0n || inputAssetBn > inputBalance.result}
            spender={vc.vault}
            approves={{
                [input.address]: inputAssetBn,
            }}
            config={{
                abi: abiBVault2,
                address: vc.vault,
                functionName: isToggled ? 'swapExactPTForBT' : 'swapExactBTForPT',
                args: [inputAssetBn, 0n, genDeadline()],
            }}
            onTxSuccess={() => {
                logUserAction(vc, address!, `PTSwap:${isToggled ? 'PT->BT' : 'BT->PT'}:(${fmtBn(inputAssetBn)})`)
                setInputAsset('')
                reFetWithBvault2(chainId, vc, inputBalance.key, outputBalance.key)
            }}
        />
    </div>
}
export function PTYTMint({ vc }: { vc: BVault2Config }) {
    const { address } = useAccount()
    const chainId = useCurrentChainId()
    const pt = usePtToken(vc)!
    const yt = useYtToken(vc)!
    const input = getTokenBy(vc.bt, chainId)!
    const inputBalance = useBalance(input)
    const ptBalance = useBalance(pt)
    const ytBalance = useBalance(yt)
    const [inputAsset, setInputAsset] = useState('')
    const inputAssetBn = parseEthers(inputAsset)
    return <div className='flex flex-col gap-1'>
        <AssetInput asset={input.symbol} amount={inputAsset} balance={inputBalance.result} setAmount={setInputAsset} />
        <SwapDown />
        <div className="flex justify-between items-center">
            <div className="font-bold">Receive</div>
            <GetvIP address={vc.asset} />
        </div>
        <AssetInput asset={pt.symbol} disable amount={inputAsset} />
        <div className="text-center opacity-60 text-xs font-medium">And</div>
        <AssetInput asset={yt.symbol} disable amount={inputAsset} />
        <ApproveAndTx
            className='mx-auto mt-4'
            tx='Mint'
            disabled={inputAssetBn <= 0n || inputAssetBn > inputBalance.result}
            spender={vc.mintpool}
            approves={{
                [input.address]: inputAssetBn,
            }}
            config={{
                abi: abiMintPool,
                address: vc.mintpool,
                functionName: 'mint',
                args: [vc.bt, inputAssetBn],
            }}
            onTxSuccess={() => {
                logUserAction(vc, address!, `PTYTMint:(${fmtBn(inputAssetBn)})`)
                setInputAsset('')
                reFetWithBvault2(chainId, vc, inputBalance.key, ptBalance.key, ytBalance.key)
            }}
        />
    </div>
}
export function PTYTRedeem({ vc }: { vc: BVault2Config }) {
    const { address } = useAccount()
    const chainId = useCurrentChainId()
    const out = getTokenBy(vc.bt, chainId)!

    const pt = usePtToken(vc)!
    const yt = useYtToken(vc)!
    const ptBalance = useBalance(pt)
    const ytBalance = useBalance(yt)
    const outBalance = useBalance(out)

    const [input, setInput] = useState('')
    const inputBn = parseEthers(input)

    return <div className='flex flex-col gap-1'>
        <AssetInput asset={pt.symbol} amount={input} balance={ptBalance.result} setAmount={setInput} />
        <div className="text-center opacity-60 text-xs font-medium">And</div>
        <AssetInput asset={yt.symbol} amount={input} balance={ytBalance.result} setAmount={setInput} />
        <SwapDown />
        <div className="flex justify-between items-center">
            <div className="font-bold">Receive</div>
            <GetvIP address={vc.asset} />
        </div>
        <AssetInput asset={out.symbol} disable amount={displayBalance(inputBn, undefined, out.decimals)} />
        <ApproveAndTx
            className='mx-auto mt-4'
            tx='Redeem'
            disabled={inputBn <= 0n || inputBn < ptBalance.result || inputBn < ytBalance.result}
            config={{
                abi: abiMintPool,
                address: vc.mintpool,
                functionName: 'redeem',
                args: [vc.bt, inputBn],
            }}
            onTxSuccess={() => {
                logUserAction(vc, address!, `PTYTRedeem:(${fmtBn(inputBn)})`)
                setInput('')
                reFetWithBvault2(chainId, vc, ptBalance.key, ytBalance.key, outBalance.key)
            }}
        />
    </div>
}

export function PT({ vc }: { vc: BVault2Config }) {
    const chainId = useCurrentChainId()
    const asset = getTokenBy(vc.asset, chainId)!
    const pt = usePtToken(vc)!
    const ptc = useTotalSupply(pt)
    const { data: walletClient } = useWalletClient()
    const onAddPToken = () => {
        walletClient?.watchAsset({ type: 'ERC20', options: pt }).catch(handleError)
    }
    const [apy] = usePTApy(vc)
    return <div className="flex flex-col gap-4 w-full">
        <div className='card !p-0 overflow-hidden w-full'>
            <div className='flex p-5 bg-[#10B98126] gap-5'>
                <CoinIcon size={48} symbol='PToken' />
                <div className='flex flex-col gap-3'>
                    <div className='text-xl leading-6 text-black dark:text-white font-semibold'>{pt.symbol}</div>
                    <div className='text-xs leading-none text-black/60 dark:text-white/60 font-medium'>1 {pt.symbol} is equal to1 {asset.symbol} at maturity</div>
                </div>
            </div>
            <div className='flex whitespace-nowrap items-baseline justify-between px-2.5 pt-2 gap-2.5'>
                <div className="text-lg font-medium">{formatPercent(apy)}</div>
                <div className="text-xs font-semibold opacity-60">Fixed APY</div>
                <div className="text-xs font-semibold opacity-60 ml-auto">Circulation amount</div>
                <div className="text-lg font-medium">{displayBalance(ptc.result, undefined, pt.decimals)}</div>
            </div>
            <div className='flex px-2 pb-4'>
                <button className='btn-link ml-auto text-primary text-xs underline-offset-2' onClick={onAddPToken}>
                    Add to wallet
                </button>
            </div>
        </div>
        <div className="card !p-4">
            <SimpleTabs
                listClassName="p-0 gap-6 mb-4"
                triggerClassName={`text-base font-bold leading-none data-[state="active"]:text-black`}
                data={[
                    { tab: 'Swap', content: <PTSwap vc={vc} /> },
                    { tab: 'Mint', content: <PTYTMint vc={vc} /> },
                    { tab: 'Redeem', content: <PTYTRedeem vc={vc} /> },
                ]}
            />
        </div>
    </div>
}