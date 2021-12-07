import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);
  const [balance] = useState(999);
  const [profitLoss] = useState(132);

  return (
    <nav className="flex h-40 px-1">
      <div className="w-1/5 flex items-center">
        <h1 className="text-2xl text-black">
          <a href="/">
            Coin{" "}
            <i>
              <span className="text-red-500">Portfolio</span>
            </i>
          </a>
        </h1>
      </div>
      <div className="flex justify-end items-center w-3/5 space-x-4">
        {auth.isLoggedIn && (
          <div className="flex">
            <p className="mr-3">
              Total Balance: <span className="text-gray-700">{balance}usd</span>
            </p>
            <p>
              Profit/Loss:{" "}
              <span className="text-gray-700">{profitLoss}usd</span>
            </p>
          </div>
        )}
      </div>
      {!auth.isLoggedIn ? (
        <ul className="flex justify-end items-center w-1/5 space-x-2">
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-gray-100 py-2 px-4 rounded-lg cursor-pointer"
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="bg-red-500 hover:bg-red-600 text-gray-100 py-2 px-4 rounded-lg cursor-pointer"
            to="/signup"
          >
            Sign Up
          </Link>
        </ul>
      ): (
          <div className="flex justify-center items-center w-1/5 space-x-2">
              <Link className={"text-gray-100 py-1 px-3 rounded-lg bg-blue-500 hover:bg-blue-600"} to="/transaction/etherium">Add Coin</Link>
          </div>
      )}
    </nav>
  );
};
export default MainNavigation;
