const router = require('express').Router();
const axios = require('axios');
const { findOne } = require('../models/add.models');
const Add = require('../models/add.models');

router.get('/:title', async(req,res) => {
  if(req.session.user) {
    const {title} = req.params;
    const article = await Add.findOne({date:title})
    res.render('article', {article})
  }
  else{
    res.redirect('/')
  }
})


router.post('/', async(req,res) => {
  if(req.session.user) {
    console.log("this");
    const {data} = req.body;
    // const article = await Add.findOne({date:title})
    // res.render('article', {article})
    console.log(data);
  }
  else{
    res.redirect('/')
  }
})


module.exports = router;
