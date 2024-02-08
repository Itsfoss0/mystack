#!/usr/bin/env node

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const devRouter = require('./controller/devs');
const undefinedRoute = require('./middleware/error');

const app = express();
app.use(logger('tiny'));
app.use(cors());
app.use('/api/v1/devs', devRouter);
app.use(undefinedRoute);

module.exports = app;
