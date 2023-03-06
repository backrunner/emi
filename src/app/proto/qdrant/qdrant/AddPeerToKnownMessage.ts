// Original file: raft_service.proto

import type { Long } from '@grpc/proto-loader';

export interface AddPeerToKnownMessage {
  'uri'?: (string);
  'port'?: (number);
  'id'?: (number | string | Long);
  '_uri'?: "uri";
  '_port'?: "port";
}

export interface AddPeerToKnownMessage__Output {
  'uri'?: (string);
  'port'?: (number);
  'id': (string);
  '_uri': "uri";
  '_port': "port";
}
