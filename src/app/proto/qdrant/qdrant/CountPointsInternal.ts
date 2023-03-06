// Original file: points_internal_service.proto

import type { CountPoints as _qdrant_CountPoints, CountPoints__Output as _qdrant_CountPoints__Output } from '../qdrant/CountPoints';

export interface CountPointsInternal {
  'countPoints'?: (_qdrant_CountPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface CountPointsInternal__Output {
  'countPoints': (_qdrant_CountPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
