import store from '../store/store.jsx';

const types = {
  UPDATE_CURRENT_PRODUCT: 'UPDATE_CURRENT_PRODUCT',
  ADD_TO_CART: 'ADD_TO_CART',
  CHECKOUT_REQUEST: 'CHECKOUT_REQUEST',
  CHECKOUT_FAILURE: 'CHECKOUT_FAILURE',
};

export const addToCart = (skuId, quantity, item) => {
  store.dispatch({
    type: types.ADD_TO_CART,
    skuId,
    quantity,
    item,
  });
};

export const checkout = () => {
  store.dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  // shop.buyProducts(products, () => {
  //   dispatch({
  //     type: types.CHECKOUT_SUCCESS,
  //     cart
  //   })
  //   // Replace the line above with line below to rollback on failure:
  //   // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  // })
};
