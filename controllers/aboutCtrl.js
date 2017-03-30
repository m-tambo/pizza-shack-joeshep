'use strict'

const show = (req, res, next) => {
  res.render('about', {page: 'About'})
}

module.exports = show
