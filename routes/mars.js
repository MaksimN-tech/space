const router = require('express').Router();
const axios = require('axios');
router.get('/', (req,res) => {


    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=L1coLXVTdWnTbN5Ad2N16Fq9KD6xtzq16JdiaaBC`)
    .then((response) => {
      const data = response.data.photos.slice(0,90);
      res.render('mars', {data})

      
    })
  
    
  
  
})


module.exports = router;
