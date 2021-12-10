import React from "react";

import "./Homepage.css";

import { DummyData } from "../data/DummyData";
import Navbar from '../components/MainNavigation';
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";

const homePage = () => {
    return (
            <div className="contain relative">
                <Navbar />
                <div className="flex mt-5">
                   <Chart  width={400}/>
                   <TableBuilder align="self-start" tableType="global" data={DummyData}/>
                </div>
            </div>


    );
}

export default homePage;