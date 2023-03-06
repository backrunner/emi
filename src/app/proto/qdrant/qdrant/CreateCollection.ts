// Original file: collections.proto

import type { HnswConfigDiff as _qdrant_HnswConfigDiff, HnswConfigDiff__Output as _qdrant_HnswConfigDiff__Output } from '../qdrant/HnswConfigDiff';
import type { WalConfigDiff as _qdrant_WalConfigDiff, WalConfigDiff__Output as _qdrant_WalConfigDiff__Output } from '../qdrant/WalConfigDiff';
import type { OptimizersConfigDiff as _qdrant_OptimizersConfigDiff, OptimizersConfigDiff__Output as _qdrant_OptimizersConfigDiff__Output } from '../qdrant/OptimizersConfigDiff';
import type { VectorsConfig as _qdrant_VectorsConfig, VectorsConfig__Output as _qdrant_VectorsConfig__Output } from '../qdrant/VectorsConfig';
import type { Long } from '@grpc/proto-loader';

export interface CreateCollection {
  'collectionName'?: (string);
  'hnswConfig'?: (_qdrant_HnswConfigDiff | null);
  'walConfig'?: (_qdrant_WalConfigDiff | null);
  'optimizersConfig'?: (_qdrant_OptimizersConfigDiff | null);
  'shardNumber'?: (number);
  'onDiskPayload'?: (boolean);
  'timeout'?: (number | string | Long);
  'vectorsConfig'?: (_qdrant_VectorsConfig | null);
  'replicationFactor'?: (number);
  'writeConsistencyFactor'?: (number);
  'initFromCollection'?: (string);
  '_hnswConfig'?: "hnswConfig";
  '_walConfig'?: "walConfig";
  '_optimizersConfig'?: "optimizersConfig";
  '_shardNumber'?: "shardNumber";
  '_onDiskPayload'?: "onDiskPayload";
  '_timeout'?: "timeout";
  '_vectorsConfig'?: "vectorsConfig";
  '_replicationFactor'?: "replicationFactor";
  '_writeConsistencyFactor'?: "writeConsistencyFactor";
  '_initFromCollection'?: "initFromCollection";
}

export interface CreateCollection__Output {
  'collectionName': (string);
  'hnswConfig'?: (_qdrant_HnswConfigDiff__Output | null);
  'walConfig'?: (_qdrant_WalConfigDiff__Output | null);
  'optimizersConfig'?: (_qdrant_OptimizersConfigDiff__Output | null);
  'shardNumber'?: (number);
  'onDiskPayload'?: (boolean);
  'timeout'?: (string);
  'vectorsConfig'?: (_qdrant_VectorsConfig__Output | null);
  'replicationFactor'?: (number);
  'writeConsistencyFactor'?: (number);
  'initFromCollection'?: (string);
  '_hnswConfig': "hnswConfig";
  '_walConfig': "walConfig";
  '_optimizersConfig': "optimizersConfig";
  '_shardNumber': "shardNumber";
  '_onDiskPayload': "onDiskPayload";
  '_timeout': "timeout";
  '_vectorsConfig': "vectorsConfig";
  '_replicationFactor': "replicationFactor";
  '_writeConsistencyFactor': "writeConsistencyFactor";
  '_initFromCollection': "initFromCollection";
}
