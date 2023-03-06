// Original file: points.proto

import type { Long } from '@grpc/proto-loader';

export interface ValuesCount {
  'lt'?: (number | string | Long);
  'gt'?: (number | string | Long);
  'gte'?: (number | string | Long);
  'lte'?: (number | string | Long);
  '_lt'?: "lt";
  '_gt'?: "gt";
  '_gte'?: "gte";
  '_lte'?: "lte";
}

export interface ValuesCount__Output {
  'lt'?: (string);
  'gt'?: (string);
  'gte'?: (string);
  'lte'?: (string);
  '_lt': "lt";
  '_gt': "gt";
  '_gte': "gte";
  '_lte': "lte";
}
