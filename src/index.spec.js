// require('dotenv').config();

const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
const routes = require('../index')(NASA_API_KEY);

test('something', async () => {
  const apod = routes[0];
  const data = await apod.get('apod["title"]');
  expect(data[0].path).toEqual(['apod', 'title']);
  expect(data[0].value).toBe('A White Oval Cloud on Jupiter from Juno');
});

const jsonGraph = require('falcor-json-graph');

const $error = jsonGraph.error;

test.only('error', () => {
  expect($error((new Error('woot?')).message)).toBe({});
});
