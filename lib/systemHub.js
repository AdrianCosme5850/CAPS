'use strict';

const events = require('./eventEmitter');
const eventPool = require('./eventPool');
const vendorPackage = require('./vendor');
const driverHandler = require('./driver')

let handlePackage = (payload) => {
console.log({
    status: payload.status,
    date: Date(),
    payload: payload.payload
})
}

events.on(eventPool[0], handlePackage)
events.on(eventPool[0], driverHandler.driverInTransit)
events.on(eventPool[1], handlePackage)
events.on(eventPool[1], driverHandler.driverDelivered)
events.on(eventPool[2], handlePackage)

vendorPackage('Starbucks', 'Coffee beans')