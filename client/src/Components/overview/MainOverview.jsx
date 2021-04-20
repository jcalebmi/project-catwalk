import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import DefaultView from './DefaultView.jsx';
// const selectProductById = (state) => state.product;
// const selectAllProducts = (state) => state.products;

const MainOverview = () => {
  const [isExpanded, setView] = useState(false);
  const setExpanded = () => {
    setView(true);
  };
  // const setDefault = () => {
  //   setView(false);
  // };
  if (!isExpanded) {
    return (
    <div className='main'>
      <DefaultView setExpanded={setExpanded}/>
    </div>
    );
  }
  return null;
  // <ExpandedView setDefault={setDefault}/>;
};

export default MainOverview;
