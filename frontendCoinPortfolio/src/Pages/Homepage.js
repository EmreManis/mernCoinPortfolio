import React from "react";

import "./Homepage.css";

import Navbar from '../components/Navigation/MainNavigation';
import Transactions from "../components/Transactions/Transactions";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder/TableBuilder";
import Backdrop from "../shared/Backdrop";
import Spinner from "../shared/Spinner";

const homePage = () => {
    return (
            <div className="contain">
                <Navbar />
                <Transactions />
                <div className="flex">
                    <Chart />
                    <TableBuilder />
                </div>
                {/*<Backdrop />*/}
                <Spinner />
            </div>


    );
}

export default homePage;