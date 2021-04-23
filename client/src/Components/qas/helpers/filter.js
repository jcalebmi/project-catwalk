const filter = (val, data, callback) => {
  const filtered = data.filter((el) => {
    if (el.question_body.toLowerCase().includes(val.toLowerCase())) {
      return true;
    }
  });
  console.log(filtered)
  callback(filtered);
};

module.exports = filter;
