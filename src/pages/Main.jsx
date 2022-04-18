import React, { useState, useEffect, useContext } from 'react';
import {FeedBack,DaysCard,HightCard,IconBtn,Sidebar} from "../components/index";
import getWeatherData from '../helpers/api';
import { WeatherContext } from '../context/weatherContext';

const Main = () => {

	const { country, setCountry } = useContext(WeatherContext);
	const [weatherData, setWeatherData] = useState(null);
	const [sidebarToggle, setSidebarToggle] = useState(false);
	
	useEffect(() => {
		const getData = async ()=>{
			const data =  await getWeatherData(country)
			setWeatherData(data)
		}
		getData()
	}, [country])
	
	if(!weatherData){
		return <FeedBack/>
	}

	if(weatherData.error){
		return (
			<div className="error">
				<h2>{weatherData.error.message}</h2>
				<button className='btn' onClick={()=>setCountry("")}>Try Again</button>		
			</div>
		) 
	}


	return (
		<div className='main'>
			<div className="weather">
				<div className="weather__left">
					{
						sidebarToggle 
						? <Sidebar setSidebarToggle={setSidebarToggle} /> 
						: (
						<div className="weather__show">
							<div className="weather__show-container">
							<div className="weather__show-title">
								<button className="btn"  onClick={()=>setSidebarToggle(true)}>Seach of places</button>
								<IconBtn><i className='bx bx-target-lock'></i></IconBtn>
							</div>
							<div className="weather__show-status">
								<img src={weatherData?.current?.condition.icon} alt="weather-status" />
							</div>
							<div className="weather__show-degree">
								<span>{Math.floor(weatherData?.current?.temp_c)}</span>
							</div>
							<div className="weather__show-desc">
								<span>{weatherData?.current?.condition.text}</span>
							</div>
							<div className="weather__show-date">
								<span className="weather__show-date-day">Today</span>.
								<span className="weather__show-date-string">{new Date(weatherData?.location?.localtime.split(' ')[0]).toLocaleDateString()}</span>
							</div>
							<div className="weather__show-location">
								<span className="weather__show-location-icon"><i className='bx bx-map'></i></span>
								<span className="weather__show-location-place">{weatherData?.location?.name}</span>
							</div>
							</div>
						</div>	
						)
					}
						
				</div>
				<div className="weather__right">
					<div className="weather__right-wrapper">
						<div className="weather__cards-container">
							{
								weatherData?.forecast?.forecastday.map((item,index)=><DaysCard key={index} item={item} />)
							}
						</div>
						<h2 className="weather__hight-title">Today’s Hightlights</h2>
						<div className="weather__hight-container">
							<HightCard title="Wind Status" value={weatherData?.current?.wind_mph} deg={weatherData?.current.wind_degree} desc="mph"/>
							<HightCard title="Humidity" value={weatherData?.current?.humidity} desc="%"/>
							<HightCard title="Visibility" value={weatherData?.current?.vis_miles} desc="miles"/>
							<HightCard title="Air Pressure" value={weatherData?.current?.pressure_mb} desc="mb"/>					
						</div>  		
					</div>	
				</div>
			</div>
		</div>
	);
};

export default Main;