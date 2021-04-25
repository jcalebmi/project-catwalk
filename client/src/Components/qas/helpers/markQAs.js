import {
  updateQsHelpful,
  updateAsHelpful,
  reportQs,
  reportAs,
} from './server-requests';

const helpfulness = (e) => {
  const btn = e.target;
  btn.disabled = true;
  const id = Number(e.target.parentNode.id);

  if (e.target.id === 'questions-helpful') {
    updateQsHelpful(id);
  }

  if (e.target.id === 'answers-help-btn') {
    updateAsHelpful(id);
  }

  const eachTextEl = e.target.innerHTML.split('');
  const indexes = [];
  let numStr = '';

  for (let i = 0; i < eachTextEl.length; i += 1) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(Number(eachTextEl[i]))) {
      numStr += eachTextEl[i];
      indexes.push(i);
    }
  }

  const num = Number(numStr) + 1;

  const slice1 = eachTextEl.slice(0, indexes[0]).join('');

  e.target.innerHTML = slice1.concat(num).concat(')');
};

const reported = (e) => {
  const btn = e.target;
  btn.disabled = true;
  e.target.innerHTML = 'REPORTED';
  const id = Number(e.target.parentNode.parentNode.id);
  if (e.target.className === 'questions-report') {
    reportQs(id);
  }
  if (e.target.className === 'answers-report') {
    reportAs(id);
  }
};

export { helpfulness, reported };
