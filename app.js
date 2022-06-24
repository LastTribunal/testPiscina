/*jshint esversion: 9 */
const path = require('path');
const Piscina = require('piscina');


const piscina = new Piscina({
    filename: path.resolve(__dirname, "worker.js"),
    maxThreads: 3
});

(async () => {
    const thread1 =  piscina.run({
        a: 4,
        b: 6,
        ms: 1000
    });
    const thread2 =  piscina.run({
        a: 4,
        b: 54,
        ms: 1000
    });
    const thread3 =  piscina.run({
        a: 4,
        b: 666,
        ms: 1000
    });

   var start= Date.now();
   var result = await Promise.all([thread1, thread2,thread3]);
   
   console.log(result);
   console.log(`execution time: ${Date.now()-start}`);
})();