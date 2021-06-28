
module.exports = function(app) {
  const express = require('express');
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const dotenv = require('dotenv');
  const session = require('express-session');
  const morgan = require('morgan');
  const fileStore = require('session-file-store')(session);
  

  dotenv.config();
  app.use(morgan("dev"));


  
  app.use(express.static(path.join(__dirname,'..', 'public')))
  app.use(express.json());
  app.use(express.urlencoded({extended:true}))
  
  app.use(cookieParser());
  
  const mySession = {
    store: new fileStore(),
    secret: 'environment',
    key: 'user_in',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000000,
      httpOnly: false
    }
  }
  
  app.use(session(mySession));
  
  
}
