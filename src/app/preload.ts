import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('native', {
  createSession: () => ipcRenderer.invoke('session:create'),
  getCurrentSessionId: () => ipcRenderer.invoke('session:getCurrentId'),
  getCurrentMessages: () => ipcRenderer.invoke('session:getCurrentMessages'),
  completeChat: (message: string) => ipcRenderer.invoke('chat:complete', message),
});
