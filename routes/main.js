const router = require('express').Router();

router.get('/', (req,res) => {
  if(req.session.user) {
    const {user} = req.session;
    res.render('main', {user});
  }
  else {
    res.render('main')
  }
})


module.exports = router;
