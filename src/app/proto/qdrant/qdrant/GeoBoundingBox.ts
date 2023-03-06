// Original file: points.proto

import type { GeoPoint as _qdrant_GeoPoint, GeoPoint__Output as _qdrant_GeoPoint__Output } from '../qdrant/GeoPoint';

export interface GeoBoundingBox {
  'topLeft'?: (_qdrant_GeoPoint | null);
  'bottomRight'?: (_qdrant_GeoPoint | null);
}

export interface GeoBoundingBox__Output {
  'topLeft': (_qdrant_GeoPoint__Output | null);
  'bottomRight': (_qdrant_GeoPoint__Output | null);
}
