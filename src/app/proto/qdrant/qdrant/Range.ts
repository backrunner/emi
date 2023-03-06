// Original file: points.proto


export interface Range {
  'lt'?: (number | string);
  'gt'?: (number | string);
  'gte'?: (number | string);
  'lte'?: (number | string);
  '_lt'?: "lt";
  '_gt'?: "gt";
  '_gte'?: "gte";
  '_lte'?: "lte";
}

export interface Range__Output {
  'lt'?: (number);
  'gt'?: (number);
  'gte'?: (number);
  'lte'?: (number);
  '_lt': "lt";
  '_gt': "gt";
  '_gte': "gte";
  '_lte': "lte";
}
