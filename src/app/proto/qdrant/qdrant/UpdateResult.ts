// Original file: points.proto

import type { UpdateStatus as _qdrant_UpdateStatus, UpdateStatus__Output as _qdrant_UpdateStatus__Output } from '../qdrant/UpdateStatus';
import type { Long } from '@grpc/proto-loader';

export interface UpdateResult {
  'operationId'?: (number | string | Long);
  'status'?: (_qdrant_UpdateStatus);
}

export interface UpdateResult__Output {
  'operationId': (string);
  'status': (_qdrant_UpdateStatus__Output);
}
