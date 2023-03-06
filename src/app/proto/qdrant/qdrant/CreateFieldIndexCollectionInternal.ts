// Original file: points_internal_service.proto

import type { CreateFieldIndexCollection as _qdrant_CreateFieldIndexCollection, CreateFieldIndexCollection__Output as _qdrant_CreateFieldIndexCollection__Output } from '../qdrant/CreateFieldIndexCollection';

export interface CreateFieldIndexCollectionInternal {
  'createFieldIndexCollection'?: (_qdrant_CreateFieldIndexCollection | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface CreateFieldIndexCollectionInternal__Output {
  'createFieldIndexCollection': (_qdrant_CreateFieldIndexCollection__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
