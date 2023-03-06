// Original file: collections_internal_service.proto

import type { GetCollectionInfoRequest as _qdrant_GetCollectionInfoRequest, GetCollectionInfoRequest__Output as _qdrant_GetCollectionInfoRequest__Output } from '../qdrant/GetCollectionInfoRequest';

export interface GetCollectionInfoRequestInternal {
  'getCollectionInfoRequest'?: (_qdrant_GetCollectionInfoRequest | null);
  'shardId'?: (number);
}

export interface GetCollectionInfoRequestInternal__Output {
  'getCollectionInfoRequest': (_qdrant_GetCollectionInfoRequest__Output | null);
  'shardId': (number);
}
