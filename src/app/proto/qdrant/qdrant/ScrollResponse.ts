// Original file: points.proto

import type { PointId as _qdrant_PointId, PointId__Output as _qdrant_PointId__Output } from '../qdrant/PointId';
import type { RetrievedPoint as _qdrant_RetrievedPoint, RetrievedPoint__Output as _qdrant_RetrievedPoint__Output } from '../qdrant/RetrievedPoint';

export interface ScrollResponse {
  'nextPageOffset'?: (_qdrant_PointId | null);
  'result'?: (_qdrant_RetrievedPoint)[];
  'time'?: (number | string);
  '_nextPageOffset'?: "nextPageOffset";
}

export interface ScrollResponse__Output {
  'nextPageOffset'?: (_qdrant_PointId__Output | null);
  'result': (_qdrant_RetrievedPoint__Output)[];
  'time': (number);
  '_nextPageOffset': "nextPageOffset";
}
