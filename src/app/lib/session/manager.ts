import type { ClipClient } from '../grpc/clip-as-a-service';
import type { QdrantClient } from '../grpc/qdrant';
import { ChatSession } from './session';

type GrpcClientType = 'qdrant' | 'clip';

type GrpcClient = QdrantClient | ClipClient;

export class ChatSessionManager {
  public static grpcClients: Record<GrpcClientType, GrpcClient | null> = {
    qdrant: null,
    clip: null,
  };

  private static sessions: ChatSession[] = [];
  private static currentSession?: ChatSession;

  public static createSession() {
    const session = new ChatSession();
    this.sessions.push(session);
    console.debug(`[session] New session created: ${session.id}`);
    if (this.currentSession) {
      this.currentSession.close();
    }
    this.currentSession = session;
    return session;
  }

  public static getCurrentSession() {
    return this.currentSession;
  }

  public static getSessionById(id: string) {
    return this.sessions.find((session) => session.id === id);
  }

  public static setGrpcClients(clients: Record<GrpcClientType, GrpcClient>) {
    this.grpcClients = clients;
  }
}
