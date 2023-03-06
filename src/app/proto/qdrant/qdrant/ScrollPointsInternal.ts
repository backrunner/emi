// Original file: points_internal_service.proto

import type { ScrollPoints as _qdrant_ScrollPoints, ScrollPoints__Output as _qdrant_ScrollPoints__Output } from '../qdrant/ScrollPoints';

export interface ScrollPointsInternal {
  'scrollPoints'?: (_qdrant_ScrollPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface ScrollPointsInternal__Output {
  'scrollPoints': (_qdrant_ScrollPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
