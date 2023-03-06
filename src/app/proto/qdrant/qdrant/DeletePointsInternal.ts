// Original file: points_internal_service.proto

import type { DeletePoints as _qdrant_DeletePoints, DeletePoints__Output as _qdrant_DeletePoints__Output } from '../qdrant/DeletePoints';

export interface DeletePointsInternal {
  'deletePoints'?: (_qdrant_DeletePoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface DeletePointsInternal__Output {
  'deletePoints': (_qdrant_DeletePoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
