const logout = (req, res) => {
  res.clearCookie('id').redirect('/login')
}

module.exports = {
  logout
};
