// Original file: points.proto

import type { BatchResult as _qdrant_BatchResult, BatchResult__Output as _qdrant_BatchResult__Output } from '../qdrant/BatchResult';

export interface RecommendBatchResponse {
  'result'?: (_qdrant_BatchResult)[];
  'time'?: (number | string);
}

export interface RecommendBatchResponse__Output {
  'result': (_qdrant_BatchResult__Output)[];
  'time': (number);
}
