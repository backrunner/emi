// Original file: points_internal_service.proto

import type { RecommendPoints as _qdrant_RecommendPoints, RecommendPoints__Output as _qdrant_RecommendPoints__Output } from '../qdrant/RecommendPoints';

export interface RecommendPointsInternal {
  'recommendPoints'?: (_qdrant_RecommendPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface RecommendPointsInternal__Output {
  'recommendPoints': (_qdrant_RecommendPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
