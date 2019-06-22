const Room = require('../../models/mongo/room').model

function createRoom(number, capacity, category){
    return Room.create({number, capacity, category})
}

function getRoom(){
    return Room.find({})
}

module.exports = {
    createRoom,
    getRoom
}
