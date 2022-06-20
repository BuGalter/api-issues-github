/**
 * The module that contains handler for route about.
 * @module api-issues-github/src/api/about
 */

/**
 * To process router requests api/about.
 * @returns {number} Status code. {html} Ref on project readme.
 */
function aboutHandler(req, res, next) {
  res.status(200);
  res.send(
    '<a href ="https://github.com/BuGalter/api-issues-github/blob/master/README.md">README</a>'
  );
  next();
}

export { aboutHandler };
