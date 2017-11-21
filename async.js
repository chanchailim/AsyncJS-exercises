const fs = require('fs');

const readFromFile = (fileName) => {
    // WRITE CODE HERE
    return fs.readFileSync(fileName, 'utf-8');
};

const readFromFileAsync = (fileName, cb) => {
    // WRITE CODE HERE

    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (!err) {
            cb(data);
        } else {
            cb('error');
        }
    });
}

console.log('START');
readFromFileAsync('sample.txt', (data) => {
    console.log(data)
    console.log('END')
});