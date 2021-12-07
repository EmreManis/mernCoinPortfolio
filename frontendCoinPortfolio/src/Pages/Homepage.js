import React from "react";

import "./Homepage.css";

import Navbar from '../components/MainNavigation';
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";

const homePage = () => {
    return (
            <div className="contain relative">
                <Navbar />
                <div className="flex mt-5">
                   <Chart />
                   <TableBuilder />
                </div>
            </div>


    );
}

export default homePage;