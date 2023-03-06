// Original file: points.proto

import type { Filter as _qdrant_Filter, Filter__Output as _qdrant_Filter__Output } from '../qdrant/Filter';

export interface CountPoints {
  'collectionName'?: (string);
  'filter'?: (_qdrant_Filter | null);
  'exact'?: (boolean);
  '_exact'?: "exact";
}

export interface CountPoints__Output {
  'collectionName': (string);
  'filter': (_qdrant_Filter__Output | null);
  'exact'?: (boolean);
  '_exact': "exact";
}
