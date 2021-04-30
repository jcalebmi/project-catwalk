const allProducts = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ALL_PRODUCTS':
      return {
        ...state,
        allProducts: action.allProducts,
      };
    default:
      return state;
  }
};
export default allProducts;
