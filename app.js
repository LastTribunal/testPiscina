/*jshint esversion: 9 */
const path = require('path');
const Piscina = require('piscina');
const _ = require('lodash');

const maxThreads = 10;
const totalThreads = 10;

const piscina = new Piscina({
    filename: path.resolve(__dirname, "worker.js"),
    maxThreads: maxThreads
});

(async () => {
   
   
    var allThreads = [];
    for (let index = 0; index < totalThreads+1; index++) {
        var thread = piscina.run({
            ms: getRandomInt(10000)
        });
        allThreads.push(thread);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }



    var start = Date.now();
    var result = await Promise.all(allThreads);

    console.log(result);
    console.log(`thread execution time sum: ${_.sum(result)}`);
    console.log(`total execution time: ${Date.now()-start}`);
})();