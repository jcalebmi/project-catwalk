const ADD_TO_CART = 'ADD_TO_CART';
const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

const initialState = {
  addedIds: [],
  quantityById: {},
  itemById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.skuId) !== -1) {
        return state;
      }
      return [...state, action.skuId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.skuId]: (state[action.skuId] || 0) + action.quantity,
      };
    default:
      return state;
  }
};

const priceById = (state = initialState.itemById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.skuId]: (state[action.skuId] || action.item),
      };
    default:
      return state;
  }
};

export const getQuantity = (state, skuId) => state.quantityById[skuId] || 0;

export const getItem = (state, skuId) => state.itemById[skuId] || {};

export const getAddedIds = (state) => state.addedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        itemById: priceById(state.itemById, action),
      };
  }
};

export default cart;
