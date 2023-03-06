// Original file: points.proto

import type { PointId as _qdrant_PointId, PointId__Output as _qdrant_PointId__Output } from '../qdrant/PointId';
import type { Filter as _qdrant_Filter, Filter__Output as _qdrant_Filter__Output } from '../qdrant/Filter';
import type { WithPayloadSelector as _qdrant_WithPayloadSelector, WithPayloadSelector__Output as _qdrant_WithPayloadSelector__Output } from '../qdrant/WithPayloadSelector';
import type { SearchParams as _qdrant_SearchParams, SearchParams__Output as _qdrant_SearchParams__Output } from '../qdrant/SearchParams';
import type { WithVectorsSelector as _qdrant_WithVectorsSelector, WithVectorsSelector__Output as _qdrant_WithVectorsSelector__Output } from '../qdrant/WithVectorsSelector';
import type { LookupLocation as _qdrant_LookupLocation, LookupLocation__Output as _qdrant_LookupLocation__Output } from '../qdrant/LookupLocation';
import type { ReadConsistency as _qdrant_ReadConsistency, ReadConsistency__Output as _qdrant_ReadConsistency__Output } from '../qdrant/ReadConsistency';
import type { Long } from '@grpc/proto-loader';

export interface RecommendPoints {
  'collectionName'?: (string);
  'positive'?: (_qdrant_PointId)[];
  'negative'?: (_qdrant_PointId)[];
  'filter'?: (_qdrant_Filter | null);
  'limit'?: (number | string | Long);
  'withPayload'?: (_qdrant_WithPayloadSelector | null);
  'params'?: (_qdrant_SearchParams | null);
  'scoreThreshold'?: (number | string);
  'offset'?: (number | string | Long);
  'using'?: (string);
  'withVectors'?: (_qdrant_WithVectorsSelector | null);
  'lookupFrom'?: (_qdrant_LookupLocation | null);
  'readConsistency'?: (_qdrant_ReadConsistency | null);
  '_scoreThreshold'?: "scoreThreshold";
  '_offset'?: "offset";
  '_using'?: "using";
  '_withVectors'?: "withVectors";
  '_lookupFrom'?: "lookupFrom";
  '_readConsistency'?: "readConsistency";
}

export interface RecommendPoints__Output {
  'collectionName': (string);
  'positive': (_qdrant_PointId__Output)[];
  'negative': (_qdrant_PointId__Output)[];
  'filter': (_qdrant_Filter__Output | null);
  'limit': (string);
  'withPayload': (_qdrant_WithPayloadSelector__Output | null);
  'params': (_qdrant_SearchParams__Output | null);
  'scoreThreshold'?: (number);
  'offset'?: (string);
  'using'?: (string);
  'withVectors'?: (_qdrant_WithVectorsSelector__Output | null);
  'lookupFrom'?: (_qdrant_LookupLocation__Output | null);
  'readConsistency'?: (_qdrant_ReadConsistency__Output | null);
  '_scoreThreshold': "scoreThreshold";
  '_offset': "offset";
  '_using': "using";
  '_withVectors': "withVectors";
  '_lookupFrom': "lookupFrom";
  '_readConsistency': "readConsistency";
}
