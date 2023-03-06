// Original file: points.proto

import type { ReadConsistencyType as _qdrant_ReadConsistencyType, ReadConsistencyType__Output as _qdrant_ReadConsistencyType__Output } from '../qdrant/ReadConsistencyType';
import type { Long } from '@grpc/proto-loader';

export interface ReadConsistency {
  'type'?: (_qdrant_ReadConsistencyType);
  'factor'?: (number | string | Long);
  'value'?: "type"|"factor";
}

export interface ReadConsistency__Output {
  'type'?: (_qdrant_ReadConsistencyType__Output);
  'factor'?: (string);
  'value': "type"|"factor";
}
