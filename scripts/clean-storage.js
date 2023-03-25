const path = require('node:path');
const fs = require('node:fs');
const chalk = require('chalk');

const binaryPath = path.resolve(__dirname, '../binaries');

const storagePath = path.resolve(binaryPath, './storage');
const dbPath = path.resolve(binaryPath, './data.db');

fs.rmSync(storagePath, { recursive: true, force: true });
fs.rmSync(dbPath, { recursive: true, force: true });

console.log(chalk.green('Storage removed!'));
