// Original file: points_internal_service.proto

import type { ClearPayloadPoints as _qdrant_ClearPayloadPoints, ClearPayloadPoints__Output as _qdrant_ClearPayloadPoints__Output } from '../qdrant/ClearPayloadPoints';

export interface ClearPayloadPointsInternal {
  'clearPayloadPoints'?: (_qdrant_ClearPayloadPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface ClearPayloadPointsInternal__Output {
  'clearPayloadPoints': (_qdrant_ClearPayloadPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
