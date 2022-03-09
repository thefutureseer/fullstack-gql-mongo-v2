import React from 'react';
import {GET_BOOKS} from '../graphql/Query'; 
import { DELETE_POST } from '../graphql/Mutations';
import {useQuery, useMutation} from '@apollo/client';

export default function Message() {
  const [deleteMuta] = useMutation(DELETE_POST);

  const clickHandler = (_id) => {  
  //  if (deleting) return;

   deleteMuta({
     variables: {_id},
     update(cache) {
       const normalizeId = cache.identify({_id, __type: 'Book'});
       //using evict to DELETE
       cache.evict({_id: normalizeId});
       cache.gc();
     }
   });
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
           <button onClick={(e)=>{e.preventDefault(); console.log("delete clicked!!"); clickHandler(book._id)}} className='delete-btn'>Delete </button>
              {book.author}, { book.title}
         </h1>
       </div>
      ))
     }
    
  </div>
  )
};