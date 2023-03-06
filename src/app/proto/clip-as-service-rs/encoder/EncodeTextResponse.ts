// Original file: encoder.proto

import type { Embedding as _encoder_Embedding, Embedding__Output as _encoder_Embedding__Output } from '../encoder/Embedding';

export interface EncodeTextResponse {
  'embedding'?: (_encoder_Embedding)[];
}

export interface EncodeTextResponse__Output {
  'embedding': (_encoder_Embedding__Output)[];
}
