'use strict';

const events = require('./eventEmitter');
const eventPool = require('./eventPool');

function driverInTransit(payload) {
    events.emit(eventPool[1], {
        status: eventPool[1],
        payload: payload.payload,
    })
    
}
function driverDelivered (payload) {
    events.emit(eventPool[2], {
        status: eventPool[2],
        payload: payload.payload,
    })
    
}
module.exports = {
    driverInTransit,
    driverDelivered,
}