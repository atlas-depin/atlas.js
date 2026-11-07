import { IChainConfig } from "../types/wallet";

export const DEFAULT_REPLICAS: number = 3
export const DEFAULT_ENCYRPTION_CHUNK_SIZE: number = 32 * Math.pow(1024, 2)

export const atlasTestnetChainConfig: IChainConfig = {
  chainId: 'itineraria-1',
  chainName: 'Atlas DePIN',
  rpc: 'https://rpc.atlasdepin.com',
  rest: 'https://api.atlasdepin.com',
  bip44: {
    coinType: 118,
  },
  stakeCurrency: {
    coinDenom: 'ATL',
    coinMinimalDenom: 'uatl',
    coinDecimals: 6,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'atl',
    bech32PrefixAccPub: 'atlpub',
    bech32PrefixValAddr: 'atlvaloper',
    bech32PrefixValPub: 'atlvaloperpub',
    bech32PrefixConsAddr: 'atlvalcons',
    bech32PrefixConsPub: 'atlvalconspub',
  },
  currencies: [
    {
      coinDenom: 'ATL',
      coinMinimalDenom: 'uatl',
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'ATL',
      coinMinimalDenom: 'uatl',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.04,
      },
    },
  ],
  features: [],
}
