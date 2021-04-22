const helpfulness = (e) => {
  const btnId = e.target.id;
  const btn = document.getElementById(`${btnId}`);

  /* user may only vote once */
  if (btn.disabled === true) return 'out of this function';

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

  const slice1 = eachTextEl.slice(0, indexes[0]).join('');
  const slice2 = eachTextEl.slice(indexes[indexes.length - 1] + 1).join('');

  e.target.innerHTML = slice1.concat(num).concat(slice2);

  btn.disabled = true;
};

module.exports = helpfulness;
