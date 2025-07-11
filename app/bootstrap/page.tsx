'use client'
import { BVault2Bootstrap, BVault2Card, BVault2Info, BVault2Swaps } from "@/components/bvaults2"
import { MyPositions } from "@/components/bvaults2/positions"
import { useBvualt2Data } from "@/components/bvaults2/useFets"
import { BVault2Chart } from "@/components/bvaut2-chart"
import { Noti } from "@/components/noti"
import { PageWrap } from "@/components/page-wrap"
import { Spinner } from "@/components/spinner"
import { ConfigChainsProvider } from "@/components/support-chains"
import { BVault2Config, BVAULTS2CONIG } from "@/config/bvaults2"
import { ENV } from "@/constants"
import { isError, isLoading, isSuccess } from "@/hooks/useFet"
import { Grid } from "@tremor/react"
import { useSearchParams } from "next/navigation"
import { Fragment } from "react"
import { Address, isAddressEqual } from "viem"


function Bvualt2Page({ vc }: { vc: BVault2Config }) {
    const vd = useBvualt2Data(vc)
    const showBootstrap = (vd.result?.epochIdCount ?? 0n) < 1n
    // console.info('vd:', vd.status)
    return <Fragment>
        {isError(vd) && 'Opps! Network Error!'}
        {isLoading(vd) && <Spinner className="mt-10 mx-auto text-black dark:text-white" />}
        {isSuccess(vd) && <Fragment>
            {
                showBootstrap ? <>
                    <div className='page-title'>Bootstrap</div>
                    <Noti data='Deposit underlying assets to earn rewards. The Vault will launch once the target value is reached.' />
                    <BVault2Bootstrap vc={vc} />
                </> : <>
                    <div className="grid gap-5 lg:grid-cols-[8fr_5fr] mb-5">
                        <BVault2Info vc={vc} />
                        <div className="row-span-2">
                            <BVault2Swaps vc={vc} />
                        </div>
                        <BVault2Chart vc={vc} />
                    </div>
                    <MyPositions vc={vc} />
                </>
            }
        </Fragment>}
    </Fragment>
}

export default function BootstrapPage() {
    const vcs = BVAULTS2CONIG.filter(item => item.onEnv.includes(ENV))
    const params = useSearchParams()
    const paramsVault = params.get('vault')
    if (vcs.length == 0) return null
    const currentVC = paramsVault ? vcs.find(item => isAddressEqual(item.vault, paramsVault as Address)) : undefined
    return (
        <PageWrap>
            <div className='w-full max-w-[1368px] px-4 mx-auto md:pb-8'>
                {
                    currentVC ?
                        <ConfigChainsProvider chains={[currentVC.chain]}><Bvualt2Page vc={currentVC} /> </ConfigChainsProvider> :
                        <Grid numItems={1} numItemsMd={2} numItemsLg={3} className='gap-5 mt-4'>
                            {vcs.map((item, index) => (
                                <ConfigChainsProvider key={`b_vault2_item_${index}`} chains={[item.chain]}>
                                    <BVault2Card vc={item} />
                                </ConfigChainsProvider>
                            ))}
                        </Grid>
                }

            </div>
        </PageWrap>
    )
}