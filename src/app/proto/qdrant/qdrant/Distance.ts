// Original file: collections.proto

export const Distance = {
  UnknownDistance: 'UnknownDistance',
  Cosine: 'Cosine',
  Euclid: 'Euclid',
  Dot: 'Dot',
} as const;

export type Distance =
  | 'UnknownDistance'
  | 0
  | 'Cosine'
  | 1
  | 'Euclid'
  | 2
  | 'Dot'
  | 3

export type Distance__Output = typeof Distance[keyof typeof Distance]
