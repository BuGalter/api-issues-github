import { instanceAxios } from '../config/config.js';

/**
 * The module that contains function for get info from github api.
 * @module api-issues-github/src/utils/get-issues
 */

/**
 * To process router requests api/issues/owner/repo.
 * @returns {object} Which contains information from github api
 * or error if incorrect owner, repo.
 */
async function getIssues(requestParams) {
  const url = `${requestParams.owner}/${requestParams.repo}/issues`;
  try {
    const response = await instanceAxios.get(url, requestParams.urlParams);
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}

export { getIssues };
