// Original file: collections.proto

import type { Distance as _qdrant_Distance, Distance__Output as _qdrant_Distance__Output } from '../qdrant/Distance';
import type { Long } from '@grpc/proto-loader';

export interface VectorParams {
  'size'?: (number | string | Long);
  'distance'?: (_qdrant_Distance);
}

export interface VectorParams__Output {
  'size': (string);
  'distance': (_qdrant_Distance__Output);
}
