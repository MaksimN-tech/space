const App = require('./app');
const port = process.env.PORT || 4000;




App.listen(port, () => {
  console.log(`server run on port ${port}`);
})
