import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const AddAnswer = (body) => {
  const [modalIsOpen, setOpenModal] = useState(false);

  return (
  <div>
    <button onClick={() => setOpenModal(true)}>Add Answer</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setOpenModal(false)}>
      <h1>Submit your Answer</h1>
      <h2>Product Name:{} Question:{body.body}</h2>
      <form>
      *Your answer
      <textarea id="modal-body" rows="10" cols="100"></textarea>
      *What is your nickname?:
      <input type="text" placeholder="Example: jack543!" id="answerers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input type="text" id="answerers-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <button>Upload Image</button>
      <button type="submit">Submit Answer</button>
      </form>
    <button onClick={() => setOpenModal(false)}>Close</button>
    </Modal>
  </div>
  );
};

export default AddAnswer;
// TODO: MODAL
