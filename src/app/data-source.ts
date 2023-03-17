import 'reflect-metadata';
import path from 'node:path';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import { ChatHistory } from './entities/ChatHistory';
import { Session } from './entities/Session';
import { ChatSummary } from './entities/Summary';

let dataSource: DataSource;

const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: path.resolve(app.getAppPath(), './binaries/data.db'),
  prepareDatabase: (db) => {
    db.pragma('journal_mode = WAL');
  },
  entities: [ChatHistory, ChatSummary, Session],
  logging: true,
  synchronize: true,
  nativeBinding: path.resolve(app.getAppPath(), './binaries/better_sqlite3.node'),
});

export const initDataSource = async () => {
  const source = await AppDataSource.initialize();
  dataSource = source;
  return source;
};

export const getDataSource = () => dataSource;
