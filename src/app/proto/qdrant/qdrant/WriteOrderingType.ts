// Original file: points.proto

export const WriteOrderingType = {
  Weak: 'Weak',
  Medium: 'Medium',
  Strong: 'Strong',
} as const;

export type WriteOrderingType =
  | 'Weak'
  | 0
  | 'Medium'
  | 1
  | 'Strong'
  | 2

export type WriteOrderingType__Output = typeof WriteOrderingType[keyof typeof WriteOrderingType]
