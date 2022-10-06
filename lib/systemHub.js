'use strict';

const io = require('socket.io')
const PORT = process.env.PORT || 3002
const server = io(PORT)
const systemHub = server.of('/systemHub')
const eventPool = require('./eventPool');

systemHub.on('connection', (socket) => {
    console.log('client connected');
    socket.join(socket.id)
    eventPool.forEach(event => {
        socket.on(event, (payload) => {
            console.log(payload)
        })
    });
    socket.on(eventPool[0], (payload) => socket.broadcast.emit(eventPool[0], payload));
    socket.on(eventPool[2], (payload) => {
        console.log('broadcasting to ' + payload.payload.id)
        socket.to(payload.payload.id).emit(eventPool[2], payload)});
})

