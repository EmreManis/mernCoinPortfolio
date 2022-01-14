import React, {useState, useEffect} from "react";

import axios from "axios";

const TableBuilder = (props) => {
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



  const tableHeader = (tableType) => {
    let headerNames;
    tableType === "profile"
      ? (headerNames = [
          "Coin",
          "Price",
          "24h",
          "Holdings",
          "Avg. Buy Price",
          "Profit/ Loss",
          "Action",
        ])
      : (headerNames = [
          "#",
          "Coin",
          "Price",
          "1h",
          "24h",
          "7d",
          "24h volume",
          "Mkt Cap",
          "Last 7 Days",
        ]);

    return headerNames.map((el) => {
      return (
        <th className="border-b pb-6 text-left" key={el}>
          {el}
        </th>
      );
    });
  };

  const tableElements = (tableType, data) => {
      switch(tableType){
          case 'profile' :
            return data.map((el) => {
            return (
                <tr key={el.name}>
                  <td className={el.cssNames}>{el.name}</td>
                  <td className={el.cssNames}>{el.price}</td>
                  <td className={el.cssNames}>{el.daily}</td>
                  <td className={el.cssNames}>{el.holding}</td>
                  <td className={el.cssNames}>{el.profitLoss}</td>
                  <td className={el.cssNames}>{el.avgBuyPrice}</td>
                  <td className={el.cssNames}>{el.action}</td>
                </tr>
              );
            });
              case 'global' : 
              return dummyData.map((el) => {
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
              });
              default: break;
      }
    
  };
  const style = "w-2/3 ml-6";

  return (
    <table className={`${style} + " " + ${props.align}`}>
      <thead>
        <tr>{tableHeader(props.tableType)}</tr>
      </thead>
      <tbody>{tableElements(props.tableType, props.data)}</tbody>
    </table>
  );
};

export default TableBuilder;
