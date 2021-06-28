//photo

document.addEventListener('submit', async (e) => {
  
  if(e.target.getAttribute('name') == 'photo-input') {

    if(document.querySelector('.img-wrapper')) {
      document.querySelector('.img-wrapper').remove();
    }

    e.preventDefault();

    if(document.querySelector('.dayfoto') || document.querySelector('.photo-main')) {
      document.querySelector('.dayfoto').remove();
      document.querySelector('.photo-main').remove();
    }
 
    const val = document.getElementById('photo-input').value;

  const response = await fetch('/photo',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({val})
  }
  )
  const result = await response.json();

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'img-wrapper is-flex is-flex-wrap-wrap';


 

  result.forEach(element => {
    const {href, title} = element;
  
      let info = document.createElement('div');
      info.className = 'info-search-photo scale-in-bl'
    info.innerHTML = 
    `
    <div class="card" id="cards">
  
    <div class="card-image">
      <figure class="image is-4by3">
        <img src=${href}
      </figure>
    </div>
    
    <div class="card-content">
      <p class="title">
       ${title}
      </p>
      <p class="subtitle">
      </p>
      <p class="subtitle">
      </p>
    </div>
    
    </div>
    `
    imgWrapper.appendChild(info)
    document.body.appendChild(imgWrapper)
   
    });
  }

//video

  if(e.target.getAttribute('name') == 'video-input') {
    e.preventDefault();
    
 
    const val = document.getElementById('video-input').value;

  const response = await fetch('/videos',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({val})
  }
  )
  const result = await response.json();
 

  let arr = []
    result.forEach(element => {
      arr.push({
        title: element.title,
        date: element.release_date,
        description:element.description,
        img: element.preview_image,
        url: element.url
      })
    });

 

    let resultArr = arr.filter(el => el.description.toLowerCase().includes(val.toLowerCase()));
    let wrap = document.querySelector('.img-wrapper')
    wrap.innerHTML = '';


//     function addStyles(i) {
//       if(resultArr.length > i) {
//         setTimeout(() => {
//           const {title, date, description, img, url} = element;


//     let short = description.slice(0, 20)

//     let info = document.createElement('div');
//     info.className = 'info-content puff-in-right'
//   info.innerHTML = 
//   `
// <div class="card" id="cards">

// <div class="card-image">
//   <figure class="image is-4by3">
//     <img src=${img}
//   </figure>
// </div>

// <div class="card-content">
//   <p class="title">
//   <a href=/space/${date}>${title}</a>
//   </p>
//   <p class="subtitle">
//     ${date}
//   </p>
//   <p class="subtitle">
//   ${short}...
//   </p>
// </div>

// </div>
//   `
//   wrap.appendChild(info);
//   addStyles(++i);
//         },400)
//       }
//     }
//     addStyles(0)

  resultArr.forEach(element => {
    const {title, date, description, img, url} = element;


    let short = description.slice(0, 20)

    let info = document.createElement('div');
    info.className = 'info-content puff-in-right'
  info.innerHTML = 
  `
<div class="card" id="cards">

<div class="card-image">
  <figure class="image is-4by3">
    <img src=${img}
  </figure>
</div>

<div class="card-content">
  <p class="title">
  <a href=/space/${date}>${title}</a>
  </p>
  <p class="subtitle">
  <i class="fas fa-thumbs-up"></i>
    <button id="like" class=" button is-dark">Dark</button>
  </p>
  <p class="subtitle">
  ${short}...
  </p>
</div>

</div>
  `
  wrap.appendChild(info)
    });
  }

})




// document.addEventListener('click', async (e) => {

//   if(e.target.id == 'like') {
//     console.log('click')
//     const data = document.getElementById('like').parentElement.parentElement.parentElement.textContent;


//     console.log(data)
//     const response = await fetch('/space',
//     {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({data})
//     }
//     )
//     console.log(data)
    // const result = await response.json();
    // console.log(result)

  //}

  // if(e.target.className == 'title') {
  //   let text = document.querySelector('.card-content>p.title').textContent;
  //   const response = await fetch('/videos',
  //   {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({text})
  //   }
  //   )
  // }








  // if(e.target.id == 'btn-mars' || e.target.id == 'mars' ) {
   
  //   console.log('mars')
  // }



//})











// document.addEventListener('click', async (e) => {
  
//   if(e.target.id == 'btn-img') {
//     e.stopPropagation();
//     console.log('img');


//   const response = await fetch('/photo',
//   {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name,password})
//   }
//   )
//   const result = await response.json();


  
  // window.location.href = "/photo"
  // console.log(result)
  // const {copyright,explanation,title,url} = result;
  // console.log(copyright,explanation,title,url)

  // console.log(result[0].href)

//   result.forEach(element => {
//     const {href, title} = element;

//     let info = document.createElement('div');
//     info.className = 'info-content'
//   info.innerHTML = 
//   `
//   <div class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//       <img src=${href} alt="Placeholder image">
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       <div class="media-left">
//       ${title}
//       </div>
//       <div class="media-content">
//         <p class="title is-4">Space</p>
//       </div>
//     </div>
//     <div class="content">
//         Galaxy
//     </div>
//   </div>
// </div>
//   `
//   document.body.appendChild(info)

//     });

//   }
// })











  
  // if(e.target.id == 'btn-video') {
  //     e.stopPropagation();
  //   console.log('video');
  // }


// document.getElementById('btn-img').addEventListener('click', (e) => {
//   console.log(e.target.id)
// })


//--------------Day photo

// const flights = document.querySelector('.flights');

// flights.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const response = await fetch('/flights')
//   const result = await response.json();
//   const {copyright,explanation,title,url} = result;
//   console.log(copyright,explanation,title,url)
//   let info = document.createElement('div');
//   info.innerHTML = 
//   `
//   <div class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//       <img src=${url} alt="Placeholder image">
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       <div class="media-left">
//       ${title}
//       </div>
//       <div class="media-content">
//         <p class="title is-4">${copyright}</p>
//       </div>
//     </div>
//     <div class="content">
//         ${explanation}
//     </div>
//   </div>
// </div>
//   `
//   document.body.appendChild(info)

// })


//-------------Photos

// const flights = document.querySelector('.flights');

// flights.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const response = await fetch('/images');
//   const result = await response.json();
//   const {href,title,description} = result;

//     let info = document.createElement('div');
//   info.innerHTML = 
//   `
//   <div class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//       <img src=${href} alt="Placeholder image">
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       <div class="media-left">
//       ${title}
//       </div>
//     </div>
//     <div class="content">
//         ${description}
//     </div>
//   </div>
// </div>
//   `
//   document.body.appendChild(info)

// })

//------------------video


// const flights = document.querySelector('.flights');

// flights.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const response = await fetch('/video');
//   const result = await response.json();
//   const {href,title,description} = result;

//     let info = document.createElement('div');
//   info.innerHTML = 
//   `
//   <div class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//       <img src=${href} alt="Placeholder image">
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       <div class="media-left">
//       ${title}
//       </div>
//     </div>
//     <div class="content">
//         ${description}
//     </div>
//   </div>
// </div>
//   `
//   document.body.appendChild(info)


