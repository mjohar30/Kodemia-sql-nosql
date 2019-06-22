const express = require('express')

const room = require('../usecases/mongo/room')

const router = express.Router()

// routes get, post

router.post('/', async (req,res) => {
    try{
        const { number, capacity, category } = req.body
        const newRoom = await room.createRoom(number, capacity, category)
        res.json({
            success: true,
            data: {room: newRoom}
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

router.get('/', async(req,res) => {
    try{
        const allMovies = await room.getRoom()
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

router.delete('/delete', async(req,res) => {
    try{
        const {id} = req.body
        const allRooms = await room.delRoom(id)
        res.json({
            dataDelete: {movie: allRooms}
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
