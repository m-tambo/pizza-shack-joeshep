'use strict'

const { show } = require('../controllers/registerCtrl.js')
const { Router } = require('express')

const router = Router()

module.exports = router.get('/register', show)
