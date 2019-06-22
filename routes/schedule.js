const express = require('express')

const scheduleUseCase = require('../usecases/mongo/schedule')

const router = express.Router()

// routes get, post
router.post('/', async (req,res) => {
    try{
        const {roomId, movieId, schedule} = req.body
        const newSchedule = await scheduleUseCase.create(roomId, movieId, schedule)
        res.json({
            success: true,
            data: {schedule: newSchedule}
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

module.exports = router
