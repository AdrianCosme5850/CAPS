'use strict';

const events = require('./eventEmitter');
const eventPool = require('./eventPool');

function vendorPackage (storeName, packageDescription){
    let payload = {
        storeName,
        packageDescription,
        
    }
    events.emit(eventPool[0], {
        status: eventPool[0],
        payload
    });
}

module.exports = vendorPackage;