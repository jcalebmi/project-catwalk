import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const { postAs } = require('../helpers/server-requests');

const getProductName = (state) => state.product.name;

Modal.setAppElement('#app');
const AddAnswer = ({ questionId, questionBody }) => {
  const productName = useSelector(getProductName);

  const [modalIsOpen, setOpenModal] = useState(false);

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [userEmail, setEmail] = useState('');
  const handleBodyChange = (e) => setQuestion(e.target.value);
  const handleNameChange = (e) => setNickname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);

    const requestBody = {
      body: question,
      name: nickname,
      email: userEmail,
      photos: ['https://fakeimg.pl/300/'],
    };

    postAs(questionId, requestBody);
  };

  return (
  <div>
    <button className="useBgContrast light feedback-btn" id="add-answer-btn" onClick={() => setOpenModal(true)}>Add Answer</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setOpenModal(false)}>
      <h1 className="addQA light">Submit your Answer</h1>
      {' '}
      <h2 className="addQA light">Product Name:{productName} Question:{questionBody}</h2>
      <form
        className="addQA light"
        onSubmit={handleSubmit}>
      *Your answer
      <textarea inputs="body" id="modal-body" rows="10" cols="100" onChange={handleBodyChange}></textarea>
      *What is your nickname?:
      <input onChange={handleNameChange} inputs="nickname" type="text" placeholder="Example: jack543!" id="answerers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input onChange={handleEmailChange} input="email" type="text" id="answerers-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <button>Upload Image</button>
      <button type="submit">Submit Answer</button>
      </form>
    <button onClick={() => setOpenModal(false)}>Close</button>
    </Modal>
  </div>
  );
};

AddAnswer.propTypes = {
  questionId: PropTypes.number,
  questionBody: PropTypes.string,
};

export default AddAnswer;
// TODO: MODAL
