// Original file: points_internal_service.proto

import type { DeletePayloadPoints as _qdrant_DeletePayloadPoints, DeletePayloadPoints__Output as _qdrant_DeletePayloadPoints__Output } from '../qdrant/DeletePayloadPoints';

export interface DeletePayloadPointsInternal {
  'deletePayloadPoints'?: (_qdrant_DeletePayloadPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface DeletePayloadPointsInternal__Output {
  'deletePayloadPoints': (_qdrant_DeletePayloadPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
