// Original file: collections.proto

import type { CollectionStatus as _qdrant_CollectionStatus, CollectionStatus__Output as _qdrant_CollectionStatus__Output } from '../qdrant/CollectionStatus';
import type { OptimizerStatus as _qdrant_OptimizerStatus, OptimizerStatus__Output as _qdrant_OptimizerStatus__Output } from '../qdrant/OptimizerStatus';
import type { CollectionConfig as _qdrant_CollectionConfig, CollectionConfig__Output as _qdrant_CollectionConfig__Output } from '../qdrant/CollectionConfig';
import type { PayloadSchemaInfo as _qdrant_PayloadSchemaInfo, PayloadSchemaInfo__Output as _qdrant_PayloadSchemaInfo__Output } from '../qdrant/PayloadSchemaInfo';
import type { Long } from '@grpc/proto-loader';

export interface CollectionInfo {
  'status'?: (_qdrant_CollectionStatus);
  'optimizerStatus'?: (_qdrant_OptimizerStatus | null);
  'vectorsCount'?: (number | string | Long);
  'segmentsCount'?: (number | string | Long);
  'config'?: (_qdrant_CollectionConfig | null);
  'payloadSchema'?: ({[key: string]: _qdrant_PayloadSchemaInfo});
  'pointsCount'?: (number | string | Long);
  'indexedVectorsCount'?: (number | string | Long);
  '_indexedVectorsCount'?: "indexedVectorsCount";
}

export interface CollectionInfo__Output {
  'status': (_qdrant_CollectionStatus__Output);
  'optimizerStatus': (_qdrant_OptimizerStatus__Output | null);
  'vectorsCount': (string);
  'segmentsCount': (string);
  'config': (_qdrant_CollectionConfig__Output | null);
  'payloadSchema': ({[key: string]: _qdrant_PayloadSchemaInfo__Output});
  'pointsCount': (string);
  'indexedVectorsCount'?: (string);
  '_indexedVectorsCount': "indexedVectorsCount";
}
