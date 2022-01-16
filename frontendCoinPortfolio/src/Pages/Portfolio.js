import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Portfolio.css";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";
import MainNavigation from "../components/MainNavigation";

const Portfolio = () => {
  const [dummyPortfolio, setDummyPortfolio] = useState([]);
  const [backError, setBackError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transaction")
      .then((resp) => {
        setDummyPortfolio(resp.data.portf);
      })
      .catch((err) => {
          setBackError(err.response.data.message); 
          console.log(backError)
      });
  }, []);

  const deleteHandler = (id) => {
   
    console.log(id)
    axios
      .delete("http://localhost:5000/api/transaction", { data: {
        id: id }
      } )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="contain relative">
      <MainNavigation />
      <div className="flex flex-col items-center content-center page-height">
        <Chart width={700} />
        <TableBuilder
          align="self-center"
          tableType="profile"
          profileData={dummyPortfolio}
          deleteHandler={deleteHandler}
          />
          {backError}
      </div>
    </div>
  );
};

export default Portfolio;
