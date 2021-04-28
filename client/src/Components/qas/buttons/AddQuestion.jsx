import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const { postQs } = require('../helpers/server-requests');

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const getProduct = (state) => state.product;

const AddQuestion = ({ updateQs }) => {
  const product = useSelector(getProduct);

  const [isOpen, setIsOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleUserQuestion = (e) => setUserQuestion(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);

  if ((userQuestion.length && userName.length) > 0 && userEmail.includes('@')) {
    document.getElementById('submitBtn').removeAttribute('disabled');
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
    // updateQs();
  };

  return (
    <>
  <div style={BUTTON_WRAPPER_STYLES}>
    <button onClick={() => setIsOpen(true)} className="useBgContrast light feedback-btn" id="add-question-btn">Add A Question</button>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <form className="answerForm">
      <h1 className="addQA light">Submit Your Question</h1>
      <h2 className="addQA light">Product Name: {product.name}</h2>
      *Your answer
      <textarea name="body" className="answer-modal" rows="10" cols="100" onChange={handleUserQuestion}></textarea>
      *What is your nickname?:
      <input name="name" onChange={handleUserName} className="modal-nickname" type="text" placeholder="Example: jack543!" id="answerers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input name="email" onChange={handleUserEmail} type="text" className="modal-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <span>* Required fields</span>
      <button className="modalImage">Upload Image</button>
      <button id="submitBtn" onClick={handleSubmit} type="submit" disabled={true}>Submit Answer</button>
      </form>
    </Modal>
  </div>
  </>

  );
};

export default AddQuestion;
// TODO: MODAL

