const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(
  'mongodb://root:cokay101@ds127843.mlab.com:27843/hackermen',
  { useNewUrlParser: true }
)

const Gulag = mongoose.model('Gulag')

const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: true })
const jsonParser = bodyParser.json()

app.get('/state', (req, res) => {
  const responceData = { gulag: [] }
  // is good
  Gulag.find({}, (err, data) => {
    responceData.hackermen = data
    if (err) {
      throw err
    }
  })
})



app.listen(5555)
