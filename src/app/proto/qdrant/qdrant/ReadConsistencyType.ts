// Original file: points.proto

export const ReadConsistencyType = {
  All: 'All',
  Majority: 'Majority',
  Quorum: 'Quorum',
} as const;

export type ReadConsistencyType =
  | 'All'
  | 0
  | 'Majority'
  | 1
  | 'Quorum'
  | 2

export type ReadConsistencyType__Output = typeof ReadConsistencyType[keyof typeof ReadConsistencyType]
