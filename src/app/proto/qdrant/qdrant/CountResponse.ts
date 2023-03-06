// Original file: points.proto

import type { CountResult as _qdrant_CountResult, CountResult__Output as _qdrant_CountResult__Output } from '../qdrant/CountResult';

export interface CountResponse {
  'result'?: (_qdrant_CountResult | null);
  'time'?: (number | string);
}

export interface CountResponse__Output {
  'result': (_qdrant_CountResult__Output | null);
  'time': (number);
}
