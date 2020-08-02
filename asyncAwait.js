// const axios = require('axios')

// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log('hello')
//     console.log(response.data)
//     console.log('hi')
//   })
//   .catch(err => console.log(err))

// will only work in client side code

async function Posts() {

  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();
    console.log(posts)
  } catch(err) {
    // catches errors both in fetch and response.json
    console.log(err)
  }
}

Posts();