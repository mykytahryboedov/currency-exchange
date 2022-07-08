import React from 'react'

import { Oval } from 'react-loader-spinner';

import './Preloader.scss'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



export default function Preloader() {
    
  return (
    <div className='spinner'>
        <center className='spinner-typography'>
        <h2>Wait, please</h2>
        <h3>Your page is loading</h3>
        </center>
        <Oval  
    height="200"
    width="200"
    color='blue'
    ariaLabel='loading'
  />
    </div>
  )
}
