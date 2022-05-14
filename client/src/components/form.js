import React, { useState } from 'react';
import { POST_BOOKS } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const _id = uuidv4();

  const [stateProm, setProm] = useState({
    _id: _id,
    author: "",
    title: "",
    prom: false
  });

  const [createPost, {error}] = useMutation(POST_BOOKS);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      createPost({
        variables: { ...stateProm},
      })
      window.location.reload()
    } catch (err) {
      console.error(error);
    }
  }

  const changeHandler = async (event) => {

    const {name, value} = event.target;
    // !stateProm.prom ? stateProm.prom = true : stateProm.prom = false;
      console.log(stateProm.prom, " setstate prom")

    await setProm({...stateProm, [name]: value})
    console.log(stateProm, " this is stateProm")
  }

  return (
   <div>
    <form onSubmit={submitHandler} className='form container box'>
      <div >
        <label>names</label>
        <input  onChange={changeHandler} name="author" value={stateProm.author} className="form-control" placeholder="names"/>
      </div>

      <div >
        <label>note</label>
        <input  onChange={changeHandler} name="title" value={stateProm.title} className="form-control" placeholder="note"/>
      </div>

      {/* <div >
        <input  onChange={changeHandler} name="prom" value={stateProm.prom} className="form-control" placeholder="true"/>
      </div> */}

      <div className="form-check">
       <label className="form-check-label">
        <input type="checkbox"  onChange={()=>{return !stateProm.prom ? stateProm.prom = true : stateProm.prom = false;}} name="prom" value={stateProm.prom} className="form-check-input" />
         <p>prom</p>
       </label>
      </div>

      <div >
        <label >Sincere message</label>
        <p className="sin-msg m-2 text-danger">We'll never share your secret with anyone else.</p>
      </div>
      
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">Check me out</label>
      </div>
      <button type='submit' className="btn btn-primary" >Submit</button>
    </form>
   </div> 
  )
}