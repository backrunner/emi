// Original file: collections.proto

export const PayloadSchemaType = {
  UnknownType: 'UnknownType',
  Keyword: 'Keyword',
  Integer: 'Integer',
  Float: 'Float',
  Geo: 'Geo',
  Text: 'Text',
} as const;

export type PayloadSchemaType =
  | 'UnknownType'
  | 0
  | 'Keyword'
  | 1
  | 'Integer'
  | 2
  | 'Float'
  | 3
  | 'Geo'
  | 4
  | 'Text'
  | 5

export type PayloadSchemaType__Output = typeof PayloadSchemaType[keyof typeof PayloadSchemaType]
