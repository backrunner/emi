// Original file: collections.proto

import type { Long } from '@grpc/proto-loader';

export interface OptimizersConfigDiff {
  'deletedThreshold'?: (number | string);
  'vacuumMinVectorNumber'?: (number | string | Long);
  'defaultSegmentNumber'?: (number | string | Long);
  'maxSegmentSize'?: (number | string | Long);
  'memmapThreshold'?: (number | string | Long);
  'indexingThreshold'?: (number | string | Long);
  'flushIntervalSec'?: (number | string | Long);
  'maxOptimizationThreads'?: (number | string | Long);
  '_deletedThreshold'?: "deletedThreshold";
  '_vacuumMinVectorNumber'?: "vacuumMinVectorNumber";
  '_defaultSegmentNumber'?: "defaultSegmentNumber";
  '_maxSegmentSize'?: "maxSegmentSize";
  '_memmapThreshold'?: "memmapThreshold";
  '_indexingThreshold'?: "indexingThreshold";
  '_flushIntervalSec'?: "flushIntervalSec";
  '_maxOptimizationThreads'?: "maxOptimizationThreads";
}

export interface OptimizersConfigDiff__Output {
  'deletedThreshold'?: (number);
  'vacuumMinVectorNumber'?: (string);
  'defaultSegmentNumber'?: (string);
  'maxSegmentSize'?: (string);
  'memmapThreshold'?: (string);
  'indexingThreshold'?: (string);
  'flushIntervalSec'?: (string);
  'maxOptimizationThreads'?: (string);
  '_deletedThreshold': "deletedThreshold";
  '_vacuumMinVectorNumber': "vacuumMinVectorNumber";
  '_defaultSegmentNumber': "defaultSegmentNumber";
  '_maxSegmentSize': "maxSegmentSize";
  '_memmapThreshold': "memmapThreshold";
  '_indexingThreshold': "indexingThreshold";
  '_flushIntervalSec': "flushIntervalSec";
  '_maxOptimizationThreads': "maxOptimizationThreads";
}
