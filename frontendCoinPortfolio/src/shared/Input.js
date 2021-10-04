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
    "block bg-gray-200 border focus:bg-white focus:border-gray-500 shadow appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: props.valid || false,
    isTouched: false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  console.log(props.value);

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
      <React.Fragment>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {props.labelInput}
        </label>
        <input
          className={`${cssStyle}` + " " + props.cssClass}
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={inputState.value}
          onChange={changedHandler}
          onBlur={touchedHandler}
        />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {props.labelInput}
        </label>
        <textarea
          className={`${cssStyle}` + " " + props.cssClass}
          id={props.id}
          placeholder={props.placeholder}
          value={inputState.value}
          onChange={changedHandler}
          rows={props.rows}
          cols={props.cols}
        />
      </React.Fragment>
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
