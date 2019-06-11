var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello! This is NodeJS ExpressJS Sample 01')
})

app.listen(3000, function () {
  console.log('Example NodeJS ExpressJS Sample 01 app listening on port 3000!')
})