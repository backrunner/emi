// Original file: points.proto

import type { Long } from '@grpc/proto-loader';

export interface CountResult {
  'count'?: (number | string | Long);
}

export interface CountResult__Output {
  'count': (string);
}
