const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
app.use(logger('dev'))
mongoose.connect(
  'mongodb://root:cokay101@ds127843.mlab.com:27843/hackermen',
  { useNewUrlParser: true }
)
const schema = mongoose.Schema({
  stuff: [Number]
})
const Stuff = mongoose.model('Stuff', schema)

const app = express()

app.get('/state', (req, res) => {
  // is good
  Stuff.create({ stuff: [0, 1, 2] }, (err) => {
    if (err) { console.log(err) }
  })
  Stuff.find({}, (err, data) => {
    console.log(data[0].stuff)
    res.json(data[0].stuff)
    if (err) {
      throw err
    }
  })
})



app.listen(5555)
