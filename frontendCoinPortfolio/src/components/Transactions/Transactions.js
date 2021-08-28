import React, { useState } from "react";

import Button from "../../shared/Button";

const Transactions = () =>{

    return (
        <div className="flex justify-end w-4/5 space-x-2">
            <Button cssClass={"bg-blue-500 hover:bg-blue-600"}>Buy/Sell</Button>
            <Button cssClass={"bg-green-500 hover:bg-green-600"}>Transfer</Button>
        </div>
    );
}

export default Transactions;