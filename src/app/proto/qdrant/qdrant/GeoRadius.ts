// Original file: points.proto

import type { GeoPoint as _qdrant_GeoPoint, GeoPoint__Output as _qdrant_GeoPoint__Output } from '../qdrant/GeoPoint';

export interface GeoRadius {
  'center'?: (_qdrant_GeoPoint | null);
  'radius'?: (number | string);
}

export interface GeoRadius__Output {
  'center': (_qdrant_GeoPoint__Output | null);
  'radius': (number);
}
