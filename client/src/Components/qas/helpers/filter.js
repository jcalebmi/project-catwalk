/* eslint-disable consistent-return */
const filter = (val, data, callback) => {
  // eslint-disable-next-line array-callback-return
  const filtered = data.filter((el) => {
    if (el.question_body.toLowerCase().includes(val.toLowerCase())) {
      return true;
    }
  });
  callback(filtered);
};

module.exports = filter;
