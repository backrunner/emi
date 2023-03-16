import 'reflect-metadata';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import path from 'node:path';
import { ChatHistory } from './entities/ChatHistory';
import { Session } from './entities/Session';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: path.resolve(app.getAppPath(), './binaries/data.db'),
  prepareDatabase: (db) => {
    db.pragma('journal_mode = WAL');
  },
  entities: [ChatHistory, Session],
  logging: true,
  synchronize: true,
  nativeBinding: path.resolve(app.getAppPath(), './binaries/better_sqlite3.node'),
});
