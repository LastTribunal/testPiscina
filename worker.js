/*jshint esversion: 9 */
const { setTimeout } = require('timers/promises');
module.exports = async ({
  a,
  b,
  ms
}) => {
  await setTimeout(ms, 'resolved');
  return a + b;
};
