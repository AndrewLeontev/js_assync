// Dependencies
import fs from 'fs';

const myFile = '/tmp/test';
fs.readFile(myFile, (err, body) => {
    if (err) {
        console.log(err);
        return;
    }

    const updatedBody = `${body}\nAppended something!`;
    fs.writeFile(myFile, updatedBody, err => {
        if (err) {
            console.log(err);
        }
    });
});

// HexletAsync
// import fs from 'fs';

const myFile = '/tmp/test';
const functions = [
    cb => fs.readFile(myFile, (err, body) => {
        cb(err, `${body}\nAppended something!`);
    }),
    (body, cb) => fs.writeFile(myFile, body, err => {
        cb(err);
    }),
]
hexletAsync.waterfall(functions, err => {
    if (err) {
        return console.log(err);
    }
});




// waterfall 
const waterfall =  (functions, callback) => {
    if (functions.length === 0) { return callback(); }

    const next = ([head, ...rest], previousResult) => {
        const cb = (err, ...args) => {
            if (err) { return callback(err, args); };
            if (rest.length === 0) {
                callback(err, args);
            } else {
                next(rest, args);
            }
        };
        head(...previousResult, cb);
    };
    next(functions, []);
};

// Async Flow

const functions = [
    cb => cb(null),
    cb => cb(null, 'one'),
    (r1, cb) => cb(null, r1, 'two'),
    (r1, r2, cb) => cb(null, r2, r1),
];

waterfall(functions, (err, ...result) => {
    console.log(result[0], 'two');
    console.log(result[1], 'one');
});