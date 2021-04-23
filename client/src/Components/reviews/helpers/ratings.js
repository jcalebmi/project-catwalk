let ratingSum = 0;
let recommend = '0%'
let ave = 0;
const ratings = (meta, results) => {
  let sum = 0;
  for (var key in meta.ratings) {
    sum += Number(meta.ratings[key]);
  }
  ratingSum = sum;

  let recSum = 0;
  results.forEach((item) => {
    if (item.recommend) {
      recSum += 1;
    }
  });
  if (!Number.isNaN(recSum / results.length)) {
    recommend = `${(recSum / results.length) * 100}%`;
  }

  let aveSum = 0;
  results.forEach((item) => {
    aveSum += item.rating;
  });
  if (!Number.isNaN(aveSum / results.length)) {
    ave = (aveSum / results.length).toFixed(1);
  }

  return {
    ave: ave,
    ratingSum: ratingSum,
    recommend: recommend,
  };
};

export {ratings, ave};
