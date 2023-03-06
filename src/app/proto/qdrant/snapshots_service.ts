import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { SnapshotsClient as _qdrant_SnapshotsClient, SnapshotsDefinition as _qdrant_SnapshotsDefinition } from './qdrant/Snapshots';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      ListValue: MessageTypeDefinition
      NullValue: EnumTypeDefinition
      Struct: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      Value: MessageTypeDefinition
    }
  }
  qdrant: {
    CreateFullSnapshotRequest: MessageTypeDefinition
    CreateSnapshotRequest: MessageTypeDefinition
    CreateSnapshotResponse: MessageTypeDefinition
    DeleteFullSnapshotRequest: MessageTypeDefinition
    DeleteSnapshotRequest: MessageTypeDefinition
    DeleteSnapshotResponse: MessageTypeDefinition
    ListFullSnapshotsRequest: MessageTypeDefinition
    ListSnapshotsRequest: MessageTypeDefinition
    ListSnapshotsResponse: MessageTypeDefinition
    SnapshotDescription: MessageTypeDefinition
    Snapshots: SubtypeConstructor<typeof grpc.Client, _qdrant_SnapshotsClient> & { service: _qdrant_SnapshotsDefinition }
  }
}

