import { HISTORY_COLLECTION, KNOWLEDGE_COLLECTION } from '@/app/constants/knowledge';
import type { QdrantClient } from '../grpc/qdrant';

export const initKnowledgeBase = async (qdrantClient: QdrantClient) => {
  await Promise.all([
    qdrantClient.createCollection(KNOWLEDGE_COLLECTION),
    qdrantClient.createCollection(HISTORY_COLLECTION),
  ]);
};
