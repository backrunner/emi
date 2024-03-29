import { app } from 'electron';
import dayjs from 'dayjs';
import path from 'node:path';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import type { ProtoGrpcType } from '@/app/proto/clip-as-service-rs/encoder';
import type { EncoderClient } from '@/app/proto/clip-as-service-rs/encoder/Encoder';
import type { Embedding } from '@/app/proto/clip-as-service-rs/encoder/Embedding';

const SERVICE_HOST = 'localhost:50051';

const packageDefinition = protoLoader.loadSync(
  path.resolve(app.getAppPath(), './src/app/proto/clip-as-service-rs/encoder.proto'),
);

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export class ClipClient {
  private client?: EncoderClient;

  public init() {
    if (this.client) {
      console.warn('[clip] client already initialized.');
      return this.client;
    }
    return new Promise((resolve, reject) => {
      const clipClient = new proto.encoder.Encoder(SERVICE_HOST, grpc.credentials.createInsecure());
      clipClient.waitForReady(dayjs().add(30, 'second').toDate(), (err?: Error) => {
        if (err) {
          return reject(err);
        }
        this.client = clipClient;
        console.debug('[clip] client initialized.');
        resolve(clipClient);
      });
    });
  }

  public close() {
    this.client?.close();
  }

  public encodeText(text: string): Promise<number[]> {
    if (!this.client) {
      throw new Error('Client is not initialized.');
    }
    return new Promise((resolve, reject) => {
      this.client!.encodeText(
        {
          texts: [text],
        },
        {
          deadline: dayjs().add(30, 'second').toDate(),
        },
        (err, value) => {
          if (err) {
            return reject(err);
          }
          const point = value?.embedding?.[0]?.point;
          if (!point) {
            return reject(new Error('Cannot receive point data from the service.'));
          }
          console.debug('[clip] point data received.', point.length);
          resolve(point);
        },
      );
    });
  }

  public encodeTexts(texts: string[]): Promise<Embedding[]> {
    if (!this.client) {
      throw new Error('Client is not initialized.');
    }
    return new Promise((resolve, reject) => {
      this.client!.encodeText(
        {
          texts,
        },
        {
          deadline: dayjs().add(30, 'second').toDate(),
        },
        (err, value) => {
          if (err) {
            return reject(err);
          }
          resolve(value?.embedding as Embedding[]);
        },
      );
    });
  }
}
