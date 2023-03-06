// Original file: points_internal_service.proto

import type { GetPoints as _qdrant_GetPoints, GetPoints__Output as _qdrant_GetPoints__Output } from '../qdrant/GetPoints';

export interface GetPointsInternal {
  'getPoints'?: (_qdrant_GetPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface GetPointsInternal__Output {
  'getPoints': (_qdrant_GetPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
