// Original file: raft_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddPeerToKnownMessage as _qdrant_AddPeerToKnownMessage, AddPeerToKnownMessage__Output as _qdrant_AddPeerToKnownMessage__Output } from '../qdrant/AddPeerToKnownMessage';
import type { AllPeers as _qdrant_AllPeers, AllPeers__Output as _qdrant_AllPeers__Output } from '../qdrant/AllPeers';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { PeerId as _qdrant_PeerId, PeerId__Output as _qdrant_PeerId__Output } from '../qdrant/PeerId';
import type { RaftMessage as _qdrant_RaftMessage, RaftMessage__Output as _qdrant_RaftMessage__Output } from '../qdrant/RaftMessage';
import type { Uri as _qdrant_Uri, Uri__Output as _qdrant_Uri__Output } from '../qdrant/Uri';

export interface RaftClient extends grpc.Client {
  AddPeerAsParticipant(argument: _qdrant_PeerId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddPeerAsParticipant(argument: _qdrant_PeerId, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddPeerAsParticipant(argument: _qdrant_PeerId, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddPeerAsParticipant(argument: _qdrant_PeerId, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addPeerAsParticipant(argument: _qdrant_PeerId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addPeerAsParticipant(argument: _qdrant_PeerId, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addPeerAsParticipant(argument: _qdrant_PeerId, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addPeerAsParticipant(argument: _qdrant_PeerId, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  AddPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  AddPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  AddPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  AddPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  addPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  addPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  addPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  addPeerToKnown(argument: _qdrant_AddPeerToKnownMessage, callback: grpc.requestCallback<_qdrant_AllPeers__Output>): grpc.ClientUnaryCall;
  
  Send(argument: _qdrant_RaftMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Send(argument: _qdrant_RaftMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Send(argument: _qdrant_RaftMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Send(argument: _qdrant_RaftMessage, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _qdrant_RaftMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _qdrant_RaftMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _qdrant_RaftMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _qdrant_RaftMessage, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  WhoIs(argument: _qdrant_PeerId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  WhoIs(argument: _qdrant_PeerId, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  WhoIs(argument: _qdrant_PeerId, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  WhoIs(argument: _qdrant_PeerId, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  whoIs(argument: _qdrant_PeerId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  whoIs(argument: _qdrant_PeerId, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  whoIs(argument: _qdrant_PeerId, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  whoIs(argument: _qdrant_PeerId, callback: grpc.requestCallback<_qdrant_Uri__Output>): grpc.ClientUnaryCall;
  
}

export interface RaftHandlers extends grpc.UntypedServiceImplementation {
  AddPeerAsParticipant: grpc.handleUnaryCall<_qdrant_PeerId__Output, _google_protobuf_Empty>;
  
  AddPeerToKnown: grpc.handleUnaryCall<_qdrant_AddPeerToKnownMessage__Output, _qdrant_AllPeers>;
  
  Send: grpc.handleUnaryCall<_qdrant_RaftMessage__Output, _google_protobuf_Empty>;
  
  WhoIs: grpc.handleUnaryCall<_qdrant_PeerId__Output, _qdrant_Uri>;
  
}

export interface RaftDefinition extends grpc.ServiceDefinition {
  AddPeerAsParticipant: MethodDefinition<_qdrant_PeerId, _google_protobuf_Empty, _qdrant_PeerId__Output, _google_protobuf_Empty__Output>
  AddPeerToKnown: MethodDefinition<_qdrant_AddPeerToKnownMessage, _qdrant_AllPeers, _qdrant_AddPeerToKnownMessage__Output, _qdrant_AllPeers__Output>
  Send: MethodDefinition<_qdrant_RaftMessage, _google_protobuf_Empty, _qdrant_RaftMessage__Output, _google_protobuf_Empty__Output>
  WhoIs: MethodDefinition<_qdrant_PeerId, _qdrant_Uri, _qdrant_PeerId__Output, _qdrant_Uri__Output>
}
