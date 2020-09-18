#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const fs = require('fs-extra');
const shell = require('shelljs');

const engine = require('../package.json').engines.node;
const curr = process.cwd();
process.chdir(__dirname);

program.version(engine);

const CWD = process.cwd();
console.log(CWD)

const node = { 
  index: `${CWD}/lib/node/index.js`
}

const runBuild = () => {
  
  shell.cd(curr);
  shell.mkdir('_server');

  console.log(chalk.green('Initialized _server directory'));

  shell.cd('_server');

  console.log(
    chalk.yellow(
      'Building Express app in',
      `${curr}/_server`,
    ),
  );

  fs.copyFileSync(node.index, './index.js', (err) => console.log(err));

}

runBuild()

module.exports = { build: () => runBuild } 