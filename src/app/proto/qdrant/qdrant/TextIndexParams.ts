// Original file: collections.proto

import type { TokenizerType as _qdrant_TokenizerType, TokenizerType__Output as _qdrant_TokenizerType__Output } from '../qdrant/TokenizerType';
import type { Long } from '@grpc/proto-loader';

export interface TextIndexParams {
  'tokenizer'?: (_qdrant_TokenizerType);
  'lowercase'?: (boolean);
  'minTokenLen'?: (number | string | Long);
  'maxTokenLen'?: (number | string | Long);
  '_lowercase'?: "lowercase";
  '_minTokenLen'?: "minTokenLen";
  '_maxTokenLen'?: "maxTokenLen";
}

export interface TextIndexParams__Output {
  'tokenizer': (_qdrant_TokenizerType__Output);
  'lowercase'?: (boolean);
  'minTokenLen'?: (string);
  'maxTokenLen'?: (string);
  '_lowercase': "lowercase";
  '_minTokenLen': "minTokenLen";
  '_maxTokenLen': "maxTokenLen";
}
