// Original file: points_internal_service.proto

import type { UpsertPoints as _qdrant_UpsertPoints, UpsertPoints__Output as _qdrant_UpsertPoints__Output } from '../qdrant/UpsertPoints';

export interface UpsertPointsInternal {
  'upsertPoints'?: (_qdrant_UpsertPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface UpsertPointsInternal__Output {
  'upsertPoints': (_qdrant_UpsertPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
