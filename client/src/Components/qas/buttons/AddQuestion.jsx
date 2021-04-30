import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const { postQs } = require('../helpers/server-requests');

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const getProduct = (state) => state.product.product;

const AddQuestion = () => {
  const product = useSelector(getProduct);

  const [isOpen, setIsOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleUserQuestion = (e) => setUserQuestion(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);

  if ((userQuestion.length && userName.length) > 0 && userEmail.includes('@') && userEmail.length > 5) {
    if (document.getElementById('questionSubmitBtn')) {
      document.getElementById('questionSubmitBtn').removeAttribute('disabled');
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      body: userQuestion,
      name: userName,
      email: userEmail,
      product_id: product.id,
    };
    postQs(requestBody);

    setIsOpen(false);
  };


  return (
    <>
  <div style={BUTTON_WRAPPER_STYLES}>
    <button onClick={() => setIsOpen(true)} className="useBgContrast light feedback-btn" id="add-question-btn">Add A Question +</button>
    <Modal id="questionsModal" open={isOpen} onClose={() => setIsOpen(false)}>
      <form className="answerForm">
      <h1 className="addQA light">Ask your Question</h1>
      <h2 className="addQA light">About the {product.name}</h2>
      <label htmlFor="modalAnswer">*Your Question{<br />}
      <textarea id="modalAnswer" className="answer-modal" rows="10" cols="50" onChange={handleUserQuestion}></textarea></label>
     {/** USERNAME INPUT */}
      <label htmlFor="modalNickname">*What is your nickname?</label>
      <input onChange={handleUserName} id="modalNickname" className="modal-nickname" type="text" placeholder="Example: jack543!"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      {/** EMAIL INPUT */}
      <label htmlFor="modalEmail">*What is your email address?
      <input onChange={handleUserEmail} id="modalEmail" type="text" className="modal-email" placeholder="Example: jack@email.com"></input></label>
      <h6>For authentication reasons, you will not be emailed</h6>
      <button id="questionSubmitBtn" onClick={handleSubmit} type="submit" disabled={true}>Submit question</button>
      </form>
    </Modal>
  </div>
  </>

  );
};

export default AddQuestion;
// TODO: MODAL
