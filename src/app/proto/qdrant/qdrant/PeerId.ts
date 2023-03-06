// Original file: raft_service.proto

import type { Long } from '@grpc/proto-loader';

export interface PeerId {
  'id'?: (number | string | Long);
}

export interface PeerId__Output {
  'id': (string);
}
