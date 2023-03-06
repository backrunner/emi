// Original file: collections.proto

import type { CreateAlias as _qdrant_CreateAlias, CreateAlias__Output as _qdrant_CreateAlias__Output } from '../qdrant/CreateAlias';
import type { RenameAlias as _qdrant_RenameAlias, RenameAlias__Output as _qdrant_RenameAlias__Output } from '../qdrant/RenameAlias';
import type { DeleteAlias as _qdrant_DeleteAlias, DeleteAlias__Output as _qdrant_DeleteAlias__Output } from '../qdrant/DeleteAlias';

export interface AliasOperations {
  'createAlias'?: (_qdrant_CreateAlias | null);
  'renameAlias'?: (_qdrant_RenameAlias | null);
  'deleteAlias'?: (_qdrant_DeleteAlias | null);
  'action'?: "createAlias"|"renameAlias"|"deleteAlias";
}

export interface AliasOperations__Output {
  'createAlias'?: (_qdrant_CreateAlias__Output | null);
  'renameAlias'?: (_qdrant_RenameAlias__Output | null);
  'deleteAlias'?: (_qdrant_DeleteAlias__Output | null);
  'action': "createAlias"|"renameAlias"|"deleteAlias";
}
