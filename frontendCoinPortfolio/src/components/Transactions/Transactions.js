import React, { useState } from "react";

const Transactions = () =>{

    const [ cssStyle, setcssStyle ] = useState(
        'text-gray-100 py-1 px-3 rounded-lg');

    return (
        <div className="flex justify-end w-4/5 space-x-2">
            <button className={`${cssStyle}` + " bg-blue-500 hover:bg-blue-600"}>Buy/Sell</button>
            <button className={`${cssStyle}` + " bg-green-500 hover:bg-green-600"}>Transfer</button>
        </div>
    );
}

export default Transactions;