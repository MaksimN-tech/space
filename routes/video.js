const router = require('express').Router();
const axios = require('axios');
const express = require('express');
const Add = require('../models/add.models');

router.get('/', (req,res) => {

    axios.get(`https://svs.gsfc.nasa.gov/search/api?nasa_science_category=3520&media=movies`)
    .then((response) => {
      let arr = []
      response.data.results.forEach( async(element) => {

        const articles = new Add({
          title: element.title,
          date: element.release_date,
          description:element.description,
          img:element.preview_image,
          url: element.url
        })
        await articles.save();

        arr.push({
          title: element.title,
          date: element.release_date,
          description:element.description.slice(0,30),
          img: element.preview_image,
          url: element.url
        })
      });
      res.render('videos',{arr});
    })
  
})

router.post('/', (req,res) => {

  const {val} = req.body;

  axios.get(`https://svs.gsfc.nasa.gov/search/api?nasa_science_category=3520&media=movies`)
  .then((response) => {


    response.data.results.forEach( async(element) => {

      const articles = new Add({
        title: element.title,
        date: element.release_date,
        description:element.description,
        img:element.preview_image,
        url: element.url
      })
      await articles.save();
    });
    res.json(response.data.results)
  })











  //--------------------------
  // axios.get(`https://images-api.nasa.gov/search?q=${val}`)
  // .then((response) => {
//----------------------------
    // console.log(response.data.collection.items[1]);
      // const arr = [];
      // let data = (response.data.collection.items[10]['href']);
      // console.log(data);
      // console.log(data[18]['data'][0]['title'])
      // console.log(typeof(data));

      //------------------
      // data.forEach(element => {
    
      //   if(element['href'].includes('video') && typeof(element['href']) !== 'string') {
      //     let middle = element['href'];
      //     console.log(typeof(middle))
      //     middle.forEach(el => {
      //       if(el.includes('orig.mp4'))
      //       arr.push(el);
      //     })
      //   }
      //   }
      // });
      // console.log(arr);
     //-----------------------

    // console.log(response.data.collection.items[1]['href']);
    // const {href} = response.data.collection.items[0];
    // const {title, description} = response.data.collection.items[0]['data']
    // res.json({href,title,description})
  });



module.exports = router;



//   a_id: 13868,
//   title: 'Live Interview from International Space Station with Hubble Astronaut Megan McArthur',
//   release_date: '2021-06-02T09:12:00-04:00',
//   vis_type: 'GMS',
//   description: 'Astronaut Megan McArthur speaks with us from the International Space Station! We’ll discuss her role on the Hubble mission and her current work as part of NASA’s SpaceX Crew-2.\n' +
//     ' Master VersionHorizontal version. This is for use on any YouTube or non-YouTube platform where you want to display the video horizontally.',
//   nasa_science_category: [ 'Earth', 'Universe' ],
//   preview_image: 'https://svs.gsfc.nasa.gov/vis/a010000/a013800/a013868/Search.png',
//   url: 'https://svs.gsfc.nasa.gov/13868'
