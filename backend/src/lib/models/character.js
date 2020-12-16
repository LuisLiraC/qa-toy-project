const { Schema, model, SchemaTypes } = require('mongoose')
require('mongoose-type-url')

const characterSchema = new Schema({
  name: {
    type: SchemaTypes.String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  race: {
    type: SchemaTypes.String,
    required: true
  },
  gender: {
    type: SchemaTypes.String,
    required: true
  },
  image_url: {
    type: SchemaTypes.Url,
    required: true
  },
  description: {
    type: SchemaTypes.String,
    minlength: 50,
    maxlength: 1000,
    required: true
  }
})

const Character = model('Character', characterSchema)

module.exports = Character
