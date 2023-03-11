import path from 'node:path';
import { app, BrowserWindow } from 'electron';
import { handleChatIPCEvents } from './lib/ipc/chat';
import ProcessManager, { launchBinaries } from './lib/process/manager';
import { QdrantClient } from './lib/grpc/qdrant';
import { ClipClient } from './lib/grpc/clip-as-a-service';
import { initKnowledgeBase } from './lib/knowledge';
import { ChatSessionManager } from './lib/session/sessionManager';

app.whenReady().then(async () => {
  // launch binaries
  await launchBinaries();

  // create clients
  const qdrantClient = new QdrantClient();
  const clipClient = new ClipClient();

  await Promise.all([qdrantClient.init(), clipClient.init()]);

  // init qdrant
  await initKnowledgeBase(qdrantClient);

  // set clients to chat session manager
  ChatSessionManager.setGrpcClients({ qdrant: qdrantClient, clip: clipClient });

  // init program
  handleChatIPCEvents();

  // create window
  const win = new BrowserWindow({
    title: 'Nami',
    width: 480,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // load frontend
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.resolve(app.getAppPath(), './dist/index.html'));
  }
});

app.on('before-quit', () => {
  ProcessManager.killAll();
});
