import 'reflect-metadata';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import path from 'node:path';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: path.resolve(app.getAppPath(), './binaries/data.db'),
  prepareDatabase: (db) => {
    db.pragma('journal_mode = WAL');
  },
  synchronize: true,
  logging: true,
});
