'use strict'

const { show } = require('../controllers/loginCtrl.js')
const { Router } = require('express')

const router = Router()

module.exports = router.get('/login', show)
