// Original file: points_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClearPayloadPoints as _qdrant_ClearPayloadPoints, ClearPayloadPoints__Output as _qdrant_ClearPayloadPoints__Output } from '../qdrant/ClearPayloadPoints';
import type { CountPoints as _qdrant_CountPoints, CountPoints__Output as _qdrant_CountPoints__Output } from '../qdrant/CountPoints';
import type { CountResponse as _qdrant_CountResponse, CountResponse__Output as _qdrant_CountResponse__Output } from '../qdrant/CountResponse';
import type { CreateFieldIndexCollection as _qdrant_CreateFieldIndexCollection, CreateFieldIndexCollection__Output as _qdrant_CreateFieldIndexCollection__Output } from '../qdrant/CreateFieldIndexCollection';
import type { DeleteFieldIndexCollection as _qdrant_DeleteFieldIndexCollection, DeleteFieldIndexCollection__Output as _qdrant_DeleteFieldIndexCollection__Output } from '../qdrant/DeleteFieldIndexCollection';
import type { DeletePayloadPoints as _qdrant_DeletePayloadPoints, DeletePayloadPoints__Output as _qdrant_DeletePayloadPoints__Output } from '../qdrant/DeletePayloadPoints';
import type { DeletePoints as _qdrant_DeletePoints, DeletePoints__Output as _qdrant_DeletePoints__Output } from '../qdrant/DeletePoints';
import type { GetPoints as _qdrant_GetPoints, GetPoints__Output as _qdrant_GetPoints__Output } from '../qdrant/GetPoints';
import type { GetResponse as _qdrant_GetResponse, GetResponse__Output as _qdrant_GetResponse__Output } from '../qdrant/GetResponse';
import type { PointsOperationResponse as _qdrant_PointsOperationResponse, PointsOperationResponse__Output as _qdrant_PointsOperationResponse__Output } from '../qdrant/PointsOperationResponse';
import type { RecommendBatchPoints as _qdrant_RecommendBatchPoints, RecommendBatchPoints__Output as _qdrant_RecommendBatchPoints__Output } from '../qdrant/RecommendBatchPoints';
import type { RecommendBatchResponse as _qdrant_RecommendBatchResponse, RecommendBatchResponse__Output as _qdrant_RecommendBatchResponse__Output } from '../qdrant/RecommendBatchResponse';
import type { RecommendPoints as _qdrant_RecommendPoints, RecommendPoints__Output as _qdrant_RecommendPoints__Output } from '../qdrant/RecommendPoints';
import type { RecommendResponse as _qdrant_RecommendResponse, RecommendResponse__Output as _qdrant_RecommendResponse__Output } from '../qdrant/RecommendResponse';
import type { ScrollPoints as _qdrant_ScrollPoints, ScrollPoints__Output as _qdrant_ScrollPoints__Output } from '../qdrant/ScrollPoints';
import type { ScrollResponse as _qdrant_ScrollResponse, ScrollResponse__Output as _qdrant_ScrollResponse__Output } from '../qdrant/ScrollResponse';
import type { SearchBatchPoints as _qdrant_SearchBatchPoints, SearchBatchPoints__Output as _qdrant_SearchBatchPoints__Output } from '../qdrant/SearchBatchPoints';
import type { SearchBatchResponse as _qdrant_SearchBatchResponse, SearchBatchResponse__Output as _qdrant_SearchBatchResponse__Output } from '../qdrant/SearchBatchResponse';
import type { SearchPoints as _qdrant_SearchPoints, SearchPoints__Output as _qdrant_SearchPoints__Output } from '../qdrant/SearchPoints';
import type { SearchResponse as _qdrant_SearchResponse, SearchResponse__Output as _qdrant_SearchResponse__Output } from '../qdrant/SearchResponse';
import type { SetPayloadPoints as _qdrant_SetPayloadPoints, SetPayloadPoints__Output as _qdrant_SetPayloadPoints__Output } from '../qdrant/SetPayloadPoints';
import type { UpsertPoints as _qdrant_UpsertPoints, UpsertPoints__Output as _qdrant_UpsertPoints__Output } from '../qdrant/UpsertPoints';

