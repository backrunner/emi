// Original file: points.proto

import type { Match as _qdrant_Match, Match__Output as _qdrant_Match__Output } from '../qdrant/Match';
import type { Range as _qdrant_Range, Range__Output as _qdrant_Range__Output } from '../qdrant/Range';
import type { GeoBoundingBox as _qdrant_GeoBoundingBox, GeoBoundingBox__Output as _qdrant_GeoBoundingBox__Output } from '../qdrant/GeoBoundingBox';
import type { GeoRadius as _qdrant_GeoRadius, GeoRadius__Output as _qdrant_GeoRadius__Output } from '../qdrant/GeoRadius';
import type { ValuesCount as _qdrant_ValuesCount, ValuesCount__Output as _qdrant_ValuesCount__Output } from '../qdrant/ValuesCount';

export interface FieldCondition {
  'key'?: (string);
  'match'?: (_qdrant_Match | null);
  'range'?: (_qdrant_Range | null);
  'geoBoundingBox'?: (_qdrant_GeoBoundingBox | null);
  'geoRadius'?: (_qdrant_GeoRadius | null);
  'valuesCount'?: (_qdrant_ValuesCount | null);
}

export interface FieldCondition__Output {
  'key': (string);
  'match': (_qdrant_Match__Output | null);
  'range': (_qdrant_Range__Output | null);
  'geoBoundingBox': (_qdrant_GeoBoundingBox__Output | null);
  'geoRadius': (_qdrant_GeoRadius__Output | null);
  'valuesCount': (_qdrant_ValuesCount__Output | null);
}
