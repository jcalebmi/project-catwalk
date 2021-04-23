
const sortReviews = (sortBy, reviews, search, starFilter) => {
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
  let filtered = [];
  if (search.length >= 2) {
    filtered = reviews.filter((review) => review.body.toLowerCase().includes(search));
  } else {
    filtered = reviews;
  }
  if (starFilter.length > 0) {
    const starRating = starFilter.map((star) => {
      const rating = Number(star[0]);
      return rating;
    });
    filtered = filtered.filter((item) => starRating.includes(item.rating));
  }
  return filtered;
};
export default sortReviews;
