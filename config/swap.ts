import { Address } from 'viem'
import { storyTestnet } from './network'
import { proxyGetDef } from '@/lib/utils'

export const WAND_PROTOCOL_ADDRESS: { [k: number]: Address } = {
  [storyTestnet.id]: '0xC816c35f07a40021e15295229dDb5895c90179ef',
}

export const USBSymbol = 'ZUSD'
export const USB_ADDRESS: { [k: number]: Address } = {
  [storyTestnet.id]: '0x02AE40D3DA49ce771CE444A57dd965658aAb5B29',
}
export const ETHSymbol = 'BERA'
export const NATIVE_TOKEN_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

export const VAULT_QUERY_ADDRESS: { [k: number]: Address } = {
  [storyTestnet.id]: '0xC30Cb272624339d380FBf56277F47B577A9455Df',
}

export const PROTOCOL_SETTINGS_ADDRESS: { [k: number]: Address } = {
  [storyTestnet.id]: '0xa96Ffb41dfDe9b33aF3D233eaa05EB8B6798B477',
}

export type VaultConfig = {
  offer?: Boolean
  status?: Boolean
  isStable?: boolean
  vault: Address
  assetTokenSymbol: string
  assetTokenAddress: Address
  assetTokenFeed: Address
  xTokenSymbol: string
  xTokenAddress: Address
  vaultQuery: Address
  ptyPoolBelowAddress?: Address
  ptyPoolAboveAddress?: Address
  version: string
  disableIn?: boolean
}

export const VAULTS_CONFIG: { [k: number]: VaultConfig[] } = {
  [storyTestnet.id]: [],
}

export const OLD_VAULTS_CONFIG: { [k: number]: VaultConfig[] } = {}

// 0x8c1F9F70B24311B3ee8617B179E13EB8E4d8F163  ETHX/ETH pool

// 0xeBDdc3d4cB5984899ab58b4f88a9af61624839c9   USBD/USDBx pool
export const THUSTER_LP: {
  address: Address
  token0: Address
  token0Symbol: string
  token1: Address
  token1Symbol: string
}[] = [
  {
    address: '0x8c1F9F70B24311B3ee8617B179E13EB8E4d8F163',
    token0: '0x4300000000000000000000000000000000000004',
    token0Symbol: 'WETH',
    token1: '0xd79d6Fe06F4C2b17291015169d1443f50D0C2838',
    token1Symbol: 'ETHx',
  },
  {
    address: '0xeBDdc3d4cB5984899ab58b4f88a9af61624839c9',
    token0: '0x4300000000000000000000000000000000000003',
    token0Symbol: 'USDB',
    token1: '0x836aED3b0E0ee44C77e0b6Db34D170AbCCe9BaAC',
    token1Symbol: 'USDBx',
  },
  {
    address: '0x2c308c4F4CEDBd8b27524f53Bbc9Ffd095fc996C',
    token0: '0x4300000000000000000000000000000000000003',
    token0Symbol: 'USDB',
    token1: '0xD86b2B6f1169e4304Be700D6522c3Ff79FF8fB77',
    token1Symbol: USBSymbol,
  },
]

export type PlainVaultConfig = {
  vault: Address
  assetToken: Address
  assetTokenSymbol: string
}

export const PLAIN_VAULTS_CONFIG: { [k: number]: PlainVaultConfig[] } = proxyGetDef({}, [])
