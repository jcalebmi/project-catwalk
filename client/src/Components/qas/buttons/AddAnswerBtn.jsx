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

const getProductName = (state) => state.product.product.name;

const AddAnswer = ({ questionId }) => {
  const productName = useSelector(getProductName);
  const [isOpen, setIsOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [images, setImages] = useState({ file: [] });

  const [formInput, setFormInput] = useState({
    userAnswer: '',
    answerError: '',
    userName: '',
    nameError: '',
    userEmail: '',
    emailError: '',
  });

  const handleUserAnswer = (e) => setUserAnswer(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);
  const fileSelected = (e) => setImages({
    file: [...images.file, URL.createObjectURL(e.target.files[0])],
  });

  if ((userAnswer.length && userName.length && userEmail.length) > 5 && userEmail.includes('@')) {
    document.getElementById('answerSubmitBtn').removeAttribute('disabled');
  }

  const validate = () => {
    let err = false;
    const errors = {};

    if (formInput.userAnswer.length < 5) {
      err = true;
      errors.answerError = 'INVALID RESPONSE';
    }
    if (formInput.userEmail.includes('@') || formInput.userEmail.length < 5) {
      err = true;
      errors.emailError = 'INVALID EMAIL';
    }
    if (err) {
      err = true;
      errors.nameError = 'INVALID USERNAME';
    }
    setFormInput({
      ...formInput, ...errors,
    });
  };

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
      <h1 className="addQA light">Submit your Answer</h1>
      <h2 className="addQA light">Product Name: {productName}</h2>
     {/** UI RESPONSE BODY */}
      <label htmlFor="modalAnswer">*Your Answer
      <textarea errorText={formInput.answerError} id="modalAnswer" className="answer-modal" rows="10" cols="50" onChange={handleUserAnswer}></textarea></label>
     {/** USERNAME INPUT */}
      <label htmlFor="modalNickname">*What is your nickname?</label>
      <input onChange={handleUserName} id="modalNickname" className="modal-nickname" type="text" placeholder="Example: jack543!" errorText={formInput.nameError}></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      {/** EMAIL INPUT */}
      <label htmlFor="modalEmail">*What is your email address?
      <input onChange={handleUserEmail} id="modalEmail" type="text" className="modal-email" placeholder="Example: jack@email.com" errorText={formInput.emailError}></input></label>
      <h6>For authentication reasons, you will not be emailed</h6>
      {/** IMAGE INPUT */}
      <input type="file" onChange={fileSelected}></input>
      {/* {images.file.forEach((img) => (
        <img src={img}/>
      ))} */}
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
