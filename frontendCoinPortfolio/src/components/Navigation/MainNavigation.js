import React, { useState } from "react";



const mainNavigation  = (props) =>{
    return (
        <nav className="flex bg-red-100 px-1">
            <div className="w-1/5"><h1 className="text-2xl"><a href="/">Coin <i>Portfolio</i></a></h1></div>
            <div className="flex justify-end items-center w-3/5 space-x-4">
                <p>Total Balance: 999 usd</p>
                <p>Profit / Loss: +132 usd</p>
            </div>
                <ul className="flex justify-end items-center w-1/5 space-x-4">
                    <li><a href="/">Log In</a></li>
                    <li><a href="/">Sign Up</a></li>
                </ul>
        </nav>
    );
}
export default mainNavigation;