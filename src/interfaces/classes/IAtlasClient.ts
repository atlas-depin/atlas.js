import type { WalletType } from "../../types"
import type { QueryHelper } from "../../query-helper";
import type { TxOptions } from "../../types/wallet";
import type { IndexedTx } from "@cosmjs/stargate";
import { ClientEvent } from "../../types/events";

export interface IAtlasClient {
  get query(): QueryHelper;
  get address(): string;

  on: (event: ClientEvent | string, listener: (...args: any[]) => void) => this;
  off: (event: ClientEvent | string, listener: (...args: any[]) => void) => this;
  emit: (event: ClientEvent | string, ...args: any[]) => boolean;

  initialize(): Promise<void>;
  isInitialized(): boolean;
  dispose(): Promise<void>;

  connectWallet(type: WalletType, options?: any): Promise<void>;
  disconnectWallet(): Promise<void>;
  isWalletConnected(): boolean;
  getWalletType(): WalletType | null;

  signMessage(message: string | Uint8Array): Promise<string>;
  signAndBroadcast(messages: any[], options?: TxOptions): Promise<IndexedTx>;
}
