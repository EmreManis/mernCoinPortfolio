import React from "react";

import "./Homepage.css";

import Navbar from '../components/MainNavigation';
import Transactions from "../components/Transactions";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";
import Backdrop from "../shared/Backdrop";
import Spinner from "../shared/Spinner";
import Signup from "../components/Auth/Signup";

const homePage = () => {
    return (
            <div className="contain">
                {/*<Navbar />*/}
                {/*<Transactions />*/}
                {/*<div className="flex">*/}
                {/*    <Chart />*/}
                {/*    <TableBuilder />*/}
                {/*</div>*/}
                {/*<Backdrop />*/}
                {/*<Spinner />*/}
                <Signup />
            </div>


    );
}

export default homePage;