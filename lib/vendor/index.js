'use strict';

const io = require('socket.io-client');
const vendorHandler = require('./vendor.js');


const socket = io.connect('http://localhost:3002/systemHub');

setInterval(() => {
socket.emit('Package Ready', vendorHandler(socket, 'Starbucks', 'Coffee Beans'))
}, 3000)