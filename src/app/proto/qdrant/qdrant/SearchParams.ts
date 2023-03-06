// Original file: points.proto

import type { Long } from '@grpc/proto-loader';

export interface SearchParams {
  'hnswEf'?: (number | string | Long);
  'exact'?: (boolean);
  '_hnswEf'?: "hnswEf";
  '_exact'?: "exact";
}

export interface SearchParams__Output {
  'hnswEf'?: (string);
  'exact'?: (boolean);
  '_hnswEf': "hnswEf";
  '_exact': "exact";
}
