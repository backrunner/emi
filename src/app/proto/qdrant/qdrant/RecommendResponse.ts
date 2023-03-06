// Original file: points.proto

import type { ScoredPoint as _qdrant_ScoredPoint, ScoredPoint__Output as _qdrant_ScoredPoint__Output } from '../qdrant/ScoredPoint';

export interface RecommendResponse {
  'result'?: (_qdrant_ScoredPoint)[];
  'time'?: (number | string);
}

export interface RecommendResponse__Output {
  'result': (_qdrant_ScoredPoint__Output)[];
  'time': (number);
}
