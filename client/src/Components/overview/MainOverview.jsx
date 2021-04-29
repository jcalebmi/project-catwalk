import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from './ImageGallery.jsx';
import getStyles from './helpers/getStyles.jsx';
import ProductSelection from './ProductSelection.jsx';

const MainOverview = () => {
  const product = useSelector((state) => state.product.product);
  const [isExpanded, setExpanded] = useState(false);
  const [styles, setStyles] = useState([]);
  const [styleIdx, setStyleIdx] = useState(0);
  // console.log(product);
  useEffect(() => {
    if (product.id) {
      getStyles(product.id)
        .then((styleArr) => {
          setStyles(styleArr);
        });
    }
  }, [product]);

  if (styles.length === 0) {
    return null;
  }

  if (!isExpanded) {
    return (
    <div className='main default'>
      <ImageGallery
        styles={styles}
        styleIdx={styleIdx}
        setExpanded={setExpanded}
        isExpanded={isExpanded}/>
      <ProductSelection
        product={product}
        styles={styles}
        styleIdx={styleIdx}
        setStyleIdx={setStyleIdx}
        />
    </div>
    );
  }
  return (
    <div className='main expanded'>
      <ImageGallery
        styles={styles}
        styleIdx={styleIdx}
        setExpanded={setExpanded}
        isExpanded={isExpanded}/>
    </div>
  );
};

export default MainOverview;
