import React from "react";
import CurrencyRow from "../CurrencyRow/CurrencyRow";
import "./Converter.scss";

export default function Converter() {
  return (
    <div className="converter">
      <div className="converter-list">
        <span>USD 29</span>
        <span>EUR 31</span>
        <span>PLN 7</span>
      </div>
      <div className="converter-currencies">
        <CurrencyRow />
        <button>Swap</button>
        <CurrencyRow />
        <button className="converter-button-apply">Apply</button>
      </div>
    </div>
  );
}
