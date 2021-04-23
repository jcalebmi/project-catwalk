import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const AddQuestion = () => {
  const [modalIsOpen, setOpenModal] = useState(false);

  return (
  <div>
    <button onClick={() => setOpenModal(true)}>Add Question</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setOpenModal(false)}>
      <h1>Ask Your Question</h1>
      <h3>About the Product:</h3>
      <form>
      *Your Question:
      <textarea id="modal-body" rows="10" cols="100"></textarea>
      *What is your nickname?:
      <input type="text" placeholder="Example: jackson11!" id="askers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input type="text" id="askers-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <input type="text" id="questions-feedback"></input>
      <button type="submit">Submit Answer</button>
      </form>
    <button onClick={() => setOpenModal(false)}>Close</button>
    </Modal>
  </div>
  );
};

export default AddQuestion;
// TODO: MODAL
