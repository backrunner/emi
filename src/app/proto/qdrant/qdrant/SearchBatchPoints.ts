// Original file: points.proto

import type { SearchPoints as _qdrant_SearchPoints, SearchPoints__Output as _qdrant_SearchPoints__Output } from '../qdrant/SearchPoints';
import type { ReadConsistency as _qdrant_ReadConsistency, ReadConsistency__Output as _qdrant_ReadConsistency__Output } from '../qdrant/ReadConsistency';

export interface SearchBatchPoints {
  'collectionName'?: (string);
  'searchPoints'?: (_qdrant_SearchPoints)[];
  'readConsistency'?: (_qdrant_ReadConsistency | null);
  '_readConsistency'?: "readConsistency";
}

export interface SearchBatchPoints__Output {
  'collectionName': (string);
  'searchPoints': (_qdrant_SearchPoints__Output)[];
  'readConsistency'?: (_qdrant_ReadConsistency__Output | null);
  '_readConsistency': "readConsistency";
}
