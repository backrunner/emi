import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RaftClient as _qdrant_RaftClient, RaftDefinition as _qdrant_RaftDefinition } from './qdrant/Raft';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  qdrant: {
    AddPeerToKnownMessage: MessageTypeDefinition
    AllPeers: MessageTypeDefinition
    Peer: MessageTypeDefinition
    PeerId: MessageTypeDefinition
    Raft: SubtypeConstructor<typeof grpc.Client, _qdrant_RaftClient> & { service: _qdrant_RaftDefinition }
    RaftMessage: MessageTypeDefinition
    Uri: MessageTypeDefinition
  }
}

