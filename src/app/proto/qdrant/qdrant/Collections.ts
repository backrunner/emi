// Original file: collections_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChangeAliases as _qdrant_ChangeAliases, ChangeAliases__Output as _qdrant_ChangeAliases__Output } from '../qdrant/ChangeAliases';
import type { CollectionOperationResponse as _qdrant_CollectionOperationResponse, CollectionOperationResponse__Output as _qdrant_CollectionOperationResponse__Output } from '../qdrant/CollectionOperationResponse';
import type { CreateCollection as _qdrant_CreateCollection, CreateCollection__Output as _qdrant_CreateCollection__Output } from '../qdrant/CreateCollection';
import type { DeleteCollection as _qdrant_DeleteCollection, DeleteCollection__Output as _qdrant_DeleteCollection__Output } from '../qdrant/DeleteCollection';
import type { GetCollectionInfoRequest as _qdrant_GetCollectionInfoRequest, GetCollectionInfoRequest__Output as _qdrant_GetCollectionInfoRequest__Output } from '../qdrant/GetCollectionInfoRequest';
import type { GetCollectionInfoResponse as _qdrant_GetCollectionInfoResponse, GetCollectionInfoResponse__Output as _qdrant_GetCollectionInfoResponse__Output } from '../qdrant/GetCollectionInfoResponse';
import type { ListAliasesRequest as _qdrant_ListAliasesRequest, ListAliasesRequest__Output as _qdrant_ListAliasesRequest__Output } from '../qdrant/ListAliasesRequest';
import type { ListAliasesResponse as _qdrant_ListAliasesResponse, ListAliasesResponse__Output as _qdrant_ListAliasesResponse__Output } from '../qdrant/ListAliasesResponse';
import type { ListCollectionAliasesRequest as _qdrant_ListCollectionAliasesRequest, ListCollectionAliasesRequest__Output as _qdrant_ListCollectionAliasesRequest__Output } from '../qdrant/ListCollectionAliasesRequest';
import type { ListCollectionsRequest as _qdrant_ListCollectionsRequest, ListCollectionsRequest__Output as _qdrant_ListCollectionsRequest__Output } from '../qdrant/ListCollectionsRequest';
import type { ListCollectionsResponse as _qdrant_ListCollectionsResponse, ListCollectionsResponse__Output as _qdrant_ListCollectionsResponse__Output } from '../qdrant/ListCollectionsResponse';
import type { UpdateCollection as _qdrant_UpdateCollection, UpdateCollection__Output as _qdrant_UpdateCollection__Output } from '../qdrant/UpdateCollection';

export interface CollectionsClient extends grpc.Client {
  Create(argument: _qdrant_CreateCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _qdrant_CreateCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _qdrant_CreateCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _qdrant_CreateCollection, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _qdrant_CreateCollection, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _qdrant_DeleteCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeleteCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeleteCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeleteCollection, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeleteCollection, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _qdrant_GetCollectionInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetCollectionInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetCollectionInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetCollectionInfoRequest, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetCollectionInfoRequest, callback: grpc.requestCallback<_qdrant_GetCollectionInfoResponse__Output>): grpc.ClientUnaryCall;
  
  List(argument: _qdrant_ListCollectionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _qdrant_ListCollectionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _qdrant_ListCollectionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _qdrant_ListCollectionsRequest, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListCollectionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListCollectionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListCollectionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _qdrant_ListCollectionsRequest, callback: grpc.requestCallback<_qdrant_ListCollectionsResponse__Output>): grpc.ClientUnaryCall;
  
