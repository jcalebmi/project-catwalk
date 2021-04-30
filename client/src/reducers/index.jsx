import { combineReducers } from 'redux';
import cart, * as fromCart from './cart.jsx';
import product from './product.jsx';
import allProducts from './allProducts.jsx';

export default combineReducers({
  cart,
  product,
  allProducts,
});

const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getItem = (state, id) => fromCart.getItem(state.cart, id);

// const getReduxProduct = (state) => (state.product);

export const getTotal = (state) => (
  getAddedIds(state)
    .reduce((total, id) => (
      total + getItem(state, id).price * getQuantity(state, id)),
    0)
    .toFixed(2)
);

export const getCartProducts = (state) => (
  getAddedIds(state).map((id) => ({
    quantity: getQuantity(state, id),
    item: getItem(state, id),
  })));
