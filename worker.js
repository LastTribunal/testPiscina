/*jshint esversion: 9 */
const {
  setTimeout
} = require('timers/promises');
module.exports = async ({
  ms
}) => {
  await setTimeout(ms);
  return ms;
};
