import React, { useState } from 'react';
import { POST_BOOKS } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

// import { savePromId, getSavedPromIDs } from '../graphql/util/localStorage';

export default function Form() {
   const _id = uuidv4();

  const [stateProm, setProm] = useState({
    author: "",
    _id: _id,
    // title = ""
  });
  const [createPost, {error}] = useMutation(POST_BOOKS);
  
  //localstorage
  // useEffect(() => {
  //   return () => {
  //     setProm(getSavedPromIDs());
  //     savePromId(stateProm)
  //   }
  // }, [])
  

  const submitHandler = async (event) => {
    console.log(event, "submt handler evnt")
    event.preventDefault();
   try {
    const {data} = createPost({
      variables: { ...stateProm},
    })
    console.log(stateProm, " this state prom");
    window.location.reload()
    } catch (err) {
      console.error(error);
    }
  }
  
  const changeHandler = async (event) => {
    const {name, value} = event.target;
    //  console.log(event.target, " event.target")
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