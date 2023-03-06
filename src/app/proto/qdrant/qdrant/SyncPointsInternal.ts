// Original file: points_internal_service.proto

import type { SyncPoints as _qdrant_SyncPoints, SyncPoints__Output as _qdrant_SyncPoints__Output } from '../qdrant/SyncPoints';

export interface SyncPointsInternal {
  'syncPoints'?: (_qdrant_SyncPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface SyncPointsInternal__Output {
  'syncPoints': (_qdrant_SyncPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
