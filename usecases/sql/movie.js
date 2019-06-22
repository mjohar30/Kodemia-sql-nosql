const Movie = require('../../models/sql/movie')

 function create(name, genre, length) {
    return Movie.query()
    .insert({ name, genre, length })
    .returning('*')
}

function getMovies(){
    return Movie.query()
    .select()
}

function eliminar(id){
    return Movie.query()
    .deleteById(id)
}

module.exports = {create, getMovies, eliminar}