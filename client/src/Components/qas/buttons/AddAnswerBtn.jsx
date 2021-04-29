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

const AddAnswer = ({ questionId }) => {
  const productName = useSelector(getProductName);
  const [isOpen, setIsOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [images, setImages] = useState([]);

  const handleUserAnswer = (e) => setUserAnswer(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);
  const fileSelected = (e) => setImages([...images, e.target.value[0]]);

  if ((userAnswer.length && userName.length) > 0 && userEmail.includes('@')) {
    document.getElementById('answerSubmitBtn').removeAttribute('disabled');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      body: userAnswer,
      name: userName,
      email: userEmail,
      photos: images,
    };

    postAs(questionId, requestBody);
    setIsOpen(false);
  };

  return (
  <>
  <div style={BUTTON_WRAPPER_STYLES}>
    <button onClick={() => setIsOpen(true)} className="useBgContrast light feedback-btn" id="add-answer-btn">Add Answer</button>
    <Modal id="questionsModal" open={isOpen} onClose={() => setIsOpen(false)}>
      {/** FORM DATA FROM UI */}
      <form className="answerForm">
      <h1 className="addQA light">Submit Your Answer</h1>
      <h2 className="addQA light">Product Name: {productName}</h2>
      *Your answer {/** UI RESPONSE BODY */}
      <textarea className="answer-modal" rows="10" cols="100" onChange={handleUserAnswer}></textarea>
      *What is your nickname? {/** USERNAME INPUT */}
      <input onChange={handleUserName} className="modal-nickname" height="48px" type="text" placeholder="Example: jack543!" id="answerers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      {/** EMAIL INPUT */}
      *What is your email address?
      <input onChange={handleUserEmail} input="email" type="text" className="modal-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      {/** IMAGE INPUT */}
      <input type="file" onChange={fileSelected}></input>
      <input type="file" onChange={fileSelected}></input>
      <input type="file" onChange={fileSelected}></input>
      <span>*Required fields</span>
      {/** SUBMIT BUTTON */}
      <button onClick={handleSubmit} id="answerSubmitBtn" type="submit" disabled={true}>Submit Answer</button>
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
