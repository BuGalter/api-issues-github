import axios from 'axios';

/**
 * The module that contains config app and axios.
 * @module api-issues-github/src/config/config
 */

const instanceAxios = axios.create({
  baseURL: 'https://api.github.com/repos/',
  headers: { Accept: 'application/vnd.github.v3+json' },
});
/**
 * The constant contains instance of axios with base options.
 * @type {Axios instance}
 */

const config = {
  host: '127.0.0.1',
  port: process.env.PORT || 3000,
};
/**
 * Object contain app configuration.
 */

export { config, instanceAxios };
