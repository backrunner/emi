// Original file: points.proto

export const FieldType = {
  FieldTypeKeyword: 'FieldTypeKeyword',
  FieldTypeInteger: 'FieldTypeInteger',
  FieldTypeFloat: 'FieldTypeFloat',
  FieldTypeGeo: 'FieldTypeGeo',
  FieldTypeText: 'FieldTypeText',
} as const;

export type FieldType =
  | 'FieldTypeKeyword'
  | 0
  | 'FieldTypeInteger'
  | 1
  | 'FieldTypeFloat'
  | 2
  | 'FieldTypeGeo'
  | 3
  | 'FieldTypeText'
  | 4

export type FieldType__Output = typeof FieldType[keyof typeof FieldType]
