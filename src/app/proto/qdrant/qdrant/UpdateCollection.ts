// Original file: collections.proto

import type { OptimizersConfigDiff as _qdrant_OptimizersConfigDiff, OptimizersConfigDiff__Output as _qdrant_OptimizersConfigDiff__Output } from '../qdrant/OptimizersConfigDiff';
import type { CollectionParamsDiff as _qdrant_CollectionParamsDiff, CollectionParamsDiff__Output as _qdrant_CollectionParamsDiff__Output } from '../qdrant/CollectionParamsDiff';
import type { Long } from '@grpc/proto-loader';

export interface UpdateCollection {
  'collectionName'?: (string);
  'optimizersConfig'?: (_qdrant_OptimizersConfigDiff | null);
  'timeout'?: (number | string | Long);
  'params'?: (_qdrant_CollectionParamsDiff | null);
  '_optimizersConfig'?: "optimizersConfig";
  '_timeout'?: "timeout";
  '_params'?: "params";
}

export interface UpdateCollection__Output {
  'collectionName': (string);
  'optimizersConfig'?: (_qdrant_OptimizersConfigDiff__Output | null);
  'timeout'?: (string);
  'params'?: (_qdrant_CollectionParamsDiff__Output | null);
  '_optimizersConfig': "optimizersConfig";
  '_timeout': "timeout";
  '_params': "params";
}
