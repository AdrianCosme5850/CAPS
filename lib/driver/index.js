'use strict';

const io = require('socket.io-client');
const driverHandler = require('./driver.js');
const eventPool = require('../eventPool.js')
const driverInTransit = require('./driver.js')
const socket = io.connect('https://phase2caps.herokuapp.com/systemHub');

socket.on(eventPool[0], driverInTransit(socket))



