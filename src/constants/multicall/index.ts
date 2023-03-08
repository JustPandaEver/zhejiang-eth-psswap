import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x547FC1a6Aa7C502b7897fEb405526b539B1d9e76', // TODO
  [ChainId.BSCTESTNET]: '0x547FC1a6Aa7C502b7897fEb405526b539B1d9e76'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
