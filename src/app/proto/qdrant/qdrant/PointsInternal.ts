// Original file: points_internal_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClearPayloadPointsInternal as _qdrant_ClearPayloadPointsInternal, ClearPayloadPointsInternal__Output as _qdrant_ClearPayloadPointsInternal__Output } from '../qdrant/ClearPayloadPointsInternal';
import type { CountPointsInternal as _qdrant_CountPointsInternal, CountPointsInternal__Output as _qdrant_CountPointsInternal__Output } from '../qdrant/CountPointsInternal';
import type { CountResponse as _qdrant_CountResponse, CountResponse__Output as _qdrant_CountResponse__Output } from '../qdrant/CountResponse';
import type { CreateFieldIndexCollectionInternal as _qdrant_CreateFieldIndexCollectionInternal, CreateFieldIndexCollectionInternal__Output as _qdrant_CreateFieldIndexCollectionInternal__Output } from '../qdrant/CreateFieldIndexCollectionInternal';
import type { DeleteFieldIndexCollectionInternal as _qdrant_DeleteFieldIndexCollectionInternal, DeleteFieldIndexCollectionInternal__Output as _qdrant_DeleteFieldIndexCollectionInternal__Output } from '../qdrant/DeleteFieldIndexCollectionInternal';
import type { DeletePayloadPointsInternal as _qdrant_DeletePayloadPointsInternal, DeletePayloadPointsInternal__Output as _qdrant_DeletePayloadPointsInternal__Output } from '../qdrant/DeletePayloadPointsInternal';
import type { DeletePointsInternal as _qdrant_DeletePointsInternal, DeletePointsInternal__Output as _qdrant_DeletePointsInternal__Output } from '../qdrant/DeletePointsInternal';
import type { GetPointsInternal as _qdrant_GetPointsInternal, GetPointsInternal__Output as _qdrant_GetPointsInternal__Output } from '../qdrant/GetPointsInternal';
import type { GetResponse as _qdrant_GetResponse, GetResponse__Output as _qdrant_GetResponse__Output } from '../qdrant/GetResponse';
import type { PointsOperationResponse as _qdrant_PointsOperationResponse, PointsOperationResponse__Output as _qdrant_PointsOperationResponse__Output } from '../qdrant/PointsOperationResponse';
import type { RecommendPointsInternal as _qdrant_RecommendPointsInternal, RecommendPointsInternal__Output as _qdrant_RecommendPointsInternal__Output } from '../qdrant/RecommendPointsInternal';
import type { RecommendResponse as _qdrant_RecommendResponse, RecommendResponse__Output as _qdrant_RecommendResponse__Output } from '../qdrant/RecommendResponse';
import type { ScrollPointsInternal as _qdrant_ScrollPointsInternal, ScrollPointsInternal__Output as _qdrant_ScrollPointsInternal__Output } from '../qdrant/ScrollPointsInternal';
import type { ScrollResponse as _qdrant_ScrollResponse, ScrollResponse__Output as _qdrant_ScrollResponse__Output } from '../qdrant/ScrollResponse';
import type { SearchBatchPointsInternal as _qdrant_SearchBatchPointsInternal, SearchBatchPointsInternal__Output as _qdrant_SearchBatchPointsInternal__Output } from '../qdrant/SearchBatchPointsInternal';
import type { SearchBatchResponse as _qdrant_SearchBatchResponse, SearchBatchResponse__Output as _qdrant_SearchBatchResponse__Output } from '../qdrant/SearchBatchResponse';
import type { SearchPointsInternal as _qdrant_SearchPointsInternal, SearchPointsInternal__Output as _qdrant_SearchPointsInternal__Output } from '../qdrant/SearchPointsInternal';
import type { SearchResponse as _qdrant_SearchResponse, SearchResponse__Output as _qdrant_SearchResponse__Output } from '../qdrant/SearchResponse';
import type { SetPayloadPointsInternal as _qdrant_SetPayloadPointsInternal, SetPayloadPointsInternal__Output as _qdrant_SetPayloadPointsInternal__Output } from '../qdrant/SetPayloadPointsInternal';
import type { SyncPointsInternal as _qdrant_SyncPointsInternal, SyncPointsInternal__Output as _qdrant_SyncPointsInternal__Output } from '../qdrant/SyncPointsInternal';
import type { UpsertPointsInternal as _qdrant_UpsertPointsInternal, UpsertPointsInternal__Output as _qdrant_UpsertPointsInternal__Output } from '../qdrant/UpsertPointsInternal';

