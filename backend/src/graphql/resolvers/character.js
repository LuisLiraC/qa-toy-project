const saveImage = require('../../utils/saveImage')

const character = {
  Query: {
    async getCharacters(root, args, { Character }) {
      try {
        const result = await Character.find()
        return result
      } catch (error) {
        console.error(error)
      }
    },
    async getCharacter(root, { _id }, { Character }) {
      try {
        const result = await Character.findOne({ _id })
        return result
      } catch (error) {
        console.error(error)
      }
    }
  },
  Mutation: {
    async addCharacter(root, { characterInfo }, { Character }) {
      try {
        const link = await saveImage(characterInfo.image)

        const newCharacter = new Character({
          name: characterInfo.name,
          image_url: link,
          race: characterInfo.race,
          gender: characterInfo.gender,
          description: characterInfo.description
        })
        const { _id } = await newCharacter.save()

        return {
          _id,
          message: 'Created',
          error: false,
          status: 200
        }
      } catch (error) {
        console.error(error)
        if (error.errors) {
          return {
            message: 'Invalid information',
            error: true,
            status: 404
          }
        }
        return {
          message: 'Internal Error',
          error: true,
          status: 500
        }
      }
    },
    async editCharacter(root, { _id, characterInfo }, { Character }) {
      try {
        if (characterInfo.image) {
          const link = await saveImage(characterInfo.image)
          characterInfo.image_url = link
        }

        await Character.findOneAndUpdate(
          { _id },
          { $set: characterInfo },
          { useFindAndModify: false }
        )

        return {
          _id,
          message: 'Updated',
          error: false,
          status: 200
        }
      } catch (error) {
        console.error(error)
        return {
          message: 'Internal Error',
          error: true,
          status: 500
        }
      }
    },
    async deleteCharacter(root, { _id }, { Character }) {
      try {
        await Character.deleteOne({ _id })
        return {
          message: 'Deleted',
          error: false,
          status: 200
        }
      } catch (error) {
        console.error(error)
        return {
          message: 'Internal Error',
          error: true,
          status: 500
        }
      }
    }
  }
}

module.exports = character
