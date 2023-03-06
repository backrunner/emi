// Original file: qdrant.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HealthCheckReply as _qdrant_HealthCheckReply, HealthCheckReply__Output as _qdrant_HealthCheckReply__Output } from '../qdrant/HealthCheckReply';
import type { HealthCheckRequest as _qdrant_HealthCheckRequest, HealthCheckRequest__Output as _qdrant_HealthCheckRequest__Output } from '../qdrant/HealthCheckRequest';

export interface QdrantClient extends grpc.Client {
  HealthCheck(argument: _qdrant_HealthCheckRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  HealthCheck(argument: _qdrant_HealthCheckRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  HealthCheck(argument: _qdrant_HealthCheckRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  HealthCheck(argument: _qdrant_HealthCheckRequest, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _qdrant_HealthCheckRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _qdrant_HealthCheckRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _qdrant_HealthCheckRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _qdrant_HealthCheckRequest, callback: grpc.requestCallback<_qdrant_HealthCheckReply__Output>): grpc.ClientUnaryCall;
  
}

export interface QdrantHandlers extends grpc.UntypedServiceImplementation {
  HealthCheck: grpc.handleUnaryCall<_qdrant_HealthCheckRequest__Output, _qdrant_HealthCheckReply>;
  
}

export interface QdrantDefinition extends grpc.ServiceDefinition {
  HealthCheck: MethodDefinition<_qdrant_HealthCheckRequest, _qdrant_HealthCheckReply, _qdrant_HealthCheckRequest__Output, _qdrant_HealthCheckReply__Output>
}
