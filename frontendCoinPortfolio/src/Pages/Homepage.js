import React,{ useState, useEffect} from "react";
import axios from "axios";

import "./Homepage.css";

import Navbar from '../components/MainNavigation';
import Chart from "../components/Chart/Chart";
import TableBuilder from "../components/TableBuilder";


const HomePage = () => {
    const [dummyData, setDummyData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/coinList")
            .then((resp) => {
                setDummyData(resp.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []
    )
   

    return (
            <div className="contain relative">
                <Navbar />
                <div className="flex mt-5">
                   <Chart  width={400}/>
                   <TableBuilder align="self-start" tableType="global" data={dummyData}/>
                </div>
            </div>


    );
}

export default HomePage;