import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const { postAs } = require('../helpers/server-requests');

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const getProductName = (state) => state.product.name;

// Modal.setAppElement('#app');
const AddAnswer = ({ questionId }) => {
  const productName = useSelector(getProductName);
  const [isOpen, setIsOpen] = useState(false);

  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [userEmail, setEmail] = useState('');
  const handleBodyChange = (e) => setAnswer(e.target.value);
  const handleNameChange = (e) => setNickname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setOpenModal(false);

    const requestBody = {
      body: answer,
      name: nickname,
      email: userEmail,
      photos: ['https://fakeimg.pl/300/'],
    };

    postAs(questionId, requestBody);
  };

  return (
    <>
  <div style={BUTTON_WRAPPER_STYLES}>
    <button onClick={() => setIsOpen(true)} className="useBgContrast light feedback-btn" id="add-answer-btn">Add Answer</button>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <form className="answerForm">
      <h1 className="addQA light">Submit Your Answer</h1>
      <h2 className="addQA light">Product Name: {productName}</h2>
      *Your answer
      <textarea className="answer-modal" rows="10" cols="100" onChange={handleBodyChange}></textarea>
      *What is your nickname?:
      <input onChange={handleNameChange} className="modal-nickname" height="48px" type="text" placeholder="Example: jack543!" id="answerers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input onChange={handleEmailChange} input="email" type="text" className="modal-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <button className="modalImage">Upload Image</button>
      <button className="modalSubmit" type="submit">Submit Answer</button>
      </form>
    </Modal>
  </div>
  </>

  );
};

AddAnswer.propTypes = {
  questionId: PropTypes.number,
  questionBody: PropTypes.string,
};

export default AddAnswer;
// TODO: MODAL
