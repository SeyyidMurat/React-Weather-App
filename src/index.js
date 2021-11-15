import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';
import WeatherContextProvider from './context/weatherContext';
ReactDOM.render(<WeatherContextProvider><App /></WeatherContextProvider> ,document.getElementById('root'));


