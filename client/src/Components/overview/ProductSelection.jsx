import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import StyleThumbnails from './StyleThumbnails.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantSelector from './QuantSelector.jsx';
import AddToCart from './AddToCart.jsx';

// import Favorite from './Favorite.jsx';
import { ave } from '../reviews/helpers/ratings.js';

const ProductSelection = ({
  product,
  styles,
  styleIdx,
  setStyleIdx,
  cart,
  setCart,
}) => {
  const [sizeSku, setSize] = useState(null);
  const [quant, setQuant] = useState(1);

  const style = styles[styleIdx];
  const price = style.original_price;
  // style.sale_price = '50.00';
  const priceEl = style.sale_price
    ? <h5 className='price'>
      <span className='strikethrough'>${price}</span>
      <span className='sale'> ${style.sale_price}</span>
    </h5>
    : <h5 className='price'>{price}</h5>;

  return (
    <div className='productSelection' >
      <div className='reviewLink'>
        <div className="Stars" style={{ '--rating': ave }}></div>
        <div className='scroll underline'>
        <Link to="ratingReviewContainer" spy={true} smooth={true}>Read All Reviews</Link>
        </div>
      </div>
      <h5 className='category'>{product.category}</h5>
      <h2 className='name'>{product.name}</h2>
      {priceEl}
      <div className='style'>
        <b>Style &gt; </b>
        <span className='styleName'>{style.name}</span>
      </div>
      <StyleThumbnails
        styles={styles}
        styleIdx={styleIdx}
        setStyleIdx={setStyleIdx}/>
      <div className='selectors'>
        <SizeSelector
          styles={styles}
          styleIdx={styleIdx}
          sizeSku={sizeSku}
          setSize={setSize}
          />
        <QuantSelector
          styles={styles}
          styleIdx={styleIdx}
          sizeSku={sizeSku}
          quant={quant}
          setQuant={setQuant}
          />
      </div>
      <div className='addFave'>
        <AddToCart
        cart={cart}
        setCart={setCart}
        sizeSku={sizeSku}
        quant={quant}
        style={style}
        product={product}/>
        <div className='fave'>
          {/* Star or Heart */}
        </div>
      </div>
    </div>
  );
};

ProductSelection.propTypes = {
  product: PropTypes.object,
  styles: PropTypes.array,
  styleIdx: PropTypes.number,
  setStyleIdx: PropTypes.func,
};

export default ProductSelection;
