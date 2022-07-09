import "./CurrencyRow.scss";

export default function CurrencyRow({ selectedCurrency, amount, setAmount, convertedAmount, convertCurrency }) {
 
  return (
    <div className="currencies">
      <div className="currencies-input">
        <input type="number" name="" id="" value={amount} onChange={event => setAmount(event.target.value) }/>
        <span>UAH</span>
      </div>
      <h3 className="currencies-result">{`${convertedAmount} ${Object.keys(selectedCurrency)[0]}`} </h3>
      <button className="converter-button-apply" onClick={() => convertCurrency(selectedCurrency)}>Apply</button>
    </div>
  );
}
