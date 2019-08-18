const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../route/car-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;
