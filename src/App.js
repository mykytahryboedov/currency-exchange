import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
import axios from 'axios';

const BASE_URL = 'https://api.exchangerate.host/latest'

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() => {
    axios.get(BASE_URL).then(response => setCurrencyOptions([response.base, ...Object.keys(response.rates)])).then(console.log(currencyOptions))
  }, [])
  

  return (
    <div className="App">
      <Header/>
      <Converter/>
    </div>
  );
}

export default App;
