import React, {useState } from "react";

const TableBuilder = () => {

    const header = ['#','Coin','Price','1h','24h','7d','24h volume','Mkt Cap','Last 7 Days'];

    const DummyData = {
        coin1: {
            rank : '1',
            name : 'Bitcoin',
            price: '$49.403.256',
            oneHour : '-1.14',
            daily: '1.40',
            weekly: '4.30',
            mktCap: '$42.395.476.421',
            lastWeek: 'graph'
        },
        coin2: {
            rank : '2',
            name : 'Etherium',
            price: '$3.403.256',
            oneHour : '1.58',
            daily: '-4.40',
            weekly: '4.30',
            mktCap: '$395.476.421',
            lastWeek: 'graph'
        }
    };


    const tableHeader = (headerNames) =>{
        return (
            headerNames.map(el => {
                return <th key={el}>{el}</th>
            })
        );
    }
    return (
        <table>
                <thead>
                <tr>
                    {tableHeader(header)}
                </tr>
                </thead>
                <tbody>

                </tbody>
        </table>
    );
}

export default TableBuilder