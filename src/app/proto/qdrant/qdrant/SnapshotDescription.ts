// Original file: snapshots_service.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface SnapshotDescription {
  'name'?: (string);
  'creationTime'?: (_google_protobuf_Timestamp | null);
  'size'?: (number | string | Long);
}

export interface SnapshotDescription__Output {
  'name': (string);
  'creationTime': (_google_protobuf_Timestamp__Output | null);
  'size': (string);
}
