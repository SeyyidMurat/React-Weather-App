import React from 'react';
import Progress from './Progress';
const HightCard = ({ title, value, desc, deg }) => {
	return (
		<div className="weather__hight-card">
			<h4>{title}</h4>
			<span className="weather__hight-card-value">{value} <span>{desc}</span> </span>
			{
				title === 'Humidity' ? <Progress value={value} /> : null
			}
			{
				title === 'Wind Status' ? <div className="weather__hight-card-wind"><i className='bx bx-up-arrow-alt' style={{ transform:`rotate(${deg}deg)` }}></i></div>:null
			}
		</div>
	);
};

export default HightCard;
