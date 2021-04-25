import {
  updateQsHelpful,
  updateAsHelpful,
  reportQs,
  reportAs,
} from './server-requests';

const helpfulness = (e) => {
  const btn = e.target;
  btn.disabled = true;
  /* id is on span wrapper el */
  const id = Number(e.target.parentNode.parentNode.id);

  /* user may only vote once */
  if (e.target.id === 'questions-helpful') {
    updateQsHelpful(id);
  }

  if (e.target.id === 'answers-helpful') {
    updateAsHelpful(id);
  }

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
};

const reported = (e) => {
  const btn = e.target;
  btn.disabled = true;
  e.target.innerHTML = 'REPORTED';
  const id = Number(e.target.parentNode.parentNode.id);
  if (e.target.id === 'questions-report') {
    reportQs(id);
  }
  if (e.target.id === 'answers-report') {
    reportAs(id);
  }
};

export { helpfulness, reported };
