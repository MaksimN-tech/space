const router = require('express').Router();
const axios = require('axios');

router.get('/', (req,res) => {

  axios.get(`https://api.nasa.gov/planetary/apod?api_key=L1coLXVTdWnTbN5Ad2N16Fq9KD6xtzq16JdiaaBC`)
  .then((response) => {  

    console.log(response.data.url);
    const url = response.data.url;
    res.render('photo', {url});
  })

  
})

router.post('/', (req,res) => {
  
  const {val} = req.body;

  axios.get(`https://images-api.nasa.gov/search?q=${val}&media_type=image`)
  .then((response) => {

      let data = (response.data.collection.items);
      const dataArray = [];
      data.forEach(element => {
        dataArray.push({
          href: element.links[0]['href'],
          title: element.data[0]['title']
        })
      });

      res.json(dataArray)
  });
})





module.exports = router;

