import React,{ useContext } from 'react';
import IconBtn from './IconBtn';
import { WeatherContext } from '../context/weatherContext';
const WeatherShow = () => {
	const { setSidebarToggle,data } = useContext(WeatherContext);

	const { location,current } = data;

	
	return (
		<div className="weather__show">
			<div className="weather__show-container">
				<div className="weather__show-title">
					<button className="btn" onClick={()=>setSidebarToggle(true)}>Seach of places</button>
					<IconBtn><i className='bx bx-target-lock'></i></IconBtn>
				</div>
				<div className="weather__show-status">
					<img src={current.condition.icon} alt="weather-status" />
				</div>
				<div className="weather__show-degree">
					<span>{Math.floor(current.temp_c)}</span>
				</div>
				<div className="weather__show-desc">
					<span>{current.condition.text}</span>
				</div>
				<div className="weather__show-date">
					<span className="weather__show-date-day">Today</span>.
					<span className="weather__show-date-string">{new Date(location.localtime.split(' ')[0]).toLocaleDateString()}</span>
				</div>
				<div className="weather__show-location">
					<span className="weather__show-location-icon"><i className='bx bx-map'></i></span>
					<span className="weather__show-location-place">{location.name}</span>
				</div>
			</div>
		</div>
	);
};

export default WeatherShow;
