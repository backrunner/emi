// Original file: points.proto

import type { RetrievedPoint as _qdrant_RetrievedPoint, RetrievedPoint__Output as _qdrant_RetrievedPoint__Output } from '../qdrant/RetrievedPoint';

export interface GetResponse {
  'result'?: (_qdrant_RetrievedPoint)[];
  'time'?: (number | string);
}

export interface GetResponse__Output {
  'result': (_qdrant_RetrievedPoint__Output)[];
  'time': (number);
}
