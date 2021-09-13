import React from "react";

const Button = (props) => {

    const cssStyle = 'text-gray-100 py-1 px-3 rounded-lg';

    return (
        <button className={`${cssStyle}`+" "+ props.cssClass}
                type="button"
                onClick={props.onClick}
                disabled={props.disabled}>
            {props.children}
        </button>);
};

export default Button;