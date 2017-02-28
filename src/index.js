const jsonGraph = require('falcor-json-graph');
const fetch = require('node-fetch');

const $error = jsonGraph.error;

const routes = apiKey => (
  [
    {
      route: 'apod["title", "url"]',
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
            if (pathSet[1].includes('title')) {
              results.push({
                path: ['apod', 'title'],
                value: json.title
              });
            }
            if (pathSet[1].includes('url')) {
              results.push({
                path: ['apod', 'url'],
                value: json.url
              });
            }
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
