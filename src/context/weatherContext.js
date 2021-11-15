import React, { createContext,useState,useEffect } from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {

	const [sidebarToggle, setSidebarToggle] = useState(false);
	const [data, setData] = useState(null);
	const [country, setCountry] = useState('London');

	useEffect(() => {
	
		try {
			const getWeatherData = async()=>{
				const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5aecae61d3774b619ab181101211111&q=${country}&days=5&aqi=no&alerts=no`);
				const result = await response.json();
				setData(result);
			};
			getWeatherData();
		} catch (error) {
			console.log(error);
		}	
	}, [country]);

	
	const contextValue = {
		sidebarToggle,
		country,
		data,
		setSidebarToggle,
		setCountry,
		
		
	};

	return (
		<WeatherContext.Provider value={contextValue}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;