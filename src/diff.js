import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)
  const bigger = lines1.length > lines2.length ? lines1 : lines2; 

  return bigger.reduce((acc, line, index) => {
    if (lines1[index] === lines2[index]) {
      return acc;
    }

    return [...acc, [lines1[index], lines2[index]].map(x => (x === undefined ? null : x))];
  }, []);
  // END
};

// BEGIN (write your solution here)
export default (path1, path2, callback) => {
    fs.readFile(path1, (err1, data1) => {
        if (err1) {
            callback(err1);
            return;
        }

        fs.readFile(path2, (err2, data2) => {
            if (err2) {
                callback(err2);
                return;
            }

            const data = compare(data1.toStrin(), data2.toString());
            callback(null, data);
        });
    });
};
// END
