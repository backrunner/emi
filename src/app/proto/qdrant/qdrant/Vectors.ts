// Original file: points.proto

import type { Vector as _qdrant_Vector, Vector__Output as _qdrant_Vector__Output } from '../qdrant/Vector';
import type { NamedVectors as _qdrant_NamedVectors, NamedVectors__Output as _qdrant_NamedVectors__Output } from '../qdrant/NamedVectors';

export interface Vectors {
  'vector'?: (_qdrant_Vector | null);
  'vectors'?: (_qdrant_NamedVectors | null);
  'vectorsOptions'?: "vector"|"vectors";
}

export interface Vectors__Output {
  'vector'?: (_qdrant_Vector__Output | null);
  'vectors'?: (_qdrant_NamedVectors__Output | null);
  'vectorsOptions': "vector"|"vectors";
}
