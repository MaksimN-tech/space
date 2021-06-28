const router = require('express').Router();
const axios = require('axios');

router.get('/', (req,res) => {
  
  axios.get('https://api.nasa.gov/planetary/apod?api_key=L1coLXVTdWnTbN5Ad2N16Fq9KD6xtzq16JdiaaBC')
  .then((response) => {
    // console.log(response.data);
    const {copyright,explanation,title,url} = response.data;
    res.json({copyright,explanation,title,url})
  });
})


module.exports = router;
