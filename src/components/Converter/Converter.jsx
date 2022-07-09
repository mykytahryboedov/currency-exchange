import { useState } from "react";

import CurrencyRow from "../CurrencyRow/CurrencyRow";
import "./Converter.scss";

export default function Converter({ currencies }) {

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
   
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  function convertCurrency ( selectedCurrency ) {
    setConvertedAmount(amount * Object.values(selectedCurrency)[0])
  }

  function getCurrencyKey( currentCurrency ) {
    return Object.keys(currentCurrency)[0]
  }

  return (
    <div className="converter">
      <div className="converter-list">
        <ul className="converter-list-ul">
          {
          currencies.map( (currency, index) => {
            const ratesKeys = getCurrencyKey(currency)
             return <li className={ratesKeys === getCurrencyKey(selectedCurrency) ? 'active' : undefined} onClick={() =>{
              setSelectedCurrency(currency);
              convertCurrency(currency);
             } } key={index} >{ratesKeys}</li>
             })
          }
        </ul>
      </div>
      <div className="converter-currencies">
        <CurrencyRow selectedCurrency={selectedCurrency} amount={amount} setAmount={setAmount} convertedAmount={convertedAmount} convertCurrency={convertCurrency}/>
      </div>
    </div>
  );
}
