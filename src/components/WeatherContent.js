import React,{ useContext } from 'react';
import DaysCard from './DaysCard';
import HightCard from './HightCard';
import { WeatherContext } from '../context/weatherContext';
const WeatherContent = () => {
	const {  data } = useContext(WeatherContext);
	const { current,forecast } = data; 
	return (
		<>
			<div className="weather__cards-container">
				{
					forecast.forecastday.map((item,index)=><DaysCard key={index} item={item} />)
				}		
			</div>
			<h2 className="weather__hight-title">Today’s Hightlights</h2>
			<div className="weather__hight-container">
				<HightCard title="Wind Status" value={current.wind_mph} deg={current.wind_degree} desc="mph"/>
				<HightCard title="Humidity" value={current.humidity} desc="%"/>
				<HightCard title="Visibility" value={current.vis_miles} desc="miles"/>
				<HightCard title="Air Pressure" value={current.pressure_mb} desc="mb"/>					
			</div>  
		</>
	);
};

export default WeatherContent;
