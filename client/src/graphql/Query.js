import { gql } from '@apollo/client';
export const GET_BOOKS = gql`
query {
    getAllBooks {
      _id
      title
      author
    }
  }
`
