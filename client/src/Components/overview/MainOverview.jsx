import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DefaultImageGallery from './DefaultImageGallery.jsx';
import getStyles from './helpers/getStyles.jsx';
import ProductSelection from './ProductSelection.jsx';

const MainOverview = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [styleIdx, setStyleIdx] = useState(0);
  const product = useSelector((state) => state.product) || {};
  // console.log('product: ', product);
  if (product.id) {
    const styles = getStyles(product.id);
    const style = styles[styleIdx];
    // console.log('style: ', style);
  }

  if (!isExpanded) {
    return (
    <div className='main'>
      <DefaultImageGallery setExpanded={setExpanded}/>
      {/* <ProductSelection product={product} styles={styles} style={style}/> */}
    </div>
    );
  }
  return null;
  // <ExpandedView setExpanded={setExpanded}/>;
};

export default MainOverview;
