const { gql } = require('apollo-server-express');

const typeDefs = gql`
# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  _id: ID!
  author: String
  title: String
  prom: Boolean
  reminders: Int
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an *array of zero or more Books (defined above).
type Query {
  books: [Book]
  getAllBooks: [Book]
  getOne(_id:ID!): Book
}

#object to use instead of rewriting args for the mutations below
input PostInput {
  _id: ID!
  author: String
  title: String
  prom: Boolean
  reminders: Int
}

type Mutation {
  createPost(books: PostInput): Book
  deleteOnePost(_id: ID!): Book
  updateOnePost(books: PostInput): Book
}
`

module.exports = typeDefs;