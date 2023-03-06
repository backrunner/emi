// Original file: points_internal_service.proto

import type { SearchPoints as _qdrant_SearchPoints, SearchPoints__Output as _qdrant_SearchPoints__Output } from '../qdrant/SearchPoints';

export interface SearchBatchPointsInternal {
  'collectionName'?: (string);
  'searchPoints'?: (_qdrant_SearchPoints)[];
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface SearchBatchPointsInternal__Output {
  'collectionName': (string);
  'searchPoints': (_qdrant_SearchPoints__Output)[];
  'shardId'?: (number);
  '_shardId': "shardId";
}
