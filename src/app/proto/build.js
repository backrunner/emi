const path = require('path');
const fs = require('fs');
const exec = require('node-async-exec');
const chalk = require('chalk');

const COMMAND_TEMPLATE = `proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=./ {file}`;

const protoDir = path.resolve(__dirname, './');

const promises = [];

(async () => {
  fs.readdirSync(protoDir).forEach((dirName) => {
    const subDir = path.resolve(protoDir, dirName);
    const stat = fs.statSync(subDir);
    if (!stat.isDirectory()) {
      return;
    }
    fs.readdirSync(subDir).forEach((fileName) => {
      if (!fileName.endsWith('.proto')) {
        return;
      }
      console.log(chalk.cyan(`Compiling proto "${dirName}/${fileName}"...`));
      promises.push(
        exec({
          path: subDir,
          cmd: COMMAND_TEMPLATE.replace('{file}', fileName),
        }),
      );
    });
  });

  await Promise.all(promises);

  console.log(chalk.green('\nAll protos are compiled.\n'))
})();
