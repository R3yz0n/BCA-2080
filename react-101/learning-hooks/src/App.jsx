import React, { useState } from "react";
import Count from "./Count";
import Form from "./Form";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //parameter
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (something) => {
    setPassword(something.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <React.Fragment>
      <Form
        handleSubmit={handleSubmit}
        handlePasswordChange={handlePasswordChange}
        handleEmailChange={handleEmailChange}
      />
    </React.Fragment>
  );
};

export default App;
