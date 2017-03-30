'use strict'

const express = require('express')
const app = express()
const routes = require('./routes/')  // defaults to looking for 'index' file (in routes folder)

// _______pug config_______
app.set('view engine', 'pug')

// ______global variables______
app.locals.company = "🍕 Joe's Pizza Shack"
app.locals.body = {}
app.locals.body.magic = "wooooahhh, it's magic!"

// _______middlewares_______
app.use(express.static('public'))
app.use(routes)

app.get('/register', (req, res, next) => {
  res.render('register', {page: 'Register'})
})

app.use((req, res) => {
  res.render('404')
})
//______end of middlewares______


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
