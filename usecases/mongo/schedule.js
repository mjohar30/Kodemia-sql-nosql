const Schedule = require('../../models/mongo/schedule').model
const Room = require('../../models/mongo/room').model
const Movie = require('../../models/mongo/movie').model

const moment = require('moment')

async function createSchedule(roomId, movieId, schedule){
    const movie = await Movie.findById(movieId)
    if (!movie) throw new Error('Movie does not exist')

    const room = await Room.findById(roomId)
    if (!room) throw new Error('Room does not exist')

    return Schedule.create({roomId, movieId, schedule: moment(schedule)})
}


module.exports = {
    createSchedule
}
