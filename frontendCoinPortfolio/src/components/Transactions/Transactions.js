import React from "react";
import { Link } from "react-router-dom";


const Transactions = () =>{

    return (
        <div className="flex justify-end w-4/5 space-x-2">
            <Link className={"text-gray-100 py-1 px-3 rounded-lg bg-blue-500 hover:bg-blue-600"} to="/transaction/etherium">Add Coin</Link>
        </div>
    );
}

export default Transactions;