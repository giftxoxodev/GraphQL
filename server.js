const express = require('express')
const graphqlHTTP = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const path = require('path')
const fs = require('fs')

const schemaFile = path.join(__dirname, 'schema.graphql')
const typeDefs = fs.readFileSync(schemaFile, 'utf8')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({ typeDefs,resolvers })

const port = 4000

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}. Open http://localhost:${port}/graphql`);
})

