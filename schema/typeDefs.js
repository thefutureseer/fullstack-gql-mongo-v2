const { gql } = require('apollo-server-express');

const typeDefs = gql`
# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  _id: ID
  title: String
  author: String
#  prom: Boolean
  reminders: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]
  getAllBooks: [Book]
  getOne(_id:ID): Book
}

input PostInput {
  _id: ID
  title: String
  reminders: Int
  prom: Boolean
  author: String
}

type Mutation {
  createPost(books: PostInput): Book
  deleteOnePost(_id: ID): Book
}
`

module.exports = typeDefs;