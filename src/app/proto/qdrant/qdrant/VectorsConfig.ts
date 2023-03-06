// Original file: collections.proto

import type { VectorParams as _qdrant_VectorParams, VectorParams__Output as _qdrant_VectorParams__Output } from '../qdrant/VectorParams';
import type { VectorParamsMap as _qdrant_VectorParamsMap, VectorParamsMap__Output as _qdrant_VectorParamsMap__Output } from '../qdrant/VectorParamsMap';

export interface VectorsConfig {
  'params'?: (_qdrant_VectorParams | null);
  'paramsMap'?: (_qdrant_VectorParamsMap | null);
  'config'?: "params"|"paramsMap";
}

export interface VectorsConfig__Output {
  'params'?: (_qdrant_VectorParams__Output | null);
  'paramsMap'?: (_qdrant_VectorParamsMap__Output | null);
  'config': "params"|"paramsMap";
}
