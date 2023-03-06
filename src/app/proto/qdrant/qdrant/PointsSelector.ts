// Original file: points.proto

import type { PointsIdsList as _qdrant_PointsIdsList, PointsIdsList__Output as _qdrant_PointsIdsList__Output } from '../qdrant/PointsIdsList';
import type { Filter as _qdrant_Filter, Filter__Output as _qdrant_Filter__Output } from '../qdrant/Filter';

export interface PointsSelector {
  'points'?: (_qdrant_PointsIdsList | null);
  'filter'?: (_qdrant_Filter | null);
  'pointsSelectorOneOf'?: "points"|"filter";
}

export interface PointsSelector__Output {
  'points'?: (_qdrant_PointsIdsList__Output | null);
  'filter'?: (_qdrant_Filter__Output | null);
  'pointsSelectorOneOf': "points"|"filter";
}
