import { Server } from 'http';
import { Raiden } from 'raiden-ts';
import { Logger } from 'loglevel';
import { Express } from 'express';

export interface CliArguments {
  ethNode: string;
  privateKey: string;
  store: string;
  port: number;
  password?: string;
  config?: Record<string, unknown>;
}

export interface Cli {
  log: Logger;
  raiden: Raiden;
  app?: Express;
  server?: Server;
}

export enum ApiChannelState {
  opened = 'opened',
  closed = 'closed',
  settled = 'settled',
}

// Data structures as exchanged over the API
export interface ApiChannel {
  channel_identifier: string;
  token_network_address: string;
  partner_address: string;
  token_address: string;
  balance: string;
  total_deposit: string;
  total_withdraw: string;
  state: ApiChannelState;
  settle_timeout: string;
  reveal_timeout: string;
}

export enum ApiPaymentEvents {
  sent = 'EventPaymentSentSuccess',
  received = 'EventPaymentReceivedSuccess',
}

export interface ApiPayment {
  event: ApiPaymentEvents;
  initiator_address: string;
  target_address: string;
  token_address: string;
  amount: string;
  identifier: string;
  secret: string;
  secret_hash: string;
  log_time: string;
}