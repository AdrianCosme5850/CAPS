'use strict';

const io = require('socket.io-client');
const vendorHandler = require('./vendor.js');
const eventPool = require('../eventPool')

// 'https://phase2caps.herokuapp.com/systemHub'

const socket = io.connect('http://localhost:3002/systemHub');



setInterval(() => {
socket.emit('Package Ready', vendorHandler(socket)('Starbucks', 'Coffee Beans'))
}, 5000)
socket.on(eventPool[2], (payload) => {
    console.log(payload)
})