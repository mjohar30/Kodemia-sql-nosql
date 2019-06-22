const Schedule = require('../../models/sql/schedule')
const Room = require('../../models/sql/room')
const Movie = require('../../models/sql/movie')
const moment = require('moment')

async function create(roomId, movieId, schedule){
    const room = await Room.query().findById(roomId)
    if (!room) throw new Error('Room does not exist')

    const movie = await Movie.query().findById(movieId)
    if (!movie) throw new Error('Movie does not exist')

    return Schedule.query()
    .insert({roomId, movieId, schedule: moment(schedule)})
    .returning('*')
}

module.exports = {
    create
}


// function create(name, genre, length) {
//     return Movie.query()
//     .insert({ name, genre, length })
//     .returning('*')
// }