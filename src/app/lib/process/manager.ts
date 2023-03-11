import { app } from 'electron';
import path from 'node:path';
import fs from 'node:fs';
import childProcess, { type ExecOptions } from 'node:child_process';
import { platform } from 'node:os';

const NEEDED_BINARIES = ['qdrant', 'clip-as-service-server'];

export default class ProcessManager {
  private static processes: childProcess.ChildProcess[] = [];

  public static exec(executable: string, options?: ExecOptions) {
    console.debug(`[process] executing ${executable}`);
    const child = childProcess.execFile(executable, {
      windowsHide: true,
      ...options,
    });
    child.on('spawn', () => {
      console.debug(`[process] ${executable} spawned.`);
    });
    child.stderr?.on('data', (data) => {
      if (!data) {
        return;
      }
      console.error(`[process] ${executable} error:\n${data}`);
    });
  }

  public static killAll() {
    this.processes.forEach((child) => {
      child.kill();
    });
  }
}

const composeBinaryPaths = (paths: string[]) => {
  if (platform() === 'win32') {
    return paths.map((p: string) => `${p}.exe`);
  }
  return paths;
};

export const launchBinaries = () => {
  const appPath = app.getAppPath();
  const binariesRoot = path.resolve(appPath, './binaries');
  const binariesPaths = composeBinaryPaths(NEEDED_BINARIES);
  const binariesExisted = binariesPaths.reduce((res, curr) => {
    return res && fs.existsSync(path.resolve(binariesRoot, curr));
  }, true);
  if (!binariesExisted) {
    throw new Error('Cannot locate needed binary files.');
  }
  composeBinaryPaths(NEEDED_BINARIES).forEach((binaryPath: string) => {
    ProcessManager.exec(path.resolve(binariesRoot, binaryPath), { cwd: binariesRoot });
  });
};
