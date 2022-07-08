import React from 'react'
import './CurrencyRow.scss'

export default function CurrencyRow() {
  return (
    <div className='currencies'>
        <label htmlFor="">You send</label> <br />
        <div className="currencies-input">
        <input type="number" name="" id="" />
    <select name="" id="">
        <option value="UAH">USD</option>
    </select>
        </div>
    </div>
  )
}
