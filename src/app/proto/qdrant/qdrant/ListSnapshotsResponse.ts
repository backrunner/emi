// Original file: snapshots_service.proto

import type { SnapshotDescription as _qdrant_SnapshotDescription, SnapshotDescription__Output as _qdrant_SnapshotDescription__Output } from '../qdrant/SnapshotDescription';

export interface ListSnapshotsResponse {
  'snapshotDescriptions'?: (_qdrant_SnapshotDescription)[];
  'time'?: (number | string);
}

export interface ListSnapshotsResponse__Output {
  'snapshotDescriptions': (_qdrant_SnapshotDescription__Output)[];
  'time': (number);
}
