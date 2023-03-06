// Original file: points.proto

import type { VectorsSelector as _qdrant_VectorsSelector, VectorsSelector__Output as _qdrant_VectorsSelector__Output } from '../qdrant/VectorsSelector';

export interface WithVectorsSelector {
  'enable'?: (boolean);
  'include'?: (_qdrant_VectorsSelector | null);
  'selectorOptions'?: "enable"|"include";
}

export interface WithVectorsSelector__Output {
  'enable'?: (boolean);
  'include'?: (_qdrant_VectorsSelector__Output | null);
  'selectorOptions': "enable"|"include";
}
