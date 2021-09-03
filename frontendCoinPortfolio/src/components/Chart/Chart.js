// pure component vs stateless will change due to performance
import React, { useState } from "react";

import './Chart.css';

import LineType from "./ChartTypes/LineChart";
import PieType from "./ChartTypes/PieChart";

const Chart = (props) => {

    const DummyData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        }
    ]

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];

    const [lineChart, setLineChart] = useState(true);
    const [appleChart, setAppleChart] = useState(false);

    const switchToPieHandler = () => {
        setLineChart(false);
        setAppleChart(true);
    }

    const switchToLineHandler = () => {
        setAppleChart(false);
        setLineChart(true);
    }

    const chartHandler = (line, pie) => {

            if( line ) {
                return  <LineType data={DummyData}/>
            } else if ( pie ) {
                return <PieType data01 = {data01} data02={data02}/>
            }

    }

    return(
                <div className="w-1/3">
                    <div className="w-1/2">
                        <ul className="list-none flex space-x-2 pl-20">
                            <li><button className={ lineChart ? "border-b-2 border-green-600 toLeft" : null } onClick={switchToLineHandler}>LineChart</button></li>
                            <li><button className={ appleChart ? "border-b-2 border-green-600 toLeft" : null } onClick={switchToPieHandler}>PieChart</button></li>
                        </ul>
                    </div>

                    <div className="w-1/2">
                        {chartHandler(lineChart,appleChart)}
                    </div>
                </div>
    );
}

export default Chart;

