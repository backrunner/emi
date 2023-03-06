// Original file: collections.proto

export const CollectionStatus = {
  UnknownCollectionStatus: 'UnknownCollectionStatus',
  Green: 'Green',
  Yellow: 'Yellow',
  Red: 'Red',
} as const;

export type CollectionStatus =
  | 'UnknownCollectionStatus'
  | 0
  | 'Green'
  | 1
  | 'Yellow'
  | 2
  | 'Red'
  | 3

export type CollectionStatus__Output = typeof CollectionStatus[keyof typeof CollectionStatus]
