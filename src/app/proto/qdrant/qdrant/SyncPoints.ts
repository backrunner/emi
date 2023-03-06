// Original file: points_internal_service.proto

import type { PointStruct as _qdrant_PointStruct, PointStruct__Output as _qdrant_PointStruct__Output } from '../qdrant/PointStruct';
import type { PointId as _qdrant_PointId, PointId__Output as _qdrant_PointId__Output } from '../qdrant/PointId';
import type { WriteOrdering as _qdrant_WriteOrdering, WriteOrdering__Output as _qdrant_WriteOrdering__Output } from '../qdrant/WriteOrdering';

export interface SyncPoints {
  'collectionName'?: (string);
  'wait'?: (boolean);
  'points'?: (_qdrant_PointStruct)[];
  'fromId'?: (_qdrant_PointId | null);
  'toId'?: (_qdrant_PointId | null);
  'ordering'?: (_qdrant_WriteOrdering | null);
  '_wait'?: "wait";
  '_fromId'?: "fromId";
  '_toId'?: "toId";
  '_ordering'?: "ordering";
}

export interface SyncPoints__Output {
  'collectionName': (string);
  'wait'?: (boolean);
  'points': (_qdrant_PointStruct__Output)[];
  'fromId'?: (_qdrant_PointId__Output | null);
  'toId'?: (_qdrant_PointId__Output | null);
  'ordering'?: (_qdrant_WriteOrdering__Output | null);
  '_wait': "wait";
  '_fromId': "fromId";
  '_toId': "toId";
  '_ordering': "ordering";
}
