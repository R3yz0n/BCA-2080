/* eslint-disable react/prop-types */
import { AiFillMessage } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.type,
    fontSize: "12px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    fontWeight: "bold",
    display: "flex",
    gap: "5px",
    alignItems: "center",
  };

  return (
    <button style={buttonStyle}>
      {props.icon == "contact" ? (
        <AiFillMessage size="16px" />
      ) : (
        <FaGithub size="16px" />
      )}

      {props.title}
    </button>
  );
};

export default Button;
