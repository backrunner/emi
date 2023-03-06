// Original file: collections.proto

export const TokenizerType = {
  Unknown: 'Unknown',
  Prefix: 'Prefix',
  Whitespace: 'Whitespace',
  Word: 'Word',
} as const;

export type TokenizerType =
  | 'Unknown'
  | 0
  | 'Prefix'
  | 1
  | 'Whitespace'
  | 2
  | 'Word'
  | 3

export type TokenizerType__Output = typeof TokenizerType[keyof typeof TokenizerType]
