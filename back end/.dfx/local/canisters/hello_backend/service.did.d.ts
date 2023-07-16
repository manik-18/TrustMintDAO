import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface NFT {
  'greet' : ActorMethod<[], string>,
  'inc' : ActorMethod<[], undefined>,
  'show' : ActorMethod<[], string>,
}
export interface _SERVICE extends NFT {}
