const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Error } = require('mongoose');
const User = require('../models/user.model');
require('../db/mongoose');


router.route('/')
  .get((req,res) => {
    res.render('signupForm');
  })
  .post(async(req,res) => {
    const {name,email,password} = req.body;
    const hashPass = await bcrypt.hash(password,8);
    try{
      const user = new User({
        name,
        email,
        password: hashPass
      })
      await user.save();
      req.session.user = user;
      res.status(201).redirect('/photo');
    }catch (err) {
      res.status(400).redirect('/');
      
    }
  })

module.exports = router;
