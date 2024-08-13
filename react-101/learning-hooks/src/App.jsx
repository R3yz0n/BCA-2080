import React, { useState } from "react";

const App = () => {
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
