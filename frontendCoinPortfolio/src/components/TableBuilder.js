import React from "react";

import { DummyData } from "../data/DummyData";

const TableBuilder = props => {

    const header = ['#','Coin','Price','1h','24h','7d','24h volume','Mkt Cap','Last 7 Days'];

    const tableHeader = (headerNames) =>{
        return (
            headerNames.map(el => {
                return <th className="border-b pl-0 pb-6" key={el}>{el}</th>
            })
        );
    }

    const tableElements = (data) => {
        return (
            data.map(el =>{
                return (
                    <tr key={el.name}>
                        <td className={el.cssNames}>{el.rank}</td>
                        <td className={el.cssNames}>{el.name}</td>
                        <td className={el.cssNames}>{el.price}</td>
                        <td className={el.cssNames}>{el.oneHour}</td>
                        <td className={el.cssNames}>{el.daily}</td>
                        <td className={el.cssNames}>{el.weekly}</td>
                        <td className={el.cssNames}>{el.volume}</td>
                        <td className={el.cssNames}>{el.mktCap}</td>
                        <td className={el.cssNames}>{el.lastWeek}</td>
                    </tr>
                );
            })
        );

    }
    const style = "w-2/3 ml-6"

    return (
        <table className={`${style} + " " + ${props.align}`}>
                <thead>
                    <tr>
                        {tableHeader(header)}
                    </tr>
                </thead>
                <tbody>
                    {tableElements(DummyData)}
                </tbody>

        </table>
    );
}

export default TableBuilder