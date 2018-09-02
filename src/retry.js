// BEGIN (write your solution here)
const retry = (amount, fn, callback) => {
    const cb = (err, body) => {
      if (err && amount >= 1) {
        retry(amount - 1, fn, callback);
      } else {
        callback(err, body);
      }
    }
    fn(cb);
  };
  
  export default retry;
  // END
  // teacher solution
  // BEGIN
// const noop = () => {};

// const retry = (count, fn, callback = noop) => {
//   const cb = (err, result) => {
//     if (!err || count <= 1) {
//       callback(err, result);
//       return;
//     }
//     retry(count - 1, fn, callback);
//   };

//   fn(cb);
// };

// export default retry;
// END