import { ChatSession } from "./session";

export class ChatSessionManager {
  private static sessions: ChatSession[] = [];
  private static currentSession?: ChatSession;

  public static createSession() {
    const session = new ChatSession();
    this.sessions.push(session);
    console.debug(`[session] New session created: ${session.id}`);
    this.currentSession = session;
    return session;
  }

  public static switchSession(id: string) {
    const session = this.sessions.find((session) => session.id === id);
    if (!session) {
      throw new Error('Session not found.');
    }
    this.currentSession = session;
    console.debug(`[session] Switched to session: ${session.id}`);
    return session;
  }

  public static getCurrentSession() {
    return this.currentSession;
  }

  public static getSessionById(id: string) {
    return this.sessions.find((session) => session.id === id);
  }
}
