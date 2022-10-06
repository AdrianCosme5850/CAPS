'use strict';


const eventPool = require('../eventPool');

let vendorPackage = (socket) => (storeName, packageDescription) => {
    let payload = {
        storeName,
        packageDescription,
        id: socket.id
    }
    socket.emit(eventPool[0], {
        status: eventPool[0],
        payload
    });
    console.log('package ready')
}

module.exports = vendorPackage;