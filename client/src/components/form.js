import React from 'react'
import Button from './button'

export default function Form () {
 
  return (
   <div>
    <form className='form container box'>
      <div className="form-group">
        {/* <label for="user-name">name</label> */}
        <input type="input" className="form-control" id="name" placeholder="Enter Name"/>
      </div>
      <div className="form-group">
        {/* <label for="form-message">message</label> */}
        <input type="input" className="form-control" id="input-message" placeholder="message"/>
        <p className="text-danger">We'll never share your secret with anyone else.</p>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <Button className="btn btn-primary" />
    </form>
   </div> 
  )
}
