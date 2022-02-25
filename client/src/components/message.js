import React from 'react';
import {GET_BOOKS} from '../graphql/Query';
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
       <div className='msg-div' key={book._id}>
         <h1 className='prom'>
           <button className='delete-btn'>Delete </button>
              {book.author}, { book.title}
         </h1>
       </div>
      ))
     }
    
  </div>
  )
}
