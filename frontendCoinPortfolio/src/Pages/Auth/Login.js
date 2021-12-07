import React, { useContext } from "react";

import { AuthContext  } from "../../shared/context/auth-context";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Backdrop from "../../shared/Backdrop";

import * as validator from "../../shared/Validator";
import { useForm } from "../../shared/hooks/form-hook";
import "../../index.css";

const Login = (props) => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: " ",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
    console.log(formState);
  const submitHandler = event => {
    event.preventDefault();
    auth.login();
  }

  return (
    <React.Fragment>
      <Backdrop />
      <div className="w-full my-16 flex justify-center z-50 absolute top-0 fadeIn">
        <form className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              element="input"
              id="email"
              type="text"
              placeholder="Email"
              onInput={inputHandler}
              validators={[validator.VALIDATOR_EMAIL()]}
              errorMessage="Please enter a valid mail adress"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              element="input"
              id="password"
              type="password"
              placeholder="******************"
              onInput={inputHandler}
              validators={[validator.VALIDATOR_MINLENGTH(5)]}
              errorMessage="Password need to be minimum 5 character"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              cssClass="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              disabled={!formState.isValid}
            >
              Login
            </Button>
            <Button
              cssClass="bg-red-500 hover:bg-red-600 py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              buttonType="cancel"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
