import { BehaviorSubject } from 'rxjs';
import type logging from 'loglevel';

import type { TransferState } from '../transfers/state';
import { Address, Decodable } from '../utils/types';

export interface TransferStateish extends Decodable<TransferState> {
  _rev: string;
}

export type Migrations = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly [version: number]: (doc: any, db: RaidenDatabase) => Promise<any[]>;
};

export interface RaidenDatabaseMeta {
  _id: '_meta';
  version: number;
  network: number;
  registry: Address;
  address: Address;
  blockNumber: number;
}

export type RaidenDatabaseOptions = {
  log?: logging.Logger;
  versionchanged?: boolean;
} & (
  | PouchDB.Configuration.LocalDatabaseConfiguration
  | PouchDB.Configuration.RemoteDatabaseConfiguration
);

export interface RaidenDatabase extends PouchDB.Database {
  storageKeys: Set<string>;
  busy$: BehaviorSubject<boolean>;
  constructor: RaidenDatabaseConstructor;
  __opts: RaidenDatabaseOptions;
}

export type RaidenDatabaseConstructor = (new (
  name?: string,
  options?:
    | PouchDB.Configuration.LocalDatabaseConfiguration
    | PouchDB.Configuration.RemoteDatabaseConfiguration,
) => RaidenDatabase) & { __defaults: RaidenDatabaseOptions };
