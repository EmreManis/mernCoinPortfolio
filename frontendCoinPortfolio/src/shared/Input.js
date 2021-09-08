import React, { useReducer, useEffect } from "react";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
}

const Input = props => {

    const cssStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const cssErrorClass = "border-red-500 rounded";

    const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid: false});

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);


    const changedHandler = (event) => {
        dispatch({type: 'CHANGE', val: event.target.value});
    }

        return (
            <input
                className={`${cssStyle}`+" "+ props.cssClass}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            value={inputState.value}
            onChange={changedHandler}/>
        );

}

export default Input;