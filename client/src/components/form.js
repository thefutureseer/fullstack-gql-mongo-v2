import React, {Component} from 'react';
// import Button from './button';
// import { POST_BOOKS } from '../graphql/Mutations';
// import { useMutation } from '@apollo/client';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
  }

  changeHandler = () => {
    const title = this.titleRef.current.value;
    const author = this.authorRef.current.value;

    if (title.trim().length === 0 || author.trim().length === 0) {
      return;
    }

    const event = {
      title,
      author
    }

    console.log(event, " this is event new")

    //end changeHandler
  }

 render() {
 
  return (
   <div>
    <form className='form container box'>
      <div className="form-group">
        <label for="user-name">name</label>
        <input  type='text' id='author' ref={this.authorRef} className="form-control" placeholder="Author"/>
      </div>

      <div className="form-group">
        <label for="form-message">message</label>
        <input  type="text" id='title' ref={this.titleRef} className="form-control" placeholder="Title"/>
        <p className="text-danger">We'll never share your secret with anyone else.</p>
      </div>
      
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button onClick={this.changeHandler} className="btn btn-primary" >Submit</button>
    </form>
   </div> 
  )
    }
}