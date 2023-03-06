// Original file: points.proto

import type { PointStruct as _qdrant_PointStruct, PointStruct__Output as _qdrant_PointStruct__Output } from '../qdrant/PointStruct';
import type { WriteOrdering as _qdrant_WriteOrdering, WriteOrdering__Output as _qdrant_WriteOrdering__Output } from '../qdrant/WriteOrdering';

export interface UpsertPoints {
  'collectionName'?: (string);
  'wait'?: (boolean);
  'points'?: (_qdrant_PointStruct)[];
  'ordering'?: (_qdrant_WriteOrdering | null);
  '_wait'?: "wait";
  '_ordering'?: "ordering";
}

export interface UpsertPoints__Output {
  'collectionName': (string);
  'wait'?: (boolean);
  'points': (_qdrant_PointStruct__Output)[];
  'ordering'?: (_qdrant_WriteOrdering__Output | null);
  '_wait': "wait";
  '_ordering': "ordering";
}
