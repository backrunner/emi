// Original file: encoder.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EncodeTextRequest as _encoder_EncodeTextRequest, EncodeTextRequest__Output as _encoder_EncodeTextRequest__Output } from '../encoder/EncodeTextRequest';
import type { EncodeTextResponse as _encoder_EncodeTextResponse, EncodeTextResponse__Output as _encoder_EncodeTextResponse__Output } from '../encoder/EncodeTextResponse';

export interface EncoderClient extends grpc.Client {
  EncodeText(argument: _encoder_EncodeTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  EncodeText(argument: _encoder_EncodeTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  EncodeText(argument: _encoder_EncodeTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  EncodeText(argument: _encoder_EncodeTextRequest, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  encodeText(argument: _encoder_EncodeTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  encodeText(argument: _encoder_EncodeTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  encodeText(argument: _encoder_EncodeTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  encodeText(argument: _encoder_EncodeTextRequest, callback: grpc.requestCallback<_encoder_EncodeTextResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EncoderHandlers extends grpc.UntypedServiceImplementation {
  EncodeText: grpc.handleUnaryCall<_encoder_EncodeTextRequest__Output, _encoder_EncodeTextResponse>;
  
}

export interface EncoderDefinition extends grpc.ServiceDefinition {
  EncodeText: MethodDefinition<_encoder_EncodeTextRequest, _encoder_EncodeTextResponse, _encoder_EncodeTextRequest__Output, _encoder_EncodeTextResponse__Output>
}
