// Original file: collections.proto

import type { TextIndexParams as _qdrant_TextIndexParams, TextIndexParams__Output as _qdrant_TextIndexParams__Output } from '../qdrant/TextIndexParams';

export interface PayloadIndexParams {
  'textIndexParams'?: (_qdrant_TextIndexParams | null);
  'indexParams'?: "textIndexParams";
}

export interface PayloadIndexParams__Output {
  'textIndexParams'?: (_qdrant_TextIndexParams__Output | null);
  'indexParams': "textIndexParams";
}
