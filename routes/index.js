'use strict'

const { Router } = require('express')
const router = Router()

// ______public routes______
router.use(require('./about'))
router.use(require('./contact'))
router.use(require('./login'))
// router.use(require('./register'))
router.use(require('./root'))

// TODO: define isAuthenticated
router.use( (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
})

// ______private routes______
// router.use(require('./logout'))
// router.use(require('./order'))

module.exports = router
