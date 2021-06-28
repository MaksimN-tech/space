const router = require('express').Router();

router.get('/', (req,res) => {
  const {user} = req.session;
  res.render('profile', {user})
})


module.exports = router;
