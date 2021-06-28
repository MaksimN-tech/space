const router = require('express').Router();

router.get('/', (req,res) => {
  const {user} = req.session;
  res.render('products',{user});
})


module.exports = router;
