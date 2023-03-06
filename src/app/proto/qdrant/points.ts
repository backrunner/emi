import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  qdrant: {
    AliasDescription: MessageTypeDefinition
    AliasOperations: MessageTypeDefinition
    BatchResult: MessageTypeDefinition
    ChangeAliases: MessageTypeDefinition
    ClearPayloadPoints: MessageTypeDefinition
    CollectionConfig: MessageTypeDefinition
    CollectionDescription: MessageTypeDefinition
    CollectionInfo: MessageTypeDefinition
    CollectionOperationResponse: MessageTypeDefinition
    CollectionParams: MessageTypeDefinition
    CollectionParamsDiff: MessageTypeDefinition
    CollectionStatus: EnumTypeDefinition
    Condition: MessageTypeDefinition
    CountPoints: MessageTypeDefinition
    CountResponse: MessageTypeDefinition
    CountResult: MessageTypeDefinition
    CreateAlias: MessageTypeDefinition
    CreateCollection: MessageTypeDefinition
    CreateFieldIndexCollection: MessageTypeDefinition
    DeleteAlias: MessageTypeDefinition
    DeleteCollection: MessageTypeDefinition
    DeleteFieldIndexCollection: MessageTypeDefinition
    DeletePayloadPoints: MessageTypeDefinition
    DeletePoints: MessageTypeDefinition
    Distance: EnumTypeDefinition
    FieldCondition: MessageTypeDefinition
    FieldType: EnumTypeDefinition
    Filter: MessageTypeDefinition
    GeoBoundingBox: MessageTypeDefinition
    GeoPoint: MessageTypeDefinition
    GeoRadius: MessageTypeDefinition
    GetCollectionInfoRequest: MessageTypeDefinition
    GetCollectionInfoResponse: MessageTypeDefinition
    GetPoints: MessageTypeDefinition
    GetResponse: MessageTypeDefinition
    HasIdCondition: MessageTypeDefinition
    HnswConfigDiff: MessageTypeDefinition
    IsEmptyCondition: MessageTypeDefinition
    ListAliasesRequest: MessageTypeDefinition
    ListAliasesResponse: MessageTypeDefinition
    ListCollectionAliasesRequest: MessageTypeDefinition
    ListCollectionsRequest: MessageTypeDefinition
    ListCollectionsResponse: MessageTypeDefinition
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
    PointId: MessageTypeDefinition
    PointStruct: MessageTypeDefinition
    PointsIdsList: MessageTypeDefinition
    PointsOperationResponse: MessageTypeDefinition
    PointsSelector: MessageTypeDefinition
    Range: MessageTypeDefinition
    ReadConsistency: MessageTypeDefinition
    ReadConsistencyType: EnumTypeDefinition
    RecommendBatchPoints: MessageTypeDefinition
    RecommendBatchResponse: MessageTypeDefinition
    RecommendPoints: MessageTypeDefinition
    RecommendResponse: MessageTypeDefinition
    RenameAlias: MessageTypeDefinition
    RetrievedPoint: MessageTypeDefinition
    ScoredPoint: MessageTypeDefinition
    ScrollPoints: MessageTypeDefinition
    ScrollResponse: MessageTypeDefinition
    SearchBatchPoints: MessageTypeDefinition
    SearchBatchResponse: MessageTypeDefinition
    SearchParams: MessageTypeDefinition
    SearchPoints: MessageTypeDefinition
    SearchResponse: MessageTypeDefinition
    SetPayloadPoints: MessageTypeDefinition
    Struct: MessageTypeDefinition
    TextIndexParams: MessageTypeDefinition
    TokenizerType: EnumTypeDefinition
    UpdateCollection: MessageTypeDefinition
    UpdateResult: MessageTypeDefinition
    UpdateStatus: EnumTypeDefinition
    UpsertPoints: MessageTypeDefinition
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

