const dotenv = require('dotenv')
dotenv.config()

const config = {
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT || 3001,
    imgurEmail: process.env.IMGUR_EMAIL,
    imgurPassword: process.env.IMGUR_PASSWORD,
    imgurClientId: process.env.IMGUR_CLIENT_ID
}

module.exports = config