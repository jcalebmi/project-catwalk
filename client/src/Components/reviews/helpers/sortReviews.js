const sortReviews = (sortBy, reviews, search) => {
  const reviewsArr = reviews.slice();
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

  if (search.length >= 2) {
    const filtered = reviews.filter((review) => review.body.toLowerCase().includes(search));
    return filtered;
  } else {
    return reviews;
  }
};

export default sortReviews;
