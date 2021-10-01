import React, { useReducer, useEffect } from "react";

import { validate } from "./Validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const cssStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: props.valid || false,
    isTouched: false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changedHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchedHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        className={`${cssStyle}` + " " + props.cssClass}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value || inputState.value}
        onChange={changedHandler}
        onBlur={touchedHandler}
      />
    ) : (
      <textarea
        className={props.cssClass}
        id={props.id}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={changedHandler}
        rows={props.rows}
        cols={props.cols}
      />
    );

  return (
    <React.Fragment>
      {element}
      {inputState.isTouched && !inputState.isValid && (
        <p className="text-red-600">{props.errorMessage}</p>
      )}
    </React.Fragment>
  );
};

export default Input;
