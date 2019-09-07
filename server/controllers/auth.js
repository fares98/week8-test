const jwt = require('jsonwebtoken');
require('env2')('secret.env')
const secret = process.env.SECRET_KEY;


const auth = (req, res, next) => {
  if (req.cookies.id) {
    jwt.verify(req.cookies.id, secret, (err, decoded) => {
      if (err) {
        res.redirect('/login')
      } else {
      next();
      }
    })

   } else {
     res.redirect('/login')
   }
}


module.exports = {
  auth
};




