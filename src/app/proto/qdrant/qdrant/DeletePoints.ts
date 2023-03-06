// Original file: points.proto

import type { PointsSelector as _qdrant_PointsSelector, PointsSelector__Output as _qdrant_PointsSelector__Output } from '../qdrant/PointsSelector';
import type { WriteOrdering as _qdrant_WriteOrdering, WriteOrdering__Output as _qdrant_WriteOrdering__Output } from '../qdrant/WriteOrdering';

export interface DeletePoints {
  'collectionName'?: (string);
  'wait'?: (boolean);
  'points'?: (_qdrant_PointsSelector | null);
  'ordering'?: (_qdrant_WriteOrdering | null);
  '_wait'?: "wait";
  '_ordering'?: "ordering";
}

export interface DeletePoints__Output {
  'collectionName': (string);
  'wait'?: (boolean);
  'points': (_qdrant_PointsSelector__Output | null);
  'ordering'?: (_qdrant_WriteOrdering__Output | null);
  '_wait': "wait";
  '_ordering': "ordering";
}
