import React from "react";

import "./Portfolio.css";
import { DummyData, DummyPortfolio } from "../data/DummyData";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";
import MainNavigation from "../components/MainNavigation";

const Portfolio = () => {
    return (
        <div className="contain relative">
            <MainNavigation />
        <div className="flex flex-col items-center content-center page-height">
            <Chart width={700}/>
            <TableBuilder  align="self-center" tableType="profile" data={DummyPortfolio}/>
        </div>
        </div>
    );
} 

export default Portfolio;