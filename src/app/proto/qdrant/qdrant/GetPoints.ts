// Original file: points.proto

import type { PointId as _qdrant_PointId, PointId__Output as _qdrant_PointId__Output } from '../qdrant/PointId';
import type { WithPayloadSelector as _qdrant_WithPayloadSelector, WithPayloadSelector__Output as _qdrant_WithPayloadSelector__Output } from '../qdrant/WithPayloadSelector';
import type { WithVectorsSelector as _qdrant_WithVectorsSelector, WithVectorsSelector__Output as _qdrant_WithVectorsSelector__Output } from '../qdrant/WithVectorsSelector';
import type { ReadConsistency as _qdrant_ReadConsistency, ReadConsistency__Output as _qdrant_ReadConsistency__Output } from '../qdrant/ReadConsistency';

export interface GetPoints {
  'collectionName'?: (string);
  'ids'?: (_qdrant_PointId)[];
  'withPayload'?: (_qdrant_WithPayloadSelector | null);
  'withVectors'?: (_qdrant_WithVectorsSelector | null);
  'readConsistency'?: (_qdrant_ReadConsistency | null);
  '_withVectors'?: "withVectors";
  '_readConsistency'?: "readConsistency";
}

export interface GetPoints__Output {
  'collectionName': (string);
  'ids': (_qdrant_PointId__Output)[];
  'withPayload': (_qdrant_WithPayloadSelector__Output | null);
  'withVectors'?: (_qdrant_WithVectorsSelector__Output | null);
  'readConsistency'?: (_qdrant_ReadConsistency__Output | null);
  '_withVectors': "withVectors";
  '_readConsistency': "readConsistency";
}
