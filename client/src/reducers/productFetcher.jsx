const productFetcher = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PRODUCT':
      return {
        product: action.payload,
      };
    case 'UPDATE_ALL_PRODUCTS':
      return {
        products: action.payload,
      };
    case 'UPDATE_QUESTIONS':
      return {
        questions: action.payload,
      };
    default:
      return state;
  }
};
export default productFetcher;
