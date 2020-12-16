const fs = require('fs')
const path = require('path')
const { expect } = require('chai')
const EasyGraphQLTester = require('easygraphql-tester')
const Character = require('../lib/models/character')
const db = require('../lib/db')

const characterResolvers = require('../graphql/resolvers/character')
const chraacterSchema = fs.readFileSync(
  path.join(__dirname, '../graphql/schemas/character.graphql'),
  'utf-8'
)
const responseSchema = fs.readFileSync(
  path.join(__dirname, '../graphql/schemas/response.graphql'),
  'utf-8'
)

describe('Test resolvers', () => {
  let tester
  beforeAll(() => {
    tester = new EasyGraphQLTester(
      [chraacterSchema, responseSchema],
      characterResolvers
    )
  })

  afterAll(() => {
    db.close()
  })

  it('should return correct data', async () => {
    const query = `
      query getCharacter($_id: ID!) {
        getCharacter(_id: $_id) {
          name,
          race,
          gender
        }
      }
    `

    const args = {
      _id: '5fd7c7058f4912480da5d1b2'
    }

    const char = {
      name: 'Link',
      race: 'Hylian',
      gender: 'Male'
    }

    const { data } = await tester.graphql(query, {}, { Character }, args)
    expect(data.getCharacter.name).to.be.eq(char.name)
    expect(data.getCharacter.race).to.be.eq(char.race)
    expect(data.getCharacter.gender).to.be.eq(char.gender)
  })
})
