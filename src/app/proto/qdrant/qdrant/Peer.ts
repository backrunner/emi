// Original file: raft_service.proto

import type { Long } from '@grpc/proto-loader';

export interface Peer {
  'uri'?: (string);
  'id'?: (number | string | Long);
}

export interface Peer__Output {
  'uri': (string);
  'id': (string);
}
