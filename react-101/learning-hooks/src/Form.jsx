import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handlePasswordChange} type="email" placeholder="Enter your email" />
        <br />
        <input
          type="password"
          onChange={props.handlePasswordChange}
          placeholder="Enter your pasword"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
