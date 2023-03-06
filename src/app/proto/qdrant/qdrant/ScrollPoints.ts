// Original file: points.proto

import type { Filter as _qdrant_Filter, Filter__Output as _qdrant_Filter__Output } from '../qdrant/Filter';
import type { PointId as _qdrant_PointId, PointId__Output as _qdrant_PointId__Output } from '../qdrant/PointId';
import type { WithPayloadSelector as _qdrant_WithPayloadSelector, WithPayloadSelector__Output as _qdrant_WithPayloadSelector__Output } from '../qdrant/WithPayloadSelector';
import type { WithVectorsSelector as _qdrant_WithVectorsSelector, WithVectorsSelector__Output as _qdrant_WithVectorsSelector__Output } from '../qdrant/WithVectorsSelector';
import type { ReadConsistency as _qdrant_ReadConsistency, ReadConsistency__Output as _qdrant_ReadConsistency__Output } from '../qdrant/ReadConsistency';

export interface ScrollPoints {
  'collectionName'?: (string);
  'filter'?: (_qdrant_Filter | null);
  'offset'?: (_qdrant_PointId | null);
  'limit'?: (number);
  'withPayload'?: (_qdrant_WithPayloadSelector | null);
  'withVectors'?: (_qdrant_WithVectorsSelector | null);
  'readConsistency'?: (_qdrant_ReadConsistency | null);
  '_offset'?: "offset";
  '_limit'?: "limit";
  '_withVectors'?: "withVectors";
  '_readConsistency'?: "readConsistency";
}

export interface ScrollPoints__Output {
  'collectionName': (string);
  'filter': (_qdrant_Filter__Output | null);
  'offset'?: (_qdrant_PointId__Output | null);
  'limit'?: (number);
  'withPayload': (_qdrant_WithPayloadSelector__Output | null);
  'withVectors'?: (_qdrant_WithVectorsSelector__Output | null);
  'readConsistency'?: (_qdrant_ReadConsistency__Output | null);
  '_offset': "offset";
  '_limit': "limit";
  '_withVectors': "withVectors";
  '_readConsistency': "readConsistency";
}
