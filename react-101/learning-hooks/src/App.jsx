import React, { useState } from "react";

const App = () => {
  // state is a variable that is used to store data that can be used in the component
  // state is used to store data that can change over time
  // state is used to store data that can be used in the component
  // virtual DOM is used to update the UI when the state changes
  // real dom vs virtual dom
  // real dom is the actual dom that is rendered on the browser
  // virtual dom is a copy of the real dom that is stored in memory
  // virtual dom is used to update the real dom when the state changes  (diffing algorithm)
  //useState is a hook that allows you to have state variables in functional components
  //useState returns an array with two elements
  //first element is the state variable
  //second element is the function to update the state variable

  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const [name, setName] = useState("John");
  const [toShow, setToShow] = useState(true);

  const incrementCount = () => {
    setCount(count + 10);
  };

  const changeName = () => {
    setName("new name");
  };
  const hideOrShowName = () => {
    setToShow(!toShow);
  };
  return (
    <div>
      <button onClick={incrementCount}>Increment Counter ( {count} )</button>
      <br /> <br />
      <button onClick={changeName}>Change name to your name :- {name} </button>
      <br />
      <br />
      <button onClick={hideOrShowName}>Show or Hide name {toShow && name}</button>
    </div>
  );
};

export default App;
