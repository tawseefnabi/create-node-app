#!/usr/bin/env node
const init = require('./utils/init');
(async () => {
  console.log('start');
  let clear = true
  init({clear})
  console.log("screen cleaned");
})();
