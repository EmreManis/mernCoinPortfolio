import React from "react";

import "./Homepage.css";

import Navbar from '../components/Navigation/MainNavigation';
import Transactions from "../components/Transactions/Transactions";
import Button from '../shared/Button';

const homePage = () => {
    return (
            <div className="contain">
                <Navbar />
                <Transactions />
                <Button cssClass = "bg-black">Deneme</Button>
            </div>


    );
}

export default homePage;