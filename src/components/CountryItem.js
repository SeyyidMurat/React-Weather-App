import React,{ useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';
const CountryItem = (props) => {
	const { setSidebarToggle, setCountry } = useContext(WeatherContext);

	const handleCountry = () =>{
		setCountry(props.item);
		setSidebarToggle(false);
	};

	return (
		<div className="sidebar__country-item" onClick={handleCountry}>
			<span>{props.item}</span>
		</div>
	);
};

export default CountryItem;
