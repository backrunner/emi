// Original file: points_internal_service.proto

import type { SetPayloadPoints as _qdrant_SetPayloadPoints, SetPayloadPoints__Output as _qdrant_SetPayloadPoints__Output } from '../qdrant/SetPayloadPoints';

export interface SetPayloadPointsInternal {
  'setPayloadPoints'?: (_qdrant_SetPayloadPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface SetPayloadPointsInternal__Output {
  'setPayloadPoints': (_qdrant_SetPayloadPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
