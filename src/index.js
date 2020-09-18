#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const fs = require('fs-extra');
const shell = require('shelljs');

const engine = require('../package.json').engines.node;
const CWD = process.cwd();
process.chdir(__dirname);

program.version(engine);

const buildDir = process.cwd();
console.log(buildDir)

const node = { 
  app: `${buildDir}/lib/app.js`
}

const runBuild = () => {
  
  shell.cd(CWD);
  shell.mkdir('_server');

  console.log(chalk.green('Initialized _server directory'));

  shell.cd('_server');

  console.log(
    chalk.yellow(
      'Building Express app in',
      `${CWD}/_server`,
    ),
  );

  fs.copyFileSync(node.app, './app.js', (err) => console.log(err));

}

runBuild()

module.exports = { build: () => runBuild } 