'use strict';

const io = require('socket.io-client');
const driverHandler = require('./driver.js');
const eventPool = require('../eventPool.js')

const socket = io.connect('http://localhost:3002/systemHub');

socket.on(eventPool[0], driverHandler.driverInTransit(socket))
socket.on('driving', driverHandler.driverDelivered(socket))


