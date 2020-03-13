const express = require('express')
const { join } = require('path')

const app = express()

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000)