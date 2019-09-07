const { join } = require('path');
const { addUser } = require('./../database/queries/addUser');
const { getUser } = require('./../database/queries/getUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('secret.env')

const secret = process.env.SECRET_KEY;


exports.renderSignup = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
};


exports.signupFunc = (req, res) => {
  const { password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPasswoed) => {
    if (err) {
      console.log(err);
    } else {
      addUser(req.body, hashedPasswoed)
        .then((result) => {
          const accessToken = jwt.sign({ id: result.rows[0].id }, secret);
          res.cookie('id', accessToken);
          res.redirect('/cities')
        })
        .catch((err) => console.log(err));
    }
  });

}



