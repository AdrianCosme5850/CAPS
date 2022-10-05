'use strict';

const io = require('socket.io')
const PORT = process.env.PORT || 3002
const server = io(PORT)
const systemHub = server.of('/systemHub')
const eventPool = require('./eventPool');

systemHub.on('connection', (socket) => {
    console.log('client connected');
    eventPool.forEach(event => {
        socket.on(event, (payload) => {
            console.log(payload)
        })
        socket.on(eventPool[0], (payload) => socket.emit(eventPool[0], payload));
        socket.on('driving', (payload) => socket.emit('driving', payload));
    })
})

