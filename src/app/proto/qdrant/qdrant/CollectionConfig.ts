// Original file: collections.proto

import type { CollectionParams as _qdrant_CollectionParams, CollectionParams__Output as _qdrant_CollectionParams__Output } from '../qdrant/CollectionParams';
import type { HnswConfigDiff as _qdrant_HnswConfigDiff, HnswConfigDiff__Output as _qdrant_HnswConfigDiff__Output } from '../qdrant/HnswConfigDiff';
import type { OptimizersConfigDiff as _qdrant_OptimizersConfigDiff, OptimizersConfigDiff__Output as _qdrant_OptimizersConfigDiff__Output } from '../qdrant/OptimizersConfigDiff';
import type { WalConfigDiff as _qdrant_WalConfigDiff, WalConfigDiff__Output as _qdrant_WalConfigDiff__Output } from '../qdrant/WalConfigDiff';

export interface CollectionConfig {
  'params'?: (_qdrant_CollectionParams | null);
  'hnswConfig'?: (_qdrant_HnswConfigDiff | null);
  'optimizerConfig'?: (_qdrant_OptimizersConfigDiff | null);
  'walConfig'?: (_qdrant_WalConfigDiff | null);
}

export interface CollectionConfig__Output {
  'params': (_qdrant_CollectionParams__Output | null);
  'hnswConfig': (_qdrant_HnswConfigDiff__Output | null);
  'optimizerConfig': (_qdrant_OptimizersConfigDiff__Output | null);
  'walConfig': (_qdrant_WalConfigDiff__Output | null);
}
