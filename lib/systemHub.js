'use strict';

const io = require('socket.io')
const PORT = 3002
const server = io(PORT)
const systemHub = server.of('/systemHub')
const eventPool = require('./eventPool');
let PackageQueue = require('./packageQueue/packageQueue');
let outGoingPackages = new PackageQueue();
let deliveredQueue = new PackageQueue();

systemHub.on('connection', (socket) => {
    console.log('client connected');
    socket.on('join', (payload) => {
        socket.join(payload.clientId)
        console.log('joined ' + payload.clientId)
    })
    eventPool.forEach(event => {
        socket.on(event, (payload) => {
            // console.log(payload)
        })
    });
    socket.on('get-packages', (payload) => {
        let packages = outGoingPackages.getPackages(payload.clientId);

        packages.forEach(item => {
            socket.emit(eventPool[0], {
                messageId: item.messageId,
                storeName: item.body.storeName,
                packageDescription: item.body.storeName
            })
        })
        socket.on('packageReceived', (payload) => {
           outGoingPackages.packageReceived(payload.clientId, payload.body.messageId)
        })
        socket.on('received', (payload) => {
            console.log(deliveredQueue.packageReceived(payload.clientId, payload.body.messageId))
        })
        // for(let i = 0; i< packages.length; i++){
        //     console.log('sent ' + packages[i].body.storeName)
        //     socket.broadcast.emit(eventPool[0], packages[i].body)
        // }
    })
    socket.on(eventPool[0], (payload) => {
       const incomingPackage =  outGoingPackages.addPackage(payload.clientId, payload.body);
       console.log(incomingPackage)
        socket.broadcast.emit(eventPool[0], incomingPackage)
    });
    socket.on(eventPool[2], (payload) => {
        const incomingDelivered =  deliveredQueue.addPackage(payload.clientId, payload.body);
        console.log(incomingDelivered)
        socket.broadcast.emit(eventPool[2], incomingDelivered)});
})

