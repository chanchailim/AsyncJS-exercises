const request = require('request');

const test = () => {
        request("https://www.google.com", (err, resp, body) => {
            console.log('Response');
        });
    }
    //START OF PROGRAM
console.log("Hitting google");
test();
console.log("Some other work");