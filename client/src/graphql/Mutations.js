import { gql } from "@apollo/client";

export const POST_BOOKS = gql`
  mutation 
    createPost($_id:ID!, $author:String!, $title:String, $prom:Boolean) {
     createPost(books: {_id:$_id, author:$author, title:$title, prom:$prom}) {
      _id
      author
      title
      prom
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

