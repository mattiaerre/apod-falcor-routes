const debug = require('debug')('falcor-apod-routes:server');
require('dotenv').config();
const express = require('express');
const favicon = require('express-favicon-short-circuit');
const falcorExpress = require('falcor-express');
const falcorPostman = require('falcor-postman');
const Router = require('falcor-router');
const path = require('path');
const index = require('./routes');
const falcorApodRoutes = require('../index');

const app = express();
app.locals.pretty = true;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon);

app.use('/', index);

const options = { middlewarePath: '/falcor-postman', falcorModelPath: '/api/v1/model.json', app };
app.use(falcorPostman(options));

app.use('/api/v1/model.json', falcorExpress.dataSourceRoute(() => (new Router(falcorApodRoutes(process.env.NASA_API_KEY)))));

const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});