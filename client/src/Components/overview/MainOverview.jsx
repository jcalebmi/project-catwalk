import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DefaultImageGallery from './DefaultImageGallery.jsx';
import getStyles from './helpers/getStyles.jsx';
import ProductSelection from './ProductSelection.jsx';

const MainOverview = () => {
  const [product, setProduct] = useState(useSelector((state) => state.product) || {});
  const [isExpanded, setExpanded] = useState(false);
  const [styles, setStyles] = useState([]);
  const [styleIdx, setStyleIdx] = useState(0);

  useEffect(() => {
    if (product.id) {
      getStyles(product.id)
        .then((styleArr) => {
          setStyles(styleArr);
        });
    }
  }, [product]);

  const updateStyleIdx = (idx) => {
    setStyleIdx(idx);
  };

  if (styles.length === 0) {
    return null;
  }

  if (!isExpanded) {
    return (
    <div className='main'>
      <DefaultImageGallery
        styles={styles}
        styleIdx={styleIdx}
        setExpanded={setExpanded}/>
      <ProductSelection
        product={product}
        styles={styles}
        styleIdx={styleIdx}
        updateStyleIdx={updateStyleIdx}/>
    </div>
    );
  }
  return null;
  // <ExpandedView setExpanded={setExpanded}/>;
};

export default MainOverview;
