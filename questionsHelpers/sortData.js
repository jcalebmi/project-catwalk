// sorts q & a data by helpfulness
const sortData = (toSort, sortBy, callback) => {
  const data = toSort.slice();

  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data.length; j += 1) {
      if (data[j][sortBy] < data[i][sortBy]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }

  callback(data);
};

module.exports = sortData;