export interface PointsInternalClient extends grpc.Client {
  ClearPayload(argument: _qdrant_ClearPayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  ClearPayload(argument: _qdrant_ClearPayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  ClearPayload(argument: _qdrant_ClearPayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  ClearPayload(argument: _qdrant_ClearPayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Count(argument: _qdrant_CountPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  Count(argument: _qdrant_CountPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  Count(argument: _qdrant_CountPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  Count(argument: _qdrant_CountPointsInternal, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPointsInternal, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollectionInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _qdrant_DeletePointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeletePointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeletePointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeletePointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollectionInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  DeletePayload(argument: _qdrant_DeletePayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeletePayload(argument: _qdrant_DeletePayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeletePayload(argument: _qdrant_DeletePayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeletePayload(argument: _qdrant_DeletePayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _qdrant_GetPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetPointsInternal, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPointsInternal, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  
  OverwritePayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  OverwritePayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  OverwritePayload(argument: _qdrant_SetPayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  OverwritePayload(argument: _qdrant_SetPayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Recommend(argument: _qdrant_RecommendPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  Recommend(argument: _qdrant_RecommendPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  Recommend(argument: _qdrant_RecommendPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  Recommend(argument: _qdrant_RecommendPointsInternal, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPointsInternal, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  
  Scroll(argument: _qdrant_ScrollPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  Scroll(argument: _qdrant_ScrollPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  Scroll(argument: _qdrant_ScrollPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  Scroll(argument: _qdrant_ScrollPointsInternal, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPointsInternal, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  
  Search(argument: _qdrant_SearchPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  Search(argument: _qdrant_SearchPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  Search(argument: _qdrant_SearchPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  Search(argument: _qdrant_SearchPointsInternal, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPointsInternal, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  
  SearchBatch(argument: _qdrant_SearchBatchPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  SearchBatch(argument: _qdrant_SearchBatchPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  SearchBatch(argument: _qdrant_SearchBatchPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  SearchBatch(argument: _qdrant_SearchBatchPointsInternal, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPointsInternal, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  
  SetPayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  SetPayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  SetPayload(argument: _qdrant_SetPayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  SetPayload(argument: _qdrant_SetPayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Sync(argument: _qdrant_SyncPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Sync(argument: _qdrant_SyncPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Sync(argument: _qdrant_SyncPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Sync(argument: _qdrant_SyncPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  sync(argument: _qdrant_SyncPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  sync(argument: _qdrant_SyncPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  sync(argument: _qdrant_SyncPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  sync(argument: _qdrant_SyncPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Upsert(argument: _qdrant_UpsertPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Upsert(argument: _qdrant_UpsertPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Upsert(argument: _qdrant_UpsertPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Upsert(argument: _qdrant_UpsertPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPointsInternal, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPointsInternal, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPointsInternal, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPointsInternal, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PointsInternalHandlers extends grpc.UntypedServiceImplementation {
  ClearPayload: grpc.handleUnaryCall<_qdrant_ClearPayloadPointsInternal__Output, _qdrant_PointsOperationResponse>;
  
  Count: grpc.handleUnaryCall<_qdrant_CountPointsInternal__Output, _qdrant_CountResponse>;
  
  CreateFieldIndex: grpc.handleUnaryCall<_qdrant_CreateFieldIndexCollectionInternal__Output, _qdrant_PointsOperationResponse>;
  
  Delete: grpc.handleUnaryCall<_qdrant_DeletePointsInternal__Output, _qdrant_PointsOperationResponse>;
  
  DeleteFieldIndex: grpc.handleUnaryCall<_qdrant_DeleteFieldIndexCollectionInternal__Output, _qdrant_PointsOperationResponse>;
  
  DeletePayload: grpc.handleUnaryCall<_qdrant_DeletePayloadPointsInternal__Output, _qdrant_PointsOperationResponse>;
  
  Get: grpc.handleUnaryCall<_qdrant_GetPointsInternal__Output, _qdrant_GetResponse>;
  
  OverwritePayload: grpc.handleUnaryCall<_qdrant_SetPayloadPointsInternal__Output, _qdrant_PointsOperationResponse>;
  
  Recommend: grpc.handleUnaryCall<_qdrant_RecommendPointsInternal__Output, _qdrant_RecommendResponse>;
  
  Scroll: grpc.handleUnaryCall<_qdrant_ScrollPointsInternal__Output, _qdrant_ScrollResponse>;
  
  Search: grpc.handleUnaryCall<_qdrant_SearchPointsInternal__Output, _qdrant_SearchResponse>;
  
  SearchBatch: grpc.handleUnaryCall<_qdrant_SearchBatchPointsInternal__Output, _qdrant_SearchBatchResponse>;
  
  SetPayload: grpc.handleUnaryCall<_qdrant_SetPayloadPointsInternal__Output, _qdrant_PointsOperationResponse>;
  
  Sync: grpc.handleUnaryCall<_qdrant_SyncPointsInternal__Output, _qdrant_PointsOperationResponse>;
  
  Upsert: grpc.handleUnaryCall<_qdrant_UpsertPointsInternal__Output, _qdrant_PointsOperationResponse>;
  
}

export interface PointsInternalDefinition extends grpc.ServiceDefinition {
  ClearPayload: MethodDefinition<_qdrant_ClearPayloadPointsInternal, _qdrant_PointsOperationResponse, _qdrant_ClearPayloadPointsInternal__Output, _qdrant_PointsOperationResponse__Output>
  Count: MethodDefinition<_qdrant_CountPointsInternal, _qdrant_CountResponse, _qdrant_CountPointsInternal__Output, _qdrant_CountResponse__Output>
  CreateFieldIndex: MethodDefinition<_qdrant_CreateFieldIndexCollectionInternal, _qdrant_PointsOperationResponse, _qdrant_CreateFieldIndexCollectionInternal__Output, _qdrant_PointsOperationResponse__Output>
  Delete: MethodDefinition<_qdrant_DeletePointsInternal, _qdrant_PointsOperationResponse, _qdrant_DeletePointsInternal__Output, _qdrant_PointsOperationResponse__Output>
  DeleteFieldIndex: MethodDefinition<_qdrant_DeleteFieldIndexCollectionInternal, _qdrant_PointsOperationResponse, _qdrant_DeleteFieldIndexCollectionInternal__Output, _qdrant_PointsOperationResponse__Output>
  DeletePayload: MethodDefinition<_qdrant_DeletePayloadPointsInternal, _qdrant_PointsOperationResponse, _qdrant_DeletePayloadPointsInternal__Output, _qdrant_PointsOperationResponse__Output>
  Get: MethodDefinition<_qdrant_GetPointsInternal, _qdrant_GetResponse, _qdrant_GetPointsInternal__Output, _qdrant_GetResponse__Output>
  OverwritePayload: MethodDefinition<_qdrant_SetPayloadPointsInternal, _qdrant_PointsOperationResponse, _qdrant_SetPayloadPointsInternal__Output, _qdrant_PointsOperationResponse__Output>
  Recommend: MethodDefinition<_qdrant_RecommendPointsInternal, _qdrant_RecommendResponse, _qdrant_RecommendPointsInternal__Output, _qdrant_RecommendResponse__Output>
  Scroll: MethodDefinition<_qdrant_ScrollPointsInternal, _qdrant_ScrollResponse, _qdrant_ScrollPointsInternal__Output, _qdrant_ScrollResponse__Output>
  Search: MethodDefinition<_qdrant_SearchPointsInternal, _qdrant_SearchResponse, _qdrant_SearchPointsInternal__Output, _qdrant_SearchResponse__Output>
  SearchBatch: MethodDefinition<_qdrant_SearchBatchPointsInternal, _qdrant_SearchBatchResponse, _qdrant_SearchBatchPointsInternal__Output, _qdrant_SearchBatchResponse__Output>
  SetPayload: MethodDefinition<_qdrant_SetPayloadPointsInternal, _qdrant_PointsOperationResponse, _qdrant_SetPayloadPointsInternal__Output, _qdrant_PointsOperationResponse__Output>
  Sync: MethodDefinition<_qdrant_SyncPointsInternal, _qdrant_PointsOperationResponse, _qdrant_SyncPointsInternal__Output, _qdrant_PointsOperationResponse__Output>
  Upsert: MethodDefinition<_qdrant_UpsertPointsInternal, _qdrant_PointsOperationResponse, _qdrant_UpsertPointsInternal__Output, _qdrant_PointsOperationResponse__Output>
}
