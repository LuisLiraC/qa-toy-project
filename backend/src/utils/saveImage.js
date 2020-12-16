const imgur = require('imgur')
const { imgurEmail, imgurPassword, imgurClientId } = require('../config')

async function saveImage (image) {
    imgur.setCredentials(imgurEmail, imgurPassword, imgurClientId)
    imgur.setAPIUrl('https://api.imgur.com/3/')
    const { data: { link } } = await imgur.uploadBase64(image.split(',')[1])
    return link
}

module.exports = saveImage