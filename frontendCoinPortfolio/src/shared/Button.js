import React from "react";
import { useHistory } from "react-router-dom";

import "./Button.css";


const Button = (props) => {
  const cssStyle = "text-gray-100 py-1 px-3 rounded-lg";

  const history = useHistory();

  const closeHandler = () => {
    history.push("/home");
  };

  if (props.buttonType === "cancel") {
    return (
      <button
        className={`${cssStyle}` + " " + props.cssClass}
        onClick={closeHandler}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        type="submit"
        className={`${cssStyle}` + " " + props.cssClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
