const helpfulness = (e) => {
  const eachTextEl = e.target.innerHTML.split('');
  const indexes = [];
  let numStr = '';
  for (let i = 0; i < eachTextEl.length; i += 1) {
    if (!isNaN(Number(eachTextEl[i]))) {
      numStr += eachTextEl[i];
      indexes.push(i);
    }
  }
  const num = Number(numStr) + 1;
  const splitNum = num.toString();

  const slice1 = eachTextEl.slice(0, indexes[0]);
  const slice2 = eachTextEl.slice(indexes[indexes.length - 1] + 1);

  const x = slice1.concat(num).concat(slice2);
  console.log(x.join(''));
};

module.exports = helpfulness;
