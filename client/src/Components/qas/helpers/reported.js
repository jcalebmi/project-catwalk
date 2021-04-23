const reported = (e) => {
  const btn = document.getElementsByName(e.target.name);

  if (btn.disabled) {
    return 'something';
  }

  const storage = (qOrA) => {
    const reportedQAs = [];
    // store qas in here somehow lol
    reportedQAs.push(qOrA);
  };

  storage('some data');
  btn.disabled = true;
};

module.exports = reported;
