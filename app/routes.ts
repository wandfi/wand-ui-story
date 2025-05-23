import { tabToSearchParams } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Address } from 'viem'

export function toBVault(r: ReturnType<typeof useRouter>, vault?: Address, tab?: string, subTab?: string) {
  if (!vault) return r.push('/ip-vaults')
  let path = `/ip-vaults?vault=${vault}`
  tab && (path += `&tab=${tabToSearchParams(tab)}`)
  subTab && (path += `&subtab=${tabToSearchParams(subTab)}`)
  r.push(path)
}

export function toLVault(r: ReturnType<typeof useRouter>, vault?: Address, tab?: string) {
  if (!vault) return r.push('/l-vaults')
  let path = `/l-vaults?vault=${vault}`
  tab && (path += `&tab=${tabToSearchParams(tab)}`)
  r.push(path)
}

export function toLntVault(r: ReturnType<typeof useRouter>, vault?: Address, tab?: string) {
  if (!vault) return r.push('/lnt-vaults')
  let path = `/lnt-vaults?vault=${vault}`
  tab && (path += `&tab=${tabToSearchParams(tab)}`)
  r.push(path)
}

export function toBVault2(r: ReturnType<typeof useRouter>, vault?: Address) {
  if (!vault) return r.push('/bootstrap')
  let path = `/bootstrap?vault=${vault}`
  r.push(path)
}
