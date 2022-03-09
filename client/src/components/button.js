// import React from 'react';
// import { DELETE_POST } from '../graphql/Mutations';
// import {useMutation} from '@apollo/client';



// export default function Button()  {
//   const [deleteOnePost] = useMutation(DELETE_POST);
  
//   const clickHandler = async (_id) => {
//     try {
//       return await deleteOnePost({
//         variables: {_id}
//       })
//     } catch (err) {
//       console.error(err, " This is useMutation error")
//     }
//   }

//     return (
//       <button onClick={clickHandler} className='delete-btn'>Delete </button>
//     //  <button type="button" className="btn btn-secondary">save</button>
//     )
  
// }
