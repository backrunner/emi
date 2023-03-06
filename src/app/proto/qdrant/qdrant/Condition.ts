// Original file: points.proto

import type { FieldCondition as _qdrant_FieldCondition, FieldCondition__Output as _qdrant_FieldCondition__Output } from '../qdrant/FieldCondition';
import type { IsEmptyCondition as _qdrant_IsEmptyCondition, IsEmptyCondition__Output as _qdrant_IsEmptyCondition__Output } from '../qdrant/IsEmptyCondition';
import type { HasIdCondition as _qdrant_HasIdCondition, HasIdCondition__Output as _qdrant_HasIdCondition__Output } from '../qdrant/HasIdCondition';
import type { Filter as _qdrant_Filter, Filter__Output as _qdrant_Filter__Output } from '../qdrant/Filter';

export interface Condition {
  'field'?: (_qdrant_FieldCondition | null);
  'isEmpty'?: (_qdrant_IsEmptyCondition | null);
  'hasId'?: (_qdrant_HasIdCondition | null);
  'filter'?: (_qdrant_Filter | null);
  'conditionOneOf'?: "field"|"isEmpty"|"hasId"|"filter";
}

export interface Condition__Output {
  'field'?: (_qdrant_FieldCondition__Output | null);
  'isEmpty'?: (_qdrant_IsEmptyCondition__Output | null);
  'hasId'?: (_qdrant_HasIdCondition__Output | null);
  'filter'?: (_qdrant_Filter__Output | null);
  'conditionOneOf': "field"|"isEmpty"|"hasId"|"filter";
}
