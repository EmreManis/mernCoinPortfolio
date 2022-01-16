import React from "react";

import Button from "../shared/Button";


const TableBuilder = (props) => {



  const tableHeader = (tableType) => {
    let headerNames;
    tableType === "profile"
      ? (headerNames = [
          "Coin",
          "Price",
          "Quantity",
          "Fee",
          "Notes",
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


  const tableElements = (tableType) => {
      switch(tableType){
          case 'profile' :
            return props.profileData.map((el) => {
            return (
                <tr key={el.id}>
                  <td className={el.cssNames}>{el.coin}</td>
                  <td className={el.cssNames}>{el.price}</td>
                  <td className={el.cssNames}>{el.quantity}</td>
                  <td className={el.cssNames}>{el.fee == null ? "No fee" : el.fee}</td>
                  <td className={el.cssNames}>{el.notes === "" ? "No notes added" : el.notes}</td>
                  <td className={el.cssNames}>{el.avgBuyPrice}</td>
                  <td className={el.cssNames}><Button cssClass="text-red-500" onClick={() => props.deleteHandler(el.id)}>Delete</Button></td>
                </tr>
              );
            });
              case 'global' : 
              return props.data.map((el) => {
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
