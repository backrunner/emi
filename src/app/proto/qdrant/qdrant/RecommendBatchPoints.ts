// Original file: points.proto

import type { RecommendPoints as _qdrant_RecommendPoints, RecommendPoints__Output as _qdrant_RecommendPoints__Output } from '../qdrant/RecommendPoints';
import type { ReadConsistency as _qdrant_ReadConsistency, ReadConsistency__Output as _qdrant_ReadConsistency__Output } from '../qdrant/ReadConsistency';

export interface RecommendBatchPoints {
  'collectionName'?: (string);
  'recommendPoints'?: (_qdrant_RecommendPoints)[];
  'readConsistency'?: (_qdrant_ReadConsistency | null);
  '_readConsistency'?: "readConsistency";
}

export interface RecommendBatchPoints__Output {
  'collectionName': (string);
  'recommendPoints': (_qdrant_RecommendPoints__Output)[];
  'readConsistency'?: (_qdrant_ReadConsistency__Output | null);
  '_readConsistency': "readConsistency";
}
