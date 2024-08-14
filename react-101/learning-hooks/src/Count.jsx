import React, { useState } from "react";

const Count = () => {
  //array destructuing
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sagar");
  const incrementCount = () => {
    // count = count + 1; wrong approach

    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={incrementCount}>Count:-{count} </button>
      <button>Change name</button>
    </div>
  );
};

export default Count;
