import React from "react";
import CurrencyRow from "../CurrencyRow/CurrencyRow";
import "./Converter.scss";

export default function Converter({ currencyOptions }) {

  console.log(currencyOptions)

  return (
    <div className="converter">
      <div className="converter-list">
        <ul className="converter-list-ts">
          {currencyOptions.map( currency => (
            <li>{currency}</li>
          ))}
        </ul>
      </div>
      <div className="converter-currencies">
        <CurrencyRow currencyOptions={currencyOptions}/>
      </div>
    </div>
  );
}
