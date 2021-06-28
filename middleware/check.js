function clear(req, res, next) {
  if (req.cookies.user_on_page && !req.session.user) {
    res.clearCookie("user_on_page")
  }
  next()
}

function checkUser(req, res, next) {
if (req.session.user) {
  res.locals.user = req.session.user
}
next();
}


module.exports = {clear, checkUser};
