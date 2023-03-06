// Original file: collections.proto

import type { VectorsConfig as _qdrant_VectorsConfig, VectorsConfig__Output as _qdrant_VectorsConfig__Output } from '../qdrant/VectorsConfig';

export interface CollectionParams {
  'shardNumber'?: (number);
  'onDiskPayload'?: (boolean);
  'vectorsConfig'?: (_qdrant_VectorsConfig | null);
  'replicationFactor'?: (number);
  'writeConsistencyFactor'?: (number);
  '_vectorsConfig'?: "vectorsConfig";
  '_replicationFactor'?: "replicationFactor";
  '_writeConsistencyFactor'?: "writeConsistencyFactor";
}

export interface CollectionParams__Output {
  'shardNumber': (number);
  'onDiskPayload': (boolean);
  'vectorsConfig'?: (_qdrant_VectorsConfig__Output | null);
  'replicationFactor'?: (number);
  'writeConsistencyFactor'?: (number);
  '_vectorsConfig': "vectorsConfig";
  '_replicationFactor': "replicationFactor";
  '_writeConsistencyFactor': "writeConsistencyFactor";
}
