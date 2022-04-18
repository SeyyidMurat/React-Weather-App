import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {

	const [country, setCountry] = useState("");

	const [locationList, setlocationList] = useState(()=>{
		const item = localStorage.getItem('list');
		return item ? JSON.parse(item) : [];
	});
	

	useEffect(()=>{
		localStorage.setItem('list',JSON.stringify(locationList));
	},[locationList]);

	const contextValue = {
		country,
		locationList,
		setlocationList,
		setCountry

			
	};

	return (
		<WeatherContext.Provider value={contextValue}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;