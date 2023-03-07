import { ipcMain } from "electron";
import { ChatSessionManager } from "../session/sessionManager";

export const handleChatIPCEvents = () => {
  ipcMain.handle('session:create', (event) => {
    const session = ChatSessionManager.createSession();
    return {
      id: session.id,
      messages: session.messages,
    };
  });

  ipcMain.handle('chat:complete', async (event, message: string) => {
    const currentSession = ChatSessionManager.getCurrentSession();
    if (!currentSession) {
      throw new Error('Cannot get the current session.');
    }
    const res = await currentSession.chat(message);
    return {
      sessionId: currentSession.id,
      message: res,
    };
  });
}
