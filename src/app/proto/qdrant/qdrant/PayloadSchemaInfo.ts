// Original file: collections.proto

import type { PayloadSchemaType as _qdrant_PayloadSchemaType, PayloadSchemaType__Output as _qdrant_PayloadSchemaType__Output } from '../qdrant/PayloadSchemaType';
import type { PayloadIndexParams as _qdrant_PayloadIndexParams, PayloadIndexParams__Output as _qdrant_PayloadIndexParams__Output } from '../qdrant/PayloadIndexParams';
import type { Long } from '@grpc/proto-loader';

export interface PayloadSchemaInfo {
  'dataType'?: (_qdrant_PayloadSchemaType);
  'params'?: (_qdrant_PayloadIndexParams | null);
  'points'?: (number | string | Long);
  '_params'?: "params";
  '_points'?: "points";
}

export interface PayloadSchemaInfo__Output {
  'dataType': (_qdrant_PayloadSchemaType__Output);
  'params'?: (_qdrant_PayloadIndexParams__Output | null);
  'points'?: (string);
  '_params': "params";
  '_points': "points";
}
