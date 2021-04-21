const sortReviews = (sortBy, reviews) => {
  if (sortBy === 'newest') {
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  if (sortBy === 'helpful') {
    reviews.sort((a, b) => b.helpfulness - a.helpfulness);
  }
  if (sortBy === 'relevance') {
    reviews.sort((a, b) => {
      if (new Date(a.date) === new Date(b.date)) {
        return b.helpfulness - a.helpfulness;
      }
      return new Date(b.date) - new Date(a.date);
    });
  }
  return reviews;
};

export default sortReviews;
