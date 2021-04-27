const viewMore = (current, oldPointer, callback) => {
  let grabNext2;
  const arr = current.slice();
  const map = new Map();


  let count = 1;
  for (let i = 0; i < arr.length; i += 2) {
    const display1 = arr[i];
    const display2 = arr[i + 1];

    if (display1 === undefined) {
      grabNext2 = map.get(oldPointer - 1);
    }

    if (display2 === undefined) {
      return callback([display1], oldPointer + 1);
    }

    map.set(count, [display1, display2]);
    count += 1;
  }

  grabNext2 = map.get(oldPointer);
  console.log(grabNext2)
  callback(grabNext2, oldPointer + 1);
};

module.exports = viewMore;
