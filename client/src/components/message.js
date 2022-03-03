import React from 'react';
import {GET_BOOKS} from '../graphql/Query'; 
import { DELETE_POST } from '../graphql/Mutations';
import {useQuery, useMutation} from '@apollo/client';

export default function Message() {
  const [deleteOnePost] = useMutation(DELETE_POST);
  
  const clickHandler = async (_id) => {
    try {
      const response = await deleteOnePost({
        variables: {_id}
      })
    } catch (err) {
      console.error(error)
    }
  }
  
  const {loading, error, data} = useQuery(GET_BOOKS);

  if (loading) return <p>....loading!</p>
  if (error) return <p>{error.message}</p>


  return (
    <div className="container box">
     GraphQL here! {
      data?.getAllBooks.map(book=>(
       <div className='msg-div' key={book._id}>
         <h1 className='prom'>
           <button onClick={clickHandler} className='delete-btn'>Delete </button>
              {book.author}, { book.title}
         </h1>
       </div>
      ))
     }
    
  </div>
  )
}
