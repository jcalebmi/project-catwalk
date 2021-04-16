import React from 'react';
// useSelector will allow components to have Read-Only access to our state
// useDispatch will allow us to dispatch any action to our state's store
import { useSelector, useDispatch } from 'react-redux';

// function argument to pass into useSelector
const selectCount = (state) => state.count;

const Count = () => {
  // useSelector takes in a function arg and returns the part of the state we want
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleCountInc = () => {
    dispatch({ type: 'count/increment' });
  };

  const handleCountDec = () => {
    dispatch({ type: 'count/decrement' });
  };

  return (
    <div>
      <button type="submit" onClick={handleCountInc}>Add 1</button>
      {' '}
      <button type="submit" onClick={handleCountDec}>Subtract 1</button>
      <p>{count}</p>
    </div>
  );
};

export default Count;
