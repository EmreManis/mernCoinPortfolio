import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./Portfolio.css";
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";
import MainNavigation from "../components/MainNavigation";
import { AuthContext } from "../shared/context/auth-context";

const Portfolio = () => {
  const [dummyPortfolio, setDummyPortfolio] = useState([]);
  const [backError, setBackError] = useState("");
  const auth = useContext(AuthContext);
  let id = auth.userId;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transaction", {
        params: {
          ID: id,
        },
        headers: {
          Authorization: "Bearer " + auth.token,
        }
      })
      .then((resp) => {
        setDummyPortfolio(resp.data.portf);
      })
      .catch((err) => {
        if (err === null) {
          setBackError(err.response.data.message);
          console.log(backError);
        } else {
          console.log("You dont have any coin on your portfolio");
        }
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:5000/api/transaction/delete", {
        data: {
          id: id 
        },
        headers: {
          Authorization: "Bearer " + auth.token,
        } 
      })
      .then((resp) => {
        setDummyPortfolio((prevCoins) =>
          prevCoins.filter((coin) => coin.id !== id)
        );
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
        {dummyPortfolio.length === 0 &&
          "You dont have any coin on your portfolio"}
      </div>
    </div>
  );
};

export default Portfolio;
