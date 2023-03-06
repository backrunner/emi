// Original file: points.proto

import type { UpdateResult as _qdrant_UpdateResult, UpdateResult__Output as _qdrant_UpdateResult__Output } from '../qdrant/UpdateResult';

export interface PointsOperationResponse {
  'result'?: (_qdrant_UpdateResult | null);
  'time'?: (number | string);
}

export interface PointsOperationResponse__Output {
  'result': (_qdrant_UpdateResult__Output | null);
  'time': (number);
}
