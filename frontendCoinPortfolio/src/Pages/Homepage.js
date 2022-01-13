import React from "react";

import "./Homepage.css";

import Navbar from '../components/MainNavigation';
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";


const HomePage = () => {
   

    return (
            <div className="contain relative">
                <Navbar />
                <div className="flex mt-5">
                   <Chart  width={400}/>
                   <TableBuilder align="self-start" tableType="global"/>
                </div>
            </div>


    );
}

export default HomePage;