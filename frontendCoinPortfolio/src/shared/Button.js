import React, { useState } from "react";

const Button = (props) => {
    const [ cssStyle, setcssStyle ] = useState(
        'text-gray-100 py-1 px-3 rounded-lg');

    return (
        <button className={`${cssStyle}`+" "+ props.cssClass}>
            {props.children}
        </button>);
};

export default Button;