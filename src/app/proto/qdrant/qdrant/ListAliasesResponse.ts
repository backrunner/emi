// Original file: collections.proto

import type { AliasDescription as _qdrant_AliasDescription, AliasDescription__Output as _qdrant_AliasDescription__Output } from '../qdrant/AliasDescription';

export interface ListAliasesResponse {
  'aliases'?: (_qdrant_AliasDescription)[];
  'time'?: (number | string);
}

export interface ListAliasesResponse__Output {
  'aliases': (_qdrant_AliasDescription__Output)[];
  'time': (number);
}
