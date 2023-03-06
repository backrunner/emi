// Original file: snapshots_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateFullSnapshotRequest as _qdrant_CreateFullSnapshotRequest, CreateFullSnapshotRequest__Output as _qdrant_CreateFullSnapshotRequest__Output } from '../qdrant/CreateFullSnapshotRequest';
import type { CreateSnapshotRequest as _qdrant_CreateSnapshotRequest, CreateSnapshotRequest__Output as _qdrant_CreateSnapshotRequest__Output } from '../qdrant/CreateSnapshotRequest';
import type { CreateSnapshotResponse as _qdrant_CreateSnapshotResponse, CreateSnapshotResponse__Output as _qdrant_CreateSnapshotResponse__Output } from '../qdrant/CreateSnapshotResponse';
import type { DeleteFullSnapshotRequest as _qdrant_DeleteFullSnapshotRequest, DeleteFullSnapshotRequest__Output as _qdrant_DeleteFullSnapshotRequest__Output } from '../qdrant/DeleteFullSnapshotRequest';
import type { DeleteSnapshotRequest as _qdrant_DeleteSnapshotRequest, DeleteSnapshotRequest__Output as _qdrant_DeleteSnapshotRequest__Output } from '../qdrant/DeleteSnapshotRequest';
import type { DeleteSnapshotResponse as _qdrant_DeleteSnapshotResponse, DeleteSnapshotResponse__Output as _qdrant_DeleteSnapshotResponse__Output } from '../qdrant/DeleteSnapshotResponse';
import type { ListFullSnapshotsRequest as _qdrant_ListFullSnapshotsRequest, ListFullSnapshotsRequest__Output as _qdrant_ListFullSnapshotsRequest__Output } from '../qdrant/ListFullSnapshotsRequest';
import type { ListSnapshotsRequest as _qdrant_ListSnapshotsRequest, ListSnapshotsRequest__Output as _qdrant_ListSnapshotsRequest__Output } from '../qdrant/ListSnapshotsRequest';
import type { ListSnapshotsResponse as _qdrant_ListSnapshotsResponse, ListSnapshotsResponse__Output as _qdrant_ListSnapshotsResponse__Output } from '../qdrant/ListSnapshotsResponse';

export interface SnapshotsClient extends grpc.Client {
  Create(argument: _qdrant_CreateSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _qdrant_CreateSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _qdrant_CreateSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _qdrant_CreateSnapshotRequest, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateSnapshotRequest, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  
  CreateFull(argument: _qdrant_CreateFullSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  CreateFull(argument: _qdrant_CreateFullSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  CreateFull(argument: _qdrant_CreateFullSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  CreateFull(argument: _qdrant_CreateFullSnapshotRequest, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  createFull(argument: _qdrant_CreateFullSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  createFull(argument: _qdrant_CreateFullSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  createFull(argument: _qdrant_CreateFullSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  createFull(argument: _qdrant_CreateFullSnapshotRequest, callback: grpc.requestCallback<_qdrant_CreateSnapshotResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _qdrant_DeleteSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeleteSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeleteSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeleteSnapshotRequest, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteSnapshotRequest, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteFull(argument: _qdrant_DeleteFullSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  DeleteFull(argument: _qdrant_DeleteFullSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  DeleteFull(argument: _qdrant_DeleteFullSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  DeleteFull(argument: _qdrant_DeleteFullSnapshotRequest, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  deleteFull(argument: _qdrant_DeleteFullSnapshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  deleteFull(argument: _qdrant_DeleteFullSnapshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  deleteFull(argument: _qdrant_DeleteFullSnapshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  deleteFull(argument: _qdrant_DeleteFullSnapshotRequest, callback: grpc.requestCallback<_qdrant_DeleteSnapshotResponse__Output>): grpc.ClientUnaryCall;
  
  List(argument: _qdrant_ListSnapshotsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _qdrant_ListSnapshotsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _qdrant_ListSnapshotsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _qdrant_ListSnapshotsRequest, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListSnapshotsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListSnapshotsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListSnapshotsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListSnapshotsRequest, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  
  ListFull(argument: _qdrant_ListFullSnapshotsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  ListFull(argument: _qdrant_ListFullSnapshotsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  ListFull(argument: _qdrant_ListFullSnapshotsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  ListFull(argument: _qdrant_ListFullSnapshotsRequest, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  listFull(argument: _qdrant_ListFullSnapshotsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  listFull(argument: _qdrant_ListFullSnapshotsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  listFull(argument: _qdrant_ListFullSnapshotsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  listFull(argument: _qdrant_ListFullSnapshotsRequest, callback: grpc.requestCallback<_qdrant_ListSnapshotsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SnapshotsHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_qdrant_CreateSnapshotRequest__Output, _qdrant_CreateSnapshotResponse>;
  
  CreateFull: grpc.handleUnaryCall<_qdrant_CreateFullSnapshotRequest__Output, _qdrant_CreateSnapshotResponse>;
  
  Delete: grpc.handleUnaryCall<_qdrant_DeleteSnapshotRequest__Output, _qdrant_DeleteSnapshotResponse>;
  
  DeleteFull: grpc.handleUnaryCall<_qdrant_DeleteFullSnapshotRequest__Output, _qdrant_DeleteSnapshotResponse>;
  
  List: grpc.handleUnaryCall<_qdrant_ListSnapshotsRequest__Output, _qdrant_ListSnapshotsResponse>;
  
  ListFull: grpc.handleUnaryCall<_qdrant_ListFullSnapshotsRequest__Output, _qdrant_ListSnapshotsResponse>;
  
}

export interface SnapshotsDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_qdrant_CreateSnapshotRequest, _qdrant_CreateSnapshotResponse, _qdrant_CreateSnapshotRequest__Output, _qdrant_CreateSnapshotResponse__Output>
  CreateFull: MethodDefinition<_qdrant_CreateFullSnapshotRequest, _qdrant_CreateSnapshotResponse, _qdrant_CreateFullSnapshotRequest__Output, _qdrant_CreateSnapshotResponse__Output>
  Delete: MethodDefinition<_qdrant_DeleteSnapshotRequest, _qdrant_DeleteSnapshotResponse, _qdrant_DeleteSnapshotRequest__Output, _qdrant_DeleteSnapshotResponse__Output>
  DeleteFull: MethodDefinition<_qdrant_DeleteFullSnapshotRequest, _qdrant_DeleteSnapshotResponse, _qdrant_DeleteFullSnapshotRequest__Output, _qdrant_DeleteSnapshotResponse__Output>
  List: MethodDefinition<_qdrant_ListSnapshotsRequest, _qdrant_ListSnapshotsResponse, _qdrant_ListSnapshotsRequest__Output, _qdrant_ListSnapshotsResponse__Output>
  ListFull: MethodDefinition<_qdrant_ListFullSnapshotsRequest, _qdrant_ListSnapshotsResponse, _qdrant_ListFullSnapshotsRequest__Output, _qdrant_ListSnapshotsResponse__Output>
}
