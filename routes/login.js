const router = require('express').Router();
const User = require('../models/user.model');
require('../db/mongoose');
const bcrypt = require('bcrypt');
const { Error } = require('mongoose');
const { readyState } = require('../db/mongoose');



router.route('/')
  .get((req,res) => {
    res.render('loginForm');
  })
  .post(async(req,res) => {
    const {name,password} = req.body;
    try {
      let user = await User.findOne({name});
      let email = await User.findOne({email: name});
      if(!user && !email) {
       throw new Error;
      }
      user = user || email;
      if(user && await bcrypt.compare(password,user.password)) {
        req.session.user = user;
        console.log(user);
        res.status(201).redirect('/photo');
      }else {
        res.status(404).redirect('/');
      }
    }catch(e) {
      res.status(404).redirect('/');
    }
  })

module.exports = router;
