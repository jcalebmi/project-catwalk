const viewMore = (current, oldPointer, callback) => {
  console.log(current)
  const arr = current.slice();
  const map = new Map();

  let count = 1;
  for (let i = 0; i < arr.length; i += 2) {
    const display1 = arr[i];
    const display2 = arr[i + 1];

    if (display2 === undefined) {
      map.set(count, [display1]);
      break;
    }

    map.set(count, [display1, display2]);
    count += 1;
  }
console.log(map)
  const grabNext2 = map.get(oldPointer);
  console.log(grabNext2)
  callback(grabNext2, oldPointer + 1);
};


// pointer = 0
// pointer should represent the current position in the array

// since we need to display 2 at a time, maybe we should combine every two array elements

// so let's take our display array and couple them up

//  [[1, 1], [a, a], [2, 2],...]
// to do this, we'll take the array el,

// if the pointer number is greater than

// const grabNext2 = (current) => {
//   if (current === undefined) {
//     return;
//   }
//   updateDisplay(readyToRender[1].slice(0, current + 2));
// };

// const loadMore = (e) => {
//   if (e === undefined) {
//     return;
//   }
//   if (e.target.innerHTML === 'COLLAPSE ANSWERS') {
//     e.target.innerHTML = 'LOAD MORE ANSWERS';
//     pointer.current = 0;
//     grabNext2(pointer.current);
//   }
//   /** to be honest, I don't know why this works but
//      * it was intended to be similar to array sort algos
//      * using pointers */
//   if (pointer.current + 2 >= readyToRender[1].length) {
//     e.target.innerHTML = 'COLLAPSE ANSWERS';
//   }
//   grabNext2(pointer.current);
//   pointer.current += 2;
// };

module.exports = viewMore;
