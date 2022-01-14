import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Portfolio.css";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";
import MainNavigation from "../components/MainNavigation";

const Portfolio = () => {
  const [dummyPortfolio, setDummyPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transaction")
      .then((resp) => {
        setDummyPortfolio(resp.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div className="contain relative">
      <MainNavigation />
      <div className="flex flex-col items-center content-center page-height">
        <Chart width={700} />
        <TableBuilder
          align="self-center"
          tableType="profile"
          profile={dummyPortfolio}
        />
      </div>
    </div>
  );
};

export default Portfolio;
