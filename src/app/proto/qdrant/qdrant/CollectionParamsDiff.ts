// Original file: collections.proto


export interface CollectionParamsDiff {
  'replicationFactor'?: (number);
  'writeConsistencyFactor'?: (number);
  '_replicationFactor'?: "replicationFactor";
  '_writeConsistencyFactor'?: "writeConsistencyFactor";
}

export interface CollectionParamsDiff__Output {
  'replicationFactor'?: (number);
  'writeConsistencyFactor'?: (number);
  '_replicationFactor': "replicationFactor";
  '_writeConsistencyFactor': "writeConsistencyFactor";
}
