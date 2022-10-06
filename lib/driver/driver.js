'use strict';


const eventPool = require('../eventPool');

const driverInTransit = (socket) => (payload) => {
    console.log('inTransit')
    socket.emit(eventPool[1], {
        status: eventPool[1],
        payload: payload.payload,
    })
    socket.emit(eventPool[2], {
        status: eventPool[2],
        payload: payload.payload,
    })
    
}

module.exports = driverInTransit;