/*jshint esversion: 9 */
const { setTimeout } = require('timers/promises');
module.exports = async ({
  a,
  b,
  c
}) => {
  await setTimeout(c, 'resolved');
  return a + b;
};
