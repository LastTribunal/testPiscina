/*jshint esversion: 9 */
const path = require('path');
const Piscina = require('piscina');


const piscina = new Piscina({
    filename: path.resolve(__dirname, "worker.js"),
    maxThreads: 10
});

(async () => {
   
   
    var allThreads = [];
    for (let index = 0; index< 10; index++) {
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
    console.log(`execution time: ${Date.now()-start}`);
})();