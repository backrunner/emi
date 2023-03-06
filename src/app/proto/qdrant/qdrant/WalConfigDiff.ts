// Original file: collections.proto

import type { Long } from '@grpc/proto-loader';

export interface WalConfigDiff {
  'walCapacityMb'?: (number | string | Long);
  'walSegmentsAhead'?: (number | string | Long);
  '_walCapacityMb'?: "walCapacityMb";
  '_walSegmentsAhead'?: "walSegmentsAhead";
}

export interface WalConfigDiff__Output {
  'walCapacityMb'?: (string);
  'walSegmentsAhead'?: (string);
  '_walCapacityMb': "walCapacityMb";
  '_walSegmentsAhead': "walSegmentsAhead";
}
