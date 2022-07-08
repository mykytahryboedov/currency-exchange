import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
import axios from 'axios';
import Preloader from './components/Preloader/Preloader';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const BASE_URL = 'https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR,PLN'

const USD_URL ='https://api.exchangerate.host/latest?base=UAH&symbols=USD'
const EUR_URL ='https://api.exchangerate.host/latest?base=UAH&symbols=EUR'
const PLN_URL ='https://api.exchangerate.host/latest?base=UAH&symbols=PLN'

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [currencies, setCurrencies] = useState([])

  const [USDRate, setUSDRate] = useState('')
  const [EURRate, setEURRate] = useState('')
  const [PLNRate, setPLNRate] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    try {
      axios.get(BASE_URL).then(response => setCurrencyOptions([response.data.base, ...Object.keys(response.data.rates)]))
      const USD = axios.get(USD_URL).then(response => console.log(response.data.rates))
      const EUR = axios.get(EUR_URL).then(response => setEURRate(response.data))
      const PLN = axios.get(PLN_URL).then(response => setPLNRate(response.data))
      
      setCurrencies([USD,EUR,PLN])

    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }, [])
  

  return (
    <div className="App">
      {isLoading ? <Preloader/>
      : 
      <>
      <Header/>
      <Converter currencyOptions={currencyOptions}/>
      </>  }  
    </div>
  );
}

export default App;
