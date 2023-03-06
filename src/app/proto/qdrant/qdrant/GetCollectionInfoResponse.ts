// Original file: collections.proto

import type { CollectionInfo as _qdrant_CollectionInfo, CollectionInfo__Output as _qdrant_CollectionInfo__Output } from '../qdrant/CollectionInfo';

export interface GetCollectionInfoResponse {
  'result'?: (_qdrant_CollectionInfo | null);
  'time'?: (number | string);
}

export interface GetCollectionInfoResponse__Output {
  'result': (_qdrant_CollectionInfo__Output | null);
  'time': (number);
}
