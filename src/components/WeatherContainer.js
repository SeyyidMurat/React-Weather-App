import React,{ useContext } from 'react';
import Sidebar from './Sidebar';
import WeatherShow from './WeatherShow';
import ErrorPage from './ErrorPage';
import WeatherContent from './WeatherContent';
import { WeatherContext } from '../context/weatherContext';

const WeatherContainer = () => {
	
	const { sidebarToggle, data } = useContext(WeatherContext);

	return (
		<div className="weather">
			<div className="weather__left">		
				{
					sidebarToggle === false && !data.error  ? <WeatherShow/> : <Sidebar/> 
				}	 			
			</div>				
			<div className="weather__right">
				<div className="weather__right-wrapper">
					{
						data.error ? <ErrorPage error={data.error.message} /> : <WeatherContent/>
					}				
			   </div>
			</div>		
		</div>
	);
};

export default WeatherContainer;
