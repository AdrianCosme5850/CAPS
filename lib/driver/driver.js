'use strict';


const eventPool = require('../eventPool');
const Client = require('../packageQueue/client.js');
const starbucks = new Client('starbucks')

// const driverInTransit = (socket) => (payload) => {
//     console.log('inTransit')
//     socket.emit(eventPool[1], {
//         status: eventPool[1],
//         payload: payload.payload,
//     })
//     socket.emit(eventPool[2], {
//         status: eventPool[2],
//         payload: payload.payload,
//     })
    
// }

const driverPickup = (payload) => {
    starbucks.publish('packageReceived', payload)
    starbucks.publish(eventPool[1], {
        status: eventPool[1],
        payload: payload
    });
    starbucks.publish(eventPool[2], {
        status: eventPool[2],
        payload: payload
    })
}
starbucks.publish('get-packages', {clientId: 'starbucks'})
starbucks.subscribe(eventPool[0], driverPickup)

// module.exports = driverInTransit;