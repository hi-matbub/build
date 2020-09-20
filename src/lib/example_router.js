const express = require('express');
const {PORT} = require('./config');

const exampleRouter = express.Router();

exampleRouter.route('/api/example').get((req, res) => {
  res.status(200);
  res.send(`http://localhost:${PORT}/api/example was successfully reached.`);
});

module.exports = exampleRouter;
