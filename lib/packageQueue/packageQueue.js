'use strict';

const Chance = require('chance');
const chance = new Chance();

class PackageQueue {
    constructor(){
        this.packages = {};
    }

    addPackage(clientId, payload){
        let messageId = chance.guid();
        if(this.packages[clientId]){
            this.packages[clientId][messageId] = payload
        } else {
            this.packages[clientId] = { [messageId]: payload}
        }
        return this.packages[clientId]
    }

    getPackages(clientId){
        return Object.keys(this.packages[clientId]).map(messageId => ({
            messageId,
            body: this.packages[clientId][messageId],
        }))
    }
    packageReceived(clientId, messageId){
        if(this.packages[clientId]){
            delete this.packages[clientId][messageId]
            return messageId + ' Deleted'
        }
    }
}

module.exports = PackageQueue;