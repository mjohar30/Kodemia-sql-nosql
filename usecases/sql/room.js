const room = require('../../models/sql/room')

function createRoom(number, capacity, category) {
    return room.query()
    .insert({ number, capacity, category })
    .returning('*')
}

function getRoom(){
    return room.query()
    .select()
}

function delRoom(id){
    return room.query()
    .deleteById(id)
}

module.exports = {
    createRoom,
    getRoom,
    delRoom
}