'use strict'

const express = require('express')
const app = express()

// _______pug config_______
app.set('view engine', 'pug')

// _______middleware_______
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('index')
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
