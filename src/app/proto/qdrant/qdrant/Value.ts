// Original file: json_with_int.proto

import type { NullValue as _qdrant_NullValue, NullValue__Output as _qdrant_NullValue__Output } from '../qdrant/NullValue';
import type { Struct as _qdrant_Struct, Struct__Output as _qdrant_Struct__Output } from '../qdrant/Struct';
import type { ListValue as _qdrant_ListValue, ListValue__Output as _qdrant_ListValue__Output } from '../qdrant/ListValue';
import type { Long } from '@grpc/proto-loader';

export interface Value {
  'nullValue'?: (_qdrant_NullValue);
  'doubleValue'?: (number | string);
  'integerValue'?: (number | string | Long);
  'stringValue'?: (string);
  'boolValue'?: (boolean);
  'structValue'?: (_qdrant_Struct | null);
  'listValue'?: (_qdrant_ListValue | null);
  'kind'?: "nullValue"|"doubleValue"|"integerValue"|"stringValue"|"boolValue"|"structValue"|"listValue";
}

export interface Value__Output {
  'nullValue'?: (_qdrant_NullValue__Output);
  'doubleValue'?: (number);
  'integerValue'?: (string);
  'stringValue'?: (string);
  'boolValue'?: (boolean);
  'structValue'?: (_qdrant_Struct__Output | null);
  'listValue'?: (_qdrant_ListValue__Output | null);
  'kind': "nullValue"|"doubleValue"|"integerValue"|"stringValue"|"boolValue"|"structValue"|"listValue";
}
