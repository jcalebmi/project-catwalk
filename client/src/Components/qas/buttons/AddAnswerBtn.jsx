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
  const [files, setFile] = useState();

  const handleUserAnswer = (e) => setUserAnswer(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);

  if ((userAnswer.length && userName.length && userEmail.length) > 5 && userEmail.includes('@')) {
    document.getElementById('answerSubmitBtn').removeAttribute('disabled');
  }

  const handleFiles = (e) => {
    const imgCont = document.getElementById('modalImageA');
    const img = document.createElement('img');
    for (let i = 0; i < e.target.files.length; i += 1) {
      img.src = URL.createObjectURL(e.target.files[i]);
      img.className = 'modalImageA';
      imgCont.appendChild(img);
      if (files.length < 5) {
        setFile(files.concat(e.target.files[i]));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      body: userAnswer,
      name: userName,
      email: userEmail,
      photos: files,
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
      <label htmlFor="modalAnswer">*Your Answer{<br />}
      <textarea id="modalAnswer" className="answer-modal" rows="10" cols="50" onChange={handleUserAnswer}></textarea></label>
     {/** USERNAME INPUT */}
      <label htmlFor="modalNickname">*What is your nickname?</label>
      <input onChange={handleUserName} id="modalNickname" className="modal-nickname" type="text" placeholder="Example: jack543!"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      {/** EMAIL INPUT */}
      <label htmlFor="modalEmail">*What is your email address?
      <input onChange={handleUserEmail} id="modalEmail" type="text" className="modal-email" placeholder="Example: jack@email.com"></input></label>
      <h6>For authentication reasons, you will not be emailed</h6>
      {/** IMAGE INPUT */}
      <input type="file" className="form-control" multiple onChange={handleFiles}></input>
      <div id='modalImageA'></div>
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
