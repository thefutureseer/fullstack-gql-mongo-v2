import React from 'react'
import Button from './button'

export default class Form extends React.Component {
 render() {
  return (
   <div>
    <form className='form container box'>
      <div class="form-group">
        {/* <label for="user-name">name</label> */}
        <input type="input" class="form-control" id="name" placeholder="Enter Name"/>
      </div>
      <div class="form-group">
        {/* <label for="form-message">message</label> */}
        <input type="input" class="form-control" id="input-message" placeholder="message"/>
        <p class="text-danger">We'll never share your secret with anyone else.</p>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <Button type="submit" class="btn btn-primary" />
    </form>

   </div> 
  )
}
}
