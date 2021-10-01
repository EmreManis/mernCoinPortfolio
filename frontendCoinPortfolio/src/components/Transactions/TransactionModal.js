import React, { useState, useCallback } from "react";

import Input from "../../shared/Input";
import { useForm } from "../../shared/hooks/form-hook";
import * as validator from "../../shared/Validator";

import DatePicker from "react-date-picker";

import "./DatePicker.css";

const TransactionModal = (props) => {
  const [selectedOption, setSelectedOption] = useState({
      value: "selected"
  });

  const dummyData = {
    etherium: {
      name: "Etherium",
      pricePerCoin: 55555,
    },
    bitCoin: {
      name: "BitCoin",
      pricePerCoin: 46759,
    },
    bitTorret: {
      name: "Bittoret",
      pricePerCoin: 7242,
    },
  };

  const [loadedData, setLoadedData] = useState({
    name: "Select",
    pricePerCoin: "",
  });

  const [formState, inputHandler] = useForm(
    {
      coin: {
        value: "",
        isValid: true,
      },
      quantity: {
        value: "",
        isValid: false,
      },
      pricePerCoin: {
        value: "",
        isValid: true,
      },
      date: {
        value: "",
        isValid: true,
      },
      fee: {
        value: "",
        isValid: true,
      },
      notes: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const [value, onChange] = useState(new Date());

  const changedHandler = (event, price) => {
    setSelectedOption({
      value: event.target.value,
    });
    loadData(dummyData, event.target.value);
  };

  const loadData = useCallback(

  //will be change later for performance 
    (data, valu) => {
      let val = valu;
      for (const props in data) {
        if (val === props) {
          setLoadedData({
            name: data[props].name,
            pricePerCoin: data[props].pricePerCoin,
          });
        }
      }
    },
    [selectedOption]
  );

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Coin Name
          </label>
          <div className="relative">
            <select
              value={selectedOption.value}
              onChange={(event) => {
                changedHandler(event);
              }}
              // onInput={inputHandler}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="coin-name"
            >
              <option value="selected">Select Coin</option>
              <option value="etherium">Etherium</option>
              <option value="bitCoin">BitCoin</option>
              <option value="bitTorret">BitTorret</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Quantity
          </label>
          <Input
            element="input"
            validators={[validator.VALIDATOR_REQUIRE]}
            onInput={inputHandler}
            errorMessage="Enter a valid Quantity"
            cssClass="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="quantity"
            type="number"
            placeholder="0.00"
            min="0"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Price Per Coin
          </label>
          <Input
            validators={[]}
            element="input"
            onInput={inputHandler}
            cssClass="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            id="pricePerCoin"
            value={loadedData.pricePerCoin}
            valid={true}
          />
        </div>
      </div>
      <div className="flex -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Date
          </label>

          <DatePicker className="wrapper" onChange={onChange} value={value} />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Fee
          </label>
          <Input
            id="fee"
            validators={[]}
            element="input"
            onInput={inputHandler}
            cssClass="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="fee"
            type="number"
            min="0"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Notes
          </label>
          <Input
            validators={[]}
            id="notes"
            onInput={inputHandler}
            element="textarea"
            cssClass="resize-none block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows="4"
            cols="50"
            placeholder="Add Note"
          />
        </div>
      </div>
      <div className="flex -mx-px mb-6">
        <div className="w-full block bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight">
          <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Total Spent: 5$
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!formState.isValid ? "opacity-50 cursor-not-allowed" : ""}
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionModal;
