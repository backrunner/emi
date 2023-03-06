import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EncoderClient as _encoder_EncoderClient, EncoderDefinition as _encoder_EncoderDefinition } from './encoder/Encoder';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  encoder: {
    Embedding: MessageTypeDefinition
    EncodeTextRequest: MessageTypeDefinition
    EncodeTextResponse: MessageTypeDefinition
    Encoder: SubtypeConstructor<typeof grpc.Client, _encoder_EncoderClient> & { service: _encoder_EncoderDefinition }
  }
}

