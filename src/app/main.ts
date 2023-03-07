import path from 'node:path';
import { app, BrowserWindow } from 'electron';
import { handleChatIPCEvents } from './lib/ipc/chat';

app.whenReady().then(() => {
  // init program
  handleChatIPCEvents();

  // create window
  const win = new BrowserWindow({
    title: 'Nami',
    width: 480,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  // load frontend
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile('dist/index.html');
  }
});
