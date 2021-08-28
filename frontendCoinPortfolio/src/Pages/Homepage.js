import React from "react";

import "./Homepage.css";

import Navbar from '../components/Navigation/MainNavigation';
import Transactions from "../components/Transactions/Transactions";
import Chart from "../components/Chart";

const homePage = () => {
    return (
            <div className="contain">
                <Navbar />
                <Transactions />
                <Chart />
            </div>


    );
}

export default homePage;