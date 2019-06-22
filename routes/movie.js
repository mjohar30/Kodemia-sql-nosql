const express = require('express')

const movie = require('../usecases/mongo/movie')

const router = express.Router()

// routes get, post

router.post('/', async (req,res) => {
    try{
        const { name, genre, length } = req.body
        const newMovie = await movie.create(name, genre, length)
        res.json({
            success: true,
            data: {movie: newMovie}
        }
        )
    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
    }
})

router.get('/all', async(req,res) => {
    try{
        const allMovies = await movie.getMovies()
        res.json({
            data: allMovies
        })
    }catch (error) {
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
    }
})

// const id = req.query.text

router.delete('/delete', async(req,res) => {
    try{
        const {id} = req.body
        const allMovies = await movie.eliminar(id)
        res.json({
            dataDelete: {movie: allMovies}
        })
    }catch (error) {
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router
