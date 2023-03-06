// Original file: collections.proto

import type { Long } from '@grpc/proto-loader';

export interface DeleteCollection {
  'collectionName'?: (string);
  'timeout'?: (number | string | Long);
  '_timeout'?: "timeout";
}

export interface DeleteCollection__Output {
  'collectionName': (string);
  'timeout'?: (string);
  '_timeout': "timeout";
}
