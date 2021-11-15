import React from 'react';

const Progress = (props) => {
	return (
		<div className="progress">
			<div className="progress-unit">
				<span>0</span>
				<span>50</span>
				<span>100</span>
			</div>
			<div className="progress-value" style={{ width:`${props.value}%` }} ></div>
		</div>
	);
};

export default Progress;
