import React, {useState } from "react";

const TableBuilder = () => {

    const header = ['#','Coin','Price','1h','24h','7d','24h volume','Mkt Cap','Last 7 Days'];

    const DummyData = [
       {
            rank : '1',
            name : 'Bitcoin',
            price: '$49.403.256',
            oneHour : '-1.14',
            daily: '1.40',
            weekly: '4.30',
            volume: '$50.000',
            mktCap: '$42.395.476.421',
            lastWeek: 'graph',
            cssNames:'border-b text-center'
        },
      {
            rank : '2',
            name : 'Etherium',
            price: '$3.403.256',
            oneHour : '1.58',
            daily: '-4.40',
            weekly: '4.30',
            volume:"$50.473",
            mktCap: '$395.476.421',
            lastWeek: 'graph',
            cssNames: 'border-b text-center'
        },
        {
            rank : '3',
            name : 'Cona',
            price: '$3.403.256',
            oneHour : '1.58',
            daily: '-4.40',
            weekly: '4.30',
            volume:"$50.473",
            mktCap: '$395.476.421',
            lastWeek: 'graph',
            cssNames: 'border-b text-center'
        }
    ];

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
    return (
        <table className="w-2/3 ml-6 h-3/5">
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