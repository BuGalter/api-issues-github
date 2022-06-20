import express from 'express';
import { aboutRouter } from './routes/about.js';
import { issuesRouter } from './routes/issues.js';
import { config } from './config/config.js';

/**
 * The module that contains the entry point to the application, the code to start
 * the server and its configuration.
 * @module api-issues-github/src/app
 */

const app = express();

app.use('/api', aboutRouter);
app.use('/api', issuesRouter);

app.listen(config.port, config.host, () =>
  console.log(`Server listens http://${config.host}:${config.port}`)
);
