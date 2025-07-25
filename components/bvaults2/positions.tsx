import { abiBVault2, abiRewardManager } from "@/config/abi/BVault2";
import { BVault2Config } from "@/config/bvaults2";
import { getTokenBy, Token } from "@/config/tokens";
import { useCurrentChainId } from "@/hooks/useCurrentChainId";
import { reFet } from "@/hooks/useFet";
import { cn } from "@/lib/utils";
import { displayBalance } from "@/utils/display";
import _, { now } from "lodash";
import { useMemo } from "react";
import { Address } from "viem";
import { useAccount } from "wagmi";
import { useBalance } from "../../hooks/useToken";
import { ApproveAndTx, Txs } from "../approve-and-tx";
import { CoinAmount } from "../coin-amount";
import { CoinIcon } from "../icons/coinicon";
import STable from "../simple-table";
import { getPtToken, getYtToken } from "./getToken";
import { useBvault2LPBTRewards, useBvault2YTRewards, useBvualt2PTRedeems } from "./useFets";
import { Points } from "./points";


const MCoinAmount = ({ ...p }: Parameters<typeof CoinAmount>[0]) => {
    return <CoinAmount className="font-bold text-sm" symbolClassName="opacity-100" {...p} />
}
function TokenSymbol({ t, size = 32, className }: { t?: Token, size?: number, className?: string }) {
    if (!t) return null
    return <div className={cn("flex gap-2 items-center font-semibold", className)}>
        <CoinIcon symbol={t.symbol} size={size} />
        {t.symbol}
    </div>
}

const claimColSize = 1.3;
const statuColSize = 1.6
function PT({ vc }: { vc: BVault2Config }) {
    const chainId = useCurrentChainId()
    const redeems = useBvualt2PTRedeems(vc)
    const data = useMemo(() => {
        if (!redeems.result.length) return []
        const groups = _.groupBy(redeems.result, item => {
            const epochActive = (item.startTime + item.duration) * 1000n > BigInt(now())
            return epochActive ? 'active' : 'mature'
        })
        const res = []
        const active = groups['active']?.[0]
        if (active) {
            const pt = getPtToken(vc, active.PT)
            res.push([
                <TokenSymbol key="token" t={pt} />,
                displayBalance(active.redeemable, undefined, pt.decimals),
                'Active',
                <div key='redeemable'>
                </div>,
                <div key='calim'>
                </div>
            ])
        }
        const matures = groups['mature']
        if (matures && matures.length) {
            const pt = getPtToken(vc, active?.PT ?? matures[0].PT)
            const sum = matures.reduce((sum, item) => sum + item.redeemable, 0n)
            res.push([
                <TokenSymbol key="token" t={pt} />,
                displayBalance(sum, undefined, pt.decimals),
                'Mature',
                <div key='redeemable'>
                    <MCoinAmount token={getTokenBy(vc.bt, chainId)!} amount={sum} />
                </div>,
                <div key='calim'>
                    <Txs
                        tx="Claim"
                        className="w-28 font-semibold h-7"
                        onTxSuccess={() => reFet(redeems.key)}
                        txs={matures.filter(item => item.redeemable > 0n).map(item => ({ abi: abiBVault2, functionName: 'redeemByMaturedPT', address: vc.vault, args: [item.PT, item.redeemable] }))}
                    />
                </div>
            ])
        }
        return res;
    }, [redeems.result])
    const header = ['PT', 'Value', 'Status', 'Redeemable', '']
    return <div className="animitem card !p-4 bg-white">
        <STable
            headerClassName='text-left font-semibold border-b-0'
            headerItemClassName='py-1 px-0 text-base'
            rowClassName='text-left text-black text-sm leading-none font-medium'
            cellClassName='py-2 px-0'
            header={header}
            span={{ 2: statuColSize, 3: 2, [header.length - 1]: claimColSize }}
            data={data}
        />
    </div>
}

