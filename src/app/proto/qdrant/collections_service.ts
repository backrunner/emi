import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CollectionsClient as _qdrant_CollectionsClient, CollectionsDefinition as _qdrant_CollectionsDefinition } from './qdrant/Collections';

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
    Collections: SubtypeConstructor<typeof grpc.Client, _qdrant_CollectionsClient> & { service: _qdrant_CollectionsDefinition }
    CreateAlias: MessageTypeDefinition
    CreateCollection: MessageTypeDefinition
    DeleteAlias: MessageTypeDefinition
    DeleteCollection: MessageTypeDefinition
    Distance: EnumTypeDefinition
    GetCollectionInfoRequest: MessageTypeDefinition
    GetCollectionInfoResponse: MessageTypeDefinition
    HnswConfigDiff: MessageTypeDefinition
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

