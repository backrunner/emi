// Original file: collections.proto

import type { Long } from '@grpc/proto-loader';

export interface HnswConfigDiff {
  'm'?: (number | string | Long);
  'efConstruct'?: (number | string | Long);
  'fullScanThreshold'?: (number | string | Long);
  'maxIndexingThreads'?: (number | string | Long);
  'onDisk'?: (boolean);
  'payloadM'?: (number | string | Long);
  '_m'?: "m";
  '_efConstruct'?: "efConstruct";
  '_fullScanThreshold'?: "fullScanThreshold";
  '_maxIndexingThreads'?: "maxIndexingThreads";
  '_onDisk'?: "onDisk";
  '_payloadM'?: "payloadM";
}

export interface HnswConfigDiff__Output {
  'm'?: (string);
  'efConstruct'?: (string);
  'fullScanThreshold'?: (string);
  'maxIndexingThreads'?: (string);
  'onDisk'?: (boolean);
  'payloadM'?: (string);
  '_m': "m";
  '_efConstruct': "efConstruct";
  '_fullScanThreshold': "fullScanThreshold";
  '_maxIndexingThreads': "maxIndexingThreads";
  '_onDisk': "onDisk";
  '_payloadM': "payloadM";
}
