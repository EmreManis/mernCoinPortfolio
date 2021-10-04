import React from "react";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const cssStyle = "text-gray-100 py-1 px-3 rounded-lg";

  const history = useHistory();

  const closeHandler = () => {
    history.push("/home");
  };

  if (props.buttonType === "cancel") {
    return (
      <button
        className={`${cssStyle}` + " " + props.cssClass + " " + props.disabled}
        onClick={closeHandler}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        className={`${cssStyle}` + " " + props.cssClass + " " + props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
