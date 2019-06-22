const Movie = require('../../models/mongo/movie').model

function create(name, genre, length){
    return Movie.create({name, genre, length})
}

function getMovies(){
    return Movie.find({})
}

module.exports = {
    create,
    getMovies
}


