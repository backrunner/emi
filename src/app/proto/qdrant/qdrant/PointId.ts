// Original file: points.proto

import type { Long } from '@grpc/proto-loader';

export interface PointId {
  'num'?: (number | string | Long);
  'uuid'?: (string);
  'pointIdOptions'?: "num"|"uuid";
}

export interface PointId__Output {
  'num'?: (string);
  'uuid'?: (string);
  'pointIdOptions': "num"|"uuid";
}
