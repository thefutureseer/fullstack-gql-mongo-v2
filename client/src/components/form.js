import React, { useState } from 'react';
import { POST_BOOKS } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const _id = uuidv4();

  const [stateProm, setProm] = useState({
    _id: _id,
    author: "",
    title: ""
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
    await setProm({...stateProm, [name]: value})
  }

  return (
   <div>
    <form onSubmit={submitHandler} className='form container box'>
      <div >
        <label >name</label>
        <input  onChange={changeHandler} name="author" value={stateProm.author} className="form-control" placeholder="Author"/>
      </div>

      <div >
        <label >title</label>
        <input  onChange={changeHandler} name="title" value={stateProm.title} className="form-control" placeholder="title"/>
      </div>

      <div >
        <label >Sincere message</label>
        {/* <input  type="text" id='title' ref={this.titleRef} className="form-control" placeholder="Title"/> */}
        <p className="text-danger">We'll never share your secret with anyone else.</p>
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