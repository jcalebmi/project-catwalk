import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const { postQs } = require('../helpers/server-requests');

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const getProduct = (state) => state.product;

const AddQuestion = () => {
  const product = useSelector(getProduct);

  const [isOpen, setIsOpen] = useState(false);
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
      product_id: 19093,
    };
    postQs(requestBody);
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
      <textarea className="answer-modal" rows="10" cols="100" onChange={handleBodyChange}></textarea>
      *What is your nickname?:
      <input onChange={handleNameChange} className="modal-nickname" type="text" placeholder="Example: jack543!" id="answerers-nickname"></input>
      <h6>For privacy reasons, do not use your full name or email address</h6>
      <input onChange={handleEmailChange} input="email" type="text" className="modal-email" placeholder="Example: jack@email.com"></input>
      <h6>For authentication reasons, you will not be emailed</h6>
      <button className="modalImage">Upload Image</button>
      <button onClick={handleSubmit} className="modalSubmit" type="submit">Submit Answer</button>
      </form>
    </Modal>
  </div>
  </>

  );
};

export default AddQuestion;
// TODO: MODAL

