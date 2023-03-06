// Original file: points_internal_service.proto

import type { DeleteFieldIndexCollection as _qdrant_DeleteFieldIndexCollection, DeleteFieldIndexCollection__Output as _qdrant_DeleteFieldIndexCollection__Output } from '../qdrant/DeleteFieldIndexCollection';

export interface DeleteFieldIndexCollectionInternal {
  'deleteFieldIndexCollection'?: (_qdrant_DeleteFieldIndexCollection | null);
  'shardId'?: (number);
  '_shardId'?: "shardId";
}

export interface DeleteFieldIndexCollectionInternal__Output {
  'deleteFieldIndexCollection': (_qdrant_DeleteFieldIndexCollection__Output | null);
  'shardId'?: (number);
  '_shardId': "shardId";
}
