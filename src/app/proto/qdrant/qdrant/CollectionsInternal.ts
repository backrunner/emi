// Original file: collections_internal_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CollectionOperationResponse as _qdrant_CollectionOperationResponse, CollectionOperationResponse__Output as _qdrant_CollectionOperationResponse__Output } from '../qdrant/CollectionOperationResponse';
import type { GetCollectionInfoRequestInternal as _qdrant_GetCollectionInfoRequestInternal, GetCollectionInfoRequestInternal__Output as _qdrant_GetCollectionInfoRequestInternal__Output } from '../qdrant/GetCollectionInfoRequestInternal';
import type { GetCollectionInfoResponse as _qdrant_GetCollectionInfoResponse, GetCollectionInfoResponse__Output as _qdrant_GetCollectionInfoResponse__Output } from '../qdrant/GetCollectionInfoResponse';
import type { InitiateShardTransferRequest as _qdrant_InitiateShardTransferRequest, InitiateShardTransferRequest__Output as _qdrant_InitiateShardTransferRequest__Output } from '../qdrant/InitiateShardTransferRequest';

export interface CollectionsInternalClient extends grpc.Client {
  Get(argument: _qdrant_GetCollectionInfoRequestInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetCollectionInfoRequestInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetCollectionInfoRequestInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetCollectionInfoRequestInternal, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequestInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequestInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequestInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequestInternal, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  
  Initiate(argument: _qdrant_InitiateShardTransferRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Initiate(argument: _qdrant_InitiateShardTransferRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Initiate(argument: _qdrant_InitiateShardTransferRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Initiate(argument: _qdrant_InitiateShardTransferRequest, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  initiate(argument: _qdrant_InitiateShardTransferRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  initiate(argument: _qdrant_InitiateShardTransferRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  initiate(argument: _qdrant_InitiateShardTransferRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  initiate(argument: _qdrant_InitiateShardTransferRequest, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CollectionsInternalHandlers extends grpc.UntypedServiceImplementation {
  Get: grpc.handleUnaryCall<_qdrant_GetCollectionInfoRequestInternal__Output, _qdrant_GetCollectionInfoResponse>;
  
  Initiate: grpc.handleUnaryCall<_qdrant_InitiateShardTransferRequest__Output, _qdrant_CollectionOperationResponse>;
  
}

export interface CollectionsInternalDefinition extends grpc.ServiceDefinition {
  Get: MethodDefinition<_qdrant_GetCollectionInfoRequestInternal, _qdrant_GetCollectionInfoResponse, _qdrant_GetCollectionInfoRequestInternal__Output, _qdrant_GetCollectionInfoResponse__Output>
  Initiate: MethodDefinition<_qdrant_InitiateShardTransferRequest, _qdrant_CollectionOperationResponse, _qdrant_InitiateShardTransferRequest__Output, _qdrant_CollectionOperationResponse__Output>
}
