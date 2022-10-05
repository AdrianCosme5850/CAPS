'use strict';


const eventPool = require('../eventPool');

const driverInTransit = (socket) => (payload) => {
    console.log('count')
    socket.emit(eventPool[1], {
        status: eventPool[1],
        payload: payload.payload,
    })
    
}
const driverDelivered = (socket) => (payload) => {
    console.log('delivered')
    socket.emit(eventPool[2], {
        status: eventPool[2],
        payload: payload.payload,
    })
    
}
module.exports = {
    driverInTransit,
    driverDelivered,
}