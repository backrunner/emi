// Original file: points.proto

import type { Condition as _qdrant_Condition, Condition__Output as _qdrant_Condition__Output } from '../qdrant/Condition';

export interface Filter {
  'should'?: (_qdrant_Condition)[];
  'must'?: (_qdrant_Condition)[];
  'mustNot'?: (_qdrant_Condition)[];
}

export interface Filter__Output {
  'should': (_qdrant_Condition__Output)[];
  'must': (_qdrant_Condition__Output)[];
  'mustNot': (_qdrant_Condition__Output)[];
}
