
# build

[![Build Status](https://travis-ci.com/hi-matbub/build.svg?branch=master)](https://travis-ci.com/hi-matbub/build)

A node package to bootstrap a "bare-bones" express.js server. 




## Quick set up

```
$ npx @hi-matbub/build
$ cd _server && npm i 
$ npm run dev
```

Quickly bootstrap an express server by running the command `npx @hi-matbub/build`. This will generate a new directory within your current working directory that should match the following structure. 

```
_server
├── .gitignore
├── .env
├── package.json
├── README.md
├── src
│   ├── config.js
│   ├── app.js
│   ├── server.js
│   └── example_router.js
└──  test
    ├── app.spec.js
    └── setup.js
```

## Scripts

`npm run start` - Start the application

`npm run dev` - If restarting the server for ever change inconveniences you (it should), you can run nodemon for the application.

`npm run test` - Run the tests 

## What's in the box?

Everything you need to get up and running with express.js and node.js. Includs a few examples of GET and POST requests so you can dive right into the core of your server. 
