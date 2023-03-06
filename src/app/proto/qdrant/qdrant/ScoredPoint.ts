// Original file: points.proto

import type { PointId as _qdrant_PointId, PointId__Output as _qdrant_PointId__Output } from '../qdrant/PointId';
import type { Value as _qdrant_Value, Value__Output as _qdrant_Value__Output } from '../qdrant/Value';
import type { Vectors as _qdrant_Vectors, Vectors__Output as _qdrant_Vectors__Output } from '../qdrant/Vectors';
import type { Long } from '@grpc/proto-loader';

export interface ScoredPoint {
  'id'?: (_qdrant_PointId | null);
  'payload'?: ({[key: string]: _qdrant_Value});
  'score'?: (number | string);
  'version'?: (number | string | Long);
  'vectors'?: (_qdrant_Vectors | null);
  '_vectors'?: "vectors";
}

export interface ScoredPoint__Output {
  'id': (_qdrant_PointId__Output | null);
  'payload': ({[key: string]: _qdrant_Value__Output});
  'score': (number);
  'version': (string);
  'vectors'?: (_qdrant_Vectors__Output | null);
  '_vectors': "vectors";
}
