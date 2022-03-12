import { gql } from "@apollo/client";

export const POST_BOOKS = gql`
  mutation 
    createPost($_id:ID!, $author: String!) {
     createPost(books: {_id:$_id, author:$author}) {
      _id
      author
     }
    }
`;

export const DELETE_POST = gql`
  mutation
   deleteOnePost($_id: ID!) {
     deleteOnePost(_id: $_id) {
       _id
     }
   }
`;

export const UPDATE_ONE_POST = gql`
  mutation
    updateOnePost($_id: ID!, $author: String!) {
      updateOnePost(books: {_id: $_id, author: $author}) {
        _id
        author
      }
    }`

