import React from 'react';
const sortReviews = (sortBy, results, search, starFilter) => {
  let reviews = JSON.parse(JSON.stringify(results.slice(0)));
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

  let filtered = reviews;
  if (search.length >= 2) {
    filtered = reviews.filter((review) => review.body.toLowerCase().includes(search.toLowerCase()));
  }
  if (starFilter.length > 0) {
    const starRating = starFilter.map((star) => {
      const rating = Number(star[0]);
      return rating;
    });
    filtered = filtered.filter((item) => starRating.includes(item.rating));
  }

  const split = (body, search) => {
    let result= [];
    let remainingText = body.slice();
    let index = remainingText.toLowerCase().indexOf(search.toLowerCase());
    while ( index !== -1 ) {
      result.push(remainingText.slice(0, index))
      remainingText = remainingText.slice(index);
      result.push(remainingText.slice(0, search.length));
      remainingText = remainingText.slice(search.length);
      index = remainingText.toLowerCase().indexOf(search.toLowerCase());
    }
    result.push(remainingText);
    console.log(result)
    return result;
    //returns a split array of indices Ex:[‘th’, ‘is’, ' ’, ‘is’, ' a really good f’, ‘Is’, ‘h’]
  };

  if (search.length >= 2) {
    filtered = filtered.map((review, index) => {
      const bodyArr = split(review.body, search);
      review.body = bodyArr.map((line, index) => {
        if (index % 2 === 0) {
          return line;
        }
        return <span key={index} id="highlight">{line}</span>;
      });
      return review;
    });
  }

  return filtered;
};
export default sortReviews;
