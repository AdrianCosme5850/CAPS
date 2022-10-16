'use strict';


const eventPool = require('../eventPool');
const Client = require('../packageQueue/client.js');
const starbucks = new Client('starbucks')

let vendorPackage = (storeName, packageDescription) => {
    let payload = {
        storeName,
        packageDescription,
    }
    return payload
}

starbucks.subscribe(eventPool[2], (payload)=> {
    starbucks.publish('received', payload)
    console.log(payload)
})
starbucks.publish(eventPool[0], vendorPackage('starbucks', 'coffee beans'))

module.exports = vendorPackage;