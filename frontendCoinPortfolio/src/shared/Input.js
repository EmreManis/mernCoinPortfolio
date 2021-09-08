import React from "react";

const Input = (props) => {

    const cssStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const cssErrorClass = "border-red-500 rounded";
    const changedHandler = () => {
        // event => {
        // setFormState({
        //     ...formState,
        //     email: {
        //         ...formState.email,
        //         value: event.target.value
        //     }
        // });
        //     validationHandler(event.target.value, [validator.VALIDATOR_EMAIL()]);
    }
        return (
            <input
                className={`${cssStyle}`+" "+ props.cssClass}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changedHandler}/>
        );

}

export default Input;