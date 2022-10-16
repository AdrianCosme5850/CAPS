'use strict';

const io = require('socket.io-client');

class Client {
    constructor(clientId, url = 'http://localhost:3002/systemHub'){
        this.clientId = clientId;
        this.socket = io.connect(url);
    }

    subscribe(event, handler){
        this.socket.emit('join', {clientId: this.clientId});
        this.socket.on(event, handler)
    }

    publish(event, payload){
        this.socket.emit(event, {
            body: payload,
            clientId: this.clientId,
                })
    }
}

module.exports = Client;