const { join } = require('path');
const { getUser } = require('./../database/queries/getUser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('env2')('secret.env')


exports.renderLogin = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
};
const secret = process.env.SECRET_KEY;


exports.loginFunction = (req, res) => {
  const { email, password } = req.body;

  getUser(email)
    .then((result) => {
      if (result.rows.length === 0) {
        console.log('The user Not found');
        res.redirect('/')
      } else {
        bcrypt.compare(password, result.rows[0].password, (err, decoded) => {
          if (decoded) {
            const accessToken = jwt.sign({ id: result.rows[0].id }, secret);
            res.cookie('id', accessToken);
            res.redirect('/cities')
          } else {
            console.log('Wrong Password');
            res.redirect('/login')
          }
        })
      }
    })

}

