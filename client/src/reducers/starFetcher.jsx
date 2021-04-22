const starFetcher = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_STAR_FILTER':
      return {
        stars: action.payload,
      };
    default:
      return state;
  }
};
export default starFetcher;
