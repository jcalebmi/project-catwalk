import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from './ImageGallery.jsx';
import getStyles from './helpers/getStyles.jsx';
import ProductSelection from './ProductSelection.jsx';
import ZoomBox from './ZoomBox.jsx';
import ZoomImage from './ZoomImage.jsx';

const MainOverview = () => {
  const product = useSelector((state) => state.product.product);
  const [isExpanded, setExpanded] = useState(false);
  const [styles, setStyles] = useState([]);
  const [styleIdx, setStyleIdx] = useState(0);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    imgWidth: 0,
    imgHeight: 0,
  });
  const [photoIdx, setPhotoIdx] = useState(0);
  useEffect(() => {
    if (product.id) {
      getStyles(product.id)
        .then((styleArr) => {
          setStyles(styleArr);
        });
    }
  }, [product]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const imgWidth = e.target.naturalWidth;
    const imgHeight = e.target.naturalHeight;
    const xCoord = e.clientX;
    const yCoord = e.clientY;
    const x = ((xCoord - left) / width) * 100;
    const y = ((yCoord - top) / height) * 100;
    // console.log(JSON.stringify({ x, y, width, height, imgWidth, imgHeight }));
    setCoords({ x, y, width, height, imgWidth, imgHeight });
  };

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
        isExpanded={isExpanded}
        photoIdx={photoIdx}
        setPhotoIdx={setPhotoIdx}/>
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
        isExpanded={isExpanded}
        handleMouseMove={handleMouseMove}
        photoIdx={photoIdx}
        setPhotoIdx={setPhotoIdx}/>
      <ZoomBox coords={coords}/>
      <ImageGallery
        hidden={true}
        styles={styles}
        styleIdx={styleIdx}
        setExpanded={setExpanded}
        isExpanded={isExpanded}
        handleMouseMove={handleMouseMove}
        photoIdx={photoIdx}
        setPhotoIdx={setPhotoIdx}/>
      <ZoomImage
        styles={styles}
        styleIdx={styleIdx}
        photoIdx={photoIdx}
        coords={coords}/>
    </div>
  );
};

export default MainOverview;
