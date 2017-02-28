// require('dotenv').config();

const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
const routes = require('../index');

const route = routes(NASA_API_KEY)[0];

jest.mock('node-fetch');

const fetch = require('node-fetch');

const { APOD, COPYRIGHT, DATE, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL } = require('./constants');

const image = require('./sample-image');
const video = require('./sample-video');

[image, video].forEach((sample) => {
  describe(`${sample[MEDIA_TYPE]}`, () => {
    [DATE, COPYRIGHT, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL].forEach((path) => {
      fetch.mockImplementationOnce(() => (Promise.resolve(
        {
          status: 200,
          json: () => (Promise.resolve(sample))
        }
      )));

      test(`get ${path}`, async () => {
        const data = await route.get([APOD, [path]]);
        expect(data[0]).toMatchSnapshot();
      });

      test(`route to contain ${path}`, async () => {
        expect(route.route).toContain(path);
      });
    });
  });
});

const jsonGraph = require('falcor-json-graph');

const $error = jsonGraph.error;

test('error', () => {
  expect($error((new Error('Oh Noes!')).message)).toMatchSnapshot();
});
