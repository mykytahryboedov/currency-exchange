import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
import axios from 'axios';
import Preloader from './components/Preloader/Preloader';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const USD_URL ='https://api.exchangerate.host/latest?base=UAH&symbols=USD'
const EUR_URL ='https://api.exchangerate.host/latest?base=UAH&symbols=EUR'
const PLN_URL ='https://api.exchangerate.host/latest?base=UAH&symbols=PLN'

function App() {

  const [currencies, setCurrencies] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState('')

  async function getData() {
    try {
      const requests =[axios.get(USD_URL), axios.get(EUR_URL), axios.get(PLN_URL)]
      setIsLoading(true)
      const result = await Promise.all(requests)

      const currenciesArray =  result.map(item => item.data.rates)
      setCurrencies([...currenciesArray])
      
    } 
    catch (error) {
      setError(error.message)
      console.error(error)
    }
    finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (

    <div className="App">
      {error && (
        <h1>Sorry mate, {error} ;( </h1>
      )}
      {isLoading ? <Preloader/>
      : 
      <>
      <Header/>
      <Converter currencies={currencies}/>
      </>  }  
      <Preloader/>
    </div>
  );
}

export default App;
