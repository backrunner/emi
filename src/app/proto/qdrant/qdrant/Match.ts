// Original file: points.proto

import type { Long } from '@grpc/proto-loader';

export interface Match {
  'keyword'?: (string);
  'integer'?: (number | string | Long);
  'boolean'?: (boolean);
  'text'?: (string);
  'matchValue'?: "keyword"|"integer"|"boolean"|"text";
}

export interface Match__Output {
  'keyword'?: (string);
  'integer'?: (string);
  'boolean'?: (boolean);
  'text'?: (string);
  'matchValue': "keyword"|"integer"|"boolean"|"text";
}
