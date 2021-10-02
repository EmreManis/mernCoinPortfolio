import React from "react";

import "./Homepage.css";

import Navbar from '../components/MainNavigation';
import Transactions from "../components/Transactions/Transactions";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";
import Backdrop from "../shared/Backdrop";
import Spinner from "../shared/Spinner";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import TransactionModal from "../components/Transactions/TransactionModal";

const homePage = () => {
    return (
            <div className="contain">
                <Navbar />
                <Transactions />
                <div className="flex mt-5">
                   <Chart />
                   <TableBuilder />
                </div>
                {/*<Backdrop />*/}
                {/*<Spinner />*/}
                {/*<Signup />*/}
                {/*<Login />*/}
                {/* <TransactionModal /> */}
            </div>


    );
}

export default homePage;