import React, { useState } from 'react';

const MainNavigation  = (props) =>{

    const [balance, setBalance] = useState(999);
    const [profitLoss, setprofitLoss] = useState(132);

    return (
        <nav className="flex h-40 px-1">
            <div className="w-1/5 flex items-center">
                <h1 className="text-2xl text-black">
                    <a href="/">Coin <i><span className="text-red-500">Portfolio</span></i></a>
                </h1>
            </div>
            <div className="flex justify-end items-center w-3/5 space-x-4">
                <p>Total Balance: <span className="text-gray-700">{balance}usd</span></p>
                <p>Profit/Loss: <span className="text-gray-700">{profitLoss}usd</span></p>
            </div>
                <ul className="flex justify-end items-center w-1/5 space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-gray-100 py-2 px-4 rounded-lg">
                        <a href="/">Log In</a>
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-gray-100 py-2 px-4 rounded-lg">
                        <a href="/">Sign Up</a>
                    </button>
                </ul>
        </nav>
    );
}
export default MainNavigation;