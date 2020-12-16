const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { ApolloServer } = require('apollo-server-express')
const schema = require('./graphql')
const { port } = require('./config')
const context = require('./graphql/context')

const app = express()
app.use(cors())
app.use(
  express.json({
    limit: '5mb'
  })
)

const server = new ApolloServer({
  schema,
  context,
  playground: true,
  introspection: true
})

server.applyMiddleware({ app })

app.listen(port, () => {
  console.log(`http://localhost:${port}/graphql`)
})
