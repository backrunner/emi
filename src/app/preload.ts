import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('native', {
  createSession: () => ipcRenderer.invoke('session:create'),
  completeChat: (message: string) => ipcRenderer.invoke('chat:complete', message),
});
