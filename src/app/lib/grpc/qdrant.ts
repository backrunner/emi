import { app } from 'electron';
import dayjs from 'dayjs';
import path from 'node:path';
import os from 'node:os';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import type { ProtoGrpcType } from '@/app/proto/qdrant/qdrant';
import type { CollectionsClient } from '@/app/proto/qdrant/qdrant/Collections';
import type { PointsClient } from '@/app/proto/qdrant/qdrant/Points';
import type { ListCollectionsResponse } from '@/app/proto/qdrant/qdrant/ListCollectionsResponse';
import type { PointStruct } from '@/app/proto/qdrant/qdrant/PointStruct';
import type { SearchResponse } from '@/app/proto/qdrant/qdrant/SearchResponse';
import type { ScoredPoint } from '@/app/proto/qdrant/qdrant/ScoredPoint';

import { userConfigStore } from '@/app/store';

const SERVICE_HOST = 'localhost:6334';

const packageDefinition = protoLoader.loadSync(path.resolve(app.getAppPath(), './src/app/proto/qdrant/qdrant.proto'));

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const VECTOR_SIZE = 512;

export class QdrantClient {
  private collectionsClient?: CollectionsClient;
  private pointsClient?: PointsClient;

  public async init() {
    if (this.collectionsClient) {
      this.collectionsClient.close();
    }
    const promises = [];
    promises.push(
      new Promise((resolve, reject) => {
        const collectionsClient = new proto.qdrant.Collections(SERVICE_HOST, grpc.credentials.createInsecure());
        collectionsClient.waitForReady(dayjs().add(30, 'second').toDate(), (err?: Error) => {
          if (err) {
            return reject(err);
          }
          this.collectionsClient = collectionsClient;
          resolve(collectionsClient);
        });
      }),
      new Promise((resolve, reject) => {
        const pointsClient = new proto.qdrant.Points(SERVICE_HOST, grpc.credentials.createInsecure());
        pointsClient.waitForReady(dayjs().add(30, 'second').toDate(), (err?: Error) => {
          if (err) {
            return reject(err);
          }
          this.pointsClient = pointsClient;
          resolve(pointsClient);
        });
      }),
    );
    await Promise.all(promises);
    console.debug('[qdrant] client initialized.');
    return {
      collectionsClient: this.collectionsClient,
      pointsClient: this.pointsClient,
    };
  }

  public close() {
    this.collectionsClient?.close();
    this.pointsClient?.close();
  }

  public async createCollection(name: string) {
    if (!this.collectionsClient) {
      throw new Error('Collections client is not initialized.');
    }
    const listRes = await new Promise<ListCollectionsResponse>((resolve, reject) => {
      this.collectionsClient?.List({}, (err, value) => {
        if (err) {
          return reject(err);
        }
        console.debug(`[qdrant] collection ${name} already existed.`);
        resolve(value as ListCollectionsResponse);
      });
    });
    if (listRes.collections?.find((item) => item.name === name)) {
      return;
    }
    await new Promise<void>((resolve, reject) => {
      this.collectionsClient?.Create(
        {
          collectionName: name,
          hnswConfig: {
            m: 20,
            efConstruct: 200,
            fullScanThreshold: 10,
            onDisk: !!userConfigStore.get('payload_on_disk'),
            maxIndexingThreads: os.cpus().length,
          },
          onDiskPayload: !!userConfigStore.get('payload_on_disk'),
          timeout: 30,
          vectorsConfig: {
            params: {
              size: VECTOR_SIZE,
              distance: 'Cosine',
            },
          },
        },
        (err) => {
          if (err) {
            return reject(err);
          }
          console.debug(`[qdrant] collection ${name} created.`);
          resolve();
        },
      );
    });
  }

  public async upsertPoints(collectionName: string, points: PointStruct) {
    if (!this.pointsClient) {
      throw new Error('Points client is not initialized.');
    }
    await new Promise<void>((resolve, reject) => {
      this.pointsClient?.Upsert(
        {
          collectionName: collectionName,
          points: [points],
        },
        (err) => {
          if (err) {
            return reject(err);
          }
          console.debug(`[qdrant] point upserted to ${collectionName}.`);
          resolve();
        },
      );
    });
  }

  public async searchPoints(collectionName: string, vector: number[]) {
    if (!this.pointsClient) {
      throw new Error('Points client is not initialized.');
    }
    const res = await new Promise<ScoredPoint[]>((resolve, reject) => {
      this.pointsClient?.Search(
        {
          collectionName,
          vector,
          limit: 10,
        },
        (err, value?: SearchResponse) => {
          if (err) {
            return reject(err);
          }
          if (!value) {
            return [];
          }
          const { result } = value;
          resolve(result as ScoredPoint[]);
        },
      );
    });
    return res;
  }
}
