// Original file: collections.proto

import type { AliasOperations as _qdrant_AliasOperations, AliasOperations__Output as _qdrant_AliasOperations__Output } from '../qdrant/AliasOperations';
import type { Long } from '@grpc/proto-loader';

export interface ChangeAliases {
  'actions'?: (_qdrant_AliasOperations)[];
  'timeout'?: (number | string | Long);
  '_timeout'?: "timeout";
}

export interface ChangeAliases__Output {
  'actions': (_qdrant_AliasOperations__Output)[];
  'timeout'?: (string);
  '_timeout': "timeout";
}
