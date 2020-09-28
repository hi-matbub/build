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

const node = {
  gitIgnore: `${buildDir}/lib/example.gitignore`,
  examplePackage: `${buildDir}/lib/example_package.json`,
  exampleEnv: `${buildDir}/lib/example.env`,
  readMe: `${buildDir}/lib/readme.md`,
  src: {
    app: `${buildDir}/lib/app.js`,
    config: `${buildDir}/lib/config.js`,
    exampleRouter: `${buildDir}/lib/example_router.js`,
    server: `${buildDir}/lib/server.js`,
  },
  test: {
    appSpec: `${buildDir}/lib/spec.js`,
    setup: `${buildDir}/lib/setup.js`,
  },
};

const runBuild = () => {
  shell.cd(CWD);
  shell.mkdir('_server');

  console.log('Initialized ', chalk.green('_server'), ' directory!');

  shell.cd('_server');

  console.log(`Building Express app in ${CWD}/_server`);

  console.log('_server');
  fs.copyFileSync(node.gitIgnore, '.gitignore', (err) => console.log(err));
  console.log('├── .gitignore');
  fs.copyFileSync(node.exampleEnv, '.env', (err) => console.log(err));
  console.log('├── .env');
  fs.copyFileSync(node.examplePackage, 'package.json', (err) =>
    console.log(err),
  );
  console.log('├── package.json');
  fs.copyFileSync(node.readMe, 'README.md', (err) => console.log(err));
  console.log('├── README.md');

  fs.mkdirSync('./src');
  console.log('├── src');

  fs.copyFileSync(node.src.config, './src/config.js', (err) =>
    console.log(err),
  );
  console.log('│   ├── config.js');
  fs.copyFileSync(node.src.app, './src/app.js', (err) => console.log(err));
  console.log('│   ├── app.js');
  fs.copyFileSync(node.src.server, './src/server.js', (err) =>
    console.log(err),
  );
  console.log('│   ├── server.js');
  fs.copyFileSync(node.src.exampleRouter, './src/example_router.js', (err) =>
    console.log(err),
  );
  console.log('│   └── example_router.js');

  fs.mkdirSync('./test');
  console.log('└──  test');

  fs.copyFileSync(node.test.appSpec, './test/app.spec.js', (err) =>
    console.log(err),
  );
  console.log('    ├── app.spec.js');
  fs.copyFileSync(node.test.setup, './test/setup.js', (err) =>
    console.log(err),
  );
  console.log('    └── setup.js');

  console.log(chalk.green('_server'), 'has been set up successfully.');
};

runBuild();

module.exports = {build: () => runBuild};
