import express from 'express';
import { aboutHandler } from '../api/about.js';

/**
 * The module that contains route about app.
 * @module api-issues-github/src/routes/about
 */

const aboutRouter = express.Router();
/**
 * The constant describes the route about info app.
 * @type {Router}
 */

aboutRouter.get('/about', aboutHandler);

export { aboutRouter };
