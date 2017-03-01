require('babel-core/register');
require('babel-polyfill');

const jsonGraph = require('@graphistry/falcor-json-graph');
const fetch = require('node-fetch');

const $error = jsonGraph.error;

const { APOD, COPYRIGHT, DATE, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL } = require('./constants');

const routes = apiKey => (
  [
    {
      route: `${APOD}["${COPYRIGHT}", "${DATE}", "${EXPLANATION}", "${HDURL}", "${MEDIA_TYPE}", "${TITLE}", "${URL}"]`,
      async get(pathSet) {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const results = [];
        await fetch(url)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error(`url: ${response.url} status: ${response.status} statusText: ${response.statusText}`);
            }
            return response.json();
          })
          .then((json) => {
            [DATE, COPYRIGHT, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL].forEach((path) => {
              if (pathSet[1].includes(path)) {
                if (json[path]) {
                  results.push({
                    path: [APOD, path],
                    value: json[path]
                  });
                }
              }
            });
          })
          .catch((error) => {
            results.push({
              path: pathSet,
              value: $error(error.message)
            });
          });
        return results;
      }
    }
  ]
);

module.exports = routes;
