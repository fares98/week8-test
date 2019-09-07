// Write a query to get the user and their password from the database
const connection = require('./../config/connection')

const getUser = (email) => {
  const sql = {
    text:
      "select id, password from users where email = $1",
    values: [
      email
    ]
  }

  return connection.query(sql);
}

module.exports = {
  getUser
};

