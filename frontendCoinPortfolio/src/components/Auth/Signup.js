import React, { useReducer, useCallback } from "react";

import Button from "../../shared/Button";
import Input from "../../shared/Input";

import * as validator from '../../shared/Validator';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
        return {
            ...state,
            [action.inputId]: {value: action.value, isValid: action.isValid}
        }
        default: {
            return state;
        }
    }
}

const Signup = (props) => {

    const [formState, dispatch] = useReducer(formReducer, {
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
    
    // const inputHandler = useCallback((id, value, isValid) => {
    //     dispatch({
    //         type: 'CHANGE',
    //         value: value,
    //         isValid: isValid,
    //         inputId: id
    //     });
    // }, []);

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

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
                        onInput={inputHandler}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="******************"
                        onInput={inputHandler}/>
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Confirm Password
                    </label>
                    <Input
                        id="conPassword"
                        type="password"
                        placeholder="******************"
                        onChange={inputHandler}/>
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