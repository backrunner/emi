// Original file: raft_service.proto

import type { Peer as _qdrant_Peer, Peer__Output as _qdrant_Peer__Output } from '../qdrant/Peer';
import type { Long } from '@grpc/proto-loader';

export interface AllPeers {
  'allPeers'?: (_qdrant_Peer)[];
  'firstPeerId'?: (number | string | Long);
}

export interface AllPeers__Output {
  'allPeers': (_qdrant_Peer__Output)[];
  'firstPeerId': (string);
}
