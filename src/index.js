const fetch = require('node-fetch');

const routes = apiKey => (
  [
    {
      route: 'apod["title", "url"]',
      async get(pathSet) {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const results = [];
        await fetch(url)
          .then(response => (response.json()))
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
          .catch(() => { /* TODO */ });
        return results;
      }
    }
  ]
);

module.exports = routes;
