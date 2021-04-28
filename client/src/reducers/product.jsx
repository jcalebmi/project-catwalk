const product = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PRODUCT':
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};
export default product;