  ListAliases(argument: _qdrant_ListAliasesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  ListAliases(argument: _qdrant_ListAliasesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  ListAliases(argument: _qdrant_ListAliasesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  ListAliases(argument: _qdrant_ListAliasesRequest, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listAliases(argument: _qdrant_ListAliasesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listAliases(argument: _qdrant_ListAliasesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listAliases(argument: _qdrant_ListAliasesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listAliases(argument: _qdrant_ListAliasesRequest, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  
  ListCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  ListCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  ListCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  ListCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  listCollectionAliases(argument: _qdrant_ListCollectionAliasesRequest, callback: grpc.requestCallback<_qdrant_ListAliasesResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _qdrant_UpdateCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _qdrant_UpdateCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _qdrant_UpdateCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _qdrant_UpdateCollection, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _qdrant_UpdateCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _qdrant_UpdateCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _qdrant_UpdateCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _qdrant_UpdateCollection, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateAliases(argument: _qdrant_ChangeAliases, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  UpdateAliases(argument: _qdrant_ChangeAliases, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  UpdateAliases(argument: _qdrant_ChangeAliases, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  UpdateAliases(argument: _qdrant_ChangeAliases, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  updateAliases(argument: _qdrant_ChangeAliases, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  updateAliases(argument: _qdrant_ChangeAliases, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  updateAliases(argument: _qdrant_ChangeAliases, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  updateAliases(argument: _qdrant_ChangeAliases, callback: grpc.requestCallback<_qdrant_CollectionOperationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CollectionsHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_qdrant_CreateCollection__Output, _qdrant_CollectionOperationResponse>;
  
  Delete: grpc.handleUnaryCall<_qdrant_DeleteCollection__Output, _qdrant_CollectionOperationResponse>;
  
  Get: grpc.handleUnaryCall<_qdrant_GetCollectionInfoRequest__Output, _qdrant_GetCollectionInfoResponse>;
  
  List: grpc.handleUnaryCall<_qdrant_ListCollectionsRequest__Output, _qdrant_ListCollectionsResponse>;
  
  ListAliases: grpc.handleUnaryCall<_qdrant_ListAliasesRequest__Output, _qdrant_ListAliasesResponse>;
  
  ListCollectionAliases: grpc.handleUnaryCall<_qdrant_ListCollectionAliasesRequest__Output, _qdrant_ListAliasesResponse>;
  
  Update: grpc.handleUnaryCall<_qdrant_UpdateCollection__Output, _qdrant_CollectionOperationResponse>;
  
  UpdateAliases: grpc.handleUnaryCall<_qdrant_ChangeAliases__Output, _qdrant_CollectionOperationResponse>;
  
}

export interface CollectionsDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_qdrant_CreateCollection, _qdrant_CollectionOperationResponse, _qdrant_CreateCollection__Output, _qdrant_CollectionOperationResponse__Output>
  Delete: MethodDefinition<_qdrant_DeleteCollection, _qdrant_CollectionOperationResponse, _qdrant_DeleteCollection__Output, _qdrant_CollectionOperationResponse__Output>
  Get: MethodDefinition<_qdrant_GetCollectionInfoRequest, _qdrant_GetCollectionInfoResponse, _qdrant_GetCollectionInfoRequest__Output, _qdrant_GetCollectionInfoResponse__Output>
  List: MethodDefinition<_qdrant_ListCollectionsRequest, _qdrant_ListCollectionsResponse, _qdrant_ListCollectionsRequest__Output, _qdrant_ListCollectionsResponse__Output>
  ListAliases: MethodDefinition<_qdrant_ListAliasesRequest, _qdrant_ListAliasesResponse, _qdrant_ListAliasesRequest__Output, _qdrant_ListAliasesResponse__Output>
  ListCollectionAliases: MethodDefinition<_qdrant_ListCollectionAliasesRequest, _qdrant_ListAliasesResponse, _qdrant_ListCollectionAliasesRequest__Output, _qdrant_ListAliasesResponse__Output>
  Update: MethodDefinition<_qdrant_UpdateCollection, _qdrant_CollectionOperationResponse, _qdrant_UpdateCollection__Output, _qdrant_CollectionOperationResponse__Output>
  UpdateAliases: MethodDefinition<_qdrant_ChangeAliases, _qdrant_CollectionOperationResponse, _qdrant_ChangeAliases__Output, _qdrant_CollectionOperationResponse__Output>
}
