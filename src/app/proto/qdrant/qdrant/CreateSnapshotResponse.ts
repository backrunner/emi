// Original file: snapshots_service.proto

import type { SnapshotDescription as _qdrant_SnapshotDescription, SnapshotDescription__Output as _qdrant_SnapshotDescription__Output } from '../qdrant/SnapshotDescription';

export interface CreateSnapshotResponse {
  'snapshotDescription'?: (_qdrant_SnapshotDescription | null);
  'time'?: (number | string);
}

export interface CreateSnapshotResponse__Output {
  'snapshotDescription': (_qdrant_SnapshotDescription__Output | null);
  'time': (number);
}
