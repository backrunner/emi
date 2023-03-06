// Original file: collections.proto

import type { CollectionDescription as _qdrant_CollectionDescription, CollectionDescription__Output as _qdrant_CollectionDescription__Output } from '../qdrant/CollectionDescription';

export interface ListCollectionsResponse {
  'collections'?: (_qdrant_CollectionDescription)[];
  'time'?: (number | string);
}

export interface ListCollectionsResponse__Output {
  'collections': (_qdrant_CollectionDescription__Output)[];
  'time': (number);
}
