import React, { useState } from "react";

import Button from "../../shared/Button";
import Input from "../../shared/Input";

import * as validator from '../../shared/Validator';


const Signup = (props) => {
    const [formState, setFormState] = useState({
        email: {
            value: ' ',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
        conPassword:{
            value:'',
            isValid: false
        }
    });


    const validationHandler = (value, valType) => {
        let isValid = false;
        console.log(isValid);
        isValid = validator.validate(value, valType);
        console.log(isValid);
    };



    return(
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="text"
                        placeholder="Email"
                        onChange={setFormState}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************"
                    onChange={event => {
                        setFormState({
                            ...formState,
                            password: {
                                ...formState.password,
                                value: event.target.value
                            }
                        });
                        validationHandler(event.target.value, [validator.VALIDATOR_MINLENGTH(5)]);
                    }}/>
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************"
                        onChange={event => {
                            setFormState({
                                ...formState,
                                conPassword:{
                                    ...formState.conPassword,
                                    value: event.target.value
                                }
                            });
                        }}/>
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <Button
                        cssClass="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </Button>
                    <Button cssClass="bg-red-500 hover:bg-red-600 py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline">
                        Cancel
                    </Button>

                </div>
            </form>
        </div>
    );
};

export default Signup;