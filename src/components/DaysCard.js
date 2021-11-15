import React from 'react';

const DaysCard = (props) => {
	return (
		<div className="weather__card">
			<div className="weather__card-title">
				<h4>{new Intl.DateTimeFormat('tr-TR').format(new Date(props.item.date))}</h4>
			</div>
			<img src={props.item.day.condition.icon} alt="" />
			<div className="weather__card-footer">
				<span>{Math.floor(props.item.day.maxtemp_c)}°C</span>
				<span>{Math.floor(props.item.day.mintemp_c)}°C</span>
			</div>
		</div>
	);
};

export default DaysCard;
