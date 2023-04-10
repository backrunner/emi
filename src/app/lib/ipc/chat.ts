import type { HydratedChatMessage } from '@/global';
import { ipcMain } from 'electron';
import { ChatSessionManager } from '../session/manager';

export const handleChatIPCEvents = () => {
  ipcMain.handle('session:create', () => {
    const session = ChatSessionManager.createSession();
    return {
      id: session.id,
      messages: session.messages,
    };
  });
  ipcMain.handle('session:getCurrentId', () => {
    const session = ChatSessionManager.createSession();
    return session?.id;
  });
  ipcMain.handle('session:getCurrentMessages', () => {
    const currentSession = ChatSessionManager.getCurrentSession();
    if (!currentSession) {
      return [];
    }
    return currentSession.messages.filter((item) => item.role !== 'system') as HydratedChatMessage[];
  });

  ipcMain.handle('chat:complete', async (_, message: string) => {
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
};
