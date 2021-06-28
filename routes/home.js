const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get('/', (req,res) => {
  if(req.session.user) {
    res.render('home');
  }else {
    res.clearCookie('user_in');
    res.render('home');
  }
})

router.get('/logout', async(req,res) => {
  await req.session.destroy();
  try {
      res.clearCookie('user_in')
      res.redirect('/')
  } catch(e) {
    console.log(e)
  }
})


module.exports = router;
