/*jshint esversion: 9 */
const path = require('path');
const Piscina = require('piscina');
const _ = require('lodash');

const maxThreads = 100;
const totalThreads = 100;
const maxThreadDuration = 10000;

const piscina = new Piscina({
    filename: path.resolve(__dirname, "worker.js"),
    maxThreads: maxThreads
});

(async () => {
    var allThreads = [];
    for (let index = 0; index < totalThreads + 1; index++) {
        var thread = piscina.run({
            ms: Math.floor(Math.random() * maxThreadDuration)
        });
        allThreads.push(thread);
    }

    var start = Date.now();
    var result = await Promise.all(allThreads);

    console.log(result);
    console.log(`thread execution time sum: ${_.sum(result)}`);
    console.log(`total execution time: ${Date.now()-start}`);
})();