import { getIssues } from '../utils/get-issues.js';

/**
 * The module that contains main route app.
 * @module api-issues-github/src/api/issues
 */

/**
 * To process router requests api/issues/owner/repo.
 * @returns {object} Which contains either information or a message that the data is incorrect.
 */
async function issuesHandler(req, res) {
  const requestParams = {
    owner: req.params.owner,
    repo: req.params.repo,
    urlParams: {
      params: req.query,
    },
  };

  const data = await getIssues(requestParams);
  if (data === 404) {
    res.status(404);
    return res.json({
      ok: false,
      code: 404,
      msg: 'Not found.',
      data: {},
    });
  }

  res.status(200);
  return res.json({
    ok: true,
    result: data,
  });
}

export { issuesHandler };
