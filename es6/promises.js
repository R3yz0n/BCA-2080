// Example URL for fetching JSON data (replace with your actual URL)
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
const apiUrl1 = "https://jsonplaceholder.typicode.com/story/1";

//Fetch takes the args of url and options

//kurni kaam .then ma vaiiraxa

// const fetchedData = fetch(apiUrl)
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(fetchedData);

const data = fetch(apiUrl)
  .then((response) => {
    // console.log(response);

    return response.json(); //promise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const data1 = fetch(apiUrl1)
  .then((response) => {
    // console.log(response);

    return response.json(); //promise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
