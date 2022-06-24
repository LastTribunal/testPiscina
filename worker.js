/*jshint esversion: 9 */
const {
  setTimeout
} = require('timers/promises');
module.exports = async ({
  ms
}) => {
  await setTimeout(ms);
  console.dir(ms);
  return ms;
};
