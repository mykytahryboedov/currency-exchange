import React from 'react'
import './CurrencyRow.scss'

export default function CurrencyRow({ currencyOptions }) {
console.log(currencyOptions)
  return (
    <div className='currencies'>
        <div className="currencies-input">
        <input type="number" name="" id="" />
    <select name="1" id="1">
      {currencyOptions.map( options => 
        <option key={options} value={options}>{options}</option>
      )}
    </select>
        </div>
        <button className="converter-button-apply">Apply</button>
    </div>
  )
}
