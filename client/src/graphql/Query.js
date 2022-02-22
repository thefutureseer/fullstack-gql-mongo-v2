import { gql } from '@apollo/client';
export const GET_BOOKS = gql`
{
  getAllBooks {
    title
     author
     reminders
   }
}
`
