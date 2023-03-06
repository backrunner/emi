// Original file: points.proto

import type { Vector as _qdrant_Vector, Vector__Output as _qdrant_Vector__Output } from '../qdrant/Vector';

export interface NamedVectors {
  'vectors'?: ({[key: string]: _qdrant_Vector});
}

export interface NamedVectors__Output {
  'vectors': ({[key: string]: _qdrant_Vector__Output});
}