export interface PointsClient extends grpc.Client {
  ClearPayload(argument: _qdrant_ClearPayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  ClearPayload(argument: _qdrant_ClearPayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  ClearPayload(argument: _qdrant_ClearPayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  ClearPayload(argument: _qdrant_ClearPayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  clearPayload(argument: _qdrant_ClearPayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Count(argument: _qdrant_CountPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  Count(argument: _qdrant_CountPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  Count(argument: _qdrant_CountPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  Count(argument: _qdrant_CountPoints, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _qdrant_CountPoints, callback: grpc.requestCallback<_qdrant_CountResponse__Output>): grpc.ClientUnaryCall;
  
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  CreateFieldIndex(argument: _qdrant_CreateFieldIndexCollection, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  createFieldIndex(argument: _qdrant_CreateFieldIndexCollection, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _qdrant_DeletePoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeletePoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeletePoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Delete(argument: _qdrant_DeletePoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _qdrant_DeletePoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deleteFieldIndex(argument: _qdrant_DeleteFieldIndexCollection, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  DeletePayload(argument: _qdrant_DeletePayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeletePayload(argument: _qdrant_DeletePayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeletePayload(argument: _qdrant_DeletePayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  DeletePayload(argument: _qdrant_DeletePayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  deletePayload(argument: _qdrant_DeletePayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _qdrant_GetPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  Get(argument: _qdrant_GetPoints, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  get(argument: _qdrant_GetPoints, callback: grpc.requestCallback<_qdrant_GetResponse__Output>): grpc.ClientUnaryCall;
  
  OverwritePayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  OverwritePayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  OverwritePayload(argument: _qdrant_SetPayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  OverwritePayload(argument: _qdrant_SetPayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  overwritePayload(argument: _qdrant_SetPayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Recommend(argument: _qdrant_RecommendPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  Recommend(argument: _qdrant_RecommendPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  Recommend(argument: _qdrant_RecommendPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  Recommend(argument: _qdrant_RecommendPoints, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  recommend(argument: _qdrant_RecommendPoints, callback: grpc.requestCallback<_qdrant_RecommendResponse__Output>): grpc.ClientUnaryCall;
  
  RecommendBatch(argument: _qdrant_RecommendBatchPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  RecommendBatch(argument: _qdrant_RecommendBatchPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  RecommendBatch(argument: _qdrant_RecommendBatchPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  RecommendBatch(argument: _qdrant_RecommendBatchPoints, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  recommendBatch(argument: _qdrant_RecommendBatchPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  recommendBatch(argument: _qdrant_RecommendBatchPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  recommendBatch(argument: _qdrant_RecommendBatchPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  recommendBatch(argument: _qdrant_RecommendBatchPoints, callback: grpc.requestCallback<_qdrant_RecommendBatchResponse__Output>): grpc.ClientUnaryCall;
  
  Scroll(argument: _qdrant_ScrollPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  Scroll(argument: _qdrant_ScrollPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  Scroll(argument: _qdrant_ScrollPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  Scroll(argument: _qdrant_ScrollPoints, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  scroll(argument: _qdrant_ScrollPoints, callback: grpc.requestCallback<_qdrant_ScrollResponse__Output>): grpc.ClientUnaryCall;
  
  Search(argument: _qdrant_SearchPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  Search(argument: _qdrant_SearchPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  Search(argument: _qdrant_SearchPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  Search(argument: _qdrant_SearchPoints, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  search(argument: _qdrant_SearchPoints, callback: grpc.requestCallback<_qdrant_SearchResponse__Output>): grpc.ClientUnaryCall;
  
  SearchBatch(argument: _qdrant_SearchBatchPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  SearchBatch(argument: _qdrant_SearchBatchPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  SearchBatch(argument: _qdrant_SearchBatchPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  SearchBatch(argument: _qdrant_SearchBatchPoints, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  searchBatch(argument: _qdrant_SearchBatchPoints, callback: grpc.requestCallback<_qdrant_SearchBatchResponse__Output>): grpc.ClientUnaryCall;
  
  SetPayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  SetPayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  SetPayload(argument: _qdrant_SetPayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  SetPayload(argument: _qdrant_SetPayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  setPayload(argument: _qdrant_SetPayloadPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
  Upsert(argument: _qdrant_UpsertPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Upsert(argument: _qdrant_UpsertPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Upsert(argument: _qdrant_UpsertPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  Upsert(argument: _qdrant_UpsertPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPoints, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPoints, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPoints, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  upsert(argument: _qdrant_UpsertPoints, callback: grpc.requestCallback<_qdrant_PointsOperationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PointsHandlers extends grpc.UntypedServiceImplementation {
  ClearPayload: grpc.handleUnaryCall<_qdrant_ClearPayloadPoints__Output, _qdrant_PointsOperationResponse>;
  
  Count: grpc.handleUnaryCall<_qdrant_CountPoints__Output, _qdrant_CountResponse>;
  
  CreateFieldIndex: grpc.handleUnaryCall<_qdrant_CreateFieldIndexCollection__Output, _qdrant_PointsOperationResponse>;
  
  Delete: grpc.handleUnaryCall<_qdrant_DeletePoints__Output, _qdrant_PointsOperationResponse>;
  
  DeleteFieldIndex: grpc.handleUnaryCall<_qdrant_DeleteFieldIndexCollection__Output, _qdrant_PointsOperationResponse>;
  
  DeletePayload: grpc.handleUnaryCall<_qdrant_DeletePayloadPoints__Output, _qdrant_PointsOperationResponse>;
  
  Get: grpc.handleUnaryCall<_qdrant_GetPoints__Output, _qdrant_GetResponse>;
  
  OverwritePayload: grpc.handleUnaryCall<_qdrant_SetPayloadPoints__Output, _qdrant_PointsOperationResponse>;
  
  Recommend: grpc.handleUnaryCall<_qdrant_RecommendPoints__Output, _qdrant_RecommendResponse>;
  
  RecommendBatch: grpc.handleUnaryCall<_qdrant_RecommendBatchPoints__Output, _qdrant_RecommendBatchResponse>;
  
  Scroll: grpc.handleUnaryCall<_qdrant_ScrollPoints__Output, _qdrant_ScrollResponse>;
  
  Search: grpc.handleUnaryCall<_qdrant_SearchPoints__Output, _qdrant_SearchResponse>;
  
  SearchBatch: grpc.handleUnaryCall<_qdrant_SearchBatchPoints__Output, _qdrant_SearchBatchResponse>;
  
  SetPayload: grpc.handleUnaryCall<_qdrant_SetPayloadPoints__Output, _qdrant_PointsOperationResponse>;
  
  Upsert: grpc.handleUnaryCall<_qdrant_UpsertPoints__Output, _qdrant_PointsOperationResponse>;
  
}

export interface PointsDefinition extends grpc.ServiceDefinition {
  ClearPayload: MethodDefinition<_qdrant_ClearPayloadPoints, _qdrant_PointsOperationResponse, _qdrant_ClearPayloadPoints__Output, _qdrant_PointsOperationResponse__Output>
  Count: MethodDefinition<_qdrant_CountPoints, _qdrant_CountResponse, _qdrant_CountPoints__Output, _qdrant_CountResponse__Output>
  CreateFieldIndex: MethodDefinition<_qdrant_CreateFieldIndexCollection, _qdrant_PointsOperationResponse, _qdrant_CreateFieldIndexCollection__Output, _qdrant_PointsOperationResponse__Output>
  Delete: MethodDefinition<_qdrant_DeletePoints, _qdrant_PointsOperationResponse, _qdrant_DeletePoints__Output, _qdrant_PointsOperationResponse__Output>
  DeleteFieldIndex: MethodDefinition<_qdrant_DeleteFieldIndexCollection, _qdrant_PointsOperationResponse, _qdrant_DeleteFieldIndexCollection__Output, _qdrant_PointsOperationResponse__Output>
  DeletePayload: MethodDefinition<_qdrant_DeletePayloadPoints, _qdrant_PointsOperationResponse, _qdrant_DeletePayloadPoints__Output, _qdrant_PointsOperationResponse__Output>
  Get: MethodDefinition<_qdrant_GetPoints, _qdrant_GetResponse, _qdrant_GetPoints__Output, _qdrant_GetResponse__Output>
  OverwritePayload: MethodDefinition<_qdrant_SetPayloadPoints, _qdrant_PointsOperationResponse, _qdrant_SetPayloadPoints__Output, _qdrant_PointsOperationResponse__Output>
  Recommend: MethodDefinition<_qdrant_RecommendPoints, _qdrant_RecommendResponse, _qdrant_RecommendPoints__Output, _qdrant_RecommendResponse__Output>
  RecommendBatch: MethodDefinition<_qdrant_RecommendBatchPoints, _qdrant_RecommendBatchResponse, _qdrant_RecommendBatchPoints__Output, _qdrant_RecommendBatchResponse__Output>
  Scroll: MethodDefinition<_qdrant_ScrollPoints, _qdrant_ScrollResponse, _qdrant_ScrollPoints__Output, _qdrant_ScrollResponse__Output>
  Search: MethodDefinition<_qdrant_SearchPoints, _qdrant_SearchResponse, _qdrant_SearchPoints__Output, _qdrant_SearchResponse__Output>
  SearchBatch: MethodDefinition<_qdrant_SearchBatchPoints, _qdrant_SearchBatchResponse, _qdrant_SearchBatchPoints__Output, _qdrant_SearchBatchResponse__Output>
  SetPayload: MethodDefinition<_qdrant_SetPayloadPoints, _qdrant_PointsOperationResponse, _qdrant_SetPayloadPoints__Output, _qdrant_PointsOperationResponse__Output>
  Upsert: MethodDefinition<_qdrant_UpsertPoints, _qdrant_PointsOperationResponse, _qdrant_UpsertPoints__Output, _qdrant_PointsOperationResponse__Output>
}
