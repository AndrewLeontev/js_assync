const noop = () => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

// BEGIN (write your solution here)
const each = (coll, fn, callback = noop) => {
  const onceCalled = once(callback);
  if (coll.length === 0) { return callback(null); }

  let completed = 0;
  const cb = err => {
    if (err) { return onceCalled(err); }
    completed++;
    if (completed === coll.length) {
      onceCalled(null);
    }
  };

  coll.forEach(item => fn(item, cb));
}

const concat = (coll, fn, callback) => {
  let result = [];
  each(coll, (item, cb) => {
    fn(item, (err, data) => {
      result = result.concat(data || [])
      cb(err);
    });
  }, err => {
    callback(err, result);
  })
};

export default concat;
// END
