const connection = require('./connection');
const { join } = require('path');
const { readFileSync } = require('fs')

const sql = readFileSync(join(__dirname, 'build.sql')).toString();

connection
  .query(sql)
  .then(console.log('Build Done'))
  .catch((err) => console.log(err));


