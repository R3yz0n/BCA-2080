// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .then(() => log("another"))
//   .catch((error) => console.log(error));

// using async await instead of promises

// WHY ASYNC AWAIT ??? 
// async await is a syntactic sugar for promises
// async await makes it easier to read and write promises
// async await is non-blocking
// async await is more readable than promises

async function fetchData() {
  const res = await fetch("https://jsonplaceholderxx.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}
