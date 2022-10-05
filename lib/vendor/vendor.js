'use strict';


const eventPool = require('../eventPool');

let vendorPackage = (socket, storeName, packageDescription) => {
    let payload = {
        storeName,
        packageDescription,
    }
    socket.emit(eventPool[0], {
        status: eventPool[0],
        payload
    });
}

module.exports = vendorPackage;