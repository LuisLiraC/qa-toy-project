const { mongoUri } = require('../config')
const mongoose = require('mongoose')

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', () => console.error('Error connecting to database'))
db.once('open', () => console.log('Database connected'))

module.exports = db
