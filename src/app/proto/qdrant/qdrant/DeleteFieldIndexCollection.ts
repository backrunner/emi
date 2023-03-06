// Original file: points.proto

import type { WriteOrdering as _qdrant_WriteOrdering, WriteOrdering__Output as _qdrant_WriteOrdering__Output } from '../qdrant/WriteOrdering';

export interface DeleteFieldIndexCollection {
  'collectionName'?: (string);
  'wait'?: (boolean);
  'fieldName'?: (string);
  'ordering'?: (_qdrant_WriteOrdering | null);
  '_wait'?: "wait";
  '_ordering'?: "ordering";
}

export interface DeleteFieldIndexCollection__Output {
  'collectionName': (string);
  'wait'?: (boolean);
  'fieldName': (string);
  'ordering'?: (_qdrant_WriteOrdering__Output | null);
  '_wait': "wait";
  '_ordering': "ordering";
}
