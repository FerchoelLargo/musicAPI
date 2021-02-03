const front = require('./views/front')
const api = require('./api/index')

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3080

require('./db')

app.set('view engine', 'ejs');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors')
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use('/', front);
app.use('/api', api);

app.listen(port, () => {
  console.log(`Make some request to http://localhost:${port}`)
})