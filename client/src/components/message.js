import React from 'react';
import {GET_BOOKS} from './graphql/Query';
import {useQuery} from '@apollo/client';

export default function Message() {
  const {loading, error, data} = useQuery(GET_BOOKS);
  console.log('data', data);
  if (loading) return <p>....loading!</p>
  if (error) return <p>{error.message}</p>

  return (
    <div className="container box">
     GraphQL here! {
      data?.getAllBooks.map(book=>(
       <h1>{book.title}</h1>
      ))
     }
    <Button />
  </div>
  )
}
