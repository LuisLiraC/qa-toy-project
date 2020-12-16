const {
  mergeTypeDefs,
  mergeResolvers,
  makeExecutableSchema
} = require('graphql-tools')
require('graphql-import-node/register')

const characterSchema = require('./schemas/character.graphql')
const responseSchema = require('./schemas/response.graphql')
const characterResolver = require('./resolvers/character')

const typeDefs = mergeTypeDefs([characterSchema, responseSchema])
const resolvers = mergeResolvers([characterResolver])

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
