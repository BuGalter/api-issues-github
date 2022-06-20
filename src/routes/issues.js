import express from 'express';
import { issuesHandler } from '../api/issues.js';

/**
 * The module that contains main route app.
 * @module api-issues-github/src/routes/issues
 */

const issuesRouter = express.Router();
/**
 * The constant describes the main route of the application.
 * @type {Router}
 */

issuesRouter.get('/issues/:owner/:repo', issuesHandler);

export { issuesRouter };
