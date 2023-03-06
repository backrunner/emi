import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CollectionsInternalClient as _qdrant_CollectionsInternalClient, CollectionsInternalDefinition as _qdrant_CollectionsInternalDefinition } from './qdrant/CollectionsInternal';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  qdrant: {
    AliasDescription: MessageTypeDefinition
    AliasOperations: MessageTypeDefinition
    ChangeAliases: MessageTypeDefinition
    CollectionConfig: MessageTypeDefinition
    CollectionDescription: MessageTypeDefinition
    CollectionInfo: MessageTypeDefinition
    CollectionOperationResponse: MessageTypeDefinition
    CollectionParams: MessageTypeDefinition
    CollectionParamsDiff: MessageTypeDefinition
    CollectionStatus: EnumTypeDefinition
    CollectionsInternal: SubtypeConstructor<typeof grpc.Client, _qdrant_CollectionsInternalClient> & { service: _qdrant_CollectionsInternalDefinition }
    CreateAlias: MessageTypeDefinition
    CreateCollection: MessageTypeDefinition
    DeleteAlias: MessageTypeDefinition
    DeleteCollection: MessageTypeDefinition
    Distance: EnumTypeDefinition
    GetCollectionInfoRequest: MessageTypeDefinition
    GetCollectionInfoRequestInternal: MessageTypeDefinition
    GetCollectionInfoResponse: MessageTypeDefinition
    HnswConfigDiff: MessageTypeDefinition
    InitiateShardTransferRequest: MessageTypeDefinition
    ListAliasesRequest: MessageTypeDefinition
    ListAliasesResponse: MessageTypeDefinition
    ListCollectionAliasesRequest: MessageTypeDefinition
    ListCollectionsRequest: MessageTypeDefinition
    ListCollectionsResponse: MessageTypeDefinition
    OptimizerStatus: MessageTypeDefinition
    OptimizersConfigDiff: MessageTypeDefinition
    PayloadIndexParams: MessageTypeDefinition
    PayloadSchemaInfo: MessageTypeDefinition
    PayloadSchemaType: EnumTypeDefinition
    RenameAlias: MessageTypeDefinition
    TextIndexParams: MessageTypeDefinition
    TokenizerType: EnumTypeDefinition
    UpdateCollection: MessageTypeDefinition
    VectorParams: MessageTypeDefinition
    VectorParamsMap: MessageTypeDefinition
    VectorsConfig: MessageTypeDefinition
    WalConfigDiff: MessageTypeDefinition
  }
}

