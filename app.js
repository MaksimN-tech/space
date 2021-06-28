const express = require('express');
const path = require('path');
const middleWare = require('./middleware/middleware')


const homeRoute = require('./routes/home');
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signUp');
const mainRoute = require('./routes/main');
const productRoute = require('./routes/product');
const profileRoute = require('./routes/profile');
const flights = require('./routes/flights');
const images = require('./routes/images');
const video = require('./routes/video');
const mars = require('./routes/mars');
const space = require ('./routes/space')
const {clear, checkUser} = require('./middleware/check');

const app = express();
middleWare(app);




app.use(checkUser);
app.use(clear);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');




app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/signup', signUpRoute);
app.use('/main', mainRoute);
app.use('/product', productRoute);
app.use('/profile', profileRoute);
app.use('/flights', flights);
app.use('/photo', images);
app.use('/videos', video);
app.use('/space', space);
app.use('/mars', mars);


module.exports = app;
