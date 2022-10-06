'use strict';

const io = require('socket.io-client');
const vendorHandler = require('./vendor.js');
const eventPool = require('../eventPool')


const socket = io.connect('https://phase2caps.herokuapp.com/systemHub');



setInterval(() => {
socket.emit('Package Ready', vendorHandler(socket)('Starbucks', 'Coffee Beans'))
}, 10000)
socket.on(eventPool[2], (payload) => {
    console.log(payload)
})