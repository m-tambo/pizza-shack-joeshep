'use strict'

const { show } = require('../controllers/contactCtrl.js')
const { Router } = require('express')

const router = Router()

module.exports = router.get('/contact', show)