function TokenBalance({ t }: { t?: Token }) {
    const balance = useBalance(t)
    if (!t) return null;
    return <>{displayBalance(balance.result, undefined, t.decimals)}</>
}
function YT({ vc }: { vc: BVault2Config }) {
    const chainId = useCurrentChainId()
    const rewards = useBvault2YTRewards(vc)
    const { address } = useAccount()
    const data = useMemo(() => {
        if (!rewards.result.length) {
            return []
        }
        const res = []
        const groups = _.groupBy(rewards.result, (item) => {
            const epochActive = (item.startTime + item.duration) * 1000n > BigInt(now())
            return epochActive ? 'active' : 'mature'
        })
        const active = groups['active']?.[0]
        const matures = groups['mature']
        if (active) {
            const yt = getYtToken(vc, active.YT)
            const disableClaim = !active.rewrads.find(item => item[1] > 0n)
            res.push([
                <TokenSymbol key="token" t={yt} />,
                <TokenBalance t={yt} key='ytBalance' />,
                'Active',
                <div key="token2">
                    {active.rewrads.map(([token, amount]) => <MCoinAmount token={getTokenBy(token, chainId)!} key={`rewards_${token}`} amount={amount} />)}
                    <Points vc={vc} size={16} />
                </div>,
                '',
                <ApproveAndTx disabled={disableClaim} onTxSuccess={() => reFet(rewards.key)} key="claim" className="w-28 font-semibold h-7" tx="Claim" config={{ abi: abiRewardManager, functionName: 'claimRewards', address: yt.address, args: [address!] }} />,
            ])
        }
        if (matures && matures.length) {
            const tokens: { [k: Address]: bigint } = {}
            const yts: Address[] = []

            matures.forEach(item => {
                item.rewrads.forEach(([t, value]) => {
                    tokens[t] = (tokens[t] ?? 0n) + value
                    if (value > 0n) {
                        yts.push(item.YT)
                    }
                })
            })
            const sumRewards = _.keys(tokens).map(key => ([key, tokens[key as Address]] as [Address, bigint]))
            res.push([
                '',
                '',
                'Rewards for mature YT',
                <div key="token2">
                    {sumRewards.map(([token, amount]) => <MCoinAmount token={getTokenBy(token, chainId)!} key={`rewards_${token}`} amount={amount} />)}
                </div>,
                '',
                <Txs
                    onTxSuccess={() => reFet(rewards.key)}
                    key="claim"
                    className="w-28 font-semibold h-7"
                    tx="Claim"
                    txs={yts.map((yt) => ({ abi: abiRewardManager, functionName: 'claimRewards', address: yt, args: [address!] }))}
                />
            ])
        }
        return res;
    }, [rewards.result])
    const header = ['YT', 'Value', 'Status', 'Yield', 'Airdrops', '']
    return <div className="animitem card !p-4 bg-white">
        <STable
            headerClassName='text-left font-semibold border-b-0'
            headerItemClassName='py-1 px-0 text-base'
            rowClassName='text-left text-black text-sm leading-none font-medium'
            cellClassName='py-2 px-0'
            header={header}
            span={{ 2: statuColSize, [header.length - 1]: claimColSize }}
            data={data}
        />
    </div>
}
function LPBT({ vc }: { vc: BVault2Config }) {
    const chainId = useCurrentChainId()
    const rewards = useBvault2LPBTRewards(vc)
    const { address } = useAccount()
    const data = useMemo(() => {
        if (!rewards.result.length) return []
        return rewards.result.map(item => [
            <TokenSymbol key="token" t={item.token} />,
            <TokenBalance t={item.token} key={'tokenBalance'} />,
            '',
            <div key="token2">
                {item.rewards.map(([token, amount]) => <MCoinAmount token={getTokenBy(token, chainId)!} key={`rewards_${token}`} amount={amount} />)}
                <Points vc={vc} size={16} />
            </div>,
            // <MCoinAmount key="amount" token={getTokenBy('0x5267F7eE069CEB3D8F1c760c215569b79d0685aD', chainId)!} />,
            '',
            <ApproveAndTx disabled={!item.rewards.find(item => item[1] > 0n)} onTxSuccess={() => reFet(rewards.key)} key="claim" className="w-28 font-semibold h-7" tx="Claim" config={{ abi: abiRewardManager, functionName: 'claimRewards', address: item.token.address, args: [address!] }} />,
        ])
    }, [rewards.result])
    const header = ['LP/BT', 'Value', '', 'Yield', 'Airdrops', '']
    return <div className="animitem card !p-4 bg-white">
        <STable
            headerClassName='text-left font-semibold border-b-0'
            headerItemClassName='py-1 px-0 text-base'
            rowClassName='text-left text-black text-sm leading-none font-medium'
            cellClassName='py-2 px-0'
            header={header}
            span={{ 2: statuColSize, [header.length - 1]: claimColSize }}
            data={data}
        />
    </div>
}

export function MyPositions({ vc }: { vc: BVault2Config }) {
    return <div className="flex flex-col gap-5">
        <div className="animitem font-semibold text-2xl leading-none">My Positions</div>
        <PT vc={vc} />
        <YT vc={vc} />
        <LPBT vc={vc} />
    </div>
}