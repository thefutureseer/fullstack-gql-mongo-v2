import { useMutation } from '@apollo/client';
import React from 'react';
import Modal from 'react-modal';
import { UPDATE_ONE_POST } from '../graphql/Mutations';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: 'black',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function EditModal(prop) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState({
    author: "",
    _id: prop.id
  })
  
  //open/close modal react functions
  function openModal() {
    setIsOpen(true);

  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  const [updateOnePost] = useMutation(UPDATE_ONE_POST);
  
  const clickHandler = () => {
    updateOnePost({
      variables: {...state}
    })
  }
  
  const changeHandler = async (event) => {
    const {name, value} = event.target;
    await setState({...state, [name]:value})
  }

  return (
    <div>
      <button id='edit-btn' onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div className='secret'>edit secret</div>
        <form>
          <input onChange={changeHandler} name='author' value={state.author} />
          {/* <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button> */}
          <button onClick={()=>{clickHandler()}}>the modal</button>
        </form>
      </Modal>
    </div>
  );
}