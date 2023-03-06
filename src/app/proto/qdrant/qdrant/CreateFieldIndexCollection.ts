// Original file: points.proto

import type { FieldType as _qdrant_FieldType, FieldType__Output as _qdrant_FieldType__Output } from '../qdrant/FieldType';
import type { PayloadIndexParams as _qdrant_PayloadIndexParams, PayloadIndexParams__Output as _qdrant_PayloadIndexParams__Output } from '../qdrant/PayloadIndexParams';
import type { WriteOrdering as _qdrant_WriteOrdering, WriteOrdering__Output as _qdrant_WriteOrdering__Output } from '../qdrant/WriteOrdering';

export interface CreateFieldIndexCollection {
  'collectionName'?: (string);
  'wait'?: (boolean);
  'fieldName'?: (string);
  'fieldType'?: (_qdrant_FieldType);
  'fieldIndexParams'?: (_qdrant_PayloadIndexParams | null);
  'ordering'?: (_qdrant_WriteOrdering | null);
  '_wait'?: "wait";
  '_fieldType'?: "fieldType";
  '_fieldIndexParams'?: "fieldIndexParams";
  '_ordering'?: "ordering";
}

export interface CreateFieldIndexCollection__Output {
  'collectionName': (string);
  'wait'?: (boolean);
  'fieldName': (string);
  'fieldType'?: (_qdrant_FieldType__Output);
  'fieldIndexParams'?: (_qdrant_PayloadIndexParams__Output | null);
  'ordering'?: (_qdrant_WriteOrdering__Output | null);
  '_wait': "wait";
  '_fieldType': "fieldType";
  '_fieldIndexParams': "fieldIndexParams";
  '_ordering': "ordering";
}
