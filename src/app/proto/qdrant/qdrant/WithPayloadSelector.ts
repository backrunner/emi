// Original file: points.proto

import type { PayloadIncludeSelector as _qdrant_PayloadIncludeSelector, PayloadIncludeSelector__Output as _qdrant_PayloadIncludeSelector__Output } from '../qdrant/PayloadIncludeSelector';
import type { PayloadExcludeSelector as _qdrant_PayloadExcludeSelector, PayloadExcludeSelector__Output as _qdrant_PayloadExcludeSelector__Output } from '../qdrant/PayloadExcludeSelector';

export interface WithPayloadSelector {
  'enable'?: (boolean);
  'include'?: (_qdrant_PayloadIncludeSelector | null);
  'exclude'?: (_qdrant_PayloadExcludeSelector | null);
  'selectorOptions'?: "enable"|"include"|"exclude";
}

export interface WithPayloadSelector__Output {
  'enable'?: (boolean);
  'include'?: (_qdrant_PayloadIncludeSelector__Output | null);
  'exclude'?: (_qdrant_PayloadExcludeSelector__Output | null);
  'selectorOptions': "enable"|"include"|"exclude";
}
