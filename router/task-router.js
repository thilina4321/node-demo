const express = require('express')
const router = express.Router()

//controllers
const controller = require('../controller/task-controller')

router.post('/create', controller.createTaks)
router.get('/get-task', controller.getTasks)
router.delete('/delete/:id', controller.delete)

module.exports = router