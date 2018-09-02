const noop = (...args) => {};
// однократное выполнение
const newCallback = once(callback);
newCallback(noop); 
newCallback(noop); // do nothing

export const once = fn => {
    let called = false;
    return (...args) => {
        if (called) return;
        called = true;
        fn(...args);
    };
};

const each = (coll, iterate, callback = noop) => {
    const oncedCallback = once(callback);
    if (coll.length === 0) { return callback(null); }

    let completed = 0;
    const cb = err => {
        if (err) { return oncedCallback(err); }
        completed++;
        if (completed === coll.length) {
            oncedCallback(null);
        }
    };

    coll.forEach(item => iteratee(item, cb))
}
