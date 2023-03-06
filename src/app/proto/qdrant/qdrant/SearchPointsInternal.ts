// Original file: points_internal_service.proto

import type { SearchPoints as _qdrant_SearchPoints, SearchPoints__Output as _qdrant_SearchPoints__Output } from '../qdrant/SearchPoints';

export interface SearchPointsInternal {
  'searchPoints'?: (_qdrant_SearchPoints | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface SearchPointsInternal__Output {
  'searchPoints': (_qdrant_SearchPoints__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
