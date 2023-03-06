import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CollectionsClient as _qdrant_CollectionsClient, CollectionsDefinition as _qdrant_CollectionsDefinition } from './qdrant/Collections';
import type { CollectionsInternalClient as _qdrant_CollectionsInternalClient, CollectionsInternalDefinition as _qdrant_CollectionsInternalDefinition } from './qdrant/CollectionsInternal';
import type { PointsClient as _qdrant_PointsClient, PointsDefinition as _qdrant_PointsDefinition } from './qdrant/Points';
import type { PointsInternalClient as _qdrant_PointsInternalClient, PointsInternalDefinition as _qdrant_PointsInternalDefinition } from './qdrant/PointsInternal';
import type { QdrantClient as _qdrant_QdrantClient, QdrantDefinition as _qdrant_QdrantDefinition } from './qdrant/Qdrant';
import type { RaftClient as _qdrant_RaftClient, RaftDefinition as _qdrant_RaftDefinition } from './qdrant/Raft';
import type { SnapshotsClient as _qdrant_SnapshotsClient, SnapshotsDefinition as _qdrant_SnapshotsDefinition } from './qdrant/Snapshots';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      ListValue: MessageTypeDefinition
      NullValue: EnumTypeDefinition
      Struct: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      Value: MessageTypeDefinition
    }
  }
  qdrant: {
    AddPeerToKnownMessage: MessageTypeDefinition
    AliasDescription: MessageTypeDefinition
    AliasOperations: MessageTypeDefinition
    AllPeers: MessageTypeDefinition
    BatchResult: MessageTypeDefinition
    ChangeAliases: MessageTypeDefinition
    ClearPayloadPoints: MessageTypeDefinition
    ClearPayloadPointsInternal: MessageTypeDefinition
    CollectionConfig: MessageTypeDefinition
    CollectionDescription: MessageTypeDefinition
    CollectionInfo: MessageTypeDefinition
    CollectionOperationResponse: MessageTypeDefinition
    CollectionParams: MessageTypeDefinition
    CollectionParamsDiff: MessageTypeDefinition
    CollectionStatus: EnumTypeDefinition
    Collections: SubtypeConstructor<typeof grpc.Client, _qdrant_CollectionsClient> & { service: _qdrant_CollectionsDefinition }
    CollectionsInternal: SubtypeConstructor<typeof grpc.Client, _qdrant_CollectionsInternalClient> & { service: _qdrant_CollectionsInternalDefinition }
    Condition: MessageTypeDefinition
    CountPoints: MessageTypeDefinition
    CountPointsInternal: MessageTypeDefinition
    CountResponse: MessageTypeDefinition
    CountResult: MessageTypeDefinition
    CreateAlias: MessageTypeDefinition
    CreateCollection: MessageTypeDefinition
    CreateFieldIndexCollection: MessageTypeDefinition
    CreateFieldIndexCollectionInternal: MessageTypeDefinition
    CreateFullSnapshotRequest: MessageTypeDefinition
    CreateSnapshotRequest: MessageTypeDefinition
    CreateSnapshotResponse: MessageTypeDefinition
    DeleteAlias: MessageTypeDefinition
    DeleteCollection: MessageTypeDefinition
    DeleteFieldIndexCollection: MessageTypeDefinition
    DeleteFieldIndexCollectionInternal: MessageTypeDefinition
    DeleteFullSnapshotRequest: MessageTypeDefinition
    DeletePayloadPoints: MessageTypeDefinition
    DeletePayloadPointsInternal: MessageTypeDefinition
    DeletePoints: MessageTypeDefinition
    DeletePointsInternal: MessageTypeDefinition
    DeleteSnapshotRequest: MessageTypeDefinition
    DeleteSnapshotResponse: MessageTypeDefinition
    Distance: EnumTypeDefinition
    FieldCondition: MessageTypeDefinition
    FieldType: EnumTypeDefinition
    Filter: MessageTypeDefinition
    GeoBoundingBox: MessageTypeDefinition
    GeoPoint: MessageTypeDefinition
    GeoRadius: MessageTypeDefinition
    GetCollectionInfoRequest: MessageTypeDefinition
    GetCollectionInfoRequestInternal: MessageTypeDefinition
    GetCollectionInfoResponse: MessageTypeDefinition
    GetPoints: MessageTypeDefinition
    GetPointsInternal: MessageTypeDefinition
    GetResponse: MessageTypeDefinition
    HasIdCondition: MessageTypeDefinition
    HealthCheckReply: MessageTypeDefinition
    HealthCheckRequest: MessageTypeDefinition
    HnswConfigDiff: MessageTypeDefinition
    InitiateShardTransferRequest: MessageTypeDefinition
    IsEmptyCondition: MessageTypeDefinition
    ListAliasesRequest: MessageTypeDefinition
    ListAliasesResponse: MessageTypeDefinition
    ListCollectionAliasesRequest: MessageTypeDefinition
    ListCollectionsRequest: MessageTypeDefinition
    ListCollectionsResponse: MessageTypeDefinition
    ListFullSnapshotsRequest: MessageTypeDefinition
    ListSnapshotsRequest: MessageTypeDefinition
    ListSnapshotsResponse: MessageTypeDefinition
    ListValue: MessageTypeDefinition
    LookupLocation: MessageTypeDefinition
    Match: MessageTypeDefinition
    NamedVectors: MessageTypeDefinition
    NullValue: EnumTypeDefinition
    OptimizerStatus: MessageTypeDefinition
    OptimizersConfigDiff: MessageTypeDefinition
    PayloadExcludeSelector: MessageTypeDefinition
    PayloadIncludeSelector: MessageTypeDefinition
    PayloadIndexParams: MessageTypeDefinition
    PayloadSchemaInfo: MessageTypeDefinition
    PayloadSchemaType: EnumTypeDefinition
    Peer: MessageTypeDefinition
    PeerId: MessageTypeDefinition
    PointId: MessageTypeDefinition
    PointStruct: MessageTypeDefinition
    Points: SubtypeConstructor<typeof grpc.Client, _qdrant_PointsClient> & { service: _qdrant_PointsDefinition }
    PointsIdsList: MessageTypeDefinition
    PointsInternal: SubtypeConstructor<typeof grpc.Client, _qdrant_PointsInternalClient> & { service: _qdrant_PointsInternalDefinition }
    PointsOperationResponse: MessageTypeDefinition
    PointsSelector: MessageTypeDefinition
    Qdrant: SubtypeConstructor<typeof grpc.Client, _qdrant_QdrantClient> & { service: _qdrant_QdrantDefinition }
    Raft: SubtypeConstructor<typeof grpc.Client, _qdrant_RaftClient> & { service: _qdrant_RaftDefinition }
    RaftMessage: MessageTypeDefinition
    Range: MessageTypeDefinition
    ReadConsistency: MessageTypeDefinition
    ReadConsistencyType: EnumTypeDefinition
    RecommendBatchPoints: MessageTypeDefinition
    RecommendBatchResponse: MessageTypeDefinition
    RecommendPoints: MessageTypeDefinition
    RecommendPointsInternal: MessageTypeDefinition
    RecommendResponse: MessageTypeDefinition
    RenameAlias: MessageTypeDefinition
    RetrievedPoint: MessageTypeDefinition
    ScoredPoint: MessageTypeDefinition
    ScrollPoints: MessageTypeDefinition
    ScrollPointsInternal: MessageTypeDefinition
    ScrollResponse: MessageTypeDefinition
    SearchBatchPoints: MessageTypeDefinition
    SearchBatchPointsInternal: MessageTypeDefinition
    SearchBatchResponse: MessageTypeDefinition
    SearchParams: MessageTypeDefinition
    SearchPoints: MessageTypeDefinition
    SearchPointsInternal: MessageTypeDefinition
    SearchResponse: MessageTypeDefinition
    SetPayloadPoints: MessageTypeDefinition
    SetPayloadPointsInternal: MessageTypeDefinition
    SnapshotDescription: MessageTypeDefinition
    Snapshots: SubtypeConstructor<typeof grpc.Client, _qdrant_SnapshotsClient> & { service: _qdrant_SnapshotsDefinition }
    Struct: MessageTypeDefinition
    SyncPoints: MessageTypeDefinition
    SyncPointsInternal: MessageTypeDefinition
    TextIndexParams: MessageTypeDefinition
    TokenizerType: EnumTypeDefinition
    UpdateCollection: MessageTypeDefinition
    UpdateResult: MessageTypeDefinition
    UpdateStatus: EnumTypeDefinition
    UpsertPoints: MessageTypeDefinition
    UpsertPointsInternal: MessageTypeDefinition
    Uri: MessageTypeDefinition
    Value: MessageTypeDefinition
    ValuesCount: MessageTypeDefinition
    Vector: MessageTypeDefinition
    VectorParams: MessageTypeDefinition
    VectorParamsMap: MessageTypeDefinition
    Vectors: MessageTypeDefinition
    VectorsConfig: MessageTypeDefinition
    VectorsSelector: MessageTypeDefinition
    WalConfigDiff: MessageTypeDefinition
    WithPayloadSelector: MessageTypeDefinition
    WithVectorsSelector: MessageTypeDefinition
    WriteOrdering: MessageTypeDefinition
    WriteOrderingType: EnumTypeDefinition
  }
}

