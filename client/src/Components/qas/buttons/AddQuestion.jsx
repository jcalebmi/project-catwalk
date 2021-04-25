import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

const { postQs } = require('../helpers/server-requests');

const getProductId = (state) => state.product.id;

Modal.setAppElement('#app');
const AddQuestion = () => {
  const productId = useSelector(getProductId);

  const [modalIsOpen, setOpenModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [userEmail, setEmail] = useState('');
  const handleBodyChange = (e) => setQuestion(e.target.value);
  const handleNameChange = (e) => setNickname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      body: question,
      name: nickname,
      email: userEmail,
      product_id: productId,
    };

    postQs(requestBody);
  };

  return (
  <div>
    <button className="useBgContrast light view-add-more-qs" id="add-question-btn" onClick={() => setOpenModal(true)}>Add Question</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setOpenModal(false)}>
      <h1 className="addQA light">Ask Your Question</h1>
      <h3 className="addQA light">About the Product:</h3>
      <form
        className="addQA light"
        onSubmit={(e) => handleSubmit(e)}>
      *Your Question:
      <textarea onChange={handleBodyChange} id="modal-body" rows="10" cols="100"></textarea>
      *What is your nickname?:
      <input onChange={handleNameChange} placeholder="Example: jackson11!" id="askers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input onChange={handleEmailChange} type="text" id="askers-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <button type="submit">Submit Answer</button>
      </form>
    <button className='useBgContrast light' onClick={() => setOpenModal(false)}>Close</button>
    </Modal>
  </div>
  );
};

export default AddQuestion;
// TODO: MODAL
